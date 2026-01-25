import React, { useState, useEffect } from "react";
import { XMarkIcon, CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const TOAST_EVENT = "nusa-ui:toast";

export function toast(props) {
  if (typeof window !== "undefined") {
    const event = new CustomEvent(TOAST_EVENT, { detail: props });
    window.dispatchEvent(event);
  }
}

export default function Toaster({ position = "top-right" }) {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handleToast = (event) => {
      const newToast = { id: Date.now(), ...event.detail };
      setToasts((prev) => [...prev, newToast]);

      if (newToast.duration !== Infinity) {
        setTimeout(() => {
          removeToast(newToast.id);
        }, newToast.duration || 3000);
      }
    };

    window.addEventListener(TOAST_EVENT, handleToast);
    return () => window.removeEventListener(TOAST_EVENT, handleToast);
  }, []);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  };

  return (
    <div className={`fixed z-[100] flex flex-col gap-2 ${positionClasses[position]}`}>
      {toasts.map((t) => (
        <div key={t.id} className="flex w-80 items-start gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-lg dark:border-zinc-800 dark:bg-zinc-900 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="shrink-0">
            {t.type === "success" && <CheckCircleIcon className="h-6 w-6 text-green-500" />}
            {t.type === "error" && <ExclamationCircleIcon className="h-6 w-6 text-red-500" />}
            {t.type === "warning" && <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500" />}
            {(t.type === "info" || !t.type) && <InformationCircleIcon className="h-6 w-6 text-cyan-500" />}
          </div>
          <div className="flex-1">
            {t.title && <h4 className="text-sm font-bold text-zinc-900 dark:text-white">{t.title}</h4>}
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{t.message}</p>
          </div>
          <button onClick={() => removeToast(t.id)} className="shrink-0 text-zinc-400 hover:text-zinc-900 dark:hover:text-white">
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
      ))}
    </div>
  );
}