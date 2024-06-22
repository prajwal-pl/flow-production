import { Button } from "@/components/ui/button";
import React from "react";
import { auth } from "../../../../auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {};

const Profile = async (props: Props) => {
  const session = await auth();
  return (
    <div className="">
      <div className="mt-3 ml-12">
        <h1 className="text-5xl font-semibold">Profile</h1>
      </div>
      <div>{/* Uploadcare */}</div>
      <div className="">
        <form
          className="flex flex-col gap-3 mx-[20px] md:ml-36 sm:w-[250px] my-36 md:w-[540px]"
          action=""
        >
          <Label htmlFor="username">Username</Label>
          <Input type="text" placeholder="New Username" name="username" id="" />

          <Label htmlFor="email">Email</Label>
          <Input
            placeholder={`${session?.user.email}`}
            className="p-3 outline-none bg-inherit border dark:border-gray-600 rounded-lg"
            type="email"
            name="email"
            disabled={true}
            id=""
          />
          <Button type="submit" className="w-full">
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
