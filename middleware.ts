import { authMiddleware } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

// // the list of all allowed origins
// const allowedOrigins = [
//   'https://eadc-103-24-77-51.ngrok-free.app',
//   'https://34d9-202-94-70-51.ngrok-free.app',
// ];

// export function cors_middleware(req: NextRequest) {
//     // retrieve the current response
//     const res = NextResponse.next()

//     // retrieve the HTTP "Origin" header 
//     // from the incoming request
//     req.headers.get("origin")

//     // if the origin is an allowed one,
//     // add it to the 'Access-Control-Allow-Origin' header
//     if (allowedOrigins.includes(origin)) {
//       res.headers.append('Access-Control-Allow-Origin', '*');
//     }

//     // add the remaining CORS headers to the response
//     res.headers.append('Access-Control-Allow-Credentials', "true")
//     res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
//     res.headers.append(
//         'Access-Control-Allow-Headers',
//         'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
//     )

//     return res
// }

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)",],
};
