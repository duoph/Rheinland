import { NextRequest, NextResponse } from 'next/server';
import jobModel from '@/models/jobSchema'; // Ensure this path is correct
import connectMongoDB from '@/lib/dbConnect';



export async function GET() {
    try {

        await connectMongoDB()

        const jobs = await jobModel.find()

        return NextResponse.json({ message: 'Fetched All Jobs successfully', jobs });
    } catch (error) {
        console.error('Error Fetching jobs:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}


export async function POST(req: NextRequest) {
    try {

        await connectMongoDB()

        const { title, description, category, skills, employerId, state, location, requirements, gender, minAge, maxAge } = await req.json();



        console.log(title, description, category, skills)

        // Validate jobData if necessary here

        // Create the job entry in the database
        const createJob = await jobModel.create({
            title, description, category, skills, employerId, state, location, requirements, gender, minAge, maxAge
        });

        return NextResponse.json({ message: 'Job created successfully', job: createJob });
    } catch (error) {
        console.error('Error creating job:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
