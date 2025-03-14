import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    id: string;
    name: string;
  }

  interface Session extends DefaultSession {
    user: User;
  }
}
