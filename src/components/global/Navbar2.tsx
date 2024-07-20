"use client";
import { navigation } from "@/lib/utils";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Image from "next/image";
import { CreditCard, LogOut, Settings, User } from "lucide-react";
import { SignOut } from "@/app/actions/auth.actions";

type Props = {
  role: string;
};

const Navbar2 = ({ role }: Props) => {
  const pathName = usePathname();
  const session = useSession();

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
              className={clsx(
                "hover:border-b hover:text-primary hover:py-5 hover:border-primary",
                {
                  "text-primary py-5 border-b border-primary hover:border-orange-400 hover:text-orange-400":
                    pathName === link.href,
                }
              )}
              key={link.title}
              href={link.href}
            >
              {link.title}
            </Link>
          ))}
          {role === "ADMIN" ||
            (role === "SELLER" && (
              <Link
                href="/add"
                className={clsx(
                  "hover:border-b hover:text-primary hover:py-5 hover:border-primary",
                  {
                    "text-primary py-5 border-b border-primary hover:border-orange-400 hover:text-orange-400":
                      pathName === "/add",
                  }
                )}
              >
                Add
              </Link>
            ))}
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        {session.data?.user && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image
                src={session.data?.user?.image || ""}
                alt="profile pic"
                className="rounded-full cursor-pointer shrink-0"
                width={30}
                height={30}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <Link href="/billing">Subscriptions</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <Link href="/settings">Settings</Link>{" "}
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => SignOut()}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </aside>
    </div>
  );
};

export default Navbar2;
