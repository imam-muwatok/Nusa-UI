import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon, XMarkIcon, MagnifyingGlassIcon, CheckIcon } from "@heroicons/react/24/outline";

export default function Select2({
  options = [],
  value,
  onChange,
  placeholder = "Select...",
  label,
  multiple = false,
  searchable = true,
  disabled = false,
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
    if (!isOpen) {
        setSearchTerm("");
    }
  }, [isOpen, searchable]);

  const filteredOptions = options.filter((option) =>
    (option.label || option.value || option).toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option) => {
    if (multiple) {
      const isSelected = Array.isArray(value) && value.some((v) => (v.value || v) === (option.value || option));
      let newValue;
      if (isSelected) {
        newValue = value.filter((v) => (v.value || v) !== (option.value || option));
      } else {
        newValue = [...(value || []), option];
      }
      onChange(newValue);
    } else {
      onChange(option);
      setIsOpen(false);
    }
  };

  const removeOption = (e, optionToRemove) => {
    e.stopPropagation();
    const newValue = value.filter((v) => (v.value || v) !== (optionToRemove.value || optionToRemove));
    onChange(newValue);
  };

  const isSelected = (option) => {
    if (multiple) {
      return Array.isArray(value) && value.some((v) => (v.value || v) === (option.value || option));
    }
    return (value?.value || value) === (option.value || option);
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {label && <label className="mb-2 block text-sm font-bold text-zinc-700 dark:text-zinc-300">{label}</label>}
      
      <div
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`flex min-h-[46px] w-full cursor-pointer items-center justify-between rounded-xl border bg-zinc-50 px-3 py-2 text-sm transition-all dark:bg-zinc-900 ${
          disabled ? "cursor-not-allowed opacity-60" : "hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
        } ${isOpen ? "border-cyan-500 ring-4 ring-cyan-500/10" : "border-zinc-200 dark:border-zinc-800"}`}
      >
        <div className="flex flex-wrap gap-2">
          {multiple && Array.isArray(value) && value.length > 0 ? (
            value.map((val, idx) => (
              <span key={idx} className="flex items-center gap-1 rounded-md bg-zinc-200 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                {val.label || val}
                <button onClick={(e) => removeOption(e, val)} className="hover:text-red-500">
                  <XMarkIcon className="h-3 w-3" />
                </button>
              </span>
            ))
          ) : !multiple && value ? (
            <span className="text-zinc-900 dark:text-white">{value.label || value}</span>
          ) : (
            <span className="text-zinc-400">{placeholder}</span>
          )}
        </div>
        <ChevronDownIcon className={`h-4 w-4 text-zinc-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900 animate-in fade-in zoom-in-95 duration-100">
          {searchable && (
            <div className="border-b border-zinc-100 p-2 dark:border-zinc-800">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  className="w-full rounded-lg bg-zinc-50 py-2 pl-9 pr-4 text-sm outline-none dark:bg-zinc-800 dark:text-white"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          )}
          
          <ul className="max-h-60 overflow-auto py-1">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, i) => {
                const selected = isSelected(option);
                return (
                  <li
                    key={i}
                    onClick={() => handleSelect(option)}
                    className={`flex cursor-pointer items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                      selected
                        ? "bg-cyan-50 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400"
                        : "text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    }`}
                  >
                    <span>{option.label || option}</span>
                    {selected && <CheckIcon className="h-4 w-4" />}
                  </li>
                );
              })
            ) : (
              <li className="px-4 py-3 text-center text-sm text-zinc-500 dark:text-zinc-400">
                No results found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}