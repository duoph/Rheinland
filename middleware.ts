import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const token = request.cookies.get("token")?.value || "";
    const accountType = request.cookies.get("accountType")?.value || "user";

    // Redirect to login page if the user is not authenticated
    if (!token) {
        if (path.startsWith("/employer") || path.startsWith("/admin")) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    // Redirect to login page if the user does not have the required account type
    if (path.startsWith("/employer")) {
        if (accountType !== "employer") {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    } else if (path.startsWith("/admin")) {
        if (accountType !== "admin") {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    // Allow access for all other paths
    return NextResponse.next();
}

export const config = {
    matcher: ["/employer/:path*", "/admin/:path*"], // Apply middleware to /employer and /admin paths
};
