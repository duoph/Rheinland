import { getDataFromToken } from "@/actions/getDataFromToken";
import connectMongoDB from "@/lib/dbConnect";
import jobModel from "@/models/jobSchema";
import userModel from "@/models/userSchema";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0

export async function PUT(req: NextRequest, { params }: { params: { jobId: string } }) {
    try {
        await connectMongoDB();

        const { jobId } = params;
        const { id } = await getDataFromToken(req);

        if (!id) {
            return NextResponse.json({ error: 'User ID not found in token', success: false, status: 400 });
        }

        await userModel.findByIdAndUpdate(id, { $addToSet: { appliedJobs: jobId } });

        await jobModel.findByIdAndUpdate(jobId, {
            $addToSet: { appliedUsers: id }
        });

        return NextResponse.json({ message: 'Applied for Job successfully', success: true, status: 200 });

    } catch (error) {
        console.error('Error applying for job:', error);
        return NextResponse.json({ error: 'Internal server error', success: false, status: 500 });
    }
}
