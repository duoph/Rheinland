import employerModel from "@/models/employerSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import connectMongoDB from "@/lib/dbConnect";
import { getDataFromToken } from "@/actions/getDataFromToken";

// create account for employer

export async function POST(req: NextRequest) {
  try {
    connectMongoDB();

    const formData = await req.formData();

    const employerName = formData.get("employerName");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(employerName, email, password);

    const hashedPassword = await bcrypt.hash(password as string, 10);

    const employerAccount = await employerModel.create({ 
      employerName,
      email,
      password: hashedPassword,
      phone,
    });

    return NextResponse.json({
      message: "Account created",
      employerAccount,
      success: true,
      status: 200,
    });

  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Error while creating employer Account",
      error,
      success: false,
      status: 400,
    });
  }
}



// Update employer profile

export async function PUT(req: NextRequest) {
  try {
    await connectMongoDB();

    const formData = await req.formData();

    const decodedToken = getDataFromToken(req)

    const employerName = formData.get("employerName");
    const phone = formData.get("phone");

    const update = {
      employerName,
      phone,
    };

    await employerModel.findByIdAndUpdate({ _id: decodedToken.id }, update);

    return NextResponse.json({
      message: "Employer profile updated successfully",
      success: true,
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Error updating employer profile",
      error,
      success: false,
      status: 400,
    });
  }
}



