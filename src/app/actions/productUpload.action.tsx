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
  userId,
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
      userId,
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
