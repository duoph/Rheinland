import { NextRequest, NextResponse } from "next/server";
import nodemailer, { Transporter } from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { jobName, jobId }: { jobName: string, jobId: string } = await req.json();

    console.log(jobName, jobId);

    // Validate request body
    if (!jobName || !jobId) {
      return NextResponse.json(
        {
          error: "jobName and jobId are required"
        },
        { status: 400 }
      );
    }

    // Create a transporter
    const transporter: Transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Define email details
    const mailOptions = {
      from: `"Rheinland Consultancy" <${process.env.GMAIL_USER}>`, // Sender address
      to: "hadhirasal22@gmail.com", 
      subject: `New Applicant for ${jobName}`,
      text: `You have a new applicant for the job: ${jobName}.  Job ID: ${jobId}  Click the link below to view the application: https://rheinlandconsultancy.com//admin/jobs/${jobId}  Best regards, Your Team`,
      html: `<p>You have a new applicant for the job: <strong>${jobName}</strong>.</p> <p>Job ID: <strong>${jobId}</strong></p> <p>Click the link below to view the application:</p> <a href="https://rheinlandconsultancy.com/jobs/${jobId}">View Job</a> <p>Best regards,</p> <p>Your Team</p>`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.messageId}`);

    return NextResponse.json({
      message: "Email sent successfully",
      messageId: info.messageId,
    });

  } catch (error) {
    console.error("Error while sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}