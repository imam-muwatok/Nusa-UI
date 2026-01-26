import React from "react";
import { EllipsisHorizontalIcon, PhotoIcon, ShareIcon } from "@heroicons/react/24/outline";
import CodeBlock from "../../components/ui/CodeBlock";

export default function CardPage() {
  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Cards</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen kontainer fleksibel untuk menampilkan konten dan tindakan.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Cards */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic</h2>
          <CodeBlock code={`{/* Simple Card */}
<div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
  <h3 className="text-lg font-bold mb-2">Simple Card</h3>
  <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">
    Kartu sederhana dengan judul dan teks deskripsi. Cocok untuk menampilkan informasi ringkas.
  </p>
  <button className="text-sm font-bold text-cyan-600 hover:text-cyan-500">Read more &rarr;</button>
</div>

{/* With Header Action */}
<div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-lg font-bold">With Header</h3>
    <button className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200">
        <EllipsisHorizontalIcon className="h-6 w-6" />
    </button>
  </div>
  <p className="text-zinc-500 dark:text-zinc-400 text-sm">
    Kartu dengan header dan aksi opsional di pojok kanan atas.
  </p>
</div>`}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
              {/* Simple Card */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="text-lg font-bold mb-2">Simple Card</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">
                  Kartu sederhana dengan judul dan teks deskripsi. Cocok untuk menampilkan informasi ringkas.
                </p>
                <button className="text-sm font-bold text-cyan-600 hover:text-cyan-500">Read more &rarr;</button>
              </div>
              
              {/* With Header Action */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">With Header</h3>
                  <button className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200">
                      <EllipsisHorizontalIcon className="h-6 w-6" />
                  </button>
                </div>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  Kartu dengan header dan aksi opsional di pojok kanan atas.
                </p>
              </div>
            </div>
          </CodeBlock>
        </section>

        {/* Image Cards */}
        <section>
          <h2 className="text-2xl font-bold mb-6">With Image</h2>
          <CodeBlock code={`<div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
  <div className="h-48 w-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-300 dark:text-zinc-700">
    <PhotoIcon className="h-12 w-12" />
  </div>
  <div className="p-6">
    <h3 className="text-lg font-bold mb-2">Card Title</h3>
    <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-6">
      Deskripsi singkat tentang konten kartu ini. Gambar di atas memberikan konteks visual yang menarik.
    </p>
    <button className="w-full rounded-xl bg-zinc-900 py-3 text-sm font-bold text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-colors">
      Action
    </button>
  </div>
</div>`}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="h-48 w-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-300 dark:text-zinc-700">
                  <PhotoIcon className="h-12 w-12" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">Card Title</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-6">
                    Deskripsi singkat tentang konten kartu ini. Gambar di atas memberikan konteks visual yang menarik.
                  </p>
                  <button className="w-full rounded-xl bg-zinc-900 py-3 text-sm font-bold text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-colors">
                    Action
                  </button>
                </div>
              </div>
            </div>
          </CodeBlock>
        </section>

        {/* Interactive */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Interactive</h2>
          <CodeBlock code={`<div className="group cursor-pointer rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-cyan-500/50 dark:border-zinc-800 dark:bg-zinc-900">
  <div className="mb-4 h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
    <ShareIcon className="h-5 w-5" />
  </div>
  <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-500 transition-colors">Hover Effect</h3>
  <p className="text-zinc-500 dark:text-zinc-400 text-sm">
    Kartu ini memiliki efek hover yang halus, cocok untuk item yang dapat diklik atau navigasi.
  </p>
</div>`}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
               <div className="group cursor-pointer rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-cyan-500/50 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-4 h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
                  <ShareIcon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-500 transition-colors">Hover Effect</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  Kartu ini memiliki efek hover yang halus, cocok untuk item yang dapat diklik atau navigasi.
                </p>
              </div>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}