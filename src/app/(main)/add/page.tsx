"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import UploadCareButton from "./_components/UploadCareButton";
import { UploadButton } from "@/lib/uploadThing";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import { useSession } from "next-auth/react";
import { getOwner, productUpload } from "@/app/actions/productUpload.action";

type Props = {};

const AddProduct = (props: Props) => {
  const session = useSession();
  const [input, setInput] = useState({
    name: "",
    tagline: "",
    description: "",
    price: 0,
    company: "",
    image: "",
  });

  const handleCLick = (e: any) => {
    e.preventDefault();
    productUpload({
      name: input.name,
      tagLine: input.tagline,
      description: input.description,
      price: input.price,
      company: input.company,
      image: input.image,
      owner: session?.data?.user.name,
      userId: session?.data?.user.id,
    });
    console.log(input);
  };

  return (
    <div>
      <div className="mt-3 ml-8">
        <h1 className="text-5xl font-semibold">Add Product</h1>
        <p className="dark:text-muted-foreground/50 text-muted-foreground/80 my-2">
          Add your product to the marketplace.
        </p>
      </div>
      <div>
        <form
          className="md:mx-36 mx-8 mt-10 md:mt-24 mb-12 space-y-4 md:space-y-6"
          action=""
        >
          <div className="flex gap-3">
            <div className="w-full">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-muted-foreground"
              >
                Name
              </label>
              <Input
                value={input.name}
                onChange={(e) => setInput({ ...input, name: e.target.value })}
                id="name"
                placeholder="Name of the product"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="tagline"
                className="mb-2 block text-sm font-medium text-muted-foreground"
              >
                Tagline
              </label>
              <Input
                value={input.tagline}
                onChange={(e) =>
                  setInput({ ...input, tagline: e.target.value })
                }
                id="tagline"
                placeholder="Tagline of the product"
              />
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
              value={input.description}
              onChange={(e) => {
                setInput({ ...input, description: e.target.value });
              }}
              rows={10}
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
              <Input
                type="number"
                value={input.price}
                onChange={(e) =>
                  setInput({ ...input, price: Number(e.target.value) })
                }
                id="price"
                placeholder="Price of the product"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="company"
                className="mb-2 block text-sm font-medium text-muted-foreground"
              >
                Company
              </label>
              <Input
                value={input.company}
                onChange={(e) =>
                  setInput({ ...input, company: e.target.value })
                }
                id="company"
                placeholder="Company of the product"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium text-muted-foreground">
              Upload your product image
            </label>
            <UploadButton
              className="ut-button:bg-orange-500 ut-button:text-black
              ut-button:flex ut-button:w-full ut-allowed-content:hidden ut-readying:font-bold"
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                setInput({ ...input, image: res[0].url });
                console.log("Files: ", res);
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
          </div>
          <Button onClick={handleCLick} type="submit" className="w-full">
            Add Product
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
