import React from "react";

type Props = {};

const AddProduct = (props: Props) => {
  return (
    <div>
      <div className="mt-3 ml-8">
        <h1 className="text-5xl font-semibold">Add Product</h1>
        <p className="dark:text-muted-foreground/50 text-muted-foreground/80 my-2">
          Add your product to the marketplace.
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default AddProduct;
