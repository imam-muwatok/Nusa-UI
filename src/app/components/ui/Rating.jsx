import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";

export default function Rating({
  max = 5,
  value = 0,
  onChange,
  readOnly = false,
  allowHalf = false,
  size = "md",
  className = "",
  icon: Icon = StarIcon,
  emptyIcon: EmptyIcon = StarIconOutline,
  activeColor = "text-yellow-400",
  count,
}) {
  const [hoverValue, setHoverValue] = useState(0);

  const sizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-10 w-10",
  };

  const iconSize = sizes[size] || sizes.md;

  const handleMouseMove = (e, index) => {
    if (!readOnly) {
      if (allowHalf) {
        const { left, width } = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - left) / width;
        setHoverValue(percent <= 0.5 ? index - 0.5 : index);
      } else {
        setHoverValue(index);
      }
    }
  };

  const handleMouseLeave = () => {
    if (!readOnly) {
      setHoverValue(0);
    }
  };

  const handleClick = (e, index) => {
    if (!readOnly && onChange) {
      if (allowHalf) {
        const { left, width } = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - left) / width;
        onChange(percent <= 0.5 ? index - 0.5 : index);
      } else {
        onChange(index);
      }
    }
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {[...Array(max)].map((_, index) => {
        const ratingValue = index + 1;
        const isFilled = (hoverValue || value) >= ratingValue;
        const isHalf = (hoverValue || value) >= ratingValue - 0.5 && (hoverValue || value) < ratingValue;

        return (
          <button
            key={index}
            type="button"
            className={`${readOnly ? "cursor-default" : "cursor-pointer"} focus:outline-none transition-transform ${!readOnly && "hover:scale-110"} relative`}
            onMouseMove={(e) => handleMouseMove(e, ratingValue)}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => handleClick(e, ratingValue)}
            disabled={readOnly}
          >
            {isFilled ? (
              <Icon className={`${iconSize} ${activeColor}`} />
            ) : isHalf ? (
              <div className="relative">
                <EmptyIcon className={`${iconSize} text-zinc-300 dark:text-zinc-600`} />
                <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
                  <Icon className={`${iconSize} ${activeColor}`} />
                </div>
              </div>
            ) : (
              <EmptyIcon className={`${iconSize} text-zinc-300 dark:text-zinc-600`} />
            )}
          </button>
        );
      })}
      {count !== undefined && (
        <span className="ml-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          ({count})
        </span>
      )}
    </div>
  );
}