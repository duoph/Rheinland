import connectMongoDB from "@/lib/dbConnect";
import jobModel from "@/models/jobSchema";
import { NextRequest, NextResponse } from "next/server";


export const revalidate = 0


export async function GET(req: NextRequest, { params }: any) {

    try {

        await connectMongoDB()

        const jobId = params.jobId

        const job = await jobModel.findById({ _id: jobId })
        
        return NextResponse.json({ message: 'Fetched Job successfully', success: true, job });

    } catch (error) {

        console.error('Error Fetching job:', error);
        return NextResponse.json({ error: 'Internal server error', success: false, status: 500 });

    }
}


export async function PUT(req: NextRequest, { params }: any) {
    try {
        await connectMongoDB();

        const { title,
            description,
            categoryId,
            category,
            location,
            gender,
            salary,
            skills,
            numberOfOpenings,
            languageLevel,
        } = await req.json();

        if (!title || !description || !category) {
            return NextResponse.json({ error: 'Missing required fields', success: false, status: 400 });
        }

        const updatedJob = await jobModel.findByIdAndUpdate(params.jobId, {
            title,
            description,
            categoryId,
            category,
            location,
            gender,
            salary,
            skills,
            numberOfOpenings,
            languageLevel,

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


// JOB DELETE 

export async function DELETE(req: NextRequest, { params }: any) {
    try {
        await connectMongoDB();
        await jobModel.findByIdAndDelete(params.jobId);
        return NextResponse.json({ message: 'Job deleted successfully', success: true });
    } catch (error) {
        console.error('Error deleting job:', error);
        return NextResponse.json({ error: 'Internal server error', success: false, status: 500 });
    }
}


// // EDIT THE JOB

// export async function PUT(req: NextRequest, { params }: any) {
//     try {

//         await connectMongoDB();

//         const jobId = params.jobId;

//         const { title, description, category, skills, employerId, state, location, requirements, gender, minAge, maxAge } = await req.json();

//         await jobModel.updateOne({ _id: jobId }, { $set: { title, description, category, skills, employerId, state, location, requirements, gender, minAge, maxAge } });

//         const updatedJob = await jobModel.findById(jobId);

//         return NextResponse.json({ message: 'Job updated successfully', success: true, job: updatedJob });
//     } catch (error) {
//         console.error('Error updating job:', error);
//         return NextResponse.json({ error: 'Internal server error', success: false, status: 500 });
//     }
// }

