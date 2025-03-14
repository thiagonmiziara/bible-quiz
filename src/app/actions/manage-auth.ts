"use server";

import { auth, signIn, signOut } from "@/lib/auth";

export async function manageAuth() {
  const session = await auth();
  if (!session) {
    return await signIn("google", {
      redirectTo: `/quiz`,
    });
  }

  return await signOut({ redirect: true, redirectTo: "/" });
}
