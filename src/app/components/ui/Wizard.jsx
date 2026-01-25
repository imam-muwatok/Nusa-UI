import React, { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import Button from "./Button";

export default function Wizard({ steps, onComplete, className = "" }) {
  const [currentStep, setCurrentStep] = useState(0);
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  const handleNext = () => {
    if (!isLastStep) {
      setCurrentStep((prev) => prev + 1);
    } else {
      if (onComplete) onComplete();
    }
  };

  const handlePrev = () => {
    if (!isFirstStep) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Stepper Header */}
      <div className="mb-8">
        <div className="relative flex items-center justify-between">
          {/* Background Line */}
          <div className="absolute left-0 top-1/2 -z-10 h-1 w-full -translate-y-1/2 bg-zinc-200 dark:bg-zinc-800"></div>
          {/* Active Line */}
          <div 
            className="absolute left-0 top-1/2 -z-10 h-1 -translate-y-1/2 bg-cyan-500 transition-all duration-300 ease-in-out"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          ></div>
          
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;
            
            return (
              <div key={index} className="flex flex-col items-center gap-2">
                <div 
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white transition-all dark:bg-zinc-900 ${
                    isCompleted 
                      ? "border-cyan-500 bg-cyan-500 text-white" 
                      : isCurrent 
                        ? "border-cyan-500 text-cyan-500" 
                        : "border-zinc-300 text-zinc-400 dark:border-zinc-700"
                  }`}
                >
                  {isCompleted ? <CheckIcon className="h-5 w-5" /> : <span className="text-sm font-bold">{index + 1}</span>}
                </div>
                <span className={`hidden text-xs font-medium sm:block ${isCurrent ? "text-cyan-600" : "text-zinc-500"}`}>{step.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="mb-8 min-h-[200px] rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
        <h3 className="mb-4 text-xl font-bold">{steps[currentStep].title}</h3>
        <div className="animate-in fade-in slide-in-from-right-4 duration-300">{steps[currentStep].content}</div>
      </div>

      {/* Footer / Controls */}
      <div className="flex justify-between">
        <Button variant="secondary" type="outline" onClick={handlePrev} disabled={isFirstStep}>Previous</Button>
        <Button variant={isLastStep ? "success" : "primary"} onClick={handleNext}>{isLastStep ? "Finish" : "Next"}</Button>
      </div>
    </div>
  );
}