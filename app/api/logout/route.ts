import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({
            message: "LogOut successful",
            success: true
        });

        // Delete cookies
        response.cookies.delete("token");
        response.cookies.delete("accountType");

        return response;
    } catch (error: any) {
        console.error('Error during logout:', error);
        return NextResponse.json({
            message: error.message || "Internal Server Error",
            success: false
        });
    }
}
