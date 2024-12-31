import { NextRequest, NextResponse } from "next/server";
import { withAuth } from 'next-auth/middleware';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('access_token');

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

const nextAuthMiddleware = withAuth(middleware, {
  pages: {
    signIn: '/login',
  },
});

export default nextAuthMiddleware;

export const config = {
  matcher: ['/', '/article', '/category', '/file', '/profile', '/settings'],
};