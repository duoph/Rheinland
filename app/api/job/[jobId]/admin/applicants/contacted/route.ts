import { getDataFromToken } from "@/actions/getDataFromToken";
import connectMongoDB from "@/lib/dbConnect";
import jobModel from "@/models/jobSchema";
import { NextRequest, NextResponse } from "next/server";

// Define the type for the applied user
interface AppliedUser {
    userId: string;
    isContacted: boolean;
    isRejected: boolean;
}

// Define the type for the job
interface Job {
    _id: string;
    appliedUsers: AppliedUser[];
}

// GET CONTACTED USERS FOR A JOB
export async function GET(req: NextRequest, { params }: { params: { jobId: string } }): Promise<NextResponse> {
    try {
        await connectMongoDB();

        const { jobId } = params;

        // Find the job document and select only the appliedUsers field
        const job = await jobModel.findById(jobId).select('appliedUsers').exec();

        if (!job) {
            return NextResponse.json({ error: 'Job not found', success: false, status: 404 });
        }

        // Type guard to ensure job is of type Job
        const typedJob = job as Job;

        // Filter the appliedUsers array to get only contacted users
        const contactedUsers = typedJob.appliedUsers.filter(user => user.isContacted);

        return NextResponse.json({ contactedUsers, success: true, status: 200 });

    } catch (error) {
        console.error('Error fetching contacted users:', error);
        return NextResponse.json({ error: 'Internal server error', success: false, status: 500 });
    }
}

// PUT APPLIED JOBS BY USER ID
export async function PUT(req: NextRequest, { params }: { params: { jobId: string } }): Promise<NextResponse> {
    try {
        await connectMongoDB();

        const { jobId } = params;
        const { id } = await getDataFromToken(req);

        if (!id) {
            return NextResponse.json({ error: 'User ID not found in token', success: false, status: 400 });
        }

        // Update the job document to mark the user as contacted
        const result = await jobModel.findOneAndUpdate(
            { _id: jobId, 'appliedUsers.userId': id },
            { $set: { 'appliedUsers.$.isContacted': true } },
            { new: true } // Return the updated document
        );

        if (!result) {
            return NextResponse.json({ error: 'Job or user not found in the appliedUsers list', success: false, status: 404 });
        }

        return NextResponse.json({ message: 'User marked as contacted successfully', success: true, status: 200 });

    } catch (error) {
        console.error('Error marking user as contacted:', error);
        return NextResponse.json({ error: 'Internal server error', success: false, status: 500 });
    }
}
