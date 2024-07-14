"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import React from "react";
import { SignIn } from "@/app/actions/auth.actions";

type Props = {};

const Signin = (props: Props) => {
  return (
    <Button
      onClick={() => {
        SignIn();
      }}
    >
      Sign In
    </Button>
  );
};

export default Signin;
