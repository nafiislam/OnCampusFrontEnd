import {
  ErrorAnimation,
  LoadingAnimation,
  SuccessAnimation,
  WarningAnimation,
} from "@/components/Animation";
import { Button } from "@material-tailwind/react";
import { useState } from "react";

interface LocationCheckProps {
    // Define props here
    startDate: String|null;
    finishDate: String|null;
    offlinelocation: String|undefined;
}

function LocationCheck(props: LocationCheckProps) {
  const [buttonState, setButtonState] = useState(4); // 0 = "idle", 1 = "input required", 2 = "loading", 3 = "success", 4 = "error"
  return (
    <div className="flex flex-row gap-20">
        {props.startDate}
        {props.finishDate}
        {props.offlinelocation}
      <Button className="w-1/3" onClick={() => setButtonState(() => {return (buttonState + 1) % 5;})}>Check Location Availability</Button>

      {buttonState === 0 && <div className=""></div>}
      {buttonState === 1 && (
        <div className="flex flex-row gap-4">
          <ErrorAnimation />
          <p className="text-red-500 mt-3">Please Enter Location, StartDate, FinishDate first</p>
        </div>
      )}
      {buttonState === 2 && (
        <div className="flex flex-row gap-4">
          <LoadingAnimation />
          <p className=" text-teal-700 mt-3">
            Checking Location Availability...
          </p>
        </div>
      )}
      {buttonState === 3 && (
        <div className="flex flex-row gap-4">
          <SuccessAnimation />
          <p className="text-green-500 mt-3">
            No Conflict in Location Detected
          </p>
        </div>
      )}
      {buttonState === 4 && (
        <div className="flex flex-row gap-4">
          <WarningAnimation />
          <p className=" text-orange-600 mt-3">Conflict in Location Detected</p>
        </div>
      )}
    </div>
  );
}

export default LocationCheck;
