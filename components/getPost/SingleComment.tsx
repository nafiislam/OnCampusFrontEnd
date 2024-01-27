"use client";

import { Typography } from "@material-tailwind/react";
import AvatarImageText from "./AvatarImageText";
import CommentCount from "./CommentCount";
import DateTime from "./DateTime";
import Reaction from "./Reaction";
import { useState } from "react";
export default function CommentBody({ comment,mapper }: { comment: any,mapper:any }) {
  comment.createdAt = new Date(comment.createdAt).toLocaleString();
  const [thisComment, setThisComment] = useState(comment);
  return (
    <>
      <div className="w-full my-4">
        <AvatarImageText user={comment.author} />

        <div className="flex flex-row gap-2">
          <DateTime date={comment.createdAt} />
        </div>

        <Typography className="pt-2" placeholder={""} variant="paragraph">
          {comment.content ?? ""}
        </Typography>

        <div className="flex flex-row gap-4">
          <Reaction likedBy={comment.likedBy} type="comment" id={comment.id}/>
          <CommentCount type="comment" cid={comment.id}/>
        </div>
      </div>
      {mapper[comment.id]?(
        <div className="flex flex-row gap-10 group relative">
        <div className="before:absolute before:content-[''] before:w-[0.05rem] before:bg-blue-gray-100 before:left-0 before:top-0 before:bottom-0 before:h-full group-hover:h-auto"></div>
        <div>
          {mapper[comment.id].map((comment: any) => (
            <CommentBody key={comment.id} comment={comment} mapper={mapper}/>
          ))}
        </div>
      </div>
      ):""}
    </>
  );
}
