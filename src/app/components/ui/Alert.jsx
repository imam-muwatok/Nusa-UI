import React from "react";
import {
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const variants = {
  primary: {
    base: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-blue-400",
    icon: <InformationCircleIcon className="h-5 w-5" />,
  },
  secondary: {
    base: "border-zinc-200 bg-zinc-50 text-zinc-800 dark:border-zinc-900/50 dark:bg-zinc-950/30 dark:text-zinc-400",
    icon: <CheckCircleIcon className="h-5 w-5" />,
  },
  info: {
    base: "border-cyan-200 bg-cyan-50 text-cyan-800 dark:border-cyan-900/50 dark:bg-cyan-950/30 dark:text-cyan-400",
    icon: <InformationCircleIcon className="h-5 w-5" />,
  },
  success: {
    base: "border-green-200 bg-green-50 text-green-800 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-400",
    icon: <CheckCircleIcon className="h-5 w-5" />,
  },
  warning: {
    base: "border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-900/50 dark:bg-yellow-950/30 dark:text-yellow-400",
    icon: <ExclamationTriangleIcon className="h-5 w-5" />,
  },
  danger: {
    base: "border-red-200 bg-red-50 text-red-800 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400",
    icon: <XCircleIcon className="h-5 w-5" />,
  },
};

export default function Alert({ children, onClose, variant = "info" }) {
  const variantConfig = variants[variant] || variants.info;
  return (
    <div className={`flex items-center justify-between rounded-xl border p-4 ${variantConfig.base}`}>
      <div className="flex items-center gap-3">
        {variantConfig.icon}
        <span className="text-sm font-medium">{children}</span>
      </div>
      {onClose && (
        <button onClick={onClose} className="hover:opacity-70">
          <XMarkIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}