"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import React from "react";

type Props = {};

const SignUp = (props: Props) => {
  return <Button onClick={() => signIn("google")}>Sign up</Button>;
};

export default SignUp;
