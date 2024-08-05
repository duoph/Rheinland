import jobModel from "@/models/jobSchema"; // Adjust the import based on your project structure
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/actions/getDataFromToken";
import connectMongoDB from "@/lib/dbConnect";

export async function GET(req: NextRequest) {
    try {
        await connectMongoDB();

        const { id } = getDataFromToken(req);

        if (!id) {
            return NextResponse.json({
                message: "No employer ID found in token",
                success: false,
                status: 401,
            });
        }

        // Fetch jobs posted by the employer with the given ID
        const jobs = await jobModel.find({ employerId: id });

        return NextResponse.json({
            message: "Jobs retrieved successfully",
            jobs,
            success: true,
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Error retrieving jobs",
            error,
            success: false,
            status: 400,
        });
    }
}
