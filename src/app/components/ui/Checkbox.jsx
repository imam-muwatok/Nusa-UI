import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const variants = {
  primary: "peer-checked:border-cyan-500 peer-checked:bg-cyan-500 peer-focus:ring-cyan-500/20 dark:peer-checked:border-cyan-400 dark:peer-checked:bg-cyan-400",
  success: "peer-checked:border-green-500 peer-checked:bg-green-500 peer-focus:ring-green-500/20 dark:peer-checked:border-green-400 dark:peer-checked:bg-green-400",
  danger: "peer-checked:border-red-500 peer-checked:bg-red-500 peer-focus:ring-red-500/20 dark:peer-checked:border-red-400 dark:peer-checked:bg-red-400",
  warning: "peer-checked:border-yellow-500 peer-checked:bg-yellow-500 peer-focus:ring-yellow-500/20 dark:peer-checked:border-yellow-400 dark:peer-checked:bg-yellow-400",
};

export function Checkbox({ label, checked, onChange, disabled = false, variant = "primary", className = "", ...props }) {
  const variantClass = variants[variant] || variants.primary;

  return (
    <label className={`flex items-center gap-3 cursor-pointer group ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}>
      <div className="relative flex items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        <div className={`h-5 w-5 rounded-md border-2 border-zinc-300 bg-white transition-all peer-focus:ring-4 dark:border-zinc-600 dark:bg-zinc-800 ${variantClass}`}></div>
        <CheckIcon className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100" strokeWidth={3} />
      </div>
      {label && <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{label}</span>}
    </label>
  );
}

export function Radio({ label, checked, onChange, name, disabled = false, variant = "primary", className = "", ...props }) {
  const variantClass = variants[variant] || variants.primary;

  return (
    <label className={`flex items-center gap-3 cursor-pointer group ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}>
      <div className="relative flex items-center">
        <input
          type="radio"
          name={name}
          className="peer sr-only"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        <div className={`h-5 w-5 rounded-full border-2 border-zinc-300 bg-white transition-all peer-focus:ring-4 dark:border-zinc-600 dark:bg-zinc-800 ${variantClass}`}></div>
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 transition-transform duration-200 scale-0 peer-checked:opacity-100 peer-checked:scale-100"></div>
      </div>
      {label && <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{label}</span>}
    </label>
  );
}