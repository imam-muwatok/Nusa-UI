import React, { useState, useRef, useEffect } from "react";

export default function Dropdown({ trigger, children, align = "left", className = "", triggerMode = "click" }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // Menutup dropdown saat klik di luar elemen
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (triggerMode === 'click' && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [triggerMode]);

  const handleMouseEnter = () => {
    if (triggerMode === 'hover') {
      clearTimeout(timeoutRef.current);
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (triggerMode === 'hover') {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 200); // Delay to allow moving cursor to dropdown
    }
  };

  const handleClick = () => {
    if (triggerMode === 'click') {
      setIsOpen(!isOpen);
    }
  };

  const alignmentClasses = align === "right" ? "right-0" : "left-0";

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div onClick={handleClick} className="inline-block">
        {trigger}
      </div>

      {isOpen && (
        <div 
            className={`absolute z-50 mt-2 w-56 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-zinc-900 dark:ring-zinc-800 ${alignmentClasses} animate-in fade-in zoom-in-95 duration-150`}
        >
          <div className="py-1" role="menu" aria-orientation="vertical">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export function DropdownItem({ children, onClick, icon, className = "", disabled = false }) {
    return (
        <button
            onClick={(e) => {
                if (disabled) return;
                if (onClick) onClick(e);
            }}
            disabled={disabled}
            className={`flex w-full items-center gap-2 px-4 py-2 text-sm text-left transition-colors ${
                disabled 
                ? "cursor-not-allowed opacity-50 text-zinc-400" 
                : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
            } ${className}`}
            role="menuitem"
        >
            {icon && <span className="h-4 w-4 shrink-0">{icon}</span>}
            {children}
        </button>
    )
}

export function DropdownDivider() {
    return <div className="my-1 h-px bg-zinc-200 dark:bg-zinc-800" />
}