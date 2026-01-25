import React, { useRef, useEffect, useState } from "react";

export default function Textarea({ 
  label, 
  autoResize = false, 
  showCount = false,
  maxLength,
  error,
  className = "", 
  onChange,
  value,
  disabled,
  ...props 
}) {
  const textareaRef = useRef(null);
  const [length, setLength] = useState(value ? String(value).length : 0);

  const resize = () => {
    if (textareaRef.current && autoResize) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  };

  useEffect(() => {
    resize();
    if (value !== undefined) setLength(String(value).length);
  }, [value, autoResize]);

  const handleChange = (e) => {
    resize();
    setLength(e.target.value.length);
    if (onChange) onChange(e);
  }

  return (
    <div className={className}>
      {label && <label className={`mb-2 block text-sm font-bold ${error ? "text-red-600 dark:text-red-400" : "text-zinc-700 dark:text-zinc-300"}`}>{label}</label>}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        maxLength={maxLength}
        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all disabled:cursor-not-allowed disabled:opacity-60 ${
            error 
            ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 dark:border-red-500/50 dark:bg-red-950/20 dark:text-white" 
            : "border-zinc-200 bg-zinc-50 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
        } ${autoResize ? 'resize-none overflow-hidden' : ''}`}
        {...props}
      />
      {(showCount || error) && (
        <div className="mt-1.5 flex items-center justify-between gap-2">
           {error && typeof error === 'string' && (
               <p className="text-xs font-medium text-red-600 dark:text-red-400">{error}</p>
           )}
           {showCount && (
            <div className={`text-xs ml-auto ${error ? "text-red-600 dark:text-red-400" : "text-zinc-500 dark:text-zinc-400"}`}>
               {length} {maxLength ? `/ ${maxLength}` : ''}
            </div>
           )}
        </div>
      )}
    </div>
  );
}