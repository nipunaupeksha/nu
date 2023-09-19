import React from "react";

const IconEdit = ({
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
      d="M6.41421 15.89L16.5563 5.74786L15.1421 4.33365L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6474L14.435 2.21233C14.8256 1.8218 15.4587 1.8218 15.8492 2.21233L18.6777 5.04075C19.0682 5.43128 19.0682 6.06444 18.6777 6.45497L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z"
      fill={color}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
    ></path>
  </svg>
);

export default IconEdit;
