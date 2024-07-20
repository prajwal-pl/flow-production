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
    //@ts-ignore
    data: {
      product: {
        connect: {
          id: productId || undefined,
        },
      },
      status: "PAID",
      customer: {
        connect: {
          id: session?.user.id!,
        },
      },
    },
  });
  return order;
}
