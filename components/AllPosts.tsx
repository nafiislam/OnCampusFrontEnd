"use client";
import AvatarImageText from "./AvatarImageText";
import DateTime from "./DateTime";
import PosText from "./Posttext";

export default function AllPosts() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 w-11/12">
        <AvatarImageText />
        <div className="flex flex-row gap-2">
          <div className="text-red-700 ml-16 text-sm">
            <a href="#">Blood</a>, <a href="#">General</a>
          </div>
          <DateTime />
        </div>

        <PosText />

        <a href="" className="underline text-blue-700">
            See More...
        </a>

        <hr className="border-1 border-gray-400" />
      </div>




      <div className="flex flex-col gap-4 w-11/12">
      <AvatarImageText />
      <div className="flex flex-row gap-2">
        <div className="text-red-700 ml-16 text-sm">
          <a href="#">Blood</a>, <a href="#">General</a>
        </div>
        <DateTime />
      </div>

      <PosText />

      <a href="" className="underline text-blue-700">
            See More...
        </a>

      <hr className="border-1 border-gray-400" />
    </div>
    </div>
  );
}
