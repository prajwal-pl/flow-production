import { RoleComponent } from "@/components/component/role-component";
import React from "react";

type Props = {};

const RoleSelect = (props: Props) => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <RoleComponent />
    </div>
  );
};

export default RoleSelect;
