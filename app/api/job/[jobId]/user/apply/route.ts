import { getDataFromToken } from "@/actions/getDataFromToken";
import connectMongoDB from "@/lib/dbConnect";
import userModel from "@/models/userSchema";
import { NextRequest, NextResponse } from "next/server";


// GET APPLIED JOBS BY USER ID

export async function GET(req: NextRequest, { params }: any) {

    try {
        await connectMongoDB()

        const jobId = params.jobId

        const decodedToken = getDataFromToken(req);

        const user = await userModel.findByIdAndUpdate({ _id: decodedToken.id }, {
            $push: {}
        })


        console.log(user)

        return NextResponse.json({ message: 'Fetched Job successfully', success: true, user });

    } catch (error) {

        console.error('Error Fetching job:', error);
        return NextResponse.json({ error: 'Internal server error', success: false, status: 500 });

    }
}