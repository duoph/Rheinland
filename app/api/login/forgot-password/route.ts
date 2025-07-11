import userModel from "@/models/userSchema";
import { randomInt } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import nodemailer, { Transporter } from "nodemailer";

const emailHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RheinLand Consultancy - OTP Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
            text-align: center;
            margin-bottom: 20px;
            text-transform: uppercase;
        }
        .content {
            margin-top: 20px;
        }
        .content p {
            color: #666;
            margin-bottom: 10px;
        }
        .otp-code {
            font-size: 24px;
            color: #007bff;
            text-align: center;
            margin: 20px 0;
            letter-spacing: 2px;
        }
        footer {
            text-align: center;
            margin-top: 20px;
            color: #999;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>OTP Verification</h1>
        <div class="content">
            <p>Hello,</p>
            <p>Thank you for choosing RheinLand Consultancy. Your One-Time Password (OTP) for verification is:</p>
            <div class="otp-code">{{otp}}</div>
            <p>Please enter this code to complete your verification. The code is valid for 10 minutes.</p>
        </div>
        <footer>
            &copy; 2024 RheinLand Consultancy
        </footer>
    </div>
</body>
</html>
`;

function replaceTemplatePlaceholders(html: string, otp: string): string {
    return html.replace('{{otp}}', otp);
}

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();

        // Check if the email is provided
        if (!email) {
            console.log('No email provided.');
            return NextResponse.json({
                success: false,
                message: 'No email provided',
                status: 400
            });
        }

        // Check if the user exists in the database
        const user = await userModel.findOne({ email });

        if (!user) {
            return NextResponse.json({
                success: false,
                message: "No account registered with this email",
                status: 404 // Not Found
            });
        }

        // Check if OTP was recently sent
        const lastSentOn = user.security?.sentOn;

        if (lastSentOn) {
            const currentTime = Date.now();
            const timeDifference = currentTime - new Date(lastSentOn).getTime();

            if (timeDifference < 10 * 60 * 1000) {
                return NextResponse.json({
                    success: false,
                    message: "OTP already sent. Please wait for 10 minutes before requesting a new one.",
                    status: 429 // Too Many Requests
                });
            }
        }

        // Generate a new OTP
        const otp = randomInt(100000, 999999).toString();

        console.log(otp);

        // Update the user with the new OTP and timestamp
        await userModel.updateOne(
            { email },
            {
                $set: {
                    'security.otpCode': otp,
                    'security.sentOn': Date.now()
                }
            },
            { new: true }
        );

        // Set up the nodemailer transporter
        const transporter: Transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        });

        // Set up the mail options
        const mailOptions = {
            from: "duophmarketing@gmail.com",
            to: email,
            subject: "RheinLand Consultancy - Your OTP Code",
            html: replaceTemplatePlaceholders(emailHTML, otp),
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            success: true,
            message: "OTP sent successfully"
        });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({
            success: false,
            message: "Error sending OTP",
            error: error.message
        });
    }
}
