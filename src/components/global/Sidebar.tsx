import React, { useEffect } from "react";
import { navigation } from "@/lib/utils";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { CreditCard, LogOut, Settings, User } from "lucide-react";
import { getRole, SignOut } from "@/app/actions/auth.actions";
import Navbar2 from "./Navbar2";
import { auth } from "../../../auth";
import prisma from "@/lib/db";

type Props = {};

const Sidebar = async (props: Props) => {
  const session = await auth();

  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email || "" },
  });

  const role = user?.role || "USER";

  if (!session?.user) {
    window.location.href === "/sign-up";
  }

  return <Navbar2 role={role} />;
};

export default Sidebar;
