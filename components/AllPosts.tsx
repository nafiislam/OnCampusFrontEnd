"use client";
import AvatarImageText from "./getPost/AvatarImageText";
import DateTime from "./getPost/DateTime";
import PosText from "./getPost/Posttext";

export default function AllPosts({ posts, user }: { posts: any[]; user: any }) {
  const anonymous = {
    profilePicture:
      "https://files.edgestore.dev/fqqz8b7kjd68ccue/myPublicFiles/_public/94320c6c-0c88-422b-887e-0d2786e15622.png",
    name: "Anonymous",
    id: "546254226564",
    email: "Anonymous@buet.ac.bd",
  };
  return (
    <div className="flex flex-col gap-8">
      {posts.map((post, index) => (
        <div key={index} className="flex flex-col gap-4 w-11/12">
          {!post.anonymous ? (
            <AvatarImageText user={post?.author} />
          ) : (
            <AvatarImageText user={anonymous} />
          )}
          <div className="flex flex-row gap-2">
            <div className="text-red-700 ml-16 text-sm">
              {post.tags.map((tag: any, index: number) => (
                <div key={index}>
                  <a key={index} href={`/${post.type}/${tag}`}>
                    {tag}
                  </a>
                  <hr key={index} className="border-1 border-gray-400" />
                </div>
              ))}
            </div>
            <DateTime date={new Date(post.createdAt).toLocaleString()} />
          </div>

          <PosText title={post.title} content={post.content} />

          <a href={`/getPost/${post.id}`} className="underline text-blue-700">
            See More...
          </a>

          <hr className="border-1 border-gray-400" />
        </div>
      ))}
    </div>
  );
}
