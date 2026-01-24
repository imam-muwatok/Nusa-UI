import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Carousel({ children, autoSlide = false, autoSlideInterval = 3000, className = "" }) {
  const slides = React.Children.toArray(children);
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, slides.length]);

  return (
    <div className={`overflow-hidden relative group rounded-2xl ${className}`}>
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
            <div key={index} className="min-w-full flex-shrink-0">
                {slide}
            </div>
        ))}
      </div>
      
      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button onClick={prev} className="p-2 rounded-full shadow-lg bg-white/80 text-zinc-800 hover:bg-white transition-colors backdrop-blur-sm">
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <button onClick={next} className="p-2 rounded-full shadow-lg bg-white/80 text-zinc-800 hover:bg-white transition-colors backdrop-blur-sm">
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurr(i)}
              className={`transition-all w-2 h-2 rounded-full shadow-sm ${curr === i ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}