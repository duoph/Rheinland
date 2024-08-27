import { getDataFromToken } from "@/actions/getDataFromToken";
import connectMongoDB from "@/lib/dbConnect";
import userModel from "@/models/userSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import jobModel from "@/models/jobSchema";

export const revalidate = 0;


export async function GET(req: NextRequest) {
    try {
        await connectMongoDB();

        const { id } = await getDataFromToken(req);


        await jobModel.find()

        const jobs = await userModel.findById(id)

        const user = await userModel.findById(id)
            .populate("savedJobs")
            .populate("appliedJobs");

        return NextResponse.json({
            message: 'Fetched user successfully',
            success: true,
            user,
            status: 200
        });

    } catch (error) {
        console.error('Error fetching user:', error);
        return NextResponse.json({
            error: 'Internal server error',
            success: false,
            status: 500
        });
    }
}

// create account for user 

export async function POST(req: NextRequest) {

    try {

        connectMongoDB()

        const formData = await req.formData()



        const name = formData.get('name')
        const phone = formData.get('phone')
        const email = formData.get('email')
        const password = formData.get('password')
        const resumeURL = formData.get('resumeURL')
        const countryCode = formData.get('countryCode')
        const location = formData.get('location')
        const germanLanguageLevel = formData.get('germanLanguageLevel')

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return NextResponse.json({
                message: "User with this email already exists",
                success: false,
                status: 409
            });
        }

        const hashedPassword = await bcrypt.hash(password as string, 10);

        const userAccount = await userModel.create({
            name, email, password: hashedPassword, phone, resumeURL, countryCode, location,
            germanLanguageLevel
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

        const { id } = await getDataFromToken(req);

        const name = formData.get('name')
        const resumeURL = formData.get('resumeURL')
        const countryCode = formData.get('countryCode')
        const phone = formData.get('phone')
        const location = formData.get('location')
        const germanLanguageLevel = formData.get('germanLanguageLevel')

        const update = {
            name,
            location,
            germanLanguageLevel,
            phone,
            countryCode,
            resumeURL
        };

        await userModel.findByIdAndUpdate({ _id: id }, update, { new: true });

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

