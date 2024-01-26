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
    Button
} from "@material-tailwind/react";



export default function ClubRoleComponent({ state, setState, clubRoles, setClubRoles }:
    { state: number, setState: React.Dispatch<React.SetStateAction<number>>, clubRoles: [], setClubRoles: React.Dispatch<React.SetStateAction<any>> }) {
    let selectedClub = "";
    let selectedRole = "";

    const addNewClubRole = () => {
        if (selectedClub === "" || selectedRole === "") {
            return;
        }
        console.log(selectedClub, selectedRole);
        setClubRoles([...clubRoles, { clubName: selectedClub, role: selectedRole }]);
    }

    const createNewStudent = async () => {
        setState(3);
    }

    const deleteClubRole = (index: number) => {
        const newClubRoles = clubRoles.filter((_, i) => i !== index);
        setClubRoles(newClubRoles);
    }

    const goBack = () => {
        setState(1);
    }

    const TABLE_HEAD = ["Club Name", "Role", ""];

    return (
        <Card className="" style={{ minHeight: "400px", minWidth: "600px" }}>
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-4 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Add Club Roles
                        </Typography>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
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
                        {clubRoles.map(
                            ({ clubName, role }, index) => {
                                const isLast = index === clubRoles.length - 1;
                                const classes = "p-4";
                                return (
                                    <tr key={clubName}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {clubName}
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
                                    <Select variant="outlined" color="teal" label="Select Club" onChange={(e) => selectedClub = e}>
                                        <Option value="BUET Gaming Club">BUET Gaming Club</Option>
                                        <Option value="Buet Chess Club">Buet Chess Club</Option>

                                    </Select>
                                </div>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <div className="flex flex-col">
                                    <Select variant="outlined" color="teal" label="Select Role" onChange={(e) => selectedRole = e}>
                                        <Option value="President">President</Option>
                                        <Option value="Vice President">Vice President</Option>
                                        <Option value="General Secretary">General Secretary</Option>
                                        <Option value="Member">Member</Option>
                                    </Select>
                                </div>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <Tooltip content="Add User">
                                    <IconButton variant="text" onClick={addNewClubRole}>
                                        <PlusCircleIcon className="h-5 w-5" />
                                    </IconButton>
                                </Tooltip>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex w-full mt-10 justify-between pl-10 pr-10" >
                    <Button color="black" onClick={goBack}>Go Back</Button>
                    <Button color="black" onClick={createNewStudent}>Create</Button>
                </div>
            </CardBody>
        </Card >
    );

}