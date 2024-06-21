"use server";
import { signIn, signOut } from "../../../auth";

export async function SignIn() {
  return await signIn("google", { redirectTo: "/products" });
}
export async function SignOut() {
  return await signOut({ redirectTo: "/sign-up" });
}
