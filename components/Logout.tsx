"use client";
import React, { use, useEffect } from "react";
import Keycloak from "keycloak-js";
const Logout = () => {
  console.log("logging out")
  useEffect(() => {
    const client = new Keycloak({
      url: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
      realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM ?? "",
      clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID ?? "",
    });
    client.init({ onLoad: "login-required" }).then((authenticated) => {
    });
    console.log(client);
    client.logout();
  })
  return (<></>)
};

export default Logout;
