import { ProductDashboard } from "@/components/component/product-dashboard";
import React from "react";
import { auth } from "../../../../auth";
import { UserDashboard } from "@/components/component/user-dashboard";

type Props = {};

const Dashboard = async (props: Props) => {
  const session = await auth();
  return (
    <div>
      <div className="mt-3 ml-8">
        <h1 className="text-5xl font-semibold">Dashboard</h1>
        <p className="dark:text-muted-foreground/50 text-muted-foreground/80 mt-2">
          Manage your platform with real time analytics.
        </p>
      </div>
      <div>
        {session?.user?.role === "SELLER" ? (
          <ProductDashboard />
        ) : (
          <div className="max-w-5xl mx-auto mt-10">
            <UserDashboard />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
