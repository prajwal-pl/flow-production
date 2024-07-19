"use client";
import React, { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Elements,
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import prisma from "@/lib/db";
import { orderAction } from "@/app/actions/orderAction";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

type Props = {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  };
  clientSecret: string;
};

const CheckoutForm = ({ product, clientSecret }: Props) => {
  return (
    <div className="max-w-5xl w-full mx-auto space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="aspect-video flex-shrink-0 w-1/3 relative">
          <Image
            src={product.image}
            fill
            alt={product.name}
            className="object-cover"
          />
        </div>
        <div>
          <div className="text-lg">${product.price}</div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="line-clamp-3 text-muted-foreground">
            {product.description}
          </div>
        </div>
      </div>
      <Elements options={{ clientSecret }} stripe={stripePromise}>
        <Form price={product.price} product={product} productId={product.id} />
      </Elements>
    </div>
  );
};

function Form({
  price,
  productId,
  product,
}: {
  price: number;
  productId: string;
  product: any;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [email, setEmail] = useState<string>();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (stripe == null || elements == null || email == null) return;

    setIsLoading(true);

    //   const orderExists = await userOrderExists(email, productId)

    //   if (orderExists) {
    //     setErrorMessage(
    //       "You have already purchased this product. Try downloading it from the My Orders page"
    //     )
    //     setIsLoading(false)
    //     return
    //   }

    stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: `/stripe/purchase-success`,
        },
      })
      .then(({ error }) => {
        if (error.type === "card_error" || error.type === "validation_error") {
          setErrorMessage(error.message);
        } else {
          setErrorMessage("An unknown error occurred");
        }
      });

    orderAction({ productId, product });
    setIsLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
          {errorMessage && (
            <CardDescription className="text-destructive">
              {errorMessage}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <PaymentElement />
          <div className="mt-4">
            <LinkAuthenticationElement
              onChange={(e) => setEmail(e.value.email)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            size="lg"
            disabled={stripe == null || elements == null || isLoading}
          >
            {isLoading ? "Purchasing..." : `Purchase - $${price}`}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

export default CheckoutForm;
