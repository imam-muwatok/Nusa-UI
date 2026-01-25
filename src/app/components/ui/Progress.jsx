import React from "react";

const sizes = {
  sm: "h-1.5",
  md: "h-2.5",
  lg: "h-4",
  xl: "h-6",
};

const colors = {
  primary: "bg-cyan-600 dark:bg-cyan-500",
  secondary: "bg-zinc-500 dark:bg-zinc-400",
  success: "bg-green-500",
  danger: "bg-red-500",
  warning: "bg-yellow-500",
  info: "bg-blue-500",
  dark: "bg-zinc-800 dark:bg-zinc-200",
};

export default function Progress({
  value = 0,
  max = 100,
  label,
  showValue = false,
  size = "md",
  color = "primary",
  className = "",
}) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const sizeClass = sizes[size] || sizes.md;
  const colorClass = colors[color] || colors.primary;

  return (
    <div className={`w-full ${className}`}>
      {(label || showValue) && (
        <div className="flex justify-between mb-1">
          {label && <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{label}</span>}
          {showValue && <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{Math.round(percentage)}%</span>}
        </div>
      )}
      <div className={`w-full bg-zinc-200 rounded-full dark:bg-zinc-700 overflow-hidden ${sizeClass}`}>
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${colorClass}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}