import React, { useState, useRef, useEffect } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

export default function TimePicker({
  label,
  value,
  onChange,
  disabled = false,
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Default to 00:00 if no value, but don't display it in input if value is empty
  const [selectedHour, selectedMinute] = value ? value.split(":") : ["00", "00"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, "0"));
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));

  const handleHourSelect = (h) => {
    onChange(`${h}:${selectedMinute}`);
  };

  const handleMinuteSelect = (m) => {
    onChange(`${selectedHour}:${m}`);
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {label && <label className="mb-2 block text-sm font-bold text-zinc-700 dark:text-zinc-300">{label}</label>}
      
      <div className="relative">
        <input
          type="text"
          readOnly
          value={value || ""}
          placeholder="--:--"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          className={`w-full cursor-pointer rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 pl-10 text-sm outline-none transition-all focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
        />
        <ClockIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-2 flex w-48 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900 animate-in fade-in zoom-in-95 duration-100">
          {/* Hours Column */}
          <div className="flex-1 h-64 overflow-y-auto border-r border-zinc-100 dark:border-zinc-800">
            <div className="px-2 py-2 text-xs font-bold text-center text-zinc-400 bg-zinc-50 dark:bg-zinc-800/50 sticky top-0 backdrop-blur-sm">Jam</div>
            {hours.map((h) => (
              <button
                key={h}
                onClick={() => handleHourSelect(h)}
                className={`w-full px-4 py-2 text-sm text-center hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
                  h === selectedHour ? "bg-cyan-50 text-cyan-600 font-bold dark:bg-cyan-900/20 dark:text-cyan-400" : "text-zinc-700 dark:text-zinc-300"
                }`}
              >
                {h}
              </button>
            ))}
          </div>

          {/* Minutes Column */}
          <div className="flex-1 h-64 overflow-y-auto">
            <div className="px-2 py-2 text-xs font-bold text-center text-zinc-400 bg-zinc-50 dark:bg-zinc-800/50 sticky top-0 backdrop-blur-sm">Menit</div>
            {minutes.map((m) => (
              <button
                key={m}
                onClick={() => handleMinuteSelect(m)}
                className={`w-full px-4 py-2 text-sm text-center hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
                  m === selectedMinute ? "bg-cyan-50 text-cyan-600 font-bold dark:bg-cyan-900/20 dark:text-cyan-400" : "text-zinc-700 dark:text-zinc-300"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}