import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {

  const token = req.cookies.get("admin-token");

  const { pathname } = req.nextUrl;

  /* allow login page */
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  /* protect admin routes */
  if (pathname.startsWith("/admin") && !token) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};