import Link from "next/link";
import React from "react";
import { ModeToggle } from "../ui/mode-toggle";
import { auth } from "../../../auth";
import Image from "next/image";
import { AtomIcon } from "lucide-react";
import { navigation } from "@/lib/utils";

type Props = {};

const Sidebar = async (props: Props) => {
  const session = await auth();
  return (
    <div className="p-4 flex items-center justify-between sticky top-0 backdrop-blur-md backdrop-brightness-75 border-b">
      <aside className="flex items-center gap-2">
        <Link href="/">
          <span className="text-xl text-primary font-bold">Flow.</span>
        </Link>
      </aside>

      <nav className="md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center md:gap-6 gap-3">
          {navigation.map((link) => (
            <Link className="" key={link.title} href={link.href}>
              {link.title}
            </Link>
          ))}
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        {
          <Image
            className="rounded-full"
            src={session?.user.image || ""}
            alt="profileImage"
            width={30}
            height={30}
          />
        }
      </aside>
    </div>
  );
};

export default Sidebar;
