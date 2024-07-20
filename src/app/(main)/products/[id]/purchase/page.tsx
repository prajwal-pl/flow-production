import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";
import Stripe from "stripe";
import CheckoutForm from "./_components/CheckoutForm";
import { auth } from "../../../../../../auth";

type Props = {
  params: {
    id: string;
  };
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

const PurchasePage = async ({ params }: Props) => {
  const session = await auth();
  const product = await prisma.product.findUnique({
    where: {
      id: params.id,
    },
  });
  if (product === null) return notFound();

  const customer = await stripe.customers.create({
    name: session?.user.name as string,
    address: {
      line1: "510 Townsend St",
      postal_code: "98140",
      city: "San Francisco",
      state: "CA",
      country: "US",
    },
  });

  const paymentIntent = await stripe.paymentIntents.create({
    customer: customer.id,
    amount: product.price * 100,
    currency: "INR",
    description: "Order Placed",
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
