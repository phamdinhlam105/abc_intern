export { default } from "next-auth/middleware"
export const config = {
  matcher: ['/','/article', '/category', '/file', '/profile','/settings'],
};