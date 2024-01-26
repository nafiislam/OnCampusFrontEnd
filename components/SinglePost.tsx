"use client";

import BreadcrumbsDefault from "@/components/BreadCrumbs";
import AvatarImageText from "./AvatarImageText";
import AvatarStack from "./AvatarStack";
import CommentCount from "./CommentCount";
import DateTime from "./DateTime";
import ImageGallery from "./Gallery";
import PosText from "./Posttext";
import { FileList } from "./PostAttachments";
import Reaction from "./Reaction";
import CommentBody from "./SingleComment";
import Saveicon from "./save";
import PollLis from "./poll";
import PollList from "./poll";
import CollapseDefault from "./Collapse";

export default function PostBody() {
  return (
    <div className="flex flex-col w-3/6">
      <AvatarImageText />

      <div className="flex flex-row gap-2">
        <BreadcrumbsDefault />
        <DateTime />
        <span className="ml-auto">
          <Saveicon />
        </span>
      </div>

      <PosText />
      <FileList />

      <ImageGallery />

      <PollList />

      <div className="flex flex-row gap-4 justify-end my-8">
        <AvatarStack />
      </div>

      <hr className="my-2 border-blue-gray-900" />

      <div className="flex flex-row gap-4">
        <Reaction />
        <CommentCount />
      </div>

      <hr className="my-2 border-blue-gray-900" />

      <div className="flex flex-col gap-8 w-full">
        <CommentBody flag={0} />
        <CommentBody flag={3}/>
        <CommentBody flag={2}/>
        {/* <div className="flex flex-row gap-10 group relative">
          <div className="before:absolute before:content-[''] before:w-[0.05rem] before:bg-blue-gray-100 before:left-0 before:top-0 before:bottom-0 before:h-full group-hover:h-auto"></div>
          <div>
            <CommentBody flag={0} />
            <CommentBody />
            <div className="flex flex-row gap-10 group relative">
              <div className="before:absolute before:content-[''] before:w-[0.05rem] before:bg-blue-gray-100 before:left-0 before:top-0 before:bottom-0 before:h-full group-hover:h-auto"></div>
              <div>
                <CommentBody />
                <CommentBody />
              </div>
            </div>
            <CommentBody />
          </div> 
        </div>  */}
         <CommentBody flag={1} />
      </div>
    </div>
  );
}
