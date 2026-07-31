import { NextResponse } from "next/server";

export function proxy(request) {
  const token = request.cookies.get("loveQuest_cookies")?.value;

  const { pathname } = request.nextUrl;

  const protectedRoutes = ["/dashboard"];

  const authRoutes = ["/login", "/signup"];

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  const isAuth = authRoutes.some((route) => pathname.startsWith(route));

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAuth && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/signup"],
};
