import React, { useState } from "react";

const variants = {
  primary: "peer-checked:bg-cyan-500 peer-focus:ring-cyan-500/20 dark:peer-focus:ring-cyan-800/20",
  success: "peer-checked:bg-green-500 peer-focus:ring-green-500/20 dark:peer-focus:ring-green-800/20",
  danger: "peer-checked:bg-red-500 peer-focus:ring-red-500/20 dark:peer-focus:ring-red-800/20",
  warning: "peer-checked:bg-yellow-500 peer-focus:ring-yellow-500/20 dark:peer-focus:ring-yellow-800/20",
};

const iconColors = {
  primary: "text-cyan-600",
  success: "text-green-600",
  danger: "text-red-600",
  warning: "text-yellow-600",
};

export default function Switch({ checked, onChange, label, disabled = false, size = "md", variant = "primary", onIcon, offIcon, className = "", checkedClass = "", ...props }) {
  const sizeConfig = {
    xxs: { track: "w-6 h-3.5", handle: "h-2.5 w-2.5 top-[2px] left-[2px]" },
    xs: { track: "w-7 h-4", handle: "h-3 w-3 top-[2px] left-[2px]" },
    sm: { track: "w-9 h-5", handle: "h-4 w-4 top-[2px] left-[2px]" },
    md: { track: "w-11 h-6", handle: "h-5 w-5 top-[2px] left-[2px]" },
    lg: { track: "w-14 h-7", handle: "h-6 w-6 top-[2px] left-[2px]" },
    xl: { track: "w-16 h-8", handle: "h-7 w-7 top-[2px] left-[2px]" },
    "2xl": { track: "w-20 h-10", handle: "h-9 w-9 top-[2px] left-[2px]" },
  };

  const config = sizeConfig[size] || sizeConfig.md;
  const variantClass = checkedClass || variants[variant] || variants.primary;
  const iconColorClass = iconColors[variant] || iconColors.primary;
  
  const [isShaking, setIsShaking] = useState(false);

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <label onClick={handleClick} className={`inline-flex items-center cursor-pointer group ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${isShaking ? "animate-shake" : ""} ${className}`}>
      <div className="relative">
        <input 
          type="checkbox" 
          className="sr-only peer" 
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        <div className={`bg-zinc-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-zinc-700 transition-colors ${config.track} ${variantClass}`}></div>
        <div className={`absolute bg-white border border-zinc-300 rounded-full transition-all flex items-center justify-center dark:border-zinc-600 peer-checked:translate-x-full rtl:peer-checked:-translate-x-full peer-checked:border-white ${config.handle}`}>
            {checked && onIcon ? (
                <span className={`flex items-center justify-center w-full h-full ${size === 'sm' ? 'p-0.5' : 'p-1'} ${iconColorClass}`}>
                    {onIcon}
                </span>
            ) : null}
            {!checked && offIcon ? (
                <span className={`flex items-center justify-center w-full h-full ${size === 'sm' ? 'p-0.5' : 'p-1'} text-zinc-400`}>
                    {offIcon}
                </span>
            ) : null}
        </div>
      </div>
      {label && <span className="ms-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{label}</span>}
    </label>
  );
}