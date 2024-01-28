import React from 'react'
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import POST from "@/server_actions/POST";
import AllPosts from "@/components/AllPosts";

const Batch = async ({ params }: { params: { type: string } }) => {
    const session = await getServerSession(authOptions); 
    if(!session){
        return <><div>Not authorized</div></>;
    }
    const { posts, user } = await POST("post/getPosts/Batch/", {
        type: params.type,
    });
    return (
        <>
          <AllPosts posts={posts} user={user} />
        </>
    );
}

export default Batch