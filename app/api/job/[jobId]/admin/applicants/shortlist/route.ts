import { getDataFromToken } from "@/actions/getDataFromToken";
import connectMongoDB from "@/lib/dbConnect";
import jobModel from "@/models/jobSchema";
import { NextRequest, NextResponse } from "next/server";

interface AppliedUser {
    userId: string;
    isContacted: boolean;
    isRejected: boolean;
}

interface Job {
    _id: string;
    appliedUsers: AppliedUser[];
}

export async function GET(req: NextRequest, { params }: { params: { jobId: string } }): Promise<NextResponse> {
    try {
        await connectMongoDB();

        const { jobId } = params;

        const job = await jobModel.findById(jobId).select('appliedUsers').exec();

        if (!job) {
            return NextResponse.json({ error: 'Job not found', success: false, status: 404 });
        }

        const typedJob = job as Job;

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
        const { userId } = await req.json();

        if (!userId) {
            return NextResponse.json({ error: 'User ID not found in token', success: false, status: 400 });
        }

        const result = await jobModel.findOneAndUpdate(
            { _id: jobId, 'appliedUsers.userId': "66c8c30531648f8929f3c156" },
            { $set: { 'appliedUsers.$.isContacted': true } },
            { new: true }
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
