import React from "react";

const variants = {
  primary: {
    accent: "accent-cyan-600",
    gradient: "from-cyan-600 to-cyan-600",
    ring: "focus:ring-cyan-500/20"
  },
  secondary: {
    accent: "accent-zinc-500",
    gradient: "from-zinc-500 to-zinc-500",
    ring: "focus:ring-zinc-500/20"
  },
  success: {
    accent: "accent-green-500",
    gradient: "from-green-500 to-green-500",
    ring: "focus:ring-green-500/20"
  },
  danger: {
    accent: "accent-red-500",
    gradient: "from-red-500 to-red-500",
    ring: "focus:ring-red-500/20"
  },
  warning: {
    accent: "accent-yellow-500",
    gradient: "from-yellow-500 to-yellow-500",
    ring: "focus:ring-yellow-500/20"
  }
};

export default function Range({
  label,
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  disabled = false,
  showValue = false,
  variant = "primary",
  dual = false,
  vertical = false,
  className = "",
  ...props
}) {
  const variantStyle = variants[variant] || variants.primary;
  
  // Helper untuk mendapatkan warna background thumb dari class accent
  const getThumbColor = () => {
    if (variantStyle.accent.startsWith('accent-')) {
        return variantStyle.accent.replace('accent-', 'bg-');
    }
    return "bg-cyan-600";
  };

  if (dual) {
    const [minVal, maxVal] = Array.isArray(value) ? value : [min, max];
    const minPercent = ((minVal - min) / (max - min)) * 100;
    const maxPercent = ((maxVal - min) / (max - min)) * 100;
    const thumbColor = getThumbColor();

    const handleMinChange = (e) => {
      const val = Math.min(Number(e.target.value), maxVal - step);
      onChange([val, maxVal]);
    };

    const handleMaxChange = (e) => {
      const val = Math.max(Number(e.target.value), minVal + step);
      onChange([minVal, val]);
    };

    return (
      <div className={className}>
        {(label || showValue) && (
          <div className="flex justify-between mb-2 items-center">
            {label && <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">{label}</label>}
            {showValue && <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{minVal} - {maxVal}</span>}
          </div>
        )}
        <div className="relative w-full h-2 rounded-lg bg-zinc-200 dark:bg-zinc-700">
          <div className={`absolute h-full rounded-lg ${thumbColor}`} style={{ left: `${minPercent}%`, width: `${maxPercent - minPercent}%` }}></div>
          
          {/* Input Min */}
          <input type="range" min={min} max={max} step={step} value={minVal} onChange={handleMinChange} disabled={disabled} className={`absolute inset-0 w-full h-full appearance-none bg-transparent pointer-events-none focus:outline-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-pointer ${thumbColor} [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-none ${thumbColor}`} {...props} />
          
          {/* Input Max */}
          <input type="range" min={min} max={max} step={step} value={maxVal} onChange={handleMaxChange} disabled={disabled} className={`absolute inset-0 w-full h-full appearance-none bg-transparent pointer-events-none focus:outline-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-pointer ${thumbColor} [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-none ${thumbColor}`} {...props} />
        </div>
      </div>
    );
  }

  const percentage = ((value - min) * 100) / (max - min);

  if (vertical) {
    return (
      <div className={`${className} flex flex-col items-center`}>
        {(label || showValue) && (
          <div className="flex justify-between w-full mb-4 items-center gap-2">
            {label && <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">{label}</label>}
            {showValue && <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{value}</span>}
          </div>
        )}
        {/* Container height harus match dengan width input yang di-rotate (w-48 = 12rem = 192px) */}
        <div className="relative h-48 w-6 flex items-center justify-center">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={onChange}
            disabled={disabled}
            style={{ backgroundSize: `${percentage}% 100%` }}
            className={`absolute -rotate-90 w-48 h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer dark:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-2 bg-gradient-to-r bg-no-repeat ${variantStyle.accent} ${variantStyle.gradient} ${variantStyle.ring}`}
            {...props}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {(label || showValue) && (
        <div className="flex justify-between mb-2 items-center">
          {label && <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">{label}</label>}
          {showValue && <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{value}</span>}
        </div>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        disabled={disabled}
        style={{ backgroundSize: `${percentage}% 100%` }}
        className={`w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer dark:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-2 bg-gradient-to-r bg-no-repeat ${variantStyle.accent} ${variantStyle.gradient} ${variantStyle.ring}`}
        {...props}
      />
    </div>
  );
}