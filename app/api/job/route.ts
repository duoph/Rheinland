import { NextRequest, NextResponse } from 'next/server';
import connectMongoDB from '@/lib/dbConnect';
import jobModel from '@/models/jobSchema';
import { getDataFromToken } from '@/actions/getDataFromToken';

export const revalidate = 0;

export async function GET(req: NextRequest) {
    try {

        await connectMongoDB();

        const jobs = await jobModel.find({});

        return NextResponse.json({
            message: 'Fetched jobs successfully',
            success: true,
            jobs
        }, { status: 200 });

    } catch (error) {
        console.error('Error fetching jobs:', error);

        return NextResponse.json({
            error: 'Internal server error',
            success: false
        }, { status: 500 });
    }

}



export async function POST(req: NextRequest) {
    try {
        await connectMongoDB();

        const { id } = await getDataFromToken(req);

        if (!id) {
            return NextResponse.json({ error: 'Unauthorized: No user ID found', success: false, status: 401 });
        }
        const {
            title,
            description,
            categoryId,
            category,
            location,
            gender,
            salary,
            skills,
            jobType,
            numberOfOpenings,
            languageLevel,
        } = await req.json();

        if (!title || !description || !category || !categoryId || !location) {
            return NextResponse.json({ error: 'Missing required fields', success: false, status: 400 });
        }

        const newJob = new jobModel({
            employerId: id,
            title,
            description,
            category,
            categoryId,
            location,
            gender,
            salary,
            skills,
            jobType,
            languageLevel,
            numberOfOpenings,

        });

        const savedJob = await newJob.save();

        return NextResponse.json({ message: 'Job created successfully', success: true, job: savedJob });
    } catch (error) {
        console.error('Error creating job:', error);
        return NextResponse.json({ error: 'Internal server error', success: false, status: 500 });
    }
}


