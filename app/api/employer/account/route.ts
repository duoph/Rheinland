import employerModel from "@/models/employerSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import connectMongoDB from "@/lib/dbConnect";


// create account for employer 

export async function POST(req: NextRequest) {

    try {

        connectMongoDB()

        const formData = await req.formData()

        const employerName = formData.get('employerName')
        const email = formData.get('email')
        const password = formData.get('password') as string

        const hashedPassword = bcrypt.hash(password, 10)

        const employerAccount = await employerModel.create({
            employerName, email, password: hashedPassword
        })

        return NextResponse.json({ message: "Account created", employerAccount, success: true, status: 200 })

    } catch (error) {

        return NextResponse.json({ message: "Error while creating employer Account", success: false, status: 400 })

    }

}