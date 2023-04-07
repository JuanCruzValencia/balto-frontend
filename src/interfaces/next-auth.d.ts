import { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: DefaultUser & { _id: string; role: string; accessToken: string };
  }
  interface User extends DefaultUser {
    role: string;
    accessToken: string;
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    _id: string;
    role: string;
    accessToken: string;
  }
}