import Navbar from "@/components/global/Navbar";
import Sidebar from "@/components/global/Sidebar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Rootlayout = ({ children }: Props) => {
  return (
    <main className="">
      <Navbar />
      {children}
    </main>
  );
};

export default Rootlayout;
