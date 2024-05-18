import employerModel from "@/models/employerSchema";
import userModel from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'


export async function POST(req: NextRequest) {
    try {
        // Parse the request body as JSON
        const { email, password } = await req.json();

        // Check if email and password are present
        if (!email || !password) {
            return NextResponse.json({ message: "Email and password are required", success: false, status: 400 });
        }

        // Find the user or employer account by email
        const userAccount = await userModel.findOne({ email });
        const employeeAccount = await employerModel.findOne({ email });

        // Check if either user or employer account exists
        if (!userAccount && !employeeAccount) {
            return NextResponse.json({ message: "Check your email", success: false, status: 200 });
        }

        const account = userAccount || employeeAccount;

        // Assuming the account object has a method to verify the password
        const isPasswordValid = await bcrypt.compare(password, account.password);


        if (!isPasswordValid) {
            return NextResponse.json({ message: "Invalid password", success: false, status: 200 });
        }

        const response = NextResponse.json({ message: "Login successfully", success: true, status: 200, account });

        return response


    } catch (error) {
        console.error(error);

        return NextResponse.json({ message: "Error while login", success: false, status: 400 });
    }
}