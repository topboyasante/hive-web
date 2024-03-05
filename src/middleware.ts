export { default } from "next-auth/middleware";

//sets the pages we want to authenticate
export const config = {
  matcher: ["/tasks/:path*", "/user/:path*"],
};
