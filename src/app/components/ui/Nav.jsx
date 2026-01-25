import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Nav({ children, variant = "base", vertical = false, fill = false, justified = false, scrollable = false, responsive = false, scrollSpy = false, spyContainer, className = "" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  // Scroll Spy Logic
  useEffect(() => {
    if (!scrollSpy) return;

    const handleScroll = () => {
      const containerEl = spyContainer ? document.querySelector(spyContainer) : null;
      const containerTop = containerEl ? containerEl.getBoundingClientRect().top : 0;
      const offset = 150; // Buffer zone (px) from top

      const ids = React.Children.toArray(children)
        .map((child) => (React.isValidElement(child) ? child.props.href : null))
        .filter((href) => href && href.startsWith("#"))
        .map((href) => href.substring(1));

      for (const id of ids) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const topDiff = rect.top - containerTop;
          
          if (topDiff <= offset && (topDiff + rect.height) > offset) {
            setActiveId(id);
          }
        }
      }
    };

    const scrollTarget = spyContainer ? document.querySelector(spyContainer) : window;
    if (scrollTarget) {
      scrollTarget.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
      return () => scrollTarget.removeEventListener("scroll", handleScroll);
    }
  }, [scrollSpy, spyContainer, children]);

  const baseStyles = "flex";
  
  // Spacing and Layout
  let spacing = "";
  if (variant === "pills") spacing = "gap-1";
  else if (variant === "underline") spacing = "gap-6";
  else if (variant === "base" && !vertical) spacing = "gap-4";
  else if (variant === "base" && vertical) spacing = "gap-2";
  // tabs usually handle their own spacing via flex

  const layout = fill ? "[&>*]:flex-1 [&>*]:text-center" : justified ? "justify-between" : "";
  
  const containerClasses = {
    base: "",
    tabs: "border-b border-zinc-200 dark:border-zinc-800",
    pills: "",
    underline: "border-b border-zinc-200 dark:border-zinc-800",
  };

  const overflowClasses = vertical ? "" : (scrollable ? "overflow-x-auto flex-nowrap" : "flex-wrap");

  if (responsive) {
    return (
      <nav className={`relative ${className}`}>
        <div className="flex items-center justify-between lg:hidden">
          <span className="text-sm font-bold text-zinc-500 dark:text-zinc-400">Menu</span>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
            {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        <div className={`${baseStyles} ${vertical ? "flex-col" : ""} ${spacing} ${containerClasses[variant]} ${layout} ${overflowClasses} ${isMenuOpen ? "flex flex-col absolute top-full left-0 w-full bg-white dark:bg-zinc-900 shadow-lg z-50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 mt-2" : "hidden lg:flex"}`}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              const childProps = { variant, vertical: isMenuOpen || vertical };
              if (scrollSpy && child.props.href === `#${activeId}`) {
                childProps.active = true;
              }
              return React.cloneElement(child, childProps);
            }
            return child;
          })}
        </div>
      </nav>
    );
  }

  return (
    <nav className={`${baseStyles} ${vertical ? "flex-col" : ""} ${spacing} ${containerClasses[variant]} ${layout} ${overflowClasses} ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childProps = { variant, vertical };
          if (scrollSpy && child.props.href === `#${activeId}`) {
            childProps.active = true;
          }
          return React.cloneElement(child, childProps);
        }
        return child;
      })}
    </nav>
  );
}

export function NavItem({ children, active = false, disabled = false, href, onClick, className = "", variant = "base", vertical = false }) {
  const Component = href ? "a" : "button";
  
  const baseStyles = "group flex items-center justify-center px-4 py-2 text-sm font-medium transition-all focus:outline-none whitespace-nowrap";
  const disabledStyles = disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer";
  
  const variantStyles = {
    base: active 
      ? "text-cyan-600 dark:text-cyan-400" 
      : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",
    
    tabs: active
      ? "border border-zinc-200 border-b-transparent bg-white text-cyan-600 rounded-t-lg -mb-px dark:border-zinc-800 dark:border-b-transparent dark:bg-zinc-950 dark:text-cyan-400"
      : "border border-transparent hover:text-zinc-900 dark:hover:text-white rounded-t-lg -mb-px",
      
    pills: active
      ? "bg-cyan-500 text-white rounded-lg shadow-sm"
      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white rounded-lg",
      
    underline: active
      ? "border-b-2 border-cyan-500 text-cyan-600 dark:text-cyan-400 -mb-px px-0"
      : "border-b-2 border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-300 -mb-px px-0",
  };

  return (
    <Component
      href={href}
      onClick={(e) => {
        if (disabled) e.preventDefault();
        else if (onClick) onClick(e);
      }}
      className={`${baseStyles} ${disabledStyles} ${variantStyles[variant]} ${className}`}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Component>
  );
}

