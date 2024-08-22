import userModel from "@/models/userSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
    try {
        const { email, newPassword } = await req.json();

        if (!email ||  !newPassword) {
            return NextResponse.json({ success: false, message: 'Email, OTP, and new password must be provided', status: 400 });
        }

        const user = await userModel.findOne({ email });

        if (!user || !user.security || !user.security.otpCode) {
            return NextResponse.json({ success: false, message: 'Invalid request', status: 400 });
        }

        const { otpCode, sentOn } = user.security;

        const currentTime = Date.now();
        const timeDifference = currentTime - new Date(sentOn).getTime();

        if (timeDifference > 10 * 60 * 1000) {
            return NextResponse.json({
                success: false,
                message: "OTP has expired. Please request a new one.",
                status: 410
            });
        }


        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

        await userModel.updateOne(
            { email },
            {
                $set: {
                    password: hashedPassword
                },
                $unset: {
                    'security.otpCode': "",
                    'security.sentOn': ""
                }
            }
        );

        return NextResponse.json({ success: true, message: "Password reset successfully" });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ success: false, message: "Error resetting password", error: error.message });
    }
}
