import SearchBar from "@/components/global/SearchBar";
import React from "react";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";

type Props = {};

const Products = async (props: Props) => {
  const session = await auth();
  if (!session?.user) {
    redirect("/sign-in");
  }
  const products = await prisma.product.findMany();
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user.email || "",
    },
  });
  console.log(user?.role);

  if (!user?.role) {
    redirect("/profile/role");
  }

  return (
    <main>
      <div>
        <h1 className="text-6xl text-center font-bold my-12 sm:text-5xl">
          Explore the wide range of <br />
          <span className="text-primary">certified</span> products.
        </h1>
        <SearchBar products={products} />
      </div>
    </main>
  );
};

export default Products;
