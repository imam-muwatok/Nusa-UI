import React, { useState, useRef, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Popover({ trigger, title, content, position = "top", className = "", dismissOnScroll = false, openDelay = 0, closeDelay = 0, triggerMode = "click", focusTrap = false, width = "w-64", backdrop = false, nested = false, showArrow = true, arrowClassName = "h-3 w-3", closeButton = false, isOpen: controlledIsOpen, onOpenChange, animation = "fade" }) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const popoverRef = useRef(null);
  const timeoutRef = useRef(null);
  const triggerRef = useRef(null);

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleOpenChange = (newState) => {
    if (isControlled) {
      onOpenChange?.(newState);
    } else {
      setInternalIsOpen(newState);
    }
  };

  const clearTimeoutRef = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleOpen = () => {
    clearTimeoutRef();
    if (openDelay > 0) {
      timeoutRef.current = setTimeout(() => handleOpenChange(true), openDelay);
    } else {
      handleOpenChange(true);
    }
  };

  const handleClose = () => {
    clearTimeoutRef();
    if (closeDelay > 0) {
      timeoutRef.current = setTimeout(() => handleOpenChange(false), closeDelay);
    } else {
      handleOpenChange(false);
    }
  };

  const handleMouseEnter = () => {
    if (triggerMode === "hover") {
      handleOpen();
    }
  };

  const handleMouseLeave = () => {
    if (triggerMode === "hover") {
      handleClose();
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeoutRef();
    };
  }, [isOpen, closeDelay]);

  useEffect(() => {
    if (isOpen && dismissOnScroll) {
      const handleScroll = () => {
        handleOpenChange(false);
      };
      window.addEventListener("scroll", handleScroll, true);
      return () => window.removeEventListener("scroll", handleScroll, true);
    }
  }, [isOpen, dismissOnScroll]);

  // Focus Trap Logic
  useEffect(() => {
    if (isOpen && focusTrap && popoverRef.current) {
      const focusableElements = popoverRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (firstElement) {
        firstElement.focus();
      }

      const handleTabKey = (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", handleTabKey);
      return () => {
        document.removeEventListener("keydown", handleTabKey);
      };
    }
  }, [isOpen, focusTrap]);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left: "right-full top-1/2 -translate-y-1/2 mr-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3",
  };

  const arrowClasses = {
    top: "bottom-[-6px] left-1/2 -translate-x-1/2 border-b border-r",
    bottom: "top-[-6px] left-1/2 -translate-x-1/2 border-t border-l",
    left: "right-[-6px] top-1/2 -translate-y-1/2 border-t border-r",
    right: "left-[-6px] top-1/2 -translate-y-1/2 border-b border-l",
  };

  const animations = {
    fade: "animate-in fade-in duration-200",
    zoom: "animate-in fade-in zoom-in-95 duration-200",
    slide: "animate-in fade-in slide-in-from-bottom-2 duration-200",
  };

  return (
    <div 
      className="relative inline-block" 
      ref={popoverRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => nested && e.stopPropagation()}
    >
      <div ref={triggerRef} onClick={(e) => {
        if (nested) e.stopPropagation();
        if (triggerMode === "click") {
          isOpen ? handleClose() : handleOpen();
        }
      }} className="cursor-pointer inline-flex">
        {trigger}
      </div>

      {isOpen && (
        <>
          {backdrop && (
            <div 
              className="fixed inset-0 z-40 bg-zinc-950/20 backdrop-blur-sm dark:bg-zinc-950/50" 
              onClick={handleClose}
            ></div>
          )}
          <div className={`absolute ${nested ? "z-[60]" : "z-50"} ${width} rounded-xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900 ${positionClasses[position]} ${className} ${animations[animation] || animations.fade}`}>
            {(title || closeButton) && (
              <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-3 font-semibold text-zinc-900 dark:border-zinc-800 dark:text-white">
                <span>{title}</span>
                {closeButton && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClose();
                    }}
                    className="ml-2 -mr-1 rounded-md p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-300 focus:outline-none"
                  >
                    <XMarkIcon className="h-4 w-4" />
                  </button>
                )}
              </div>
            )}
            <div className="p-4 text-sm text-zinc-600 dark:text-zinc-300">
              {content}
            </div>
            
            {/* Arrow */}
            {showArrow && (
              <div className={`absolute ${arrowClassName} rotate-45 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 ${arrowClasses[position]}`}></div>
            )}
          </div>
        </>
      )}
    </div>
  );
}