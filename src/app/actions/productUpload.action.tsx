"use server";
import prisma from "@/lib/db";
import { auth } from "../../../auth";

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

  await prisma.user.update({
    where: {
      email: session?.user.email || "",
    },
    data: {
      role: "USER",
    },
  });
};

export const handleSellerRole = async () => {
  const session = await auth();

  await prisma.user.update({
    where: {
      email: session?.user.email || "",
    },
    data: {
      role: "SELLER",
    },
  });
};
