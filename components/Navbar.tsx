"use client";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import {
  Button,
  IconButton,
  Input,
  Navbar,
  Typography,
  
} from "@material-tailwind/react";

import { ProfileMenu } from "./AvatarMenu";
import { NotificationsMenu } from "./NotiMenu";

import { NavbarProps } from "@material-tailwind/react";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export function NavbarDark() {

  const [stickyClass, setStickyClass] = React.useState('');

  React.useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  return (
    <div className="">
    <Navbar
          variant="gradient"
          color="blue-gray"
          className="sticky top-0 z-10 h-max max-w-full from-blue-gray-400 to-blue-gray-900 px-4 py-3" placeholder={undefined}    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <Link href={"#"}><Image src="/images/logo.png" width={50} height={40} alt="logo" className="m-0 p-0 rounded-full" /></Link>
        <div className="relative flex w-full gap-2 md:w-max ml-8">
          <Input
                      type="search"
                      color="white"
                      label="Type here..."
                      className="pr-20"
                      containerProps={{
                          className: "min-w-[288px]",
                      }} crossOrigin={undefined}          />
          <Button
                      size="sm"
                      color="white"
                      className="!absolute right-1 top-1 rounded"   placeholder={undefined}          >
            Search
          </Button>
        </div>
        <div className="ml-auto flex gap-8 md:mr-4">
          <NotificationsMenu />
          
          <ProfileMenu />
        </div>
        
      </div>
    </Navbar>
    </div>
  );
}
