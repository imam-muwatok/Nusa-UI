import React, { useState } from 'react';
import { ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/outline";

const CommandBlock = ({ command }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50 group">
      <pre className="overflow-x-auto text-sm text-zinc-800 dark:text-zinc-300 pr-10">
        <code>{command}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        title="Copy command"
      >
        {copied ? <CheckIcon className="h-4 w-4 text-green-500" /> : <ClipboardDocumentIcon className="h-4 w-4" />}
      </button>
    </div>
  );
};

export default function InstallationPage() {
  return (
    <main className="flex-1 lg:pl-16">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-black md:text-6xl mb-6 text-zinc-900 dark:text-white">Installation</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          Mulai menggunakan Nusa-UI di proyek React Anda. Ikuti panduan di bawah ini untuk instalasi dan konfigurasi awal menggunakan Tailwind CSS v4.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-zinc-100">1. Clone this repository</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Clone repo github ini.
          </p>
          
          <div className="space-y-6">
            <div>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Clone</span>
                </div>
                <CommandBlock command="git clone -b tailwind-dev https://github.com/imam-muwatok/Nusa-UI.git" />
            </div>
            <div>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Installation</span>
                </div>
                <CommandBlock command="cd Nusa-UI && yarn install" />
            </div>
            <div>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Run</span>
                </div>
                <CommandBlock command="yarn dev" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}