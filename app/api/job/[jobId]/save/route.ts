import { getDataFromToken } from "@/actions/getDataFromToken";
import connectMongoDB from "@/lib/dbConnect";
import jobModel from "@/models/jobSchema";
import { NextRequest, NextResponse } from "next/server";


// HANDLE SAVE/UNSAVE OF JOBS

export async function POST(req: NextRequest, { params }: any) {
    try {
        await connectMongoDB();

        const decodedToken = getDataFromToken(req);

        console.log("This is the user id : " + decodedToken)


        const userId = decodedToken.id

        console.log("This is the user id : " + userId)

        const jobId = params.jobId;

        // Find the job by ID
        const job = await jobModel.findById(jobId);

        if (!job) {
            return NextResponse.json({ error: 'Job not found', success: false, status: 404 });
        }

        const userIndex = job.savedUsers?.indexOf(userId._id);

        if (userIndex !== -1) {
            // If userId exists, remove it
            job.savedUsers?.splice(userIndex, 1);
        } else {
            // If userId does not exist, add it
            job.savedUsers?.push(userId);
        }

        await job.save();

        return NextResponse.json({ message: 'Job save/unsave operation successful', success: true, job });
    } catch (error) {
        console.error('Error saving/unsaving job:', error);
        return NextResponse.json({ error: 'Internal server error', success: false, status: 500 });
    }
}