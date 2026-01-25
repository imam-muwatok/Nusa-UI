import React from "react";

export default function FormControl({ label, htmlFor, helperText, error, children, className = "", required = false, floating = false }) {
  if (floating) {
    return (
      <div className={`relative ${className} ${error ? 'mb-6' : 'mb-5'}`}>
        <div className="relative">
            {/* Clone children to add 'peer' class and placeholder logic required for floating labels */}
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        className: `${child.props.className || ""} peer placeholder-transparent`.trim(),
                        placeholder: child.props.placeholder || " " // Placeholder required for peer-placeholder-shown to work
                    });
                }
                return child;
            })}
            
            {label && (
                <label 
                    htmlFor={htmlFor} 
                    className={`absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-zinc-900 ${
                        error 
                        ? "text-red-600 dark:text-red-400 peer-focus:text-red-600 dark:peer-focus:text-red-400" 
                        : "text-zinc-500 dark:text-zinc-400 peer-focus:text-cyan-600 dark:peer-focus:text-cyan-400"
                    }`}
                >
                    {label} {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
        </div>
        {error && <p className="mt-1 text-xs font-medium text-red-600 dark:text-red-400">{error}</p>}
        {!error && helperText && <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{helperText}</p>}
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={htmlFor} className={`text-sm font-bold ${error ? "text-red-600 dark:text-red-400" : "text-zinc-700 dark:text-zinc-300"}`}>
          {label} {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {children}
      {error && <p className="text-xs font-medium text-red-600 dark:text-red-400">{error}</p>}
      {!error && helperText && <p className="text-xs text-zinc-500 dark:text-zinc-400">{helperText}</p>}
    </div>
  );
}