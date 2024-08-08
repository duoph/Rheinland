import jobModel from "@/models/jobSchema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
    try {
        // Fetch all job applications
        const jobs = await jobModel.find().populate({
            path: 'appliedUsers', // field to populate
        });



        // Filter out jobs without applied users and collect applicant IDs
        const appliedJobs = jobs
            .filter(job => job.appliedUsers)


        // Return the collected IDs in the response
        return NextResponse.json({ message: 'Fetched Applicant IDs successfully', success: true, appliedJobs });

    } catch (error) {
        console.error('Error Fetching job:', error);
        return NextResponse.json({ error: 'Internal server error', success: false, status: 500 });
    }
}
