"use server";
import React from "react";
import { GET } from "../server_actions/GET";
import { POST } from "../server_actions/POST";
import First from "../components/First";
const User = () => {
  return (
    <>
      <First GET={GET} POST={POST}/>
    </>
  );
};

export default User;
