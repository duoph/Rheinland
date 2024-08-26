import { NextRequest, NextResponse } from 'next/server';
import connectMongoDB from '@/lib/dbConnect';
import jobModel from '@/models/jobSchema';
import userModel from '@/models/userSchema';
import employerModel from '@/models/employerSchema';

export const revalidate = 0;

export async function GET(req: NextRequest, { params }: any) {
    try {
        await connectMongoDB();

        const jobId = params.jobId;

        const user = userModel.find({})
        const employer = employerModel.find({})

        const job = await jobModel.findById({ _id: jobId })
            .populate('employerId')
            .populate('appliedUsers')
            .populate('shortlistedUsers');


        return NextResponse.json({
            message: 'Fetched jobs successfully',
            success: true,
            job
        }, { status: 200 });

    } catch (error) {
        console.error('Error fetching jobs:', error);

        return NextResponse.json({
            error: 'Internal server error',
            success: false
        }, { status: 500 });
    }
}
