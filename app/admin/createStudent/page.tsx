"use client";
import React, { useEffect } from "react";
import StudentInformationComponent from "./studentInfo";
import ClubRoleComponent from "./clubRoles";

import { useState } from 'react';
import createStudent from "@/server_actions/createStudent";

export default function CreateStudentPage() {
  const [state, setState] = useState(1);
  const [clubRoles, setClubRoles] = useState([]); // [clubName, role]
  const [studentInfo, setStudentInfo] = useState({ name: "", id: "", department: "", batch: "", session: "" });
  const [result, setResult] = useState("");

  useEffect(() => {
    if (state === 3) {
      async function ff() {
        try {
          // console.log(clubRoles)
          const newStudentInfo = { ...studentInfo, clubRoles: clubRoles };
          const response = await createStudent(newStudentInfo);

          alert(response.message)

        } catch (error) {
          alert("Error occurred while creating student")
        } finally {
          setState(1);
          setClubRoles([]);
          setStudentInfo({ name: "", id: "", department: "", batch: "", session: "" });
        }
      }
      ff();
    }
  }, [state]);

  return (
    <>
      {state === 1 && (
        // Render content when state is 1
        <StudentInformationComponent
          state={state}
          setState={setState}
          studentInfo={studentInfo}
          setStudentInfo={setStudentInfo}
        />
      )}
      {state === 2 && (
        // Render content when state is 2
        <ClubRoleComponent
          state={state}
          setState={setState}
          clubRoles={clubRoles}
          setClubRoles={setClubRoles}
        />
      )}
      {state === 3 && (
        // Render content when state is 3
        <div></div>
      )}
    </>
  )
}


