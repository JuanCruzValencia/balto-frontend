import { User } from "@/interfaces";
import { ServerRest } from "@/utils/backend/server-rest";
import { AxiosError, AxiosResponse } from "axios";
import nextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials-login",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const response = await ServerRest.post("/auth/login", {
          email: credentials?.email,
          password: credentials?.password,
        }).catch((error: AxiosError) => {
          if (error) {
            console.log(error.message);
          }
        });

        if (!response) return null;

        console.log(`axios user`, response.data);

        const accesToken = response.data.accessToken;

        if (accesToken) {
          const { data } = await ServerRest.get("/api/users/current", {
            headers: { Authorization: `Bearer ${accesToken}` },
          });

          const user = data._doc;

          return {
            id: user._id.toString(),
            role: user.role,
            token: accesToken,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log(`jwtCallback user`, user);

      if (user) {
        token.role = user.role;
        token.accesToken = user.accessToken;
      }

      return token;
    },
    async session({ session, token }) {
      console.log(`session user`, session);

      if (session.user && token) {
        session.user.role = token.role;
        session.user.accessToken = token.accessToken;
      }

      return session;
    },
  },
};

export default nextAuth(authOptions);
