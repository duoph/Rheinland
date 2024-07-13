import { getDataFromToken } from "@/actions/getDataFromToken";
import jobModel from "@/models/jobSchema";
import { NextRequest, NextResponse } from "next/server";


// Approve the jobs by adimin

export async function PUT(req: NextRequest, params: any) {

    try {
        const decodedToken = getDataFromToken(req);

        const jobId = params.jobId

        // add approve only if its admin 
        const jobApproved = await jobModel.findByIdAndUpdate({ _id: jobId }, { approvedByAdmin: true }, { new: true })

        return NextResponse.json({ message: 'Job Approved', success: true, status: 200, jobApproved })

    } catch (error) {

        console.error('Error Fetching job Applicants:', error);
        return NextResponse.json({ error: 'Internal server error', success: false, status: 500 });

    }
}


