import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Create a new NextResponse instance
        const response = new NextResponse(
            JSON.stringify({
                message: "LogOut successful",
                success: true
            }),
            { status: 200 }
        );

        // Delete cookies by setting them with an empty value and maxAge: 0
        response.cookies.set("token", "", { maxAge: 0 });
        response.cookies.set("accountType", "", { maxAge: 0 });

        return response;
    } catch (error: any) {
        console.error('Error during logout:', error);
        return NextResponse.json({
            message: error.message || "Internal Server Error",
            success: false
        }, { status: 500 });
    }
}
