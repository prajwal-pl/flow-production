import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";
import Stripe from "stripe";
import CheckoutForm from "./_components/CheckoutForm";

type Props = {
  params: {
    id: string;
  };
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

const PurchasePage = async ({ params }: Props) => {
  const product = await prisma.product.findUnique({
    where: {
      id: params.id,
    },
  });
  if (product === null) return notFound();

  const paymentIntent = await stripe.paymentIntents.create({
    amount: product.price * 100,
    currency: "usd",
    metadata: { productId: product.id },
  });

  if (paymentIntent.client_secret == null) {
    throw Error("Stripe failed to create payment intent");
  }
  return (
    <CheckoutForm
      product={product}
      clientSecret={paymentIntent.client_secret}
    />
  );
};

export default PurchasePage;
