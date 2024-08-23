import { NextRequest, NextResponse } from 'next/server';
import connectMongoDB from '@/lib/dbConnect';
import employerModel from '@/models/employerSchema';

export const revalidate = 0;

export async function GET(req: NextRequest, { params }: any) {
    try {
        await connectMongoDB();

        const employerId = params.employerId;


        const employer = await employerModel.findById({ _id: employerId })

        if (!employer) {
            return NextResponse.json({
                message: 'employer not found',
                success: false,
            }, { status: 404 });
        }

        return NextResponse.json({
            message: 'Fetched employer successfully',
            success: true,
            employer
        }, { status: 200 });

    } catch (error: any) {
        console.error('Error fetching employer:', error);

        return NextResponse.json({
            error: 'Internal server error',
            success: false,
            errors: error.message
        }, { status: 500 });
    }
}
