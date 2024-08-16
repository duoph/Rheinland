import { NextRequest, NextResponse } from 'next/server';
import connectMongoDB from '@/lib/dbConnect';
import jobModel from '@/models/jobSchema';

export const revalidate = 0;

export async function GET(req: NextRequest, { params }: any) {
    try {
        await connectMongoDB();

        const categoryId = params.categoryId

        const jobs = await jobModel.find({ categoryId: categoryId });

        return NextResponse.json({
            message: 'Fetched category based jobs successfully',
            success: true,
            jobs
        }, { status: 200 });

    } catch (error) {
        console.error('Error fetching category based jobs:', error);

        return NextResponse.json({
            error: 'Internal server error',
            success: false
        }, { status: 500 });
    }
}
