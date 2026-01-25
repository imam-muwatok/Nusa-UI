import React from "react";

const sizes = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-4",
  lg: "h-12 w-12 border-4",
  xl: "h-16 w-16 border-[6px]",
};

const growSizes = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-12 w-12",
  xl: "h-16 w-16",
};

const colors = {
  primary: "border-t-indigo-500 dark:border-t-indigo-400",
  secondary: "border-t-zinc-500 dark:border-t-zinc-400",
  success: "border-t-green-500 dark:border-t-green-400",
  danger: "border-t-red-500 dark:border-t-red-400",
  warning: "border-t-yellow-500 dark:border-t-yellow-400",
  info: "border-t-blue-500 dark:border-t-blue-400",
  light: "border-t-zinc-200 dark:border-t-zinc-700",
  dark: "border-t-zinc-900 dark:border-t-zinc-100",
  white: "border-t-white dark:border-t-zinc-900",
};

const bgColors = {
  primary: "bg-indigo-500",
  secondary: "bg-zinc-500 dark:bg-zinc-400",
  success: "bg-green-500",
  danger: "bg-red-500",
  warning: "bg-yellow-500",
  info: "bg-blue-500",
  light: "bg-zinc-200",
  dark: "bg-zinc-900 dark:bg-zinc-100",
  white: "bg-white",
};

export default function Spinner({ size = "md", color = "primary", type = "border", className = "" }) {
  if (type === "grow") {
    const sizeClass = growSizes[size] || growSizes.md;
    const colorClass = bgColors[color] || bgColors.primary;

    return (
      <div
        className={`inline-block animate-grow rounded-full opacity-0 ${sizeClass} ${colorClass} ${className}`}
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  const sizeClass = sizes[size] || sizes.md;
  const colorClass = colors[color] || colors.primary;

  return (
    <div
      className={`inline-block animate-spin rounded-full border-solid border-zinc-200 dark:border-zinc-700 ${sizeClass} ${colorClass} ${className}`}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}