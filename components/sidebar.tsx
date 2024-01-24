"use client";
import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  BookOpenIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  ChevronRightIcon,
  ChatBubbleBottomCenterTextIcon,
  BeakerIcon,
  ShoppingBagIcon,
  ComputerDesktopIcon,
  CurrencyBangladeshiIcon,
  ScaleIcon
} from "@heroicons/react/24/outline";
 
export function SidebarWithContentSeparator() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value: React.SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Card placeholder={""} className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/2">
      <div className="mb-2 p-4">
        {/* <Typography variant="h5" color="blue-gray">
          TABLE OF CONTENTS
        </Typography> */}
      </div>
      <List placeholder={""}>

        <Accordion
        placeholder={""}
          open={open === 1}
          icon={
            <ChevronRightIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-90" : ""}`}
            />
          }
        >
          <ListItem placeholder={""} className="p-0" selected={open === 1}>
            <AccordionHeader placeholder={""} onClick={() => handleOpen(1)} className="border-b-0 p-3">
              <ListItemPrefix placeholder={""}>
                <Square3Stack3DIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography placeholder={""} color="blue-gray" className="mr-auto font-normal">
                General
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 pl-2">
            <List placeholder={""} className="p-0">
              <ListItem placeholder={""}>
                <ListItemPrefix placeholder={""}>
                  <ChatBubbleBottomCenterTextIcon strokeWidth={2} className="h-4 w-5" />
                </ListItemPrefix>
                Discussions
              </ListItem>
              <ListItem placeholder={""}>
                <ListItemPrefix placeholder={undefined}>
                  <BeakerIcon strokeWidth={2} className="h-4 w-5" />
                </ListItemPrefix>
                Blood Posts
              </ListItem>
              <ListItem placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <CurrencyBangladeshiIcon strokeWidth={2} className="h-4 w-5" />
                </ListItemPrefix>
                Tution Posts
              </ListItem>
              <ListItem placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <ShoppingBagIcon strokeWidth={2} className="h-4 w-5" />
                </ListItemPrefix>
                Product Posts
              </ListItem>
              <ListItem placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <ComputerDesktopIcon strokeWidth={2} className="h-4 w-5" />
                </ListItemPrefix>
                Tech talks
              </ListItem>
              <ListItem placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <ScaleIcon strokeWidth={2} className="h-4 w-5" />
                </ListItemPrefix>
                Polls
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>





        <Accordion
                  open={open === 2}
                  icon={<ChevronRightIcon
                      strokeWidth={2.5}
                      className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-90" : ""}`} />} placeholder={undefined}        >
          <ListItem className="p-0" selected={open === 2} placeholder={undefined}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3" placeholder={undefined}>
              <ListItemPrefix placeholder={undefined}>
                <Square3Stack3DIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal" placeholder={undefined}>
                Batch 19
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 pl-2">
            <List className="p-0" placeholder={undefined}>
              <ListItem placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <ChatBubbleBottomCenterTextIcon strokeWidth={2} className="h-4 w-5" />
                </ListItemPrefix>
                Discussions
              </ListItem>
              <ListItem placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <BeakerIcon strokeWidth={2} className="h-4 w-5" />
                </ListItemPrefix>
                Blood Posts
              </ListItem>
              <ListItem placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <CurrencyBangladeshiIcon strokeWidth={2} className="h-4 w-5" />
                </ListItemPrefix>
                Tution Posts
              </ListItem>
              <ListItem placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <ShoppingBagIcon strokeWidth={2} className="h-4 w-5" />
                </ListItemPrefix>
                Product Posts
              </ListItem>
              <ListItem placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <ComputerDesktopIcon strokeWidth={2} className="h-4 w-5" />
                </ListItemPrefix>
                Tech talks
              </ListItem>
              <ListItem placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <ScaleIcon strokeWidth={2} className="h-4 w-5" />
                </ListItemPrefix>
                Polls
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>





        <Accordion
                  open={open === 3}
                  icon={<ChevronRightIcon
                      strokeWidth={2.5}
                      className={`mx-auto h-4 w-4 transition-transform ${open === 3 ? "rotate-90" : ""}`} />} placeholder={undefined}        >
          <ListItem className="p-0" selected={open === 3} placeholder={undefined}>
            <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3" placeholder={undefined}>
              <ListItemPrefix placeholder={undefined}>
                <Square3Stack3DIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal" placeholder={undefined}>
                CSE Department
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 pl-2">
            <List className="p-0" placeholder={undefined}>
              <ListItem placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <ChatBubbleBottomCenterTextIcon strokeWidth={2} className="h-4 w-5" />
                </ListItemPrefix>
                Discussions
              </ListItem>
              <ListItem placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <BeakerIcon strokeWidth={2} className="h-4 w-5" />
                </ListItemPrefix>
                Blood Posts
              </ListItem>
              <ListItem placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <CurrencyBangladeshiIcon strokeWidth={2} className="h-4 w-5" />
                </ListItemPrefix>
                Tution Posts
              </ListItem>
              <ListItem placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <ShoppingBagIcon strokeWidth={2} className="h-4 w-5" />
                </ListItemPrefix>
                Product Posts
              </ListItem>
              <ListItem placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <ComputerDesktopIcon strokeWidth={2} className="h-4 w-5" />
                </ListItemPrefix>
                Tech talks
              </ListItem>
              <ListItem placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <ScaleIcon strokeWidth={2} className="h-4 w-5" />
                </ListItemPrefix>
                Polls
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>





        <Accordion
                  open={open === 4}
                  icon={<ChevronRightIcon
                      strokeWidth={2.5}
                      className={`mx-auto h-4 w-4 transition-transform ${open === 4 ? "rotate-90" : ""}`} />} placeholder={undefined}        >
          <ListItem className="p-0" selected={open === 4} placeholder={undefined}>
            <AccordionHeader onClick={() => handleOpen(4)} className="border-b-0 p-3" placeholder={undefined}>
              <ListItemPrefix placeholder={undefined}>
                <Square3Stack3DIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal" placeholder={undefined}>
                CSE 19
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 pl-2">
            <List className="p-0" placeholder={undefined}>
              <ListItem placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <ChatBubbleBottomCenterTextIcon strokeWidth={2} className="h-4 w-5" />
                </ListItemPrefix>
                Discussions
              </ListItem>
              <ListItem placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <BeakerIcon strokeWidth={2} className="h-4 w-5" />
                </ListItemPrefix>
                Blood Posts
              </ListItem>
              <ListItem placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <CurrencyBangladeshiIcon strokeWidth={2} className="h-4 w-5" />
                </ListItemPrefix>
                Tution Posts
              </ListItem>
              <ListItem placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <ShoppingBagIcon strokeWidth={2} className="h-4 w-5" />
                </ListItemPrefix>
                Product Posts
              </ListItem>
              <ListItem placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <ComputerDesktopIcon strokeWidth={2} className="h-4 w-5" />
                </ListItemPrefix>
                Tech talks
              </ListItem>
              <ListItem placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <ScaleIcon strokeWidth={2} className="h-4 w-5" />
                </ListItemPrefix>
                Polls
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>




        <hr className="my-2 border-blue-gray-50" />
        <ListItem placeholder={undefined}>
          <ListItemPrefix placeholder={undefined}>
            <UserGroupIcon className="h-5 w-5" />
          </ListItemPrefix>
          Clubs
          {/* <ListItemSuffix placeholder={undefined}>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix> */}
        </ListItem>
        <ListItem placeholder={undefined}>
          <ListItemPrefix placeholder={undefined}>
            <CalendarDaysIcon className="h-5 w-5" />
          </ListItemPrefix>
          Events
        </ListItem>
        <ListItem placeholder={undefined}>
          <ListItemPrefix placeholder={undefined}>
            <BookOpenIcon className="h-5 w-5" />
          </ListItemPrefix>
          Notices
        </ListItem>
      </List>
    </Card>
  );
}