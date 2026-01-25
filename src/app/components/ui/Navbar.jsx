import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar({ children, className = "", fluid = false, sticky = false, transparent = false }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!transparent) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparent]);

  const baseClasses = "flex flex-wrap items-center justify-between py-4 transition-all duration-300";
  const stickyClasses = sticky || transparent ? "sticky top-0 z-50" : "relative";
  
  let backgroundClasses = "bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800";
  
  if (transparent) {
    if (isScrolled) {
      backgroundClasses = "bg-white/90 backdrop-blur-md dark:bg-zinc-900/90 border-b border-zinc-200 dark:border-zinc-800 shadow-sm";
    } else {
      backgroundClasses = "bg-transparent border-b border-transparent";
    }
  }

  return (
    <nav 
      className={`${baseClasses} ${backgroundClasses} ${stickyClasses} ${className}`}
      data-scrolled={isScrolled}
    >
      <div className={`flex flex-wrap items-center justify-between w-full px-4 ${fluid ? "w-full" : "container mx-auto"}`}>
        {children}
      </div>
    </nav>
  );
}

export function NavbarBrand({ children, href = "#", className = "" }) {
  return (
    <a href={href} className={`flex items-center gap-2 text-xl font-bold text-zinc-900 dark:text-white whitespace-nowrap ${className}`}>
      {children}
    </a>
  );
}

export function NavbarToggle({ isOpen, setIsOpen, className = "" }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center p-2 ml-3 text-sm text-zinc-500 rounded-lg lg:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600 ${className}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="sr-only">Open main menu</span>
      {isOpen ? (
        <XMarkIcon className="w-6 h-6" />
      ) : (
        <Bars3Icon className="w-6 h-6" />
      )}
    </button>
  );
}

export function NavbarCollapse({ children, isOpen, className = "" }) {
  return (
    <div className={`${isOpen ? "block" : "hidden"} w-full lg:block lg:w-auto ${className}`}>
      {children}
    </div>
  );
}