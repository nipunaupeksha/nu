import React from "react";

const DashboardCategoryCard = ({
  cardColor = "bg-violet-200",
  icon,
  title,
  value,
}) => (
  <div className={`card h-40 rounded-lg ${cardColor}`}>
    <div className="card-body p-0">
      <h2 className="card-header">
        <div className="rounded-full border-black border-[1px] p-1 bg-slate-100">
          {icon}
        </div>
      </h2>
      <h6 className="text-left text-sm">{title}</h6>
      <div className="card-footer">
        <button className="text-xl">{value}</button>
      </div>
    </div>
  </div>
);

export default DashboardCategoryCard;
