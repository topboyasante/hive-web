import axios from "axios";
import { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  //Providers: A way of "Accepting" authentication
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      //Defines what should be done with the credentials provided
      async authorize(credentials, req): Promise<any | {}> {
        // Throw an Error when there are no credentials provided
        if (!credentials) {
          throw new Error("No credentials.");
        }

        // Make a POST Request to the backend to log in:
        const { email, password } = credentials;
        const user = await axios
          .post("http://localhost:6001/api/v1/auth/login", { email, password })
          .then((res) => {
            const user = {
              first_name: res.data.first_name,
              last_name: res.data.last_name,
              username: res.data.username,
              email: res.data.email,
              auth_token: res.data.auth_token,
            };
            return user;
          })
          .catch((err) => {
            console.log(err);
            throw new Error(`${err.response.data.message}`);
          });

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  //Set NextAuth Secret Token
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    //Whenever the strategy is set to "jwt", we need to call the jwt() callback:
    async jwt({ token, user }) {
      //the "user" parameter is res.data
      //set the "token.user" parameter to "user"
      if (user) {
        // Adds a "user" property to the token object
        token.user = user;
      }
      return token; //available as a parameter in the session() callback
    },

    async session({ token, session }) {
      //Session Callbacks store the users info in the session object
      //Add Token to the session object
      if (token) {
        session.user = token.user as Session["user"];
      }
      return session;
    },
  },
};
