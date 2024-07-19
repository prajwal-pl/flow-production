import { ProductInfo } from "@/components/component/product-info";
import prisma from "@/lib/db";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const page = async (props: Props) => {
  const { id } = props.params;
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
  return (
    <div>
      <ProductInfo id={id} product={product} />
    </div>
  );
};

export default page;
