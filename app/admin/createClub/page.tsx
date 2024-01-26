"use client";
import React from "react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/outline";

import {
    Card,
    CardHeader,
    Typography,
    CardBody,
    IconButton,
    Tooltip,
    Select,
    Option,
    Button,
    Input
} from "@material-tailwind/react";


import { useState } from 'react';
import createClub from "@/server_actions/createClub";


export default function CreateClubPage() {

    const TABLE_HEAD = ["Email", "Role", ""];

    const [club, setClub] = useState({ clubName: "", members: [] }); // [clubName, role]

    let selectedEmail = "";
    let selectedRole = "";


    const createNewClub = async () => {
        try {

            const response = await createClub(club);
            setClub({ clubName: "", members: [] });

            alert(response.message)
        } catch (error) {
            alert("Error occurred while creating club")
        } finally {
        }
    }

    const addNewClubMember = () => {
        if (selectedEmail !== "" && selectedRole !== "") {
            setClub({ ...club, members: [...club.members, { email: selectedEmail, role: selectedRole }] });
        }
    }

    const deleteClubRole = (index) => {
        const newClubRoles = club.members.filter((_, i) => i !== index);
        setClub({ ...club, members: newClubRoles });
    }

    return (

        <Card className="" style={{ minHeight: "400px", minWidth: "600px" }}>
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-4 flex items-center justify-between gap-8">
                    <div className="w-max" style={{ minWidth: "300px" }}>
                        <Input variant="outlined" color="teal" label="Club Name" placeholder="" type="text" onChange={(e) => club.clubName = e.target.value} />

                        <Typography variant="h5" color="blue-gray" className="mt-5">
                            Add Club Members
                        </Typography>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="px-0">
                <table className="mt-3 w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {club.members.map(
                            ({ email, role }, index) => {
                                const classes = "p-4";
                                return (
                                    <tr key={email}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {email}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {role}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Tooltip content="Edit User">
                                                <IconButton variant="text">
                                                    <MinusCircleIcon className="h-5 w-5" color="red" onClick={() => { deleteClubRole(index) }} />
                                                </IconButton>
                                            </Tooltip>
                                        </td>
                                    </tr>
                                );
                            },
                        )}
                        <tr key={"addNewClubRole"}>
                            <td className="p-4 border-b border-blue-gray-50">
                                <div className="flex flex-col">
                                    <Input variant="outlined" color="teal" label="Student's Email" placeholder="" type="email" onChange={(e) => selectedEmail = e.target.value} />
                                </div>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <div className="flex flex-col">
                                    <Select variant="outlined" color="teal" label="Select Role" onChange={(e) => selectedRole = e} >
                                        <Option value="President">President</Option>
                                        <Option value="Vice President">Vice President</Option>
                                        <Option value="General Secretary">General Secretary</Option>
                                        <Option value="Member">Member</Option>
                                    </Select>
                                </div>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <Tooltip content="Add User">
                                    <IconButton variant="text" onClick={addNewClubMember}>
                                        <PlusCircleIcon className="h-5 w-5" />
                                    </IconButton>
                                </Tooltip>
                            </td>

                        </tr>
                    </tbody>
                </table>
                <div className="flex w-full mt-10 pl-10 pr-10" >
                    <Button color="black" onSubmit={createNewClub}>Create</Button>
                </div>
            </CardBody>
        </Card >
    );

}