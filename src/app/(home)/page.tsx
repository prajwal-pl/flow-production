import React from "react";
import Image from "next/image";
import { pricingCards } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import { Check } from "lucide-react";
import Link from "next/link";
import { HomeComponent } from "@/components/component/home-component";
import { Footer } from "@/components/component/footer";

type Props = {};

const Home = async (props: Props) => {
  return (
    <div>
      <HomeComponent />
      <Footer />
    </div>
  );
};

export default Home;
