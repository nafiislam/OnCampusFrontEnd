"use client";

import { Typography } from "@material-tailwind/react";
import AvatarImageText from "./AvatarImageText";
import CommentCount from "./CommentCount";
import DateTime from "./DateTime";
import Reaction from "./Reaction";

export default function CommentBody() {
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
        <Reaction />
        <CommentCount />
      </div>
    </div>
  );
}
