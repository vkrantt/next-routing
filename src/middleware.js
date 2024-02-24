import { NextRequest, NextResponse } from "next/server";
import { sessionStatus } from "./utils/session";

/**
 * ! Approach 1
 * @param {*} req
 * @returns
 */
// const protectedRoutes = ["/middleware"];
// export default function middleware(req) {
//   if (!sessionStatus && protectedRoutes.includes(req.nextUrl.pathname)) {
//     const absoluteUrl = new URL("/", req.nextUrl.origin);
//     return NextResponse.redirect(absoluteUrl.toString());
//   }
// }

/**
 * ! Approach 2
 * @param {*} req
 * @returns
 */
export function middleware(req) {
  if (!sessionStatus) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/middleware"],
};
