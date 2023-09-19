import React from "react";

const SidebarMenuList = ({ items }) => {
  return (
    <div className="menu-item-collapse">
      <div className="min-h-0">
        {items &&
          items.map((item) => {
            return item.icon ? (
              <label className="menu-item ml-6" key={item.id}>
                {item.icon} {item.name}
              </label>
            ) : (
              <label className="menu-item ml-6" key={item.id}>
                &#8226; {item.name}
              </label>
            );
          })}
      </div>
    </div>
  );
};

export default SidebarMenuList;
