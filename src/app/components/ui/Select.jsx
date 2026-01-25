import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/outline";

// Native Select Component
export function NativeSelect({ options, className = "", ...props }) {
  return (
    <div className="relative">
      <select
        className={`w-full appearance-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 pr-10 text-sm outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white transition-all ${className}`}
        {...props}
      >
        {options.map((opt, i) => (
          <option key={i} value={opt.value || opt}>
            {opt.label || opt}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
        <ChevronDownIcon className="h-4 w-4" />
      </div>
    </div>
  );
}

// Custom Select Component
export default function Select({ options, value, onChange, placeholder = "Select an option", className = "", disabled = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = options.find(opt => (opt.value || opt) === value)?.label || options.find(opt => (opt.value || opt) === value) || placeholder;

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`flex w-full items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition-all ${
            disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
        } ${isOpen ? "border-cyan-500 ring-4 ring-cyan-500/10" : ""} dark:border-zinc-800 dark:bg-zinc-900 dark:text-white`}
      >
        <span className={!value ? "text-zinc-400" : ""}>{selectedLabel}</span>
        <ChevronDownIcon className={`h-4 w-4 text-zinc-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900 animate-in fade-in zoom-in-95 duration-100">
          <ul className="max-h-60 overflow-auto py-1">
            {options.map((opt, i) => {
                const optValue = opt.value || opt;
                const optLabel = opt.label || opt;
                const isSelected = optValue === value;

                return (
                    <li
                        key={i}
                        onClick={() => {
                            onChange(optValue);
                            setIsOpen(false);
                        }}
                        className={`flex cursor-pointer items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                            isSelected 
                            ? "bg-cyan-50 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400" 
                            : "text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800"
                        }`}
                    >
                        <span>{optLabel}</span>
                        {isSelected && <CheckIcon className="h-4 w-4" />}
                    </li>
                )
            })}
          </ul>
        </div>
      )}
    </div>
  );
}