"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { auth } from "../../../auth";
import prisma from "@/lib/db";
import { useSession } from "next-auth/react";
import {
  handleSellerRole,
  handleUserRole,
} from "@/app/actions/productUpload.action";

export function RoleComponent() {
  const session = useSession();

  const handleProductSeller = async () => {
    handleSellerRole();
  };

  const handleConsumer = async () => {
    handleUserRole();
  };
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Choose Your Role</h1>
          <p className="text-muted-foreground">
            Select the role that best fits your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <Card>
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                <UserIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold">Product Seller</h3>
                <p className="text-muted-foreground">
                  Sell your products and services to customers.
                </p>
              </div>
              <Button onClick={handleProductSeller} variant="outline">
                Select
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <div className="bg-secondary rounded-md p-3 flex items-center justify-center">
                <UserIcon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold">Consumer</h3>
                <p className="text-muted-foreground">
                  Browse and purchase products and services.
                </p>
              </div>
              <Button onClick={handleConsumer} variant="outline">
                Select
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function UserIcon(props: any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
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
