"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "../../../../auth";
import React from "react";
// import { signIn } from "next-auth/react";
import { SignIn } from "@/app/actions/auth.actions";

type Props = {};

const SignUp = (props: Props) => {
  return <Button onClick={() => SignIn()}>Sign Up</Button>;
};

export default SignUp;
