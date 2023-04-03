import { ServerRest } from "@/utils/backend/server-rest";
import { User } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
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

          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});
