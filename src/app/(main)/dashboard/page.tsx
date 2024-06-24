import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <div className="mt-3 ml-8">
        <h1 className="text-5xl font-semibold">Dashboard</h1>
        <p className="dark:text-muted-foreground/50 text-muted-foreground/80 my-2">
          Manage your platform with real time analytics.
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
