import React, { useState, useRef, useEffect } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

export default function Autocomplete({
  label,
  suggestions = [],
  placeholder = "",
  className = "",
  onSelect,
  disabled = false,
  ...props
}) {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    const userInput = e.target.value;
    setInputValue(userInput);

    const filtered = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().includes(userInput.toLowerCase())
    );

    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
    setActiveSuggestionIndex(-1);
  };

  const handleFocus = () => {
      if (inputValue) {
          const filtered = suggestions.filter(
            (suggestion) =>
                suggestion.toLowerCase().includes(inputValue.toLowerCase())
            );
            setFilteredSuggestions(filtered);
      } else {
          setFilteredSuggestions(suggestions);
      }
      setShowSuggestions(true);
  }

  const handleSelect = (suggestion) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setActiveSuggestionIndex(-1);
    if (onSelect) onSelect(suggestion);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (activeSuggestionIndex > -1 && filteredSuggestions[activeSuggestionIndex]) {
          e.preventDefault();
          handleSelect(filteredSuggestions[activeSuggestionIndex]);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (activeSuggestionIndex > 0) {
        setActiveSuggestionIndex(activeSuggestionIndex - 1);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (activeSuggestionIndex < filteredSuggestions.length - 1) {
        setActiveSuggestionIndex(activeSuggestionIndex + 1);
      }
    } else if (e.key === "Escape") {
        setShowSuggestions(false);
    }
  };

  const getHighlightedText = (text, highlight) => {
    if (!highlight.trim()) return text;
    const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const parts = text.split(new RegExp(`(${escapedHighlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="font-bold text-cyan-600 dark:text-cyan-400">{part}</span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <div className={`relative ${className}`} ref={wrapperRef}>
      {label && <label className="mb-2 block text-sm font-bold text-zinc-700 dark:text-zinc-300">{label}</label>}
      <div className="relative">
        <input
          type="text"
          onChange={handleChange}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          value={inputValue}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition-all focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
          {...props}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
            <ChevronUpDownIcon className="h-4 w-4" />
        </div>
      </div>

      {showSuggestions && (
        <ul className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-xl border border-zinc-200 bg-white py-1 shadow-lg dark:border-zinc-800 dark:bg-zinc-900 animate-in fade-in zoom-in-95 duration-100">
          {filteredSuggestions.length ? (
            filteredSuggestions.map((suggestion, index) => {
              let activeClass = "";
              if (index === activeSuggestionIndex) {
                activeClass = "bg-cyan-50 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400";
              } else {
                activeClass = "text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800";
              }
              return (
                <li
                  key={index}
                  className={`cursor-pointer px-4 py-2 text-sm transition-colors ${activeClass}`}
                  onClick={() => handleSelect(suggestion)}
                >
                  {getHighlightedText(suggestion, inputValue)}
                </li>
              );
            })
          ) : (
            <li className="px-4 py-2 text-sm text-zinc-500 dark:text-zinc-400">
              No results found
            </li>
          )}
        </ul>
      )}
    </div>
  );
}