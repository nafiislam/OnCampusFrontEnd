"use client";
import React, { useEffect } from "react";

import { useState } from 'react';
import GET from "@/server_actions/GET";

import { Input, Select, Option, Button, Alert } from "@material-tailwind/react";
import VirtualTour from "@/components/VirtualTour";


export default function CreateStudentPage() {

    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMsg, setAlertMsg] = useState("");



    useEffect(() => {
        const fetchData = async (path: string) => {
            try {
                // Your asynchronous code here
                const result = await GET(path);
                if (result === null) {
                    throw new Error("Error fetching data");
                }
                return {
                    data: result,
                    success: true
                };
            } catch (error) {
                console.error('Error fetching data:', error);
                setAlertMsg("Error fetching data");
                setAlertOpen(true);
                return {
                    data: [],
                    success: false
                };
            }
        };
    }, []);


    return (
        <>
            <Alert open={alertOpen} onClose={() => setAlertOpen(false)}>
                {alertMsg}
            </Alert>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <VirtualTour />
            </div>

        </>
    )
}




