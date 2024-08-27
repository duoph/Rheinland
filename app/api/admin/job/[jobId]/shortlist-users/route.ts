import { NextRequest, NextResponse } from 'next/server';
import connectMongoDB from '@/lib/dbConnect';
import jobModel from '@/models/jobSchema';

export const revalidate = 0;

export async function PUT(req: NextRequest, { params }: any) {
    try {
        await connectMongoDB();

        const jobId = params.jobId;
        const { userId } = await req.json();

        const job = await jobModel.findByIdAndUpdate(
            jobId,
            {
                $addToSet: { shortlistedUsers: userId },
                $pull: { appliedUsers: userId }
            }, { new: true });

        if (!job) {
            return NextResponse.json({
                error: 'Job not found',
                success: false
            }, { status: 404 });
        }

        return NextResponse.json({
            message: 'User shortlisted successfully and removed from applied users',
            success: true,
            job
        }, { status: 200 });

    } catch (error) {
        console.error('Error updating job:', error);

        return NextResponse.json({
            error: 'Internal server error',
            success: false
        }, { status: 500 });
    }
}
