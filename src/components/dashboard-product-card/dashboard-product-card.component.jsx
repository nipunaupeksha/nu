import React from "react";
import {
  IconSoup,
  IconCake,
  IconSetMenu,
  IconBeer,
  IconBurger,
} from "../icons";

const DashboardProductCard = () => (
  <div className="grid grid-col-1 w-full gap-2">
    <div className="alert text-left bg-purple-200">
      <IconBurger />
      <div className="flex flex-col">
        <span>Title</span>
        <span className="text-content2">Long sample text</span>
      </div>
    </div>

    <div className="alert text-left bg-blue-200">
      <IconSoup />
      <div className="flex flex-col">
        <span>Title</span>
        <span className="text-content2">Long sample text</span>
      </div>
    </div>

    <div className="alert text-left bg-amber-200">
      <IconCake />
      <div className="flex flex-col">
        <span>Title</span>
        <span className="text-content2">Long sample text</span>
      </div>
    </div>
    <div className="alert text-left ">
      <IconBeer />
      <div className="flex flex-col">
        <span>Title</span>
        <span className="text-content2">Long sample text</span>
      </div>
    </div>
  </div>
);

export default DashboardProductCard;
