import React from "react";
import {
  IconVehicleAcura,
  IconVehicleAlfaRomeo,
  IconVehicleAudi,
  IconVehicleBMW,
} from "../icons";

const DashboardVehicleCard = () => (
  <div className="grid grid-col-1 w-full gap-2">
    <div className="alert text-left bg-purple-200">
      <IconVehicleAcura />
      <div className="flex flex-col">
        <span>Title</span>
        <span className="text-content2">Long sample text</span>
      </div>
    </div>

    <div className="alert text-left bg-blue-200">
      <IconVehicleAlfaRomeo />
      <div className="flex flex-col">
        <span>Title</span>
        <span className="text-content2">Long sample text</span>
      </div>
    </div>

    <div className="alert text-left bg-amber-200">
      <IconVehicleAudi />
      <div className="flex flex-col">
        <span>Title</span>
        <span className="text-content2">Long sample text</span>
      </div>
    </div>
    <div className="alert text-left ">
      <IconVehicleBMW />
      <div className="flex flex-col">
        <span>Title</span>
        <span className="text-content2">Long sample text</span>
      </div>
    </div>
  </div>
);

export default DashboardVehicleCard;
