import React from 'react';

export default function ThemingPage() {
  return (
    <main className="flex-1 lg:pl-16">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-black md:text-6xl mb-6 text-zinc-900 dark:text-white">Theming</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          Sesuaikan tampilan dan nuansa Nusa-UI agar sesuai dengan merek atau preferensi desain Anda.
          Karena dibangun di atas Tailwind CSS, kustomisasi menjadi sangat fleksibel dan mudah.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-zinc-100">Mode Gelap (Dark Mode)</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Nusa-UI mendukung mode gelap secara native menggunakan strategi <code>class</code> dari Tailwind.
            Ini memungkinkan kontrol manual atas tema, yang biasanya dikelola melalui state React atau local storage.
          </p>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
            <pre className="overflow-x-auto text-sm text-zinc-800 dark:text-zinc-300">
              <code>{`// tailwind.config.js
module.exports = {
  darkMode: 'class',
  // ...
}`}</code>
            </pre>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-zinc-100">Palet Warna</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Berikut adalah palet warna yang didefinisikan dalam tema aplikasi (<code>@theme</code>).
            Warna-warna ini dipetakan ke variabel CSS untuk konsistensi di seluruh komponen.
          </p>
          
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            <div className="space-y-2">
              <div className="h-12 w-full rounded-lg bg-nusa shadow-sm ring-1 ring-inset ring-black/5 dark:ring-white/10"></div>
              <div className="text-center">
                <p className="text-xs font-semibold text-zinc-900 dark:text-white">Nusa</p>
                <p className="text-[10px] text-zinc-500">cyan-500</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-12 w-full rounded-lg bg-primary shadow-sm ring-1 ring-inset ring-black/5 dark:ring-white/10"></div>
              <div className="text-center">
                <p className="text-xs font-semibold text-zinc-900 dark:text-white">Primary</p>
                <p className="text-[10px] text-zinc-500">blue-600</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-12 w-full rounded-lg bg-secondary shadow-sm ring-1 ring-inset ring-black/5 dark:ring-white/10"></div>
              <div className="text-center">
                <p className="text-xs font-semibold text-zinc-900 dark:text-white">Secondary</p>
                <p className="text-[10px] text-zinc-500">zinc-500</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-12 w-full rounded-lg bg-success shadow-sm ring-1 ring-inset ring-black/5 dark:ring-white/10"></div>
              <div className="text-center">
                <p className="text-xs font-semibold text-zinc-900 dark:text-white">Success</p>
                <p className="text-[10px] text-zinc-500">green-500</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-12 w-full rounded-lg bg-danger shadow-sm ring-1 ring-inset ring-black/5 dark:ring-white/10"></div>
              <div className="text-center">
                <p className="text-xs font-semibold text-zinc-900 dark:text-white">Danger</p>
                <p className="text-[10px] text-zinc-500">red-500</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-12 w-full rounded-lg bg-warning shadow-sm ring-1 ring-inset ring-black/5 dark:ring-white/10"></div>
              <div className="text-center">
                <p className="text-xs font-semibold text-zinc-900 dark:text-white">Warning</p>
                <p className="text-[10px] text-zinc-500">yellow-500</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-12 w-full rounded-lg bg-info shadow-sm ring-1 ring-inset ring-black/5 dark:ring-white/10"></div>
              <div className="text-center">
                <p className="text-xs font-semibold text-zinc-900 dark:text-white">Info</p>
                <p className="text-[10px] text-zinc-500">cyan-500</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-12 w-full rounded-lg bg-light shadow-sm ring-1 ring-inset ring-black/5 dark:ring-white/10"></div>
              <div className="text-center">
                <p className="text-xs font-semibold text-zinc-900 dark:text-white">Light</p>
                <p className="text-[10px] text-zinc-500">zinc-100</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-12 w-full rounded-lg bg-dark shadow-sm ring-1 ring-inset ring-black/5 dark:ring-white/10"></div>
              <div className="text-center">
                <p className="text-xs font-semibold text-zinc-900 dark:text-white">Dark</p>
                <p className="text-[10px] text-zinc-500">zinc-900</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-zinc-100">Mengganti Warna Utama</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Jika Anda ingin mengubah warna utama, Anda bisa melakukannya di file CSS utama Anda (<code>src/index.css</code>) dengan mengubah variabel di dalam blok <code>@theme</code>.
          </p>
           <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
            <pre className="overflow-x-auto text-sm text-zinc-800 dark:text-zinc-300">
              <code>{`/* src/index.css */
@theme {
  /* Mengganti warna Nusa (Brand) ke Indigo */
  --color-nusa: var(--color-indigo-500);
  
  /* Mengganti warna Primary ke Violet */
  --color-primary: var(--color-violet-600);
}`}</code>
            </pre>
          </div>
        </section>
      </div>
    </main>
  );
}