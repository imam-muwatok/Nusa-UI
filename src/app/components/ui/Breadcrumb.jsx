import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Breadcrumb({ items, separator, className = "" }) {
  const defaultSeparator = <ChevronRightIcon className="h-3 w-3 text-zinc-400" />;

  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="inline-flex items-center">
              {index > 0 && (
                <span className="mx-1 text-zinc-400 flex items-center">
                  {separator || defaultSeparator}
                </span>
              )}
              
              <a
                href={item.href || "#"}
                className={`inline-flex items-center text-sm font-medium transition-colors ${
                  item.active || isLast
                    ? "text-zinc-500 dark:text-zinc-400 pointer-events-none"
                    : "text-zinc-700 hover:text-cyan-600 dark:text-zinc-300 dark:hover:text-white"
                }`}
                aria-current={item.active || isLast ? "page" : undefined}
              >
                {item.icon && <span className={`${item.label ? 'mr-2' : ''} flex items-center`}>{item.icon}</span>}
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}