import { getDataFromToken } from "@/actions/getDataFromToken";
import connectMongoDB from "@/lib/dbConnect";
import jobModel from "@/models/jobSchema";
import userModel from "@/models/userSchema";
import { NextRequest, NextResponse } from "next/server";

// PUT APPLIED JOBS BY USER ID
export async function PUT(req: NextRequest, { params }: { params: { jobId: string } }) {
    try {
        await connectMongoDB();

        const { jobId } = params;
        const { id } = await getDataFromToken(req);

        if (!id) {
            return NextResponse.json({ error: 'User ID not found in token', success: false, status: 400 });
        }

        // Update user and job documents with $addToSet to avoid duplicates
        await Promise.all([
            userModel.findByIdAndUpdate(id, { $addToSet: { appliedJobs: jobId } }),
            jobModel.findByIdAndUpdate(jobId, { $addToSet: { appliedUsers: id } })
        ]);

        return NextResponse.json({ message: 'Applied for Job successfully', success: true, status: 200 });

    } catch (error) {
        console.error('Error applying for job:', error);
        return NextResponse.json({ error: 'Internal server error', success: false, status: 500 });
    }
}
