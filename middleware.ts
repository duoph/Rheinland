import { NextRequest, NextResponse } from "next/server";

export default  function middleware(request: NextRequest) {

    // const path = request.nextUrl.pathname;
    // const token = request.cookies.get("token")?.value || "";
    // const accountType = request.cookies.get("accountType")?.value || "user";

    // if (!token) {
    //     if (path.startsWith("/employer") || path.startsWith("/admin") || path.startsWith("/user")) {
    //         console.log("No Token")
    //         return NextResponse.redirect(new URL('/login', request.url));
    //     }
    // }

    // if (path === '/') {
    //     if (token.length > 0) {
    //         return NextResponse.redirect(new URL('/login', request.url));
    //     }
    // }


    // if (path === "/login" && token) {
    //     if (accountType === "user") {
    //         return NextResponse.redirect(new URL('/jobs', request.url));
    //     } else if (accountType === "employer") {
    //         return NextResponse.redirect(new URL('/employer/job/my-jobs', request.url));
    //     } else if (accountType === "admin") {
    //         return NextResponse.redirect(new URL('/admin/jobs', request.url));
    //     }
    // }


    // if (path.startsWith("/job/") && token) {
    //     if (accountType === "admin") {
    //         return NextResponse.redirect(new URL('/admin/jobs', request.url));
    //     } else if (accountType === "employer") {
    //         return NextResponse.redirect(new URL('/employer/job/my-jobs', request.url));
    //     }
    // }


    // // Redirect to login page if the user does not have the required account type
    // if (path.startsWith("/employer")) {
    //     if (accountType !== "employer") {
    //         return NextResponse.redirect(new URL('/login', request.url));
    //     }
    // } else if (path.startsWith("/admin")) {
    //     if (accountType !== "admin") {
    //         return NextResponse.redirect(new URL('/login', request.url));
    //     }
    // }


    // if (path === "/jobs") {
    //     if (accountType === "employer") {
    //         return NextResponse.redirect(new URL('/employer/job/my-jobs', request.url));
    //     }
    //     if (accountType === "admin") {
    //         return NextResponse.redirect(new URL('/admin/jobs', request.url));
    //     }
    // }


    // Allow access for all other paths
    return NextResponse.next();
}

export const config = {
    matcher: ["/employer/:path*", "/admin/:path*", "/login", '/job/:path', '/', '/jobs'], // Apply middleware to /employer and /admin paths
};
