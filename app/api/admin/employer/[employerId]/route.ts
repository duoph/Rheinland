import { NextRequest, NextResponse } from 'next/server';
import connectMongoDB from '@/lib/dbConnect';
import employerModel from '@/models/employerSchema';
import jobModel from '@/models/jobSchema';

export const revalidate = 0;

export async function GET(req: NextRequest, { params }: { params: { employerId: string } }) {
    try {
        await connectMongoDB();

        const employerId = params.employerId;

        const employer = await employerModel.findById(employerId);
        if (!employer) {
            return NextResponse.json({
                message: 'Employer not found',
                success: false
            }, { status: 404 });
        }

        const jobs = await jobModel.find({ employerId });

        return NextResponse.json({
            message: 'Fetched employer successfully',
            success: true,
            employer,
            totalJobs: jobs.length 
        }, { status: 200 });

    } catch (error) {
        console.error('Error fetching employer:', error);

        return NextResponse.json({
            error: 'Internal server error',
            success: false
        }, { status: 500 });
    }
}
