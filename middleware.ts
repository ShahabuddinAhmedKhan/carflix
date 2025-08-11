import { NextRequest, NextResponse } from "next/server";
 
// Publicly accessible routes
const publicRoutes = [
  "/login",
 
];
 
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(pathname);
  
  const token = request.cookies.get("token")?.value;
 
  // If the route is public, allow access
  if (publicRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }
 
  // If token is missing, redirect to login
  if (!token) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }
 
  // Otherwise, allow access
  return NextResponse.next();
}
 
// Apply middleware to all routes except static files and API
export const config = {
  matcher: [
    // Exclude:
    // - _next/static
    // - _next/image
    // - favicon.ico
    // - public assets
    // - API routes
    "/((?!_next/static|_next/image|favicon.ico|api|image|public).*)"
  ]
};