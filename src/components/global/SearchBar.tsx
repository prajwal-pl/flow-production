import { Search } from "lucide-react";
import React from "react";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <main>
      <div className="w-[50%] border border-gray-500 rounded-full px-4 flex items-center justify-center mx-auto">
        <Search />
        <input
          placeholder="Search for products"
          className="w-full placeholder:text-black placeholder:dark:text-white p-3 bg-inherit outline-none"
          type="text"
        />
      </div>
    </main>
  );
};

export default SearchBar;
