import React from "react";

const IconCashIn = ({
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
      d="M10 11V8L15 12L10 16V13H1V11H10ZM2.4578 15H4.58152C5.76829 17.9318 8.64262 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9H2.4578C3.73207 4.94289 7.52236 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C7.52236 22 3.73207 19.0571 2.4578 15Z"
      fill={color}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
    ></path>
  </svg>
);

export default IconCashIn;
