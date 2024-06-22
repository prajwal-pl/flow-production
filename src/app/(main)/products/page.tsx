import ProductCard from "@/components/global/ProductCard";
import SearchBar from "@/components/global/SearchBar";
import React from "react";

type Props = {};

const Products = (props: Props) => {
  return (
    <main>
      <div>
        <h1 className="text-6xl text-center font-bold my-12 sm:text-5xl">
          Explore the wide range of <br />
          <span className="text-primary">certified</span> products.
        </h1>
        <SearchBar />
      </div>
      <div className="flex gap-3 mt-20 mx-[50px] items-center justify-center flex-grow flex-wrap">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </main>
  );
};

export default Products;
