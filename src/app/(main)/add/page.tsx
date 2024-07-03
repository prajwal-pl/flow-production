"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import UploadCareButton from "./_components/UploadCareButton";

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
      <div>
        <form className="md:mx-36 mx-8 mt-8 space-y-3" action="">
          <div className="flex gap-3">
            <div className="w-full">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-muted-foreground"
              >
                Name
              </label>
              <Input id="name" placeholder="Name of the product" />
            </div>
            <div className="w-full">
              <label
                htmlFor="tagline"
                className="mb-2 block text-sm font-medium text-muted-foreground"
              >
                Tagline
              </label>
              <Input id="tagline" placeholder="Tagline of the product" />
            </div>
          </div>
          <div>
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium text-muted-foreground"
            >
              Description
            </label>
            <Textarea
              rows={5}
              id="description"
              className="w-full"
              placeholder="Description of the product"
            />
          </div>
          <div className="flex gap-3">
            <div className="w-1/3">
              <label
                htmlFor="price"
                className="mb-2 block text-sm font-medium text-muted-foreground"
              >
                Price
              </label>
              <Input id="price" placeholder="Price of the product" />
            </div>

            <div className="w-full">
              <label
                htmlFor="company"
                className="mb-2 block text-sm font-medium text-muted-foreground"
              >
                Company
              </label>
              <Input id="company" placeholder="Company of the product" />
            </div>
          </div>
          <UploadCareButton />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
