"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import React from "react";
import { SignIn } from "@/app/actions/auth.actions";
import { AuthGoogleComponent } from "@/components/component/auth-google-component";

type Props = {};

const Signin = (props: Props) => {
  return <AuthGoogleComponent />;
};

export default Signin;
