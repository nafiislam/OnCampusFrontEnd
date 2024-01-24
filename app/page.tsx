import Button1 from "../components/Button1";
import { SidebarWithContentSeparator } from "../components/sidebar";
import { NavbarDark } from "../components/Navbar";
import React from "react";

export default function Home() {
 return(
  <div className="m-4">
    <NavbarDark />
    <SidebarWithContentSeparator />
 </div>
 )
}


