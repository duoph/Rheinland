import connectMongoDB from "@/lib/dbConnect";
import employerModel from "@/models/employerSchema";
import jobModel from "@/models/jobSchema";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(req: NextRequest) {

    try {

        await connectMongoDB();

        await employerModel.find({})

        const jobs = await jobModel.find({}).populate('employerId');

        if (!jobs || jobs.length === 0) {
            return NextResponse.json({
                message: 'No jobs found',
                success: false,
            }, { status: 404 });
        }

        return NextResponse.json({
            message: 'Jobs fetched successfully',
            success: true,
            jobs
        }, { status: 200 });

    } catch (error: any) {

        console.error('Error fetching jobs:', error.message);

        return NextResponse.json({
            error: 'Internal server error',
            success: false,
            details: error.message
        }, { status: 500 });

    }

}
