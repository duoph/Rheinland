import { getDataFromToken } from "@/actions/getDataFromToken";
import connectMongoDB from "@/lib/dbConnect";
import jobModel from "@/models/jobSchema";
import { NextRequest, NextResponse } from "next/server";


export const revalidate = 0


export async function GET(req: NextRequest) {

    try {

        await connectMongoDB()

        const jobs = await jobModel.find()

        return NextResponse.json({ message: 'Fetched Job successfully', success: true, jobs });

    } catch (error) {

        console.error('Error Fetching job:', error);
        return NextResponse.json({ error: 'Internal server error', success: false, status: 500 });

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
            state,
            location,
            requirements,
            gender,
            skills,
            minAge,
            maxAge
        } = await req.json();

        if (!title || !description || !category) {
            return NextResponse.json({ error: 'Missing required fields', success: false, status: 400 });
        }

        const newJob = new jobModel({
            title,
            description,
            category,
            employerId: id, 
            state,
            location,
            requirements,
            gender,
            skills,
            minAge,
            maxAge,
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