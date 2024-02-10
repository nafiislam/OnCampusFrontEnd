"use client";

import Image from "next/image";


export default function ProfilePage({ user }: { user: any }) {
    return (
        <div>
            <h1>Profile Page</h1>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    );

}