import connectMongoDB from "@/lib/dbConnect";
import jobModel from "@/models/jobSchema";
import { NextResponse } from "next/server";

export async function GET({ params }: any) {
    try {

        await connectMongoDB()

        const jobId = params.jobId

        const job = await jobModel.findById(jobId)

        return NextResponse.json({ message: 'Fetched Job successfully', job });
    } catch (error) {
        console.error('Error Fetching job:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}