import React from "react";

export default function Pill({ children, className }) {
  return (
    <span
      className={`px-2 rounded-full text-blue-500 bg-blue-200 align-center font-bold ${className}`}
    >
      {children}
    </span>
  );
}
