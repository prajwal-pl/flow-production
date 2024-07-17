"use server";
import prisma from "@/lib/db";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const productUpload = async ({
  name,
  tagLine,
  description,
  price,
  company,
  image,
  owner,
  userMail,
}: any) => {
  const newProduct = await prisma.product.create({
    data: {
      name,
      tagLine,
      description,
      price,
      company,
      image,
      owner,
      userMail,
    },
  });
  revalidatePath("/products");
  return newProduct;
};

export const getOwner = async () => {
  const session = await auth();

  const Owner = prisma.user.findUnique({
    where: {
      id: session?.user.id,
    },
  });
  return Owner;
};

export const handleUserRole = async () => {
  const session = await auth();

  await prisma.user
    .update({
      where: {
        email: session?.user.email || "",
      },
      data: {
        role: "USER",
      },
    })
    .then(() => {
      return redirect("/products");
    });
};

export const handleSellerRole = async () => {
  const session = await auth();

  await prisma.user
    .update({
      where: {
        email: session?.user.email || "",
      },
      data: {
        role: "SELLER",
      },
    })
    .then(() => {
      return redirect("/products");
    });
};
