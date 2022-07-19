import React from "react";

const Button = ({ onClick, className = "", children, bgColor = "primary", ...props }) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      onClick={onClick}
      className={`py-3 px-6  rounded-lg  font-bold text-xl w-full mt-auto ${bgClassName} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
