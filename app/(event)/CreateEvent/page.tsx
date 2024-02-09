"use client";
import { eventTypes } from "@/components/Events/DummyTypes";

import Cultural from "./Cultural";
import WokrshopSeminar from "./WokrshopSeminar";

import {
  Option,
  Select,
  Typography as Typography1,
} from "@material-tailwind/react";
import { useState } from "react";
import Entertainment from "./Entertainment";
import Sports from "./Sports";
import Competition from "./Competition";

function CreateEvent() {
  const [selectedOption, setSelectedOption] = useState<string | undefined>("");

  const handleChange = (selected: string | undefined) => {
    setSelectedOption(selected);
    console.log(selected);
  };

  return (
    <div className="flex flx-row">
      <div className="w-3/4">
        <div className="w-5/6 flex flex-row gap-0">
          <Typography1 placeholder={""} className="m-4">
            Type of Event
          </Typography1>
          <div className="w-1/4 m-4">
            <Select
              size="md"
              className=""
              label="Select Type"
              placeholder={undefined}
              value={selectedOption}
              onChange={handleChange}
            >
              {/* <Option value="">Nothing</Option> */}
              {eventTypes.map((type) => (
                <Option key={type.id} value={type.name}>
                  {type.name}
                </Option>
              ))}
            </Select>
          </div>
        </div>
        <div className="mt-4">
          {selectedOption && (
            <div className="w-5/6">
              <div className="p-4 my-8 border border-gray-300 rounded-md">
                {selectedOption === "Workshop" ? (
                  <WokrshopSeminar />
                ) : selectedOption === "Seminar" ? (
                  <WokrshopSeminar />
                ) : selectedOption === "Competitions" ? (
                  <Competition />
                ) : selectedOption === "Sports" ? (
                  <Sports />
                ) : selectedOption === "Shapa-day" ? (
                  <Entertainment />
                ) : selectedOption === "Cultural" ? (
                  <Cultural timeTime="time" />
                ) : selectedOption === "Picnic" ? (
                  <Cultural timeTime="time" />
                ) : selectedOption === "Tour" ? (
                  <Cultural timeTime="Day" />
                ) : selectedOption === "Flashmobs" ? (
                  <Entertainment />
                ) : selectedOption === "Rag-Concert" ? (
                  <Cultural timeTime="time" />
                ) : (
                  <h1>Nothing</h1>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-1/4">sesfe</div>
    </div>
  );
}

export default CreateEvent;
