import React, { useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Offcanvas({ isOpen, onClose, position = "left", title, children, className = "", staticBackdrop = false }) {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const positionClasses = {
    left: "top-0 left-0 h-full w-80 -translate-x-full border-r",
    right: "top-0 right-0 h-full w-80 translate-x-full border-l",
    top: "top-0 left-0 w-full h-80 -translate-y-full border-b",
    bottom: "bottom-0 left-0 w-full h-80 translate-y-full border-t",
  };

  const activeClasses = {
    left: "!translate-x-0",
    right: "!translate-x-0",
    top: "!translate-y-0",
    bottom: "!translate-y-0",
  };

  return (
    <div className={`fixed inset-0 z-50 overflow-hidden transition-all duration-300 ${isOpen ? "visible" : "invisible"}`}>
      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-zinc-950/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} 
        onClick={() => !staticBackdrop && onClose()}
      ></div>

      {/* Panel */}
      <div
        className={`absolute bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 shadow-2xl transition-transform duration-300 ease-in-out ${positionClasses[position]} ${isOpen ? activeClasses[position] : ""} ${className}`}
      >
        <div className="flex h-full flex-col">
            {title ? (
                <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{title}</h3>
                    <button onClick={onClose} className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>
            ) : (
                 <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white z-10">
                    <XMarkIcon className="h-6 w-6" />
                </button>
            )}
            <div className="flex-1 overflow-y-auto p-6">
                {children}
            </div>
        </div>
      </div>
    </div>
  );
}