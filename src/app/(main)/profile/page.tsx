"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadButton } from "@/lib/uploadThing";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { updateUser } from "@/app/actions/auth.actions";

type Props = {};

const Profile = (props: Props) => {
  const session = useSession();
  const { toast } = useToast();
  const [input, setInput] = useState({
    username: "",
    image: "",
  });
  const handleCLick = (e: any) => {
    e.preventDefault();
    updateUser({
      name: input.username,
      image: input.image,
    }).then(() => {
      toast({
        title: "Profile Updated",
        description: "Profile updated successfully",
        variant: "default",
      });
      setInput({
        username: "",
        image: "",
      });
    });
  };
  return (
    <div className="">
      <div className="mt-3 ml-12">
        <h1 className="text-5xl font-semibold">Profile</h1>
        <p className="dark:text-muted-foreground/50 text-muted-foreground/80  mt-2">
          Update or revamp your username and public profile picture.
        </p>
      </div>
      <div className="flex flex-col gap-3 justify-between"></div>
      <div className="">
        <form
          onSubmit={handleCLick}
          className="flex flex-col gap-5 md:mx-[20px] mx-12 md:ml-12 sm:w-[250px] my-12 md:w-[540px]"
          action=""
        >
          <div className="space-y-3">
            <Label>Upload your new profile picture</Label>
            <UploadButton
              className="ut-button:bg-orange-500 ut-button:text-black
              ut-button:flex ut-button:w-full ut-allowed-content:hidden ut-readying:font-bold"
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                setInput({ ...input, image: res[0].url });
                toast({
                  title: "Product Image Uploaded",
                  description: "Product image uploaded successfully",
                  variant: "default",
                });
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              value={input.username}
              onChange={(e) => {
                setInput({ ...input, username: e.target.value });
              }}
              placeholder="New Username"
              name="username"
              id=""
            />
            <Label htmlFor="email">Email</Label>
            <Input
              placeholder={`${session?.data?.user.email}`}
              className="p-3 outline-none bg-inherit border dark:border-gray-600 rounded-lg"
              type="email"
              name="email"
              disabled={true}
              id=""
            />
          </div>
          <Button onClick={handleCLick} type="submit" className="w-full">
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
