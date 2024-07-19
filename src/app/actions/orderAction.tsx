"use server";

import prisma from "@/lib/db";
import { auth } from "../../../auth";

export async function orderAction({
  productId,
  product,
}: {
  productId: string;
  product: any;
}) {
  const session = await auth();
  const order = await prisma.order.create({
    data: {
      productId: productId,
      userId: session?.user.id!,
      status: "PAID",
      product: product,
      customer: session?.user as any,
    },
  });
  return order;
}
