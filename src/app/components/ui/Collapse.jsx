import React from "react";

export default function Collapse({ isOpen, children, className = "" }) {
  return (
    <div
      className={`grid transition-all duration-300 ease-in-out ${
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      } ${className}`}
    >
      <div className="overflow-hidden min-h-0">
        {children}
      </div>
    </div>
  );
}