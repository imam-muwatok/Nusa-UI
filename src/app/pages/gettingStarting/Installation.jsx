import React from 'react';

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
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                    <pre className="overflow-x-auto text-sm text-zinc-800 dark:text-zinc-300">
                    <code>{`git clone -b tailwind-dev https://github.com/imam-muwatok/Nusa-UI.git`}</code>
                    </pre>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Installation</span>
                </div>
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                    <pre className="overflow-x-auto text-sm text-zinc-800 dark:text-zinc-300">
                    <code>{`cd Nusa-UI && yarn install`}</code>
                    </pre>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Run</span>
                </div>
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                    <pre className="overflow-x-auto text-sm text-zinc-800 dark:text-zinc-300">
                    <code>{`yarn dev`}</code>
                    </pre>
                </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}