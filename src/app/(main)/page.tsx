import React from "react";
import { auth } from "../../../auth";

type Props = {};

const Home = async (props: Props) => {
  const session = await auth();
  return (
    <div>
      Home
      <br />
      {session?.user.role}
    </div>
  );
};

export default Home;
