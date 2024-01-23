"use client";
import React, { use, useEffect } from "react";
import { useRef } from "react";
import useAuth from "../hooks/useAuth";
import useLogout from "../client_actions/Logout";
interface Props {
  GET: (e: string) => void;
  POST: (e: string) => void;
}
const First = ({ GET,POST }: Props) => {
  const [isLogin, token] = useAuth();
  const logout = () => {
    "use client";
    useLogout();
  };
  return (
    <>
      {isLogin ? <p>Logged</p> : <p>Not Logged</p>}
      <div>
        <button
          onClick={() => GET(typeof token == "boolean" ? "" : token)}
        >
          Click me to send GET
        </button>
      </div>
      <div>
        <button
          onClick={() => POST(typeof token == "boolean" ? "" : token)}
        >
          Click me to send POST
        </button>
      </div>
      <div>
        <button onClick={() => logout()}>Logout</button>
      </div>
    </>
  );
};

export default First;
