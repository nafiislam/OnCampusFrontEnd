import React from 'react'
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import POST from "@/server_actions/POST";
import AllPosts from "@/components/AllPosts";

const Dept = async ({ params }: { params: { type: string } }) => {
    const session = await getServerSession(authOptions); 
    if(!session){
        return <><div>Not authorized</div></>;
    }
    const { posts, user } = await POST("post/getPosts/Dept/", {
        type: params.type,
      });
    //   console.log(posts);
    //   console.log(user);
      return (
        <>
          <AllPosts posts={posts} user={user} type={params.type}/>
        </>
      );
}

export default Dept