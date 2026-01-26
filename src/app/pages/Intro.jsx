import React, { useState } from "react";
import { 
  CommandLineIcon, 
  RocketLaunchIcon
} from "@heroicons/react/24/outline";
import Alert from "../components/ui/Alert";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-md scale-100 rounded-2xl bg-white p-8 shadow-2xl dark:bg-zinc-900 border dark:border-zinc-800 transition-all">
        <h3 className="text-xl font-bold mb-2">Instalasi Berhasil!</h3>
        <p className="text-zinc-500 dark:text-zinc-400 mb-6">Nusa-UI sekarang aktif di proyek Vite kamu. Kamu bisa mulai membangun komponen UI yang kustom dan ringan.</p>
        <button onClick={onClose} className="w-full rounded-xl bg-cyan-600 py-3 font-bold text-white hover:bg-cyan-500 transition-colors">
          Siap, Mengerti!
        </button>
      </div>
    </div>
  );
};
export default function Intro({ setIsModalOpen = () => {} }) {
    const [showAlert, setShowAlert] = useState(true);

    return (
        <main className="flex-1 lg:pl-16">
          {/* Hero Section */}
          <section className="mb-16">
            {showAlert && (
              <div className="mb-8">
                <Alert variant="success" onClose={() => setShowAlert(false)}>
                  Nusa-UI v4.0 Alpha sudah tersedia untuk dicoba!
                </Alert>
              </div>
            )}
            
            <h1 className="text-5xl font-black leading-tight md:text-7xl mb-6">
              Membangun UI dengan <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Cepat & Elegan.</span>
            </h1>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mb-10 leading-relaxed">
              Framework UI berbasis Tailwind CSS 4 yang ringan, modular, dan dirancang khusus untuk kecepatan development maksimal.
            </p>
          </section>

          {/* Features Grid */}
          <section className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
              <CommandLineIcon className="h-10 w-10 text-cyan-500 mb-6" />
              <h3 className="text-xl font-bold mb-2">CSS-First Config</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">Konfigurasi tema langsung di CSS tanpa file JS tambahan yang berat.</p>
            </div>
            <div className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
              <RocketLaunchIcon className="h-10 w-10 text-cyan-500 mb-6" />
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">Ditenagai oleh Lightning CSS untuk proses compile yang hampir instan.</p>
            </div>
          </section>
        </main>
    )
}