import { getDataFromToken } from "@/actions/getDataFromToken";
import connectMongoDB from "@/lib/dbConnect";
import userModel from "@/models/userSchema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    try {
        await connectMongoDB()

        const { id } = await getDataFromToken(req)

        const user = await userModel.findById({ _id: id })

        return NextResponse.json({ message: 'Fetched Job successfully', success: true, user });

    } catch (error) {

        console.error('Error Fetching job:', error);
        return NextResponse.json({ error: 'Internal server error', success: false, status: 500 });

    }
}
