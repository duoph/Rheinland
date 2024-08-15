import { NextRequest, NextResponse } from 'next/server';
import connectMongoDB from '@/lib/dbConnect';
import jobModel from '@/models/jobSchema';

export const revalidate = 0;

export async function GET(req: NextRequest, { params }: any) {
    try {
        await connectMongoDB();

        const category = params.categoryId

        const jobs = await jobModel.find({ category: category });

        return NextResponse.json({
            message: 'Fetched category based jobs successfully',
            success: true,
            jobs
        }, { status: 200 });

    } catch (error) {
        console.error('Error fetching category based jobs:', error);

        // Return error response
        return NextResponse.json({
            error: 'Internal server error',
            success: false
        }, { status: 500 });
    }
}
