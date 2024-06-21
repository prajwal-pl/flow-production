import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import React from "react";

type Props = {};

const SignIn = (props: Props) => {
  return (
    <Button
      onClick={() => {
        signIn("google", { redirect: true });
      }}
    >
      Sign In
    </Button>
  );
};

export default SignIn;
