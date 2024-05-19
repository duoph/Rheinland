import { NextRequest } from "next/server";

export function middlware(req: NextRequest) {

    const path = req.nextUrl.pathname

    const token = req.cookies.get("token")?.value || ""
    const isAdmin = req.cookies.get("isAdmin")?.value || false

}

export const config = {
    matcher: ["/"]
}