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
          <h2 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-zinc-100">1. Buat Proyek React</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Jika Anda belum memiliki proyek, buatlah menggunakan Vite.
          </p>
          
          <div className="space-y-6">
            <div>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">yarn</span>
                </div>
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                    <pre className="overflow-x-auto text-sm text-zinc-800 dark:text-zinc-300">
                    <code>{`yarn create vite my-project --template react
cd my-project`}</code>
                    </pre>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">npm</span>
                </div>
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                    <pre className="overflow-x-auto text-sm text-zinc-800 dark:text-zinc-300">
                    <code>{`npm create vite@latest my-project -- --template react
cd my-project`}</code>
                    </pre>
                </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-zinc-100">2. Install Tailwind CSS</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Install <code>tailwindcss</code> dan <code>@tailwindcss/vite</code>.
          </p>
           <div className="space-y-6">
            <div>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">yarn</span>
                </div>
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                    <pre className="overflow-x-auto text-sm text-zinc-800 dark:text-zinc-300">
                    <code>{`yarn add tailwindcss @tailwindcss/vite`}</code>
                    </pre>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">npm</span>
                </div>
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                    <pre className="overflow-x-auto text-sm text-zinc-800 dark:text-zinc-300">
                    <code>{`npm install tailwindcss @tailwindcss/vite`}</code>
                    </pre>
                </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-zinc-100">3. Konfigurasi Vite Plugin</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Tambahkan plugin <code>@tailwindcss/vite</code> ke konfigurasi Vite Anda (<code>vite.config.js</code> atau <code>vite.config.ts</code>).
          </p>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
            <pre className="overflow-x-auto text-sm text-zinc-800 dark:text-zinc-300">
              <code>{`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})`}</code>
            </pre>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-zinc-100">4. Import Tailwind CSS</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Tambahkan <code>@import "tailwindcss";</code> ke file CSS utama Anda (biasanya <code>src/index.css</code>).
          </p>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
              <pre className="overflow-x-auto text-sm text-zinc-800 dark:text-zinc-300">
              <code>{`@import "tailwindcss";`}</code>
              </pre>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-zinc-100">5. Jalankan Proyek</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Jalankan proses build dengan perintah berikut.
          </p>
          <div className="space-y-6">
             <div>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">yarn</span>
                </div>
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                    <pre className="overflow-x-auto text-sm text-zinc-800 dark:text-zinc-300">
                    <code>{`yarn dev`}</code>
                    </pre>
                </div>
            </div>
          </div>
        </section>

         <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-zinc-100">6. Tambahkan Dependensi Ikon</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Sebagian besar komponen Nusa-UI menggunakan <code>@heroicons/react</code>.
          </p>
          <div className="space-y-6">
            <div>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">yarn</span>
                </div>
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                    <pre className="overflow-x-auto text-sm text-zinc-800 dark:text-zinc-300">
                    <code>{`yarn add @heroicons/react`}</code>
                    </pre>
                </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}