import React from 'react'
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const General = async ({ params }: { params: { type: string } }) => {
    const session = await getServerSession(authOptions); 
    if(!session){
        return <></>;
    }
    return (
        <div>General: {params.type}</div>
    )
}

export default General