import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function OrderPage({ product }: { product: any }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="bg-black text-primary-foreground py-12 md:py-20">
          <div className="container px-4 md:px-6 text-center">
            <div className="grid gap-4">
              <CircleCheckIcon className="mx-auto size-12" />
              <h1 className="text-3xl md:text-4xl font-bold">
                Order Successful
              </h1>
              <p className="text-lg md:text-xl">Order {product?.id}</p>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6 grid gap-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Shipping Details
                </h2>
                <div className="mt-4 text-muted-foreground">
                  <p>Estimated Delivery Date:</p>
                  <p className="font-medium">
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Order Summary
                </h2>
                <div className="mt-4 grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={product?.image}
                        alt="Product Image"
                        width={64}
                        height={64}
                        className="rounded-md"
                      />
                      <div>
                        <h3 className="font-medium">{product?.name}</h3>
                        <p className="text-muted-foreground">Quantity: 1</p>
                      </div>
                    </div>
                    <p className="font-medium">${product?.price}</p>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex items-center justify-between font-medium">
                    <p>Total:</p>
                    <p>${product?.price * 1.3}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                href="/products"
                className="inline-flex h-10 items-center justify-center rounded-md bg-black px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function CircleCheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
