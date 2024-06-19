"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { navigation } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type Props = {};

const Sidebar = (props: Props) => {
  const session = useSession();
  const pathName = usePathname();
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
            <Link
              className={clsx("", { "text-primary": pathName === link.href })}
              key={link.title}
              href={link.href}
            >
              {link.title}
            </Link>
          ))}
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        {
          <Image
            className="rounded-full"
            src={session.data?.user.image || ""}
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
