import employerModel from "@/models/employerSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import connectMongoDB from "@/lib/dbConnect";


// create account for employer 

export async function POST(req: NextRequest) {

    try {

        connectMongoDB()

        const formData = await req.formData()

        const email = formData.get('email')
        const password = formData.get('password')


        return NextResponse.json({ message: "Account created", success: true, status: 200 })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error while creating employer Account", error, success: false, status: 400 })
    }

}