import { NextRequest, NextResponse } from 'next/server';
import connectMongoDB from '@/lib/dbConnect';
import jobModel from '@/models/jobSchema';

export const revalidate = 0;

export async function GET(req: NextRequest) {
    try {
        await connectMongoDB();

        const jobs = await jobModel.find({})

        if (!jobs) {
            return NextResponse.json({
                message: 'Job not found',
                success: false,
            }, { status: 404 });
        }

        return NextResponse.json({
            message: 'Fetched job successfully',
            success: true,
            jobs
        }, { status: 200 });

    } catch (error: any) {
        console.error('Error fetching job:', error);

        return NextResponse.json({
            error: 'Internal server error',
            success: false,
            errors: error.message
        }, { status: 500 });
    }
}
