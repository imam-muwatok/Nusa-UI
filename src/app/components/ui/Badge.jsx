import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const styles = {
  primary: {
    solid: "bg-primary text-white",
    outline: "border border-primary text-primary",
    soft: "bg-primary/15 text-primary",
    gradient: "bg-gradient-primary text-white",
  },
  secondary: {
    solid: "bg-secondary text-white",
    outline: "border border-secondary text-secondary",
    soft: "bg-secondary/15 text-secondary",
    gradient: "bg-gradient-secondary text-white",
  },
  success: {
    solid: "bg-success text-white",
    outline: "border border-success text-success",
    soft: "bg-success/15 text-success",
    gradient: "bg-gradient-success text-white",
  },
  danger: {
    solid: "bg-danger text-white",
    outline: "border border-danger text-danger",
    soft: "bg-danger/15 text-danger",
    gradient: "bg-gradient-danger text-white",
  },
  warning: {
    solid: "bg-warning text-white",
    outline: "border border-warning text-warning",
    soft: "bg-warning/15 text-warning",
    gradient: "bg-gradient-warning text-white",
  },
  info: {
    solid: "bg-info text-white",
    outline: "border border-info text-info",
    soft: "bg-info/15 text-info",
    gradient: "bg-gradient-info text-white",
  },
  light: {
    solid: "bg-light text-zinc-900",
    outline: "border border-zinc-300 text-zinc-500",
    soft: "bg-zinc-100 text-zinc-600",
    gradient: "bg-gradient-light text-zinc-900",
  },
  dark: {
    solid: "bg-dark text-white",
    outline: "border border-dark text-dark dark:border-zinc-400 dark:text-zinc-300",
    soft: "bg-dark/15 text-dark dark:bg-white/10 dark:text-white",
    gradient: "bg-gradient-dark text-white",
  },
};

const sizes = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-0.5 text-sm",
  lg: "px-3 py-1 text-base",
};

const iconSizes = {
  sm: "w-5 h-5 text-xs p-0",
  md: "w-6 h-6 text-sm p-0",
  lg: "w-8 h-8 text-base p-0",
};

export default function Badge({ children, variant = "primary", type = "solid", size = "sm", className = "", pulse = false, ping = false, onClose, icon, rightIcon, iconOnly = false }) {
  const colorStyle = styles[variant] || styles.primary;
  const variantClass = colorStyle[type] || colorStyle.solid;
  const sizeClass = iconOnly ? (iconSizes[size] || iconSizes.sm) : (sizes[size] || sizes.sm);

  return (
    <span className={`relative inline-flex items-center justify-center font-bold transition-colors rounded-full border border-transparent ${variantClass} ${sizeClass} ${pulse ? 'animate-pulse' : ''} ${className}`}>
      {ping && (
        <span className={`absolute inset-0 rounded-full opacity-75 animate-ping-soft ${variantClass}`}></span>
      )}
      <span className={`relative flex items-center ${iconOnly ? 'justify-center' : 'gap-1.5'}`}>
        {!iconOnly && icon && <span className="shrink-0 flex">{icon}</span>}
        <span>{children}</span>
        {!iconOnly && rightIcon && <span className="shrink-0 flex">{rightIcon}</span>}
        {!iconOnly && onClose && (
          <button onClick={onClose} className="hover:opacity-60 transition-opacity focus:outline-none">
            <XMarkIcon className="h-3 w-3" strokeWidth={3} />
          </button>
        )}
      </span>
    </span>
  );
}