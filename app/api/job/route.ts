import { NextRequest, NextResponse } from 'next/server';
import connectMongoDB from '@/lib/dbConnect';
import jobModel from '@/models/jobSchema';
import { getDataFromToken } from '@/actions/getDataFromToken';

export const revalidate = 0;

export async function GET(req: NextRequest) {
    try {
        // Connect to MongoDB
        await connectMongoDB();

        // Fetch jobs from the database
        const jobs = await jobModel.find({});

        // Return success response
        return NextResponse.json({
            message: 'Fetched jobs successfully',
            success: true,
            jobs
        }, { status: 200 });

    } catch (error) {
        console.error('Error fetching jobs:', error);

        // Return error response
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
            category,
            location,
            requirements,
            gender,
            skills,
            languageLevel,
            minAge,
            maxAge
        } = await req.json();

        if (!title || !description || !category || !location) {
            return NextResponse.json({ error: 'Missing required fields', success: false, status: 400 });
        }

        const newJob = new jobModel({
            employerId: id,
            title,
            description,
            category,
            location,
            requirements,
            gender,
            skills,
            languageLevel,
            minAge,
            maxAge
        });

        // Save the new job to the database
        const savedJob = await newJob.save();

        // Return success response
        return NextResponse.json({ message: 'Job created successfully', success: true, job: savedJob });
    } catch (error) {
        console.error('Error creating job:', error);
        return NextResponse.json({ error: 'Internal server error', success: false, status: 500 });
    }
}


export async function PUT(req: NextRequest) {
    try {
        await connectMongoDB();

        const { id, title, description, category, state, location, requirements, gender, skills, minAge, maxAge } = await req.json();

        if (!id || !title || !description || !category) {
            return NextResponse.json({ error: 'Missing required fields', success: false, status: 400 });
        }

        const updatedJob = await jobModel.findByIdAndUpdate(id, {
            title,
            description,
            category,
            state,
            location,
            requirements,
            gender,
            skills,
            minAge,
            maxAge,
        }, { new: true });

        if (!updatedJob) {
            return NextResponse.json({ error: 'Job not found', success: false, status: 404 });
        }

        return NextResponse.json({ message: 'Job updated successfully', success: true, job: updatedJob });
    } catch (error) {
        console.error('Error updating job:', error);
        return NextResponse.json({ error: 'Internal server error', success: false, status: 500 });
    }
}