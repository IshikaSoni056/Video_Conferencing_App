import { clerkMiddleware, createRouteMatcher} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const protectedRoutes = createRouteMatcher([
  '/',
  '/upcoming',
  '/previous',
  '/recordings',
  '/personal-room',
  '/meeting(.*)'
])

// export default clerkMiddleware((auth, req) => {
//   if(protectedRoutes(req)) return auth.protect();
// });

export default clerkMiddleware(async (auth, req) => {
  if (protectedRoutes(req)) {
    await auth.protect(); // ✅ wait for redirect to complete (if needed)
  }
  return NextResponse.next(); // ✅ continue to next middleware/handler
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};