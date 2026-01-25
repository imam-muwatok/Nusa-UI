import React, { useState, useRef, useEffect } from "react";

export default function Tooltip({ children, content, position = "top", className = "", delay = 0, interactive = false, showArrow = true, arrowClassName = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    if (delay > 0) {
      if (!isVisible) {
        timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
      }
    } else {
      setIsVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    if (interactive) {
      closeTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 150);
    } else {
      setIsVisible(false);
    }
  };

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrowClasses = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-zinc-900 dark:border-t-white border-x-transparent border-b-transparent border-[5px]",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-zinc-900 dark:border-b-white border-x-transparent border-t-transparent border-[5px]",
    left: "left-full top-1/2 -translate-y-1/2 border-l-zinc-900 dark:border-l-white border-y-transparent border-r-transparent border-[5px]",
    right: "right-full top-1/2 -translate-y-1/2 border-r-zinc-900 dark:border-r-white border-y-transparent border-l-transparent border-[5px]",
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div className={`absolute z-50 whitespace-nowrap rounded bg-zinc-900 px-2 py-1 text-xs text-white shadow-lg dark:bg-white dark:text-zinc-900 ${positionClasses[position]} ${className} animate-in fade-in zoom-in-95 duration-200`}>
          {content}
          {showArrow && <div className={`absolute h-0 w-0 ${arrowClasses[position]} ${arrowClassName}`}></div>}
        </div>
      )}
    </div>
  );
}