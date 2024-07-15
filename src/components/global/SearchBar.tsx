"use client";
import prisma from "@/lib/db";
import { Search } from "lucide-react";
import React, { useState } from "react";
import ProductCard from "./ProductCard";

type Props = {
  products: any;
};

const SearchBar = ({ products }: Props) => {
  const [query, setQuery] = useState("");

  // const search = async (data: any) => {
  //   const keys = ["name", "tagLine", "company"];
  //   data.map((item: any) => {
  //     keys.some((key) => item[key].toLowerCase().includes(query));
  //   });
  // };
  return (
    <main>
      <div className="w-[50%] border border-gray-500 rounded-full px-4 flex items-center justify-center mx-auto">
        <Search />
        <input
          placeholder="Search for products"
          className="w-full placeholder:text-black placeholder:dark:text-white p-3 bg-inherit outline-none"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="flex gap-3 mt-20 mx-[50px] items-center justify-center flex-grow flex-wrap">
        {products
          .filter((product: any) => {
            return query.toLowerCase() === ""
              ? product
              : product.name.toLowerCase().includes(query) ||
                  product.tagLine.toLowerCase().includes(query) ||
                  product.company.toLowerCase().includes(query);
          })
          .map((product: any) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              tagLine={product.tagLine}
              image={product.image}
              company={product.company}
            />
          ))}
      </div>
    </main>
  );
};

export default SearchBar;
