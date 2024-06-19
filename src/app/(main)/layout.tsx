import Sidebar from "@/components/global/Sidebar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <main>
      <Sidebar />
      {children}
    </main>
  );
};

export default layout;
