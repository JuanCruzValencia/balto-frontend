import { ServerRest } from "@/utils/backend/server-rest";
import { AxiosError } from "axios";
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

        const accesToken = response.data.accessToken;

        if (accesToken) {
          const { data } = await ServerRest.get("/api/users/current", {
            headers: { Authorization: `Bearer ${accesToken}` },
          });

          const user = data;

          return {
            id: user._id.toString(),
            role: user.role,
            token: accesToken,
            cart: user.cart,
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
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.token = user.token;
        token.cart = user.cart;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        session.user._id = token.id;
        session.user.role = token.role;
        session.user.token = token.token;
        session.user.cart = token.cart;
      }

      return session;
    },
  },
};

export default nextAuth(authOptions);
