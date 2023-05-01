export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/((?!api|login|register|restore|restoreForm/path*|_next/static|_next/image|favicon.ico).*)",
  ],
};
