import jobModel from "@/models/jobSchema";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/actions/getDataFromToken";
import connectMongoDB from "@/lib/dbConnect";

export const revalidate = 0


export async function GET(req: NextRequest) {
    try {
        // Ensure MongoDB connection
        await connectMongoDB();

        // Extract ID from token
        const { id } = await getDataFromToken(req)

        if (!id) {
            console.log("No employer ID found in token"); // Added console log for debugging
            return NextResponse.json({
                message: "No employer ID found in token",
                success: false,
                status: 401,
            });
        }

        // Fetch jobs using the correct query
        const jobs = await jobModel.find({ employerId: id });

        return NextResponse.json({
            message: "Jobs retrieved successfully",
            jobs,
            success: true,
            status: 200,
        });
    } catch (error) {
        console.error('Error retrieving jobs:', error);
        return NextResponse.json({
            message: "Error retrieving jobs",
            success: false,
            status: 500,
        });
    }
}
