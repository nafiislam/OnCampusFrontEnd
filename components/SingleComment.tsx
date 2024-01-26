"use client";

import { Collapse, IconButton, Typography } from "@material-tailwind/react";
import React from "react";
import AvatarImageText from "./AvatarImageText";
import CommentCount from "./CommentCount";
import DateTime from "./DateTime";
import Reaction from "./Reaction";
// import HasNextComment from "./HasNextComment";

export default function CommentBody({ flag = 2 }: { flag: number }) {
  const [open, setOpen] = React.useState(false);

  const [icon, setIcon] = React.useState(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const toggleOpen = () => {
    setIcon(
      open ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
            clipRule="evenodd"
          />
        </svg>
      )
    );
    setOpen((cur) => !cur);
    console.log(open);
  };
  return (
    <div className="w-full my-4">
      <AvatarImageText />

      <div className="flex flex-row gap-2">
        <DateTime />
      </div>

      <Typography className="pt-2" placeholder={""} variant="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        nesciunt perspiciatis fuga nostrum quisquam vero quia atque mollitia
        saepe modi reiciendis quas consequuntur, iusto rerum quibusdam
        voluptates tenetur sit corporis commodi.
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        nesciunt perspiciatis fuga nostrum quisquam vero quia atque mollitia
        saepe modi reiciendis quas consequuntur, iusto rerum quibusdam
        voluptates tenetur sit corporis commodi.
      </Typography>

      <div className="flex flex-row gap-4">
        {flag > 0 && (
          <IconButton
            variant="text"
            placeholder={""}
            onClick={toggleOpen}
            className="ml-0"
          >
            {icon}
          </IconButton>
        )}

        <Reaction />
        <CommentCount />
      </div>
      {flag > 0 && (
        <Collapse open={open}>
          <div className="flex flex-row gap-10 group relative">
            <div className="before:absolute before:content-[''] before:w-[0.05rem] before:bg-blue-gray-100 before:left-0 before:top-0 before:bottom-0 before:h-full group-hover:h-auto"></div>
            <div>
              <CommentBody flag={--flag} />
            </div>
          </div>
        </Collapse>
      )}
    </div>
  );
}
