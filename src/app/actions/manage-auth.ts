"use server";

import { signOut } from "next-auth/react";

export async function signOutAction() {
  try {
    await signOut({ redirect: true, redirectTo: "/" });
  } catch (error) {
    console.error("Erro ao fazer signOut via Server Action:", error);
  }
}
