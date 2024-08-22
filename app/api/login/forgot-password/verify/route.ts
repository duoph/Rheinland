import userModel from "@/models/userSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { email, otp } = await req.json();

        if (!email || !otp) {
            return NextResponse.json({ success: false, message: 'Email and OTP must be provided', status: 400 });
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

        if (otpCode !== otp) {
            return NextResponse.json({
                success: false,
                message: "Invalid OTP. Please check the code and try again.",
                status: 401 
            });
        }


        return NextResponse.json({ success: true, message: "OTP verified successfully" });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ success: false, message: "Error verifying OTP", error: error.message });
    }
}
