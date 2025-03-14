import NextAuth from "next-auth";
import { firebaseCert } from "@/lib/firebase";
import Google from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: FirestoreAdapter({
    credential: firebaseCert,
  }),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  events: {},
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;

      return {
        ...session,
      };
    },
  },
});
