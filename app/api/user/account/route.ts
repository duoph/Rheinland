import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import connectMongoDB from "@/lib/dbConnect";
import userModel from "@/models/userSchema";
import { getDataFromToken } from "@/actions/getDataFromToken";


// create account for user 

export async function POST(req: NextRequest) {

    try {

        connectMongoDB()

        const formData = await req.formData()

        const name = formData.get('name')
        const phone = formData.get('phone')
        const dateOfBirth = formData.get('dateOfBirth')
        const email = formData.get('email')
        const password = formData.get('password')

        const hashedPassword = await bcrypt.hash(password as string, 10);

        const userAccount = await userModel.create({
            name, email, password: hashedPassword, phone, dateOfBirth
        })

        return NextResponse.json({ message: "Account created", userAccount, success: true, status: 200 })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error while creating user Account", error, success: false, status: 400 })
    }

}

// edit user account

export async function PUT(req: NextRequest) {
    try {
        await connectMongoDB();

        const formData = await req.formData();

        const decodedToken = getDataFromToken(req);

        const name = formData.get('name');
        const phone = formData.get('phone');
        const dateOfBirth = formData.get('dateOfBirth');

        const update = {
            name,
            phone,
            dateOfBirth,
        };

        await userModel.findByIdAndUpdate({ _id: decodedToken.id }, update);

        return NextResponse.json({
            message: "User account updated",
            success: true,
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Error updating user account",
            error,
            success: false,
            status: 400,
        });
    }
}

