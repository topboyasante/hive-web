import NextAuth from "next-auth";

//code is enhancing the types provided by the NextAuth library to include additional properties
declare module "next-auth" {
  interface Session {
    user: {
      first_name: string;
      last_name: string;
      username: string;
      email: string;
      auth_token: string;
    };
  }
}
