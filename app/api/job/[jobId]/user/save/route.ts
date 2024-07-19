import { getDataFromToken } from "@/actions/getDataFromToken";
import connectMongoDB from "@/lib/dbConnect";
import jobModel from "@/models/jobSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, { params }: any) {
  try {
    await connectMongoDB();

    const decodedToken = getDataFromToken(req);
    const userId = decodedToken.id;
    const jobId = params.jobId;

    const updatedJob = await jobModel.findByIdAndUpdate(
      { _id: jobId },
      { $push: { savedUsers: userId } },
      { new: true }
    );

    return NextResponse.json({
      message: "Job save/unsave operation successful",
      success: true,
      job: updatedJob,
    });
  } catch (error) {
    console.error("Error saving/unsaving job:", error);
    return NextResponse.json({
      error: "Internal server error",
      success: false,
      status: 500,
    });
  }
}
