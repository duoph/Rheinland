import connectMongoDB from "@/lib/dbConnect";
import jobModel from "@/models/jobSchema";
import { NextRequest, NextResponse } from "next/server";




export async function GET(req: NextRequest, { params }: any) {

    try {
        await connectMongoDB()

        const jobId = params.jobId

        const job = await jobModel.findById({ _id: jobId })

        console.log(job)

        return NextResponse.json({ message: 'Fetched Job successfully', success: true, job });

    } catch (error) {

        console.error('Error Fetching job:', error);
        return NextResponse.json({ error: 'Internal server error', success: false, status: 500 });

    }
}