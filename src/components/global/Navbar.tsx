import Link from "next/link";
import React from "react";
import { ModeToggle } from "../ui/mode-toggle";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="p-4 flex items-center justify-between sticky top-0 backdrop-blur-md backdrop-brightness-75 border-b">
      <aside className="flex items-center gap-2">
        {/* <Image
      src="./assets/plura-logo.svg"
      width={40}
      height={40}
      alt="logo"
    /> */}
        <Link href="/">
          <span className="text-xl text-primary font-bold">Flow.</span>
        </Link>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Documentation</Link>
          <Link href={"#"}>Features</Link>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        <Link
          href={"/sign-up"}
          className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80 "
        >
          Login
        </Link>
        <ModeToggle />
      </aside>
    </div>
  );
};

export default Navbar;
