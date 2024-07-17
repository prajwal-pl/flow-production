import Link from "next/link";
import React from "react";
import { ModeToggle } from "../ui/mode-toggle";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

type Props = {};

const Navbar = async (props: Props) => {
  return (
    <div className="p-3 flex items-center justify-between sticky top-0 backdrop-blur-md backdrop-brightness-75 border-b">
      <aside className="flex items-center gap-2">
        <Link href="/">
          <span className="text-xl text-primary font-bold">Flow.</span>
        </Link>
      </aside>
      <aside className="flex gap-2 items-center">
        {true ? (
          <Link
            href={"/sign-up"}
            className="bg-primary text-sm text-white p-2 px-4 rounded-md hover:bg-primary/80 "
          >
            Get Started
          </Link>
        ) : (
          <div></div>
        )}
        <ModeToggle />
      </aside>
    </div>
  );
};

export default Navbar;
