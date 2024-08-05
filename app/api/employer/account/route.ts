import employerModel from "@/models/employerSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import connectMongoDB from "@/lib/dbConnect";
import { getDataFromToken } from "@/actions/getDataFromToken";


// Get employer profile by ID
export async function GET(req: NextRequest) {
  try {
    await connectMongoDB();

    // Retrieve the employer ID from the token
    const { id } = getDataFromToken(req);

    if (!id) {
      return NextResponse.json({
        message: "No employer ID found in token",
        success: false,
        status: 401,
      });
    }

    // Fetch the employer details from the database
    const employer = await employerModel.findById(id);

    if (!employer) {
      return NextResponse.json({
        message: "Employer not found",
        success: false,
        status: 404,
      });
    }

    return NextResponse.json({
      message: "Employer profile retrieved successfully",
      employer,
      success: true,
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Error retrieving employer profile",
      error,
      success: false,
      status: 400,
    });
  }
}




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

    const { id } = getDataFromToken(req)

    const employerName = formData.get("employerName");
    const phone = formData.get("phone");

    const update = {
      employerName,
      phone,
    };

    await employerModel.findByIdAndUpdate({ _id: id }, update);

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



