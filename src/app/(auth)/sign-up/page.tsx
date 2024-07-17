"use client";
import { Button } from "@/components/ui/button";
import React from "react";
// import { signIn } from "next-auth/react";
import { SignIn } from "@/app/actions/auth.actions";
import { AuthGoogleComponent } from "@/components/component/auth-google-component";

type Props = {};

const SignUp = (props: Props) => {
  return <AuthGoogleComponent />;
};

export default SignUp;
