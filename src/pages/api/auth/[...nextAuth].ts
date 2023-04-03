import { User } from "@/interfaces";
import { ServerRest } from "@/utils/backend/server-rest";
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
        const response = await ServerRest.post("/login", {
          username: credentials?.email,
          password: credentials?.password,
        });
        const accesToken = response.data.token;
        if (accesToken) {
          const { data: user } = await ServerRest.get<User>("/current", {
            headers: { Authorization: `Bearer ${accesToken}` },
          }); //hacer un endpoint para obtener el usuario o modificar el endpount current

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
      if (user) {
        token.role = user.role;
        token.accesToken = user.token;
      }

      return token;
    },
    async session({ token, session }) {
      if (session.user && token) {
        session.user.role = token.role;
        session.user.token = token.accesToken;
      }

      return session;
    },
  },
};

export default nextAuth(authOptions);
