import { getDataFromToken } from "@/actions/getDataFromToken";
import connectMongoDB from "@/lib/dbConnect";
import userModel from "@/models/userSchema";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0

export async function PUT(req: NextRequest, { params }: { params: { jobId: string } }) {
  try {
    await connectMongoDB();

    const { id } = await getDataFromToken(req);
    const { jobId } = params;

    if (!id) {
      return NextResponse.json({
        message: "Login to save jobs",
        success: false,
        status: 400,
      });
    }

    if (!jobId) {
      return NextResponse.json({
        message: "Error",
        success: false,
        status: 400,
      });
    }

    const user = await userModel.findById(id);

    if (!user) {
      return NextResponse.json({
        message: "User not found",
        success: false,
        status: 404,
      });
    }

    const isJobSaved = user.savedJobs.includes(jobId);

    const updateOperation = isJobSaved
      ? { $pull: { savedJobs: jobId } }
      : { $push: { savedJobs: jobId } };

    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      updateOperation,
      { new: true }
    );

    return NextResponse.json({
      message: `Job ${isJobSaved ? 'unsaved' : 'saved'} successfully`,
      success: true,
      savedJobs: updatedUser.savedJobs,
    });

  } catch (error: any) {
    console.error("Error in job save operation:", error);

    return NextResponse.json({
      error: "Failed to save job",
      success: false,
      status: 500,
      message: error.message,
    });
  }
}
