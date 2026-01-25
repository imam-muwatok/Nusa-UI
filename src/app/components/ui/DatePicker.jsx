import React, { useState, useRef, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon } from "@heroicons/react/24/outline";

const DAYS = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
const MONTHS = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

export default function DatePicker({
  label,
  value,
  onChange,
  placeholder = "Select date",
  className = "",
  disabled = false,
}) {
  const [show, setShow] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date()); // For navigation
  const containerRef = useRef(null);

  // Parse value to Date object if string
  const selectedDate = value ? new Date(value) : null;

  useEffect(() => {
    if (selectedDate && !isNaN(selectedDate)) {
        setCurrentDate(selectedDate);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateClick = (day) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    onChange(newDate);
    setShow(false);
  };

  const formatDate = (date) => {
    if (!date || isNaN(date)) return "";
    return date.toLocaleDateString("id-ID", { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {label && <label className="mb-2 block text-sm font-bold text-zinc-700 dark:text-zinc-300">{label}</label>}
      
      <div className="relative">
        <input
          type="text"
          readOnly
          value={formatDate(selectedDate)}
          placeholder={placeholder}
          onClick={() => !disabled && setShow(!show)}
          className={`w-full cursor-pointer rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 pl-10 text-sm outline-none transition-all focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
        />
        <CalendarIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
      </div>

      {show && (
        <div className="absolute z-50 mt-2 w-72 rounded-xl border border-zinc-200 bg-white p-4 shadow-xl dark:border-zinc-800 dark:bg-zinc-900 animate-in fade-in zoom-in-95 duration-100">
          <div className="mb-4 flex items-center justify-between">
            <button onClick={handlePrevMonth} className="rounded-lg p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800">
              <ChevronLeftIcon className="h-5 w-5 text-zinc-500" />
            </button>
            <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
              {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
            </span>
            <button onClick={handleNextMonth} className="rounded-lg p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800">
              <ChevronRightIcon className="h-5 w-5 text-zinc-500" />
            </button>
          </div>
          
          <div className="mb-2 grid grid-cols-7 text-center">
            {DAYS.map(day => (
              <span key={day} className="text-xs font-medium text-zinc-400">{day}</span>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-y-1 justify-items-center">
            {Array.from({ length: getFirstDayOfMonth(currentDate.getFullYear(), currentDate.getMonth()) }).map((_, i) => (
              <div key={`empty-${i}`} className="h-8 w-8"></div>
            ))}
            {Array.from({ length: getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth()) }).map((_, i) => {
              const day = i + 1;
              const dateToCheck = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
              const isSelected = selectedDate && dateToCheck.toDateString() === selectedDate.toDateString();
              const isToday = new Date().toDateString() === dateToCheck.toDateString();

              return (
                <button
                  key={day}
                  onClick={() => handleDateClick(day)}
                  type="button"
                  className={`h-8 w-8 rounded-full text-sm font-medium transition-colors
                    ${isSelected 
                      ? "bg-cyan-600 text-white hover:bg-cyan-700" 
                      : isToday 
                        ? "text-cyan-600 font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    }
                  `}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}