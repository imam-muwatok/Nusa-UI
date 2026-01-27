import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Layout({ sidebar, children, header, className = "h-screen" }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`flex w-full bg-zinc-50 dark:bg-zinc-950 overflow-hidden ${className}`}>
      {/* Sidebar Wrapper */}
      <div 
        className={`flex-shrink-0 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "w-64" : "w-0"
        }`}
      >
        <div className="w-64 h-full">
            {sidebar}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col min-w-0 overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-4 dark:border-zinc-800 dark:bg-zinc-900 shrink-0">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
          {header}
        </header>
        
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}