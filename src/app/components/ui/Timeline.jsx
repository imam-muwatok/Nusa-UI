import React, { useState, useEffect, useRef } from "react";

function TimelineItem({ children, className = "", onClick }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <li
      ref={ref}
      onClick={onClick}
      className={`${className} transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${onClick ? "cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-xl p-3 -m-3" : ""}`}
    >
      {children}
    </li>
  );
}

const lineVariants = {
  default: {
    bg: "bg-zinc-200 dark:bg-zinc-700",
    border: "border-zinc-200 dark:border-zinc-700"
  },
  primary: {
    bg: "bg-cyan-200 dark:bg-cyan-800",
    border: "border-cyan-200 dark:border-cyan-800"
  },
  success: {
    bg: "bg-green-200 dark:bg-green-800",
    border: "border-green-200 dark:border-green-800"
  },
  danger: {
    bg: "bg-red-200 dark:bg-red-800",
    border: "border-red-200 dark:border-red-800"
  },
  warning: {
    bg: "bg-yellow-200 dark:bg-yellow-800",
    border: "border-yellow-200 dark:border-yellow-800"
  },
  info: {
    bg: "bg-blue-200 dark:bg-blue-800",
    border: "border-blue-200 dark:border-blue-800"
  }
};

export default function Timeline({ items, horizontal = false, alternate = false, opposite = false, loading = false, lineVariant = "default", className = "" }) {
  const lineStyle = lineVariants[lineVariant] || lineVariants.default;

  if (loading) {
    if (horizontal) {
      return (
        <ol className={`items-center sm:flex ${className} animate-pulse`}>
          {[1, 2, 3].map((i) => (
            <li key={i} className="relative mb-6 sm:mb-0 w-full">
              <div className="flex items-center">
                <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-200 ring-0 ring-white dark:bg-zinc-800 dark:ring-zinc-900 sm:ring-8"></div>
                <div className="hidden sm:flex w-full bg-zinc-200 h-0.5 dark:bg-zinc-800"></div>
              </div>
              <div className="mt-3 sm:pr-8 w-full">
                <div className="h-4 w-24 bg-zinc-200 rounded dark:bg-zinc-800 mb-2"></div>
                <div className="h-3 w-16 bg-zinc-200 rounded dark:bg-zinc-800 mb-2"></div>
                <div className="h-3 w-full bg-zinc-200 rounded dark:bg-zinc-800"></div>
              </div>
            </li>
          ))}
        </ol>
      );
    }

    if (alternate) {
      return (
        <div className={`relative ${className} animate-pulse`}>
          <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-zinc-200 dark:bg-zinc-800"></div>
          <ol className="relative">
            {[1, 2, 3].map((i, index) => {
              const isEven = index % 2 === 0;
              return (
                <li key={i} className={`mb-10 flex w-full items-center justify-between ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${isEven ? 'pr-8' : 'pl-8'}`}>
                     <div className={`h-4 w-32 bg-zinc-200 rounded dark:bg-zinc-800 mb-2 ${isEven ? 'ml-auto' : ''}`}></div>
                     <div className={`h-3 w-20 bg-zinc-200 rounded dark:bg-zinc-800 mb-2 ${isEven ? 'ml-auto' : ''}`}></div>
                     <div className={`h-3 w-full max-w-xs bg-zinc-200 rounded dark:bg-zinc-800 ${isEven ? 'ml-auto' : ''}`}></div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-200 ring-8 ring-white dark:bg-zinc-800 dark:ring-zinc-900"></div>
                  <div className="w-1/2"></div>
                </li>
              );
            })}
          </ol>
        </div>
      );
    }

    if (opposite) {
      return (
        <div className={`relative ${className} animate-pulse`}>
          <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-zinc-200 dark:bg-zinc-800"></div>
          <ol className="relative">
            {[1, 2, 3].map((i) => (
              <li key={i} className="mb-10 flex w-full items-center justify-between">
                <div className="w-1/2 pr-8 text-right">
                   <div className="h-4 w-20 bg-zinc-200 rounded dark:bg-zinc-800 mb-2 ml-auto"></div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-200 ring-8 ring-white dark:bg-zinc-800 dark:ring-zinc-900"></div>
                <div className="w-1/2 pl-8">
                   <div className="h-4 w-32 bg-zinc-200 rounded dark:bg-zinc-800 mb-2"></div>
                   <div className="h-3 w-full max-w-xs bg-zinc-200 rounded dark:bg-zinc-800"></div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      );
    }

    // Default Vertical Skeleton
    return (
      <ol className={`relative border-l border-zinc-200 dark:border-zinc-800 ml-3 ${className} animate-pulse`}>
        {[1, 2, 3].map((i) => (
          <li key={i} className="mb-10 ml-6">
            <span className="absolute -left-9 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-200 ring-8 ring-white dark:bg-zinc-800 dark:ring-zinc-900"></span>
            <div className="h-4 w-48 bg-zinc-200 rounded dark:bg-zinc-800 mb-2"></div>
            <div className="h-3 w-24 bg-zinc-200 rounded dark:bg-zinc-800 mb-2"></div>
            <div className="h-3 w-full max-w-sm bg-zinc-200 rounded dark:bg-zinc-800"></div>
          </li>
        ))}
      </ol>
    );
  }

  if (horizontal) {
    return (
      <ol className={`items-center sm:flex ${className}`}>
        {items.map((item, index) => (
          <TimelineItem key={index} onClick={item.onClick} className="relative mb-6 sm:mb-0 w-full">
            <div className="flex items-center">
              <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100 ring-0 ring-white dark:bg-cyan-900 dark:ring-zinc-900 sm:ring-8">
                {item.avatar ? (
                  <img src={item.avatar} alt={item.title} className="h-full w-full rounded-full object-cover" />
                ) : item.icon ? (
                   <span className="text-cyan-600 dark:text-cyan-400">{item.icon}</span>
                ) : (
                   <div className="h-2.5 w-2.5 rounded-full bg-cyan-600 dark:bg-cyan-400"></div>
                )}
              </div>
              <div className={`hidden sm:flex w-full h-0.5 ${lineStyle.bg} ${index === items.length - 1 ? 'invisible' : ''}`}></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {item.title}
                {item.badge && (
                  <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-medium text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300">
                    {item.badge}
                  </span>
                )}
              </h3>
              <time className="mb-2 block text-sm font-normal leading-none text-zinc-400 dark:text-zinc-500">{item.date}</time>
              <p className="text-base font-normal text-zinc-500 dark:text-zinc-400">{item.description}</p>
              {item.action && <div className="mt-2">{item.action}</div>}
            </div>
          </TimelineItem>
        ))}
      </ol>
    );
  }

  if (alternate) {
    return (
      <div className={`relative ${className}`}>
        {/* Central Line */}
        <div className={`absolute left-1/2 h-full w-0.5 -translate-x-1/2 ${lineStyle.bg}`}></div>
        
        <ol className="relative">
          {items.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <TimelineItem key={index} onClick={item.onClick} className={`mb-10 flex w-full items-center justify-between ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content Side */}
                <div className={`w-1/2 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <h3 className={`mb-1 flex items-center text-lg font-semibold text-zinc-900 dark:text-white ${isEven ? 'justify-end' : 'justify-start'}`}>
                      {item.title}
                      {item.badge && (
                        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-medium text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300">
                          {item.badge}
                        </span>
                      )}
                    </h3>
                    <time className="mb-2 block text-sm font-normal leading-none text-zinc-400 dark:text-zinc-500">{item.date}</time>
                    <p className="mb-4 text-base font-normal text-zinc-500 dark:text-zinc-400">{item.description}</p>
                    {item.action && <div className={`flex ${isEven ? 'justify-end' : 'justify-start'}`}>{item.action}</div>}
                </div>
                
                {/* Center Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100 ring-8 ring-white dark:bg-cyan-900 dark:ring-zinc-900">
                  {item.avatar ? (
                    <img src={item.avatar} alt={item.title} className="h-full w-full rounded-full object-cover" />
                  ) : item.icon ? (
                    <span className="text-cyan-600 dark:text-cyan-400">{item.icon}</span>
                  ) : (
                    <div className="h-2.5 w-2.5 rounded-full bg-cyan-600 dark:bg-cyan-400"></div>
                  )}
                </div>

                {/* Empty Side (Spacer) */}
                <div className="w-1/2"></div>
              </TimelineItem>
            );
          })}
        </ol>
      </div>
    );
  }

  if (opposite) {
    return (
      <div className={`relative ${className}`}>
        {/* Central Line */}
        <div className={`absolute left-1/2 h-full w-0.5 -translate-x-1/2 ${lineStyle.bg}`}></div>
        
        <ol className="relative">
          {items.map((item, index) => (
            <TimelineItem key={index} onClick={item.onClick} className="mb-10 flex w-full items-center justify-between">
              {/* Opposite Content (Date/Time) */}
              <div className="w-1/2 pr-8 text-right">
                <time className="block text-sm font-normal leading-none text-zinc-500 dark:text-zinc-400">{item.date}</time>
              </div>
              
              {/* Center Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100 ring-8 ring-white dark:bg-cyan-900 dark:ring-zinc-900">
                {item.avatar ? (
                  <img src={item.avatar} alt={item.title} className="h-full w-full rounded-full object-cover" />
                ) : item.icon ? (
                  <span className="text-cyan-600 dark:text-cyan-400">{item.icon}</span>
                ) : (
                  <div className="h-2.5 w-2.5 rounded-full bg-cyan-600 dark:bg-cyan-400"></div>
                )}
              </div>

              {/* Main Content */}
              <div className="w-1/2 pl-8 text-left">
                  <h3 className="mb-1 flex items-center text-lg font-semibold text-zinc-900 dark:text-white">
                    {item.title}
                    {item.badge && (
                      <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-medium text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300">
                        {item.badge}
                      </span>
                    )}
                  </h3>
                  <p className="mb-4 text-base font-normal text-zinc-500 dark:text-zinc-400">{item.description}</p>
                  {item.action && <div>{item.action}</div>}
              </div>
            </TimelineItem>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <ol className={`relative border-l ${lineStyle.border} ml-3 ${className}`}>
      {items.map((item, index) => (
        <TimelineItem key={index} onClick={item.onClick} className="mb-10 ml-6">
          <span className="absolute -left-9 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100 ring-8 ring-white dark:bg-cyan-900 dark:ring-zinc-900">
            {item.avatar ? (
              <img src={item.avatar} alt={item.title} className="h-full w-full rounded-full object-cover" />
            ) : item.icon ? (
               <span className="text-cyan-600 dark:text-cyan-400">{item.icon}</span>
            ) : (
               <div className="h-2.5 w-2.5 rounded-full bg-cyan-600 dark:bg-cyan-400"></div>
            )}
          </span>
          <h3 className="mb-1 flex items-center text-lg font-semibold text-zinc-900 dark:text-white">
            {item.title}
            {item.badge && (
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-medium text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300">
                {item.badge}
              </span>
            )}
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-zinc-400 dark:text-zinc-500">{item.date}</time>
          <p className="mb-4 text-base font-normal text-zinc-500 dark:text-zinc-400">{item.description}</p>
          {item.action && <div>{item.action}</div>}
        </TimelineItem>
      ))}
    </ol>
  );
}