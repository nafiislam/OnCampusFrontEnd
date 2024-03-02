"use client";
import {
  BeakerIcon,
  BookOpenIcon,
  CalendarDaysIcon,
  ChatBubbleBottomCenterTextIcon,
  ChevronRightIcon,
  CurrencyBangladeshiIcon,
  ShoppingBagIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";

export function SidebarWithContentSeparator() {
  const [open, setOpen] = React.useState(0);
  const { data: session, status } = useSession();

  const [isAdmin, setIsAdmin] = React.useState(false);

  useEffect(() => {
    if (
      status != "loading" &&
      session &&
      session?.error === "RefreshAccessTokenError"
    ) {
      signOut({ callbackUrl: "/" });
    }
    if (session?.roles.includes("admin")) {
      setIsAdmin(true);
    }
  }, [session, status]);

  if (!session) {
    return (
      <>
        <Card
          placeholder={""}
          className="h-[calc(130vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/2"
        >
          <></>
        </Card>
      </>
    );
  }

  const handleOpen = (value: React.SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card
      placeholder={""}
      className=" min-h-screen h-auto w-full max-w-[20rem] p-4 shadow-2xl shadow-blue-gray-900/2"
    >
      <List className="mt-8" placeholder={""}>
        <Accordion
          placeholder={""}
          open={open === 1}
          icon={
            <ChevronRightIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-90" : ""
              }`}
            />
          }
        >
          <ListItem placeholder={""} className="p-0" selected={open === 1}>
            <AccordionHeader
              placeholder={""}
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix placeholder={""}>
                <Square3Stack3DIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography
                placeholder={""}
                color="blue-gray"
                className="mr-auto font-normal"
              >
                General
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 pl-2">
            <List placeholder={""} className="p-0">
              <Link href="/General/all">
                <ListItem placeholder={""}>
                  <ListItemPrefix placeholder={""}>
                    <ChatBubbleBottomCenterTextIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  All
                </ListItem>
              </Link>
              <Link href="/General/DISCUSSION">
                <ListItem placeholder={""}>
                  <ListItemPrefix placeholder={""}>
                    <ChatBubbleBottomCenterTextIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  Discussions
                </ListItem>
              </Link>
              <Link href="/General/BLOOD">
                <ListItem placeholder={""}>
                  <ListItemPrefix placeholder={undefined}>
                    <BeakerIcon strokeWidth={2} className="h-4 w-5" />
                  </ListItemPrefix>
                  Blood Posts
                </ListItem>
              </Link>
              <Link href="/General/TUITION">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <CurrencyBangladeshiIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  Tution Posts
                </ListItem>
              </Link>
              <Link href="/General/PRODUCT">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <ShoppingBagIcon strokeWidth={2} className="h-4 w-5" />
                  </ListItemPrefix>
                  Product Posts
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 2}
          icon={
            <ChevronRightIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-90" : ""
              }`}
            />
          }
          placeholder={undefined}
        >
          <ListItem
            className="p-0"
            selected={open === 2}
            placeholder={undefined}
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
              placeholder={undefined}
            >
              <ListItemPrefix placeholder={undefined}>
                <Square3Stack3DIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal"
                placeholder={undefined}
              >
                Batch
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 pl-2">
            <List className="p-0" placeholder={undefined}>
              <Link href="/Batch/all">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <ChatBubbleBottomCenterTextIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  All
                </ListItem>
              </Link>
              <Link href="/Batch/DISCUSSION">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <ChatBubbleBottomCenterTextIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  Discussions
                </ListItem>
              </Link>
              <Link href="/Batch/BLOOD">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <BeakerIcon strokeWidth={2} className="h-4 w-5" />
                  </ListItemPrefix>
                  Blood Posts
                </ListItem>
              </Link>
              <Link href="/Batch/TUITION">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <CurrencyBangladeshiIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  Tution Posts
                </ListItem>
              </Link>
              <Link href="/Batch/PRODUCT">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <ShoppingBagIcon strokeWidth={2} className="h-4 w-5" />
                  </ListItemPrefix>
                  Product Posts
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 3}
          icon={
            <ChevronRightIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 3 ? "rotate-90" : ""
              }`}
            />
          }
          placeholder={undefined}
        >
          <ListItem
            className="p-0"
            selected={open === 3}
            placeholder={undefined}
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="border-b-0 p-3"
              placeholder={undefined}
            >
              <ListItemPrefix placeholder={undefined}>
                <Square3Stack3DIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal"
                placeholder={undefined}
              >
                Dept
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 pl-2">
            <List className="p-0" placeholder={undefined}>
              <Link href="/Dept/all">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <ChatBubbleBottomCenterTextIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  All
                </ListItem>
              </Link>
              <Link href="/Dept/DISCUSSION">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <ChatBubbleBottomCenterTextIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  Discussions
                </ListItem>
              </Link>
              <Link href="/Dept/BLOOD">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <BeakerIcon strokeWidth={2} className="h-4 w-5" />
                  </ListItemPrefix>
                  Blood Posts
                </ListItem>
              </Link>
              <Link href="/Dept/TUITION">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <CurrencyBangladeshiIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  Tution Posts
                </ListItem>
              </Link>
              <Link href="/Dept/PRODUCT">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <ShoppingBagIcon strokeWidth={2} className="h-4 w-5" />
                  </ListItemPrefix>
                  Product Posts
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 4}
          icon={
            <ChevronRightIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 4 ? "rotate-90" : ""
              }`}
            />
          }
          placeholder={undefined}
        >
          <ListItem
            className="p-0"
            selected={open === 4}
            placeholder={undefined}
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className="border-b-0 p-3"
              placeholder={undefined}
            >
              <ListItemPrefix placeholder={undefined}>
                <Square3Stack3DIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal"
                placeholder={undefined}
              >
                Batch Dept
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 pl-2">
            <List className="p-0" placeholder={undefined}>
              <Link href="/BatchDept/all">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <ChatBubbleBottomCenterTextIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  All
                </ListItem>
              </Link>
              <Link href="/BatchDept/DISCUSSION">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <ChatBubbleBottomCenterTextIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  Discussions
                </ListItem>
              </Link>
              <Link href="/BatchDept/BLOOD">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <BeakerIcon strokeWidth={2} className="h-4 w-5" />
                  </ListItemPrefix>
                  Blood Posts
                </ListItem>
              </Link>
              <Link href="/BatchDept/TUITION">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <CurrencyBangladeshiIcon
                      strokeWidth={2}
                      className="h-4 w-5"
                    />
                  </ListItemPrefix>
                  Tution Posts
                </ListItem>
              </Link>
              <Link href="/BatchDept/PRODUCT">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <ShoppingBagIcon strokeWidth={2} className="h-4 w-5" />
                  </ListItemPrefix>
                  Product Posts
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 5}
          icon={
            <ChevronRightIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 5 ? "rotate-90" : ""
              }`}
            />
          }
          placeholder={undefined}
        >
          <ListItem
            className="p-0"
            selected={open === 5}
            placeholder={undefined}
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className="border-b-0 p-3"
              placeholder={undefined}
            >
              <ListItemPrefix placeholder={undefined}>
                <CalendarDaysIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal"
                placeholder={undefined}
              >
                Events
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 pl-2">
            <List className="p-0" placeholder={undefined}>
              <Link href="/CreateEvent">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </ListItemPrefix>
                  Create Event
                </ListItem>
              </Link>
              <Link href="/AllEvents">
                <ListItem placeholder={undefined}>
                  <ListItemPrefix placeholder={undefined}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                      />
                    </svg>
                  </ListItemPrefix>
                  All Events
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 6}
          icon={
            <ChevronRightIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 6 ? "rotate-90" : ""
              }`}
            />
          }
          placeholder={undefined}
        >
          <ListItem
            className="p-0"
            selected={open === 6}
            placeholder={undefined}
          >
            <AccordionHeader
              onClick={() => handleOpen(6)}
              className="border-b-0 p-3"
              placeholder={undefined}
            >
              <ListItemPrefix placeholder={undefined}>
                <BookOpenIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal"
                placeholder={undefined}
              >
                Notices
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 pl-2">
            <List className="p-0" placeholder={undefined}>
              <ListItem placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <ChatBubbleBottomCenterTextIcon
                    strokeWidth={2}
                    className="h-4 w-5"
                  />
                </ListItemPrefix>
                Add notice
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>

        {isAdmin ? (
          <Accordion
            open={open === 7}
            icon={
              <ChevronRightIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 7 ? "rotate-90" : ""
                }`}
              />
            }
            placeholder={undefined}
          >
            <ListItem
              className="p-0"
              selected={open === 7}
              placeholder={undefined}
            >
              <AccordionHeader
                onClick={() => handleOpen(7)}
                className="border-b-0 p-3"
                placeholder={undefined}
              >
                <ListItemPrefix placeholder={undefined}>
                  <BookOpenIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography
                  color="blue-gray"
                  className="mr-auto font-normal"
                  placeholder={undefined}
                >
                  Admin
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1 pl-2">
              <List className="p-0" placeholder={undefined}>
                <Link href="/admin/createStudent">
                  <ListItem placeholder={undefined}>
                    <ListItemPrefix placeholder={undefined}>
                      <ChatBubbleBottomCenterTextIcon
                        strokeWidth={2}
                        className="h-4 w-5"
                      />
                    </ListItemPrefix>
                    Create New Student
                  </ListItem>
                </Link>
                <Link href="/admin/createClub">
                  <ListItem placeholder={undefined}>
                    <ListItemPrefix placeholder={undefined}>
                      <ChatBubbleBottomCenterTextIcon
                        strokeWidth={2}
                        className="h-4 w-5"
                      />
                    </ListItemPrefix>
                    Create New Club
                  </ListItem>
                </Link>
                <Link href="/admin/createBatch">
                  <ListItem placeholder={undefined}>
                    <ListItemPrefix placeholder={undefined}>
                      <ChatBubbleBottomCenterTextIcon
                        strokeWidth={2}
                        className="h-4 w-5"
                      />
                    </ListItemPrefix>
                    Create New Batch
                  </ListItem>
                </Link>
                <Link href="/admin/users">
                  <ListItem placeholder={undefined}>
                    <ListItemPrefix placeholder={undefined}>
                      <ChatBubbleBottomCenterTextIcon
                        strokeWidth={2}
                        className="h-4 w-5"
                      />
                    </ListItemPrefix>
                    All Users
                  </ListItem>
                </Link>
              </List>
            </AccordionBody>
          </Accordion>
        ) : (
          ""
        )}
      </List>
    </Card>
  );
}
