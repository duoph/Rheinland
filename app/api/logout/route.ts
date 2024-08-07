import { NextResponse } from "next/server";

export async function GET() {

    try {
        const response = NextResponse.json({ message: "LogOut successful", success: true });

        response.cookies.delete("token");
        response.cookies.delete("accountType");

        return response;

    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ message: error.message, success: false });
    }
}