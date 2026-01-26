import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

const styles = {
  primary: {
    solid: "bg-primary text-white hover:opacity-90",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-primary hover:bg-primary/10",
    gradient: "bg-gradient-primary text-white hover:opacity-90",
  },
  secondary: {
    solid: "bg-secondary text-white hover:opacity-90",
    outline: "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white",
    ghost: "text-secondary hover:bg-secondary/10",
    gradient: "bg-gradient-secondary text-white hover:opacity-90",
  },
  success: {
    solid: "bg-success text-white hover:opacity-90",
    outline: "border-2 border-success text-success hover:bg-success hover:text-white",
    ghost: "text-success hover:bg-success/10",
    gradient: "bg-gradient-success text-white hover:opacity-90",
  },
  danger: {
    solid: "bg-danger text-white hover:opacity-90",
    outline: "border-2 border-danger text-danger hover:bg-danger hover:text-white",
    ghost: "text-danger hover:bg-danger/10",
    gradient: "bg-gradient-danger text-white hover:opacity-90",
  },
  warning: {
    solid: "bg-warning text-white hover:opacity-90",
    outline: "border-2 border-warning text-warning hover:bg-warning hover:text-white",
    ghost: "text-warning hover:bg-warning/10",
    gradient: "bg-gradient-warning text-white hover:opacity-90",
  },
  info: {
    solid: "bg-info text-white hover:opacity-90",
    outline: "border-2 border-info text-info hover:bg-info hover:text-white",
    ghost: "text-info hover:bg-info/10",
    gradient: "bg-gradient-info text-white hover:opacity-90",
  },
  light: {
    solid: "bg-light text-zinc-900 hover:bg-zinc-200",
    outline: "border-2 border-zinc-300 text-zinc-500 hover:bg-zinc-100",
    ghost: "text-zinc-900 hover:bg-zinc-100",
    gradient: "bg-gradient-light text-zinc-900 hover:opacity-90",
  },
  dark: {
    solid: "bg-dark text-white hover:bg-black",
    outline: "border-2 border-dark text-dark hover:bg-dark hover:text-white dark:border-zinc-700 dark:text-zinc-300",
    ghost: "text-dark hover:bg-dark/10 dark:text-white dark:hover:bg-white/10",
    gradient: "bg-gradient-dark text-white hover:opacity-90",
  },
};

const sizes = {
  xs: "rounded-lg px-2 py-1 text-xs",
  sm: "rounded-lg px-3 py-1.5 text-sm",
  md: "rounded-xl px-5 py-2.5 text-base",
  lg: "rounded-xl px-6 py-3 text-lg",
  xl: "rounded-2xl px-8 py-4 text-xl",
  "2xl": "rounded-2xl px-10 py-5 text-2xl",
};

const iconSizes = {
  xs: "h-8 w-8 p-0 text-xs rounded-full flex items-center justify-center",
  sm: "h-9 w-9 p-0 text-sm rounded-full flex items-center justify-center",
  md: "h-11 w-11 p-0 text-base rounded-full flex items-center justify-center",
  lg: "h-12 w-12 p-0 text-lg rounded-full flex items-center justify-center",
  xl: "h-14 w-14 p-0 text-xl rounded-full flex items-center justify-center",
  "2xl": "h-16 w-16 p-0 text-2xl rounded-full flex items-center justify-center",
};

export default function Button({ children, variant = "primary", type = "solid", size = "md", className = "", iconOnly = false, onClick, ...props }) {
  const [ripples, setRipples] = useState([]);

  const colorStyle = styles[variant] || styles.primary;

  const variantClass = colorStyle[type] || colorStyle.solid;
  const sizeClass = iconOnly ? (iconSizes[size] || iconSizes.md) : (sizes[size] || sizes.md);

  const handleClick = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const newRipple = { x, y, size, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    if (onClick) onClick(e);
  };

  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => setRipples([]), 600);
      return () => clearTimeout(timer);
    }
  }, [ripples.length]);

  return (
    <button 
      className={`relative overflow-hidden font-bold transition-all ${variantClass} ${sizeClass} ${className}`} 
      onClick={handleClick}
      {...props}
    >
      <span className="relative z-10 pointer-events-none flex items-center justify-center gap-2">{children}</span>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-current opacity-25 animate-ripple pointer-events-none"
          style={{
            top: ripple.y,
            left: ripple.x,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </button>
  );
}