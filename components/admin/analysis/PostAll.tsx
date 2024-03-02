"use client";
import React, { use, useEffect } from "react";

import {
  Textarea,
  Button,
  IconButton,
  Card,
  Input,
  Checkbox,
  Typography,
  Select,
  Option,
  Alert,
  Radio,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";

import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Creations = ({mapper}:{mapper:any}) => {
    console.log(mapper);
  const [analysisType, setAnalysisType] = React.useState("");

  const [likedByKeys, setLikedByKeys] = React.useState([]);
  const [savedByKeys, setSavedByKeys] = React.useState([]);
  const [viewedByKeys, setViewedByKeys] = React.useState([]);
  const [reportedByKeys, setReportedByKeys] = React.useState([]);
  const [likedByValues, setLikedByValues] = React.useState([]);
  const [savedByValues, setSavedByValues] = React.useState([]);
  const [viewedByValues, setViewedByValues] = React.useState([]);
  const [reportedByValues, setReportedByValues] = React.useState([]);

  const likedByConfig = {
    type: "pie",
    width: 280,
    height: 280,
    series: [44, 55, 13, 43, 22],
    labels: ["Apple", "Mango", "Orange", "Watermelon", "Watermelon"],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: true,
      },
      colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
      legend: {
        show: false,
      },
    },
  };

  useEffect(() => {
    if (analysisType === "") return;
    if (analysisType === "Per tag") {
    } else if (analysisType === "Per type") {
    } else if (analysisType === "Per type tag") {
    }
  }, [analysisType]);

  return (
    <>
      <div className="flex items-center justify-center my-6">
        <Select
          value={analysisType}
          onChange={(e) => {
            setAnalysisType(e ?? "");
          }}
          variant="static"
          label="Select type:"
        >
          <Option value="Per tag">Per tag</Option>
          <Option value="Per type">Per type</Option>
          <Option value="Per type tag">Per type tag</Option>
        </Select>
      </div>
      {analysisType != "" ? (
        <>
          <Card>
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
            >
              <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
                <Square3Stack3DIcon className="h-6 w-6" />
              </div>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Pie Chart
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="max-w-sm font-normal"
                >
                  Visualize your data in a simple way using the
                  @material-tailwind/react chart plugin.
                </Typography>
              </div>
            </CardHeader>
            <CardBody className="mt-4 grid place-items-center px-2">
              <Chart {...likedByConfig} />
            </CardBody>
          </Card>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Creations;
