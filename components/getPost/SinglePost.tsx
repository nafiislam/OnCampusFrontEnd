"use client";

import BreadcrumbsDefault from "./BreadCrumbs";
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
import PollList from "./poll";
import { comment } from "postcss";
import { useState, useContext, createContext } from "react";

function processNestedComments(comments: any[]) {
  let groupedComments: any = {};
  comments.forEach((comment) => {
    if (!groupedComments[comment.parentCommentID]) {
      groupedComments[comment.parentCommentID] = [];
    }
    groupedComments[comment.parentCommentID].push(comment);
  });
  return groupedComments;
}

export const ContextProvider = createContext({ comments: [],changeComments: (comments: any) => { },pid: "",user: {id: "",name: "",email: "",profilePicture: ""}});

export default function PostBody({ post }: { post: any }) {
  const changeComments = (comments: any) => {
    setComments(comments);
  };
  post = post.post;
  const [comments, setComments] = useState(post.comments);
  post = {
    ...post,
    comments: processNestedComments(comments),
  };
  post.createdAt = new Date(post.createdAt).toLocaleString();
  const anonymous = {
    profilePicture:
      "https://files.edgestore.dev/fqqz8b7kjd68ccue/myPublicFiles/_public/94320c6c-0c88-422b-887e-0d2786e15622.png",
    name: "Anonymous",
    id: "546254226564",
    email: "Anonymous@buet.ac.bd",
  };
  return (
    <ContextProvider.Provider
      value={{ comments: comments, changeComments: changeComments, pid: post.id,user:post.user}}
    >
      <div className="flex flex-col w-5/6">
        {!post.anonymous ? (
          <AvatarImageText user={post?.author} />
        ) : (
          <AvatarImageText user={anonymous} />
        )}

        

        <div className="flex flex-row gap-2">
          <BreadcrumbsDefault type={post.type} tags={post.tags} />
          <DateTime date={post.createdAt} />
          <span className="ml-auto">
            <Saveicon user={post.user} savedBy={post.savedBy} id={post.id}/>
          </span>
        </div>

        <PosText title={post.title} content={post.content} />
        <FileList files={post.attachments} fileNames={post.attachmentNames} />

        <ImageGallery
          images={post.images}
          imageNames={post.imageNames}
          user={post?.author}
        />

        {post.isPoll ? <PollList options={post.options} /> : ""}

        <div className="flex flex-row gap-4 justify-end my-8">
          <AvatarStack users={post.viewedBy}/>
        </div>

        <hr className="my-2 border-blue-gray-900" />

        <div className="flex flex-row gap-4">
          <Reaction likedBy={post.likedBy} type="post" id={post.id}/>
          <CommentCount type="post"/>
        </div>

        <hr className="my-2 border-blue-gray-900" />

        {post.commentAllow ? (
          <div className="flex flex-col gap-8 w-full">

            {post.comments["null"]?.map((comment: any) => (
              <CommentBody
                key={comment.id}
                comment={comment}
                mapper={post.comments}
              />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </ContextProvider.Provider>
  );
}
