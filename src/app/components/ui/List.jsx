import React, { useState, useRef, useEffect } from "react";
import { Checkbox } from "./Checkbox";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function List({ children, as = "ul", variant = "default", className = "", nested = false, onLoadMore, hasMore = false, loading = false, virtualized = false, items = [], renderItem, itemHeight = 50, height = 400, emptyState }) {
  const Component = as;
  const sentinelRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    if (!onLoadMore || virtualized) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          onLoadMore();
        }
      },
      { rootMargin: "20px" }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [onLoadMore, hasMore, loading, virtualized]);
  
  const variants = {
    default: "list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400",
    ordered: "list-decimal list-inside space-y-1 text-zinc-600 dark:text-zinc-400",
    none: "list-none space-y-1 text-zinc-600 dark:text-zinc-400",
    bordered: "rounded-xl border border-zinc-200 dark:border-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden",
    flush: "divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800",
    grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
  };

  const SentinelComponent = as === "ul" || as === "ol" ? "li" : "div";

  const isEmpty = virtualized ? (!items || items.length === 0) : React.Children.count(children) === 0;

  if (isEmpty && emptyState) {
    return (
      <div className={`flex flex-col items-center justify-center p-8 text-center text-sm text-zinc-500 dark:text-zinc-400 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/50 ${className}`}>
        {emptyState}
      </div>
    );
  }

  if (virtualized) {
    const totalHeight = items.length * itemHeight;
    const startIndex = Math.floor(scrollTop / itemHeight);
    const visibleCount = Math.ceil(height / itemHeight);
    // Buffer items to prevent flickering
    const startNode = Math.max(0, startIndex - 2);
    const endNode = Math.min(items.length, startIndex + visibleCount + 2);
    
    const visibleItems = [];
    for (let i = startNode; i < endNode; i++) {
      visibleItems.push(
        <div key={i} style={{ position: 'absolute', top: i * itemHeight, width: '100%', height: itemHeight }}>
          {renderItem(items[i], i)}
        </div>
      );
    }

    return (
      <div className={`${variants[variant] || variants.default} ${className} overflow-y-auto relative`} style={{ height }} onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}>
        <div style={{ height: totalHeight, position: 'relative' }}>
          {visibleItems}
        </div>
      </div>
    );
  }

  return (
    <Component className={`${variants[variant] || variants.default} ${nested ? "ml-6 mt-1" : ""} ${className}`}>
      {children}
      {onLoadMore && (
        <SentinelComponent ref={sentinelRef} className="h-12 w-full flex items-center justify-center p-2 list-none">
            {loading && <div className="h-5 w-5 animate-spin rounded-full border-2 border-zinc-300 border-t-cyan-600 dark:border-zinc-700 dark:border-t-cyan-500"></div>}
        </SentinelComponent>
      )}
    </Component>
  );
}

export function ListHeader({ children, className = "", as = "li" }) {
  const Component = as;
  return (
    <Component className={`sticky top-0 z-10 border-b border-zinc-100 bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-500 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/95 dark:text-zinc-400 ${className}`}>
      {children}
    </Component>
  );
}

export function ListItem({ children, as = "li", className = "", icon, avatar, action, onClick, checkable, checked, onCheck, swipeLeftActions, swipeRightActions, selected, noStrikethrough, dragHandle, nestedList, defaultOpen = false, ...props }) {
  const Component = as;
  const isInteractive = !!onClick || checkable || !!nestedList;
  const isDraggable = props.draggable;
  const hasSwipe = !!(swipeLeftActions || swipeRightActions);
  
  const [offset, setOffset] = useState(0);
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const startX = useRef(null);
  
  const handleRowClick = (e) => {
    if (offset !== 0) {
        setOffset(0);
        return;
    }
    if (checkable && onCheck) {
      onCheck(!checked);
    }
    if (nestedList) {
      setIsOpen(!isOpen);
    }
    if (onClick) onClick(e);
  };

  const handleTouchStart = (e) => {
    if (hasSwipe) {
        startX.current = e.touches[0].clientX;
    }
  };

  const handleTouchMove = (e) => {
    if (startX.current === null) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX.current;

    if (diff > 0 && !swipeRightActions) return;
    if (diff < 0 && !swipeLeftActions) return;

    // Limit drag distance
    if (diff > 100) setOffset(100);
    else if (diff < -100) setOffset(-100);
    else setOffset(diff);
  };

  const handleTouchEnd = () => {
    startX.current = null;
    if (offset > 50) setOffset(100);
    else if (offset < -50) setOffset(-100);
    else setOffset(0);
  };

  const content = (
    <>
      <div className="flex items-center gap-3 w-full overflow-hidden">
        {dragHandle && <div className="shrink-0 cursor-move text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200">{dragHandle}</div>}
        {checkable ? (
          <div className="flex shrink-0 items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Checkbox 
              checked={checked} 
              onChange={(e) => onCheck && onCheck(e.target.checked)} 
            />
          </div>
        ) : avatar ? (
          <img src={avatar} alt="" className="h-10 w-10 rounded-full object-cover shrink-0 border border-zinc-200 dark:border-zinc-700" />
        ) : icon && <span className="flex shrink-0 items-center justify-center text-zinc-400">{icon}</span>}
        
        <div className={`flex-1 truncate ${checked && checkable && !noStrikethrough ? "line-through text-zinc-400 decoration-zinc-400" : ""}`}>{children}</div>
      </div>
      <div className="flex items-center gap-2 shrink-0 ml-2">
        {action && <div>{action}</div>}
        {nestedList && (
            <ChevronDownIcon className={`h-4 w-4 text-zinc-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        )}
      </div>
    </>
  );

  const rowClasses = `relative flex items-center justify-between gap-3 p-4 text-sm text-zinc-700 dark:text-zinc-300 transition-colors ${isInteractive ? "cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50" : ""} ${isDraggable ? "cursor-move active:cursor-grabbing hover:bg-zinc-50 dark:hover:bg-zinc-800/50" : ""} ${selected ? "bg-cyan-50 dark:bg-cyan-900/20" : ""}`;

  if (hasSwipe) {
      return (
        <Component className={`relative overflow-hidden ${className}`} {...props}>
            {swipeRightActions && (
                <div className="absolute inset-y-0 left-0 flex items-center bg-zinc-100 dark:bg-zinc-800">
                    {swipeRightActions}
                </div>
            )}
            {swipeLeftActions && (
                <div className="absolute inset-y-0 right-0 flex items-center bg-zinc-100 dark:bg-zinc-800">
                    {swipeLeftActions}
                </div>
            )}
            <div 
                className={`${rowClasses} bg-white dark:bg-zinc-900 z-10`}
                style={{ transform: `translateX(${offset}px)` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onClick={handleRowClick}
            >
                 {content}
            </div>
            {nestedList && (
                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden min-h-0 border-t border-zinc-100 dark:border-zinc-800">
                        {nestedList}
                    </div>
                </div>
            )}
        </Component>
      );
  }

  if (nestedList) {
      return (
          <Component className={`block p-0 ${className}`} {...props}>
              <div className={rowClasses} onClick={handleRowClick}>
                  {content}
              </div>
              <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden min-h-0 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                      {nestedList}
                  </div>
              </div>
          </Component>
      )
  }

  return (
    <Component 
      onClick={handleRowClick}
      className={`${rowClasses} ${className}`}
      {...props}
    >
      {content}
    </Component>
  );
}