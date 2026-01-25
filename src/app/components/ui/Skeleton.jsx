import React from "react";

export default function Skeleton({ className = "", variant = "text", width, height, animation = "pulse", ...props }) {
  let animationClass = "animate-pulse";
  if (animation === "none") {
    animationClass = "";
  }

  const baseClasses = `bg-zinc-200 dark:bg-zinc-800 ${animationClass}`;

  const variants = {
    text: "rounded-md",
    circular: "rounded-full",
    rectangular: "rounded-xl",
  };

  const style = {};
  if (width) style.width = width;
  if (height) style.height = height;

  return (
    <div 
      className={`${baseClasses} ${variants[variant]} ${className}`} 
      style={style}
      {...props}
    />
  );
}