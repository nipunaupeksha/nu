import React from "react";

const IconMenu = ({
  color = "#000",
  strokeWidth = 2,
  className = "h-5 w-5 opacity-75",
  strokeLinecap = "round",
  strokeLinejoin = "round",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    strokeWidth={strokeWidth}
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path
      d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"
      fill={color}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
    ></path>
  </svg>
);

export default IconMenu;
