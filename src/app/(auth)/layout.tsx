import Navbar from "@/components/global/Navbar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <main>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
