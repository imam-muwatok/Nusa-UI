import React from "react";
import { CubeIcon } from "@heroicons/react/24/outline";

export default function Intro() {
    return (
        <main className="flex-1 lg:pl-16">
          <h1 className="text-4xl font-black md:text-6xl mb-4">Dokumentasi</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8">Gunakan menu di samping (atau klik icon menu di mobile) untuk navigasi komponen.</p>
          
          <div className="p-12 rounded-3xl border-2 border-dashed border-zinc-200 dark:border-zinc-800 flex flex-col items-center text-center">
            <CubeIcon className="h-12 w-12 text-zinc-300 mb-4" />
            <p className="text-sm text-zinc-400">Pilih komponen untuk melihat preview</p>
          </div>
        </main>
    )
}