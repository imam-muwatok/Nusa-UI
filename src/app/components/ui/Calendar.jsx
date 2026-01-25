import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon, FunnelIcon } from "@heroicons/react/24/outline";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function Calendar({ events = [], categories = [], onEventClick, onEventMove, onEventResize, useBadges = false, className = "" }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [resizingEvent, setResizingEvent] = useState(null);
  const [view, setView] = useState("month"); // month, week, day
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    if (categories.length > 0) {
      setSelectedCategories(categories.map(c => c.name));
    }
  }, [categories]);

  const toggleCategory = (categoryName) => {
    setSelectedCategories(prev => 
      prev.includes(categoryName) 
        ? prev.filter(c => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  const handlePrev = () => {
    const newDate = new Date(currentDate);
    if (view === "month") {
      newDate.setMonth(newDate.getMonth() - 1);
    } else if (view === "week") {
      newDate.setDate(newDate.getDate() - 7);
    } else {
      newDate.setDate(newDate.getDate() - 1);
    }
    setCurrentDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    if (view === "month") {
      newDate.setMonth(newDate.getMonth() + 1);
    } else if (view === "week") {
      newDate.setDate(newDate.getDate() + 7);
    } else {
      newDate.setDate(newDate.getDate() + 1);
    }
    setCurrentDate(newDate);
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const handleDragStart = (e, event) => {
    e.dataTransfer.setData("event", JSON.stringify(event));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, date) => {
    e.preventDefault();
    const eventData = e.dataTransfer.getData("event");
    if (eventData) {
      const event = JSON.parse(eventData);
      if (onEventMove) {
        onEventMove(event, date);
      }
    }
  };

  const handleResizeStart = (e, event) => {
    e.stopPropagation();
    setResizingEvent(event);
  };

  const handleCellMouseUp = (e, date) => {
    if (resizingEvent) {
      if (onEventResize) {
        onEventResize(resizingEvent, date);
      }
      setResizingEvent(null);
    }
  };

  const getHeaderText = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    if (view === "month") {
      return `${MONTHS[month]} ${year}`;
    }
    if (view === "week") {
      const startOfWeek = new Date(currentDate);
      startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      
      const startMonth = MONTHS[startOfWeek.getMonth()];
      const endMonth = MONTHS[endOfWeek.getMonth()];
      
      if (startMonth === endMonth) {
        return `${startMonth} ${startOfWeek.getDate()} - ${endOfWeek.getDate()}, ${year}`;
      }
      return `${startMonth.slice(0, 3)} ${startOfWeek.getDate()} - ${endMonth.slice(0, 3)} ${endOfWeek.getDate()}, ${year}`;
    }
    if (view === "day") {
      return `${DAYS[currentDate.getDay()]}, ${MONTHS[month]} ${currentDate.getDate()}, ${year}`;
    }
  };

  const renderDays = () => {
    let days = [];
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    if (view === "month") {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();
        for (let i = 0; i < firstDay; i++) days.push(null);
        for (let i = 1; i <= daysInMonth; i++) days.push(new Date(year, month, i));
    } else if (view === "week") {
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
        for (let i = 0; i < 7; i++) {
            const d = new Date(startOfWeek);
            d.setDate(startOfWeek.getDate() + i);
            days.push(d);
        }
    } else if (view === "day") {
        days.push(new Date(currentDate));
    }
    return days;
  };

  const days = renderDays();

  return (
    <div className={`w-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 ${className}`}>
      {/* Categories Filter */}
      {categories.length > 0 && (
        <div className="mb-6 flex flex-wrap items-center gap-2 border-b border-zinc-100 pb-4 dark:border-zinc-800">
          <div className="mr-2 flex items-center text-xs font-bold uppercase tracking-wider text-zinc-400">
            <FunnelIcon className="mr-1 h-4 w-4" /> Filter:
          </div>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => toggleCategory(cat.name)}
              className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium transition-all ${
                selectedCategories.includes(cat.name)
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400"
              }`}
            >
              <span className={`h-2 w-2 rounded-full ${cat.color}`}></span>
              {cat.name}
            </button>
          ))}
        </div>
      )}

      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between sm:justify-start gap-4">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white min-w-[200px]">
            {getHeaderText()}
          </h2>
          <div className="flex bg-zinc-100 dark:bg-zinc-800 rounded-lg p-1">
            {["month", "week", "day"].map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-3 py-1 text-xs font-bold rounded-md capitalize transition-all ${
                  view === v
                    ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-700 dark:text-white"
                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-end gap-2">
          <button 
            onClick={handleToday}
            className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 transition-colors"
          >
            Today
          </button>
          <button onClick={handlePrev} className="rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <ChevronLeftIcon className="h-5 w-5 text-zinc-500" />
          </button>
          <button onClick={handleNext} className="rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <ChevronRightIcon className="h-5 w-5 text-zinc-500" />
          </button>
        </div>
      </div>

      {/* Days Header */}
      <div className={`mb-2 grid text-center ${view === 'day' ? 'grid-cols-1' : 'grid-cols-7'}`}>
        {view === 'day' ? (
           <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
             {DAYS[currentDate.getDay()]}
           </div>
        ) : (
            DAYS.map((day) => (
              <div key={day} className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                {day}
              </div>
            ))
        )}
      </div>

      {/* Calendar Grid */}
      <div className={`grid gap-2 ${view === 'day' ? 'grid-cols-1' : 'grid-cols-7'}`}>
        {days.map((date, index) => {
          if (!date) return <div key={index} className="min-h-[6rem] rounded-xl bg-zinc-50/50 dark:bg-zinc-900/50"></div>;

          const cellDate = new Date(date);
          cellDate.setHours(0, 0, 0, 0);
          const dateString = cellDate.toDateString();
          const isToday = new Date().toDateString() === dateString;

          const dayEvents = events.filter(e => {
            const eventStart = new Date(e.date);
            eventStart.setHours(0, 0, 0, 0);

            // Filter by category if categories are provided
            if (categories.length > 0 && e.category && !selectedCategories.includes(e.category)) {
              return false;
            }

            if (e.endDate) {
              const eventEnd = new Date(e.endDate);
              eventEnd.setHours(0, 0, 0, 0);
              return cellDate >= eventStart && cellDate <= eventEnd;
            }

            return eventStart.getTime() === cellDate.getTime();
          });

          const isEventEnd = (event, dayDate) => {
            const end = event.endDate ? new Date(event.endDate) : new Date(event.date);
            end.setHours(0, 0, 0, 0);
            const current = new Date(dayDate);
            current.setHours(0, 0, 0, 0);
            return end.getTime() === current.getTime();
          };

          return (
            <div 
              key={index} 
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, date)}
              onMouseUp={(e) => handleCellMouseUp(e, date)}
              className={`flex min-h-[6rem] flex-col rounded-xl border p-2 transition-colors ${isToday ? "border-cyan-500 bg-cyan-50/30 dark:border-cyan-500/50 dark:bg-cyan-900/20" : "border-zinc-100 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"}`}
            >
              <span className={`mb-1 text-sm font-medium ${isToday ? "text-cyan-600 dark:text-cyan-400" : "text-zinc-700 dark:text-zinc-300"}`}>
                {date.getDate()}
              </span>
              <div className={useBadges ? "flex flex-wrap gap-1 mt-auto" : "flex flex-col gap-1"}>
                {dayEvents.map((event, i) => (
                  <div 
                    key={i} 
                    draggable={!!onEventMove}
                    onDragStart={(e) => handleDragStart(e, event)}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onEventClick) onEventClick(event);
                    }}
                    className={useBadges 
                      ? `relative group h-2 w-2 rounded-full ${event.color || "bg-cyan-500"} ${onEventClick ? "cursor-pointer hover:opacity-80" : ""} ${onEventMove ? "cursor-move hover:opacity-80" : ""} hover:z-50`
                      : `relative group rounded px-1.5 py-0.5 text-[10px] font-medium text-white ${event.color || "bg-cyan-500"} ${onEventClick ? "cursor-pointer hover:opacity-80" : ""} ${onEventMove ? "cursor-move hover:opacity-80" : ""} hover:z-50`
                    }
                  >
                    {!useBadges && <div className="truncate relative z-10">{event.title}</div>}

                    {/* Event Popover */}
                    <div className="absolute bottom-full left-1/2 z-50 mb-2 hidden w-48 -translate-x-1/2 flex-col gap-1 rounded-lg border border-zinc-200 bg-white p-3 text-xs text-zinc-900 shadow-xl group-hover:flex dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100">
                      <div className="font-bold">{event.title}</div>
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400">
                        {new Date(event.date).toLocaleDateString("id-ID", { day: 'numeric', month: 'short' })}
                        {event.endDate && ` - ${new Date(event.endDate).toLocaleDateString("id-ID", { day: 'numeric', month: 'short' })}`}
                      </div>
                      {event.description && <div className="line-clamp-2 text-zinc-600 dark:text-zinc-300 font-normal">{event.description}</div>}
                      {/* Arrow */}
                      <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800"></div>
                    </div>

                    {!useBadges && onEventResize && isEventEnd(event, date) && (
                      <div
                        className="absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize hover:bg-black/20 z-20 rounded-r"
                        onMouseDown={(e) => handleResizeStart(e, event)}
                        onClick={(e) => e.stopPropagation()}
                        draggable
                        onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}