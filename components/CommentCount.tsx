"use client";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  IconButton,
  Textarea,
} from "@material-tailwind/react";
import React from "react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

export default function CommentCount() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <Accordion placeholder={""} open={open === 1} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          placeholder={""}
          onClick={() => handleOpen(1)}
          className="border-b-0 p-0"
        >
          <div className="flex flex-row gap-2">
            <IconButton placeholder={undefined} variant="text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path d="M3.505 2.365A41.369 41.369 0 0 1 9 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 0 0-.577-.069 43.141 43.141 0 0 0-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 0 1 5 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914Z" />
                <path d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 0 0 1.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0 0 14 6Z" />
              </svg>
            </IconButton>
            <span className="text-sm font-light mt-2">69</span>
          </div>
        </AccordionHeader>
        <AccordionBody >
          <div className="relative w-[32rem]">
            <Textarea
              variant="outlined"
              label="Type Your Comment Here..."
              rows={8}
            />
            <div className="flex justify-between py-1.5">
              <IconButton placeholder={""} variant="text" color="blue-gray">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </IconButton>
              <div className="flex gap-2">
                <Button
                  placeholder={""}
                  color="red"
                  variant="text"
                  className="rounded-md"
                  onClick={() => handleOpen(1)}
                >
                  Cancel
                </Button>
                <Button placeholder={""} className="rounded-md">
                  Post Comment
                </Button>
              </div>
            </div>
          </div>
          {/* <hr className="w-[32rem] border-1 border-black" /> */}
        </AccordionBody>
      </Accordion>
    </div>
  );
}
