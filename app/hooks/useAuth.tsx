import React, { useEffect, useRef } from "react";
import Keycloak from "keycloak-js";
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [token, setToken] = React.useState("");
  const ref = useRef(false);
  useEffect(() => {
    if (ref.current) {
      return;
    }
    ref.current = true;
    const client = new Keycloak({
      url: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
      realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM ?? "",
      clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID ?? "",
    });
    client.init({ onLoad: "login-required" }).then((authenticated) => {
      setIsAuthenticated(authenticated);
      setToken(client.token ?? "");
      // client.logout();
    });
  }, []);
  return [isAuthenticated, token];
};

export default useAuth;
