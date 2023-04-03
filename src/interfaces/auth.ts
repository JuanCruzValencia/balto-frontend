import { DefaultUser, DefaultSession } from "next-auth";

interface SessionUser extends DefaultUser {
  role: string;
  token: string;
}
declare module "next-auth" {
  interface User extends SessionUser {}

  interface Session {
    user?: User;
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    _id: string;
    role: string;
    accessToken: string;
  }
}
