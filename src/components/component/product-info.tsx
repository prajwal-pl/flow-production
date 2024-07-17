import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function ProductInfo({ product }: any) {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4 md:px-0">
      <div className="grid gap-4">
        <img
          src={product?.image}
          alt="Product Image"
          width={800}
          height={800}
          className="aspect-square object-cover border rounded-lg overflow-hidden"
        />
      </div>
      <div className="grid gap-6">
        <div>
          <h1 className="text-3xl font-bold">{product?.name}</h1>
          <p className="text-muted-foreground text-lg">{product?.tagLine}</p>
        </div>
        <div className="grid gap-4">
          <p className="text-2xl font-bold">${product?.price}</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <Button size="lg">Order Now</Button>
            {/* <Link
              href="#"
              className="text-primary underline hover:text-primary-foreground"
              prefetch={false}
            >
              Add to Cart
            </Link> */}
          </div>
        </div>
        <Separator />
        <div className="grid gap-4 text-muted-foreground">
          <h2 className="text-2xl font-bold">Product Details</h2>
          <div className="grid gap-2 text-base leading-relaxed">
            <p>{product?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
