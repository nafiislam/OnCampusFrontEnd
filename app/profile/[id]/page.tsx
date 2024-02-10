"use client";
import React from 'react'
import { getAccessToken } from '@/utils/sessionTokenAccessor'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import POST from '@/server_actions/POST'
const profile = async({params}:{params:{id:string}}) => {
    const token = await getAccessToken()
    if(!token){
        return (
            <div>Not authorized</div>
        )
    }
    const user = await POST('user/getUser', {id: params.id})
    if(!user){
        return (
            <div>User not found</div>
        )
    }
  return (
    <div>{JSON.stringify(user)}</div>
  )
}

export default profile