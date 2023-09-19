import React from "react";

const IconLogo = ({ tailwindStyles }) => (
  <svg
    fill="none"
    height="45"
    viewBox="0 0 32 32"
    width="45"
    xmlns="http://www.w3.org/2000/svg"
    className={`border border-solid rounded-full border-black ${tailwindStyles}`}
  >
    <rect height="100%" rx="16" width="100%"></rect>
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    ></path>
  </svg>
);

export default IconLogo;
