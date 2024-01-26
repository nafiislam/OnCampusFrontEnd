import { Input, Select, Option, Button } from "@material-tailwind/react";
import React from "react";

export default function StudentInformationComponent({ state, setState, studentInfo, setStudentInfo }: { state: number, setState: React.Dispatch<React.SetStateAction<number>>, studentInfo: any, setStudentInfo: any }) {

    const nextButtonClick = (e) => {
        e.preventDefault()
        // console.log(newStudentInfo);
        setStudentInfo(newStudentInfo);
        setState(2);
    }

    const newStudentInfo = {
        name: "",
        department: "",
        batch: "",
        session: "",
        id: "",
        meritPosition: -1,
    }

    return (
        <div className="ml-20">
            <form onSubmit={nextButtonClick}>
                <div className="flex w-72 flex-col gap-6">
                    <Input variant="outlined" color="teal" label="Student's Name" placeholder="" type="text" onChange={(e) => newStudentInfo.name = e.target.value} required />
                    <Select variant="outlined" color="teal" label="Select Department" onChange={(e) => { newStudentInfo.department = e }} >
                        <Option value="cse">Computer Science & Engineering</Option>
                        <Option value="me">Mechanical Engineering</Option>
                        <Option value="ce">Civil Engineering</Option>
                        <Option value="urp">Urban and Regional Planning</Option>
                        <Option value="bme">Biomedical Engineering</Option>
                        <Option value="ipe">Industrial and Production Engineering</Option>
                        <Option value="name">Naval Architecture and Marine Engineering</Option>
                        <Option value="wre">Water Resource Engineering</Option>
                        <Option value="mme">Materials and Metallurgical Engineering</Option>
                        <Option value="che">Chemical Engineering</Option>
                        <Option value="nce">Nanomaterials and Ceramic Engineering</Option>
                        <Option value="arch">Architecture</Option>
                        <Option value="eee">Electrical & Electronics Engineering</Option>
                    </Select>

                    <Select variant="outlined" color="teal" label="Select Batch" onChange={(e) => { newStudentInfo.batch = e }}>
                        <Option value="2022">2022</Option>
                        <Option value="2021">2021</Option>
                        <Option value="2020">2020</Option>
                        <Option value="2019">2019</Option>
                        <Option value="2018">2018</Option>
                    </Select>

                    <Select variant="outlined" color="teal" label="Select Session" onChange={(e) => { newStudentInfo.session = e }}>
                        <Option value="2021-2022">2021 - 2022</Option>
                        <Option value="2020-2021">2020 - 2021</Option>
                        <Option value="2019-2020">2019 - 2020</Option>
                        <Option value="2018-2019">2018 - 2019</Option>
                    </Select>

                    <Input variant="outlined" color="teal" label="Student's ID" placeholder="" type="number" onChange={(e) => newStudentInfo.id = e.target.value} required />
                    <Input variant="outlined" color="teal" label="Student's merit position" placeholder="" type="number" onChange={(e) => newStudentInfo.meritPosition = parseInt(e.target.value, 10)} required />

                </div>

                <div className="flex w-max gap-4 mt-10" >
                    <Button type="submit" color="black" >Next</Button>
                </div>
            </form>
        </div>
    )
}