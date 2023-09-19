import React from "react";

const IconGoblet = ({
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
      d="M11 19V13.8889L3 5V3H21V5L13 13.8889V19H18V21H6V19H11ZM7.49073 7H16.5093L18.3093 5H5.69072L7.49073 7ZM9.29072 9L12 12.0103L14.7093 9H9.29072Z"
      fill={color}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
    ></path>
  </svg>
);

export default IconGoblet;
