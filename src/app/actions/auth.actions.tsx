"use server";
import prisma from "@/lib/db";
import { auth, signIn, signOut } from "../../../auth";

export async function SignIn() {
  return await signIn("google", { redirectTo: "/products" });
}
export async function SignOut() {
  return await signOut({ redirectTo: "/sign-up" });
}
export async function getRole() {
  const session = await auth();
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user.email || "",
    },
  });
  return user?.role;
}
