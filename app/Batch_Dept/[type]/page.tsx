import React from 'react'
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Batch_Dept = async ({ params }: { params: { type: string } }) => {
    const session = await getServerSession(authOptions); 
    if(!session){
        return <></>;
    }
    return (
        <div>Batch_Dept: {params.type}</div>
    )
}

export default Batch_Dept