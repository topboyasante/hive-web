import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

//Route handlers handle API requests for a particular route
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };