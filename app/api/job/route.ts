import connectMongoDB from "@/lib/dbConnect";
import jobModel from "@/models/jobSchema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    try {

        await connectMongoDB()

        const jobs = await jobModel.find()


        return NextResponse.json({ message: 'Fetched Job successfully', success: true, jobs });

    } catch (error) {

        console.error('Error Fetching job:', error);
        return NextResponse.json({ error: 'Internal server error', success: false, status: 500 });

    }
}
