import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Accordion({ items, alwaysOpen = false, variant = "default", className = "" }) {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleIndex = (index) => {
    setOpenIndexes((prev) => {
      if (alwaysOpen) {
        return { ...prev, [index]: !prev[index] };
      } else {
        // Jika tidak alwaysOpen, tutup yang lain saat membuka yang baru
        return prev[index] ? {} : { [index]: true };
      }
    });
  };

  const baseStyles = variant === "flush" 
    ? "divide-y divide-zinc-200 dark:divide-zinc-800 border-b border-zinc-200 dark:border-zinc-800"
    : "divide-y divide-zinc-200 rounded-xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900";

  return (
    <div className={`${baseStyles} ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndexes[index];
        return (
          <div key={index} className="group">
            <button
              onClick={() => toggleIndex(index)}
              className={`flex w-full items-center justify-between p-4 text-left font-medium transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50 ${isOpen ? 'text-cyan-600 dark:text-cyan-400' : 'text-zinc-900 dark:text-white'}`}
            >
              <div className="flex items-center gap-3">
                {item.icon && <span className="shrink-0">{item.icon}</span>}
                <span>{item.title}</span>
              </div>
              <ChevronDownIcon className={`h-5 w-5 text-zinc-500 transition-transform duration-300 ${isOpen ? "-rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="p-4 pt-0 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed border-t border-transparent">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}