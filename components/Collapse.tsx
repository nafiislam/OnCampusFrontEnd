"use client";
import React from "react";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";
 
export default function CollapseDefault() {
  const [open, setOpen] = React.useState(false);
 
  const toggleOpen = () => {
    setOpen((cur) => !cur);
    console.log(open);
  }
 
  return (
    <div>
      <Button onClick={toggleOpen} placeholder={undefined}>Open Collapse</Button>
      <Collapse open={open}>
        <Card className="my-4 mx-0 w-full" placeholder={undefined}>
          <CardBody placeholder={undefined}>
            <Typography placeholder={undefined}>
              Use our Tailwind CSS collapse for your website. You can use if for
              accordion, collapsible items and much more.
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}