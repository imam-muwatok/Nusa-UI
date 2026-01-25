import React, { useState, useRef, useEffect } from "react";
import { CloudArrowUpIcon, DocumentIcon, XMarkIcon } from "@heroicons/react/24/outline";

const variants = {
  primary: {
    active: "border-cyan-500 bg-cyan-50 dark:border-cyan-500/50 dark:bg-cyan-900/20",
    text: "text-cyan-600",
    hover: "hover:border-cyan-400 hover:bg-cyan-50/50 dark:hover:border-cyan-700 dark:hover:bg-cyan-900/10"
  },
  secondary: {
    active: "border-zinc-500 bg-zinc-50 dark:border-zinc-500/50 dark:bg-zinc-900/20",
    text: "text-zinc-600",
    hover: "hover:border-zinc-400 hover:bg-zinc-50/50 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/10"
  },
  success: {
    active: "border-green-500 bg-green-50 dark:border-green-500/50 dark:bg-green-900/20",
    text: "text-green-600",
    hover: "hover:border-green-400 hover:bg-green-50/50 dark:hover:border-green-700 dark:hover:bg-green-900/10"
  },
  danger: {
    active: "border-red-500 bg-red-50 dark:border-red-500/50 dark:bg-red-900/20",
    text: "text-red-600",
    hover: "hover:border-red-400 hover:bg-red-50/50 dark:hover:border-red-700 dark:hover:bg-red-900/10"
  },
  warning: {
    active: "border-yellow-500 bg-yellow-50 dark:border-yellow-500/50 dark:bg-yellow-900/20",
    text: "text-yellow-600",
    hover: "hover:border-yellow-400 hover:bg-yellow-50/50 dark:hover:border-yellow-700 dark:hover:bg-yellow-900/10"
  }
};

const sizes = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-10",
};

const iconSizes = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
  xl: "h-14 w-14",
};

export default function FileInput({
  label,
  helperText,
  multiple = false,
  accept,
  maxSize,
  onChange,
  disabled = false,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);
  const filesRef = useRef([]); // Track files for cleanup

  const variantStyle = variants[variant] || variants.primary;
  const sizeClass = sizes[size] || sizes.md;
  const iconSizeClass = iconSizes[size] || iconSizes.md;

  // Update ref whenever files change
  useEffect(() => {
    filesRef.current = files;
  }, [files]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      filesRef.current.forEach(file => {
        if (file.preview) URL.revokeObjectURL(file.preview);
      });
    };
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    if (!disabled) setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (disabled) return;

    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleInputChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    handleFiles(selectedFiles);
  };

  const handleFiles = (newFiles) => {
    setError(null);

    // Filter files by size if maxSize is provided
    const validNewFiles = [];
    if (maxSize) {
      newFiles.forEach(file => {
        if (file.size > maxSize) {
          setError(`File "${file.name}" exceeds maximum size of ${(maxSize / (1024 * 1024)).toFixed(1)}MB.`);
        } else {
          validNewFiles.push(file);
        }
      });
      if (validNewFiles.length === 0 && newFiles.length > 0) return;
    } else {
      validNewFiles.push(...newFiles);
    }

    // If single file mode, revoke previous file's URL if exists
    if (!multiple && files.length > 0) {
        files.forEach(file => {
             if (file.preview) URL.revokeObjectURL(file.preview);
        });
    }

    const processedFiles = validNewFiles.map(file => {
        if (file.type.startsWith('image/')) {
            Object.assign(file, {
                preview: URL.createObjectURL(file)
            });
        }
        return file;
    });

    let updatedFiles = multiple ? [...files, ...processedFiles] : processedFiles;
    setFiles(updatedFiles);
    if (onChange) onChange(updatedFiles);
  };

  const removeFile = (index) => {
    const fileToRemove = files[index];
    if (fileToRemove.preview) URL.revokeObjectURL(fileToRemove.preview);

    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    if (onChange) onChange(updatedFiles);
    
    // Reset input value agar bisa memilih file yang sama lagi jika dihapus
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className={className}>
      {label && <label className="mb-2 block text-sm font-bold text-zinc-700 dark:text-zinc-300">{label}</label>}
      
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !disabled && inputRef.current.click()}
        className={`relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed transition-all text-center ${sizeClass} ${
          disabled
            ? "cursor-not-allowed opacity-60 border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900"
            : isDragging
            ? `cursor-pointer ${variantStyle.active}`
            : `cursor-pointer border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-900 ${variantStyle.hover}`
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          multiple={multiple}
          accept={accept}
          onChange={handleInputChange}
          disabled={disabled}
          {...props}
        />
        
        <CloudArrowUpIcon className={`${iconSizeClass} mb-3 ${isDragging ? variantStyle.text : "text-zinc-400"}`} />
        
        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          <span className={`${variantStyle.text} font-bold hover:underline`}>Click to upload</span> or drag and drop
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
          {accept ? `Supported files: ${accept}` : "SVG, PNG, JPG or GIF (max. 800x400px)"}
          {maxSize && ` (Max ${(maxSize / (1024 * 1024)).toFixed(1)}MB)`}
        </p>
      </div>

      {error && <p className="mt-2 text-xs font-medium text-red-600 dark:text-red-400">{error}</p>}
      {helperText && !error && <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">{helperText}</p>}

      {/* File List */}
      {files.length > 0 && (
        <ul className="mt-4 space-y-2">
          {files.map((file, index) => (
            <li key={index} className="flex items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center gap-3 overflow-hidden">
                {file.preview ? (
                  <img src={file.preview} alt={file.name} className="h-10 w-10 shrink-0 rounded-lg object-cover border border-zinc-200 dark:border-zinc-700" />
                ) : (
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                    <DocumentIcon className="h-5 w-5 text-zinc-400" />
                  </div>
                )}
                <div className="flex flex-col truncate">
                    <span className="truncate text-sm font-medium text-zinc-700 dark:text-zinc-300">{file.name}</span>
                    <span className="text-xs text-zinc-500">{(file.size / 1024).toFixed(1)} KB</span>
                </div>
              </div>
              {!disabled && (
                <button
                    onClick={() => removeFile(index)}
                    className="ml-2 rounded-full p-1 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
                >
                    <XMarkIcon className="h-4 w-4" />
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}