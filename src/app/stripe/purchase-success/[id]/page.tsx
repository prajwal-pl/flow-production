import { OrderPage } from "@/components/component/order-page";
import prisma from "@/lib/db";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

async function page({ params }: Props) {
  const { id } = params;
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
  return (
    <div>
      <OrderPage product={product} />
    </div>
  );
}

export default page;