export function NavDropdown({ title, children, active = false, disabled = false, variant = "base", vertical = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const baseStyles = "group flex items-center justify-center px-4 py-2 text-sm font-medium transition-all focus:outline-none whitespace-nowrap cursor-pointer";
  
  const variantStyles = {
    base: active 
      ? "text-cyan-600 dark:text-cyan-400" 
      : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",
    tabs: active
      ? "border border-zinc-200 border-b-transparent bg-white text-cyan-600 rounded-t-lg -mb-px dark:border-zinc-800 dark:border-b-transparent dark:bg-zinc-950 dark:text-cyan-400"
      : "border border-transparent hover:text-zinc-900 dark:hover:text-white rounded-t-lg -mb-px",
    pills: active
      ? "bg-cyan-500 text-white rounded-lg shadow-sm"
      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white rounded-lg",
    underline: active
      ? "border-b-2 border-cyan-500 text-cyan-600 dark:text-cyan-400 -mb-px px-0"
      : "border-b-2 border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-300 -mb-px px-0",
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`${baseStyles} ${disabled ? "cursor-not-allowed opacity-50" : ""} ${variantStyles[variant]}`}
      >
        {title}
        <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      
      {isOpen && (
        <div className="absolute left-0 z-50 mt-1 w-48 origin-top-left rounded-xl bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-zinc-900 dark:ring-zinc-800 animate-in fade-in zoom-in-95 duration-100">
          {children}
        </div>
      )}
    </div>
  );
}

export function NavMegaMenu({ title, children, active = false, disabled = false, variant = "base", vertical = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const baseStyles = "group flex items-center justify-between lg:justify-center px-4 py-2 text-sm font-medium transition-all focus:outline-none whitespace-nowrap cursor-pointer w-full lg:w-auto";
  
  const variantStyles = {
    base: active 
      ? "text-cyan-600 dark:text-cyan-400" 
      : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",
    tabs: active
      ? "border border-zinc-200 border-b-transparent bg-white text-cyan-600 rounded-t-lg -mb-px dark:border-zinc-800 dark:border-b-transparent dark:bg-zinc-950 dark:text-cyan-400"
      : "border border-transparent hover:text-zinc-900 dark:hover:text-white rounded-t-lg -mb-px",
    pills: active
      ? "bg-cyan-500 text-white rounded-lg shadow-sm"
      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white rounded-lg",
    underline: active
      ? "border-b-2 border-cyan-500 text-cyan-600 dark:text-cyan-400 -mb-px px-0"
      : "border-b-2 border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-300 -mb-px px-0",
  };

  return (
    <div className="static" ref={dropdownRef}>
      <button
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`${baseStyles} ${disabled ? "cursor-not-allowed opacity-50" : ""} ${variantStyles[variant]}`}
      >
        {title}
        <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      
      {isOpen && (
        <div className="z-50 mt-1 w-full bg-white dark:bg-zinc-900 lg:absolute lg:left-0 lg:right-0 lg:top-full lg:border-y lg:border-zinc-200 lg:dark:border-zinc-800 lg:shadow-lg relative border-l-2 border-zinc-100 dark:border-zinc-800 ml-4 pl-4 lg:ml-0 lg:pl-0 lg:border-l-0">
           <div className="lg:container lg:mx-auto lg:px-4 lg:py-8 py-2">
              {children}
           </div>
        </div>
      )}
    </div>
  );
}