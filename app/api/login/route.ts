import employerModel from "@/models/employerSchema";
import userModel from "@/models/userSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import JWT from "jsonwebtoken";
import connectMongoDB from "@/lib/dbConnect";


export async function POST(req: NextRequest) {
    try {
        await connectMongoDB();

        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ message: "Email and password are required", success: false, status: 400 });
        }

        const userAccountPromise = userModel.findOne({ email }).exec();
        const employeeAccountPromise = employerModel.findOne({ email }).exec();

        const [userAccount, employeeAccount] = await Promise.all([userAccountPromise, employeeAccountPromise]);

        if (!userAccount && !employeeAccount) {
            return NextResponse.json({ message: "Check your email", success: false, status: 200 });
        }

        const account = userAccount || employeeAccount;

        const isPasswordValid = await bcrypt.compare(password, account.password);

        if (!isPasswordValid) {
            return NextResponse.json({ message: "Invalid password", success: false, status: 200 });
        }


        const token = JWT.sign({ id: account._id, accountType: account.accountType === "user" ? "user" : "employer" }, process.env.NEXT_PUBLIC_JWT_SECRET!, { expiresIn: '7d' });

        const response = NextResponse.json({
            message: "Login successfully",
            success: true,
            status: 200,
            accountId: account._id,
            accountType: account.accountType,
            token
        });

        response.cookies.set('token', token, {
            httpOnly: true,
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        });
        response.cookies.set('accountType', account.accountType, {
            httpOnly: true,
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        });

        return response;
    } catch (error: any) {
        console.error("Login error:", error);
        return NextResponse.json({ message: "Error while login", success: false, status: 500, error: error.message });
    }
}