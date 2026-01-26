import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import CodeBlock from "../components/ui/CodeBlock";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-md scale-100 rounded-2xl bg-white p-6 shadow-2xl dark:bg-zinc-900 border dark:border-zinc-800 transition-all animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">{title}</h3>
            <button onClick={onClose} className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <XMarkIcon className="h-6 w-6" />
            </button>
        </div>
        <div className="text-zinc-500 dark:text-zinc-400 mb-6">
            {children}
        </div>
        <div className="flex justify-end gap-3">
            <button 
                onClick={onClose} 
                className="rounded-xl px-4 py-2 text-sm font-bold text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors"
            >
                Batal
            </button>
            <button 
                onClick={onClose} 
                className="rounded-xl bg-cyan-600 px-4 py-2 text-sm font-bold text-white hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-500/20"
            >
                Konfirmasi
            </button>
        </div>
      </div>
    </div>
  );
};

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Modals</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Dialog overlay yang muncul di atas konten utama untuk menarik perhatian pengguna.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Live Demo</h2>
          <CodeBlock code={`/* State management */
const [isOpen, setIsOpen] = useState(false);

/* Trigger Button */
<button 
  onClick={() => setIsOpen(true)}
  className="rounded-xl bg-zinc-900 px-8 py-4 font-bold text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-all active:scale-95 shadow-xl"
>
  Buka Modal Demo
</button>

/* Modal Component */
<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
  title="Konfirmasi Aksi"
>
  <p>Apakah Anda yakin ingin melanjutkan aksi ini? Tindakan ini tidak dapat dibatalkan setelah dikonfirmasi.</p>
</Modal>`}>
            <div className="p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 flex flex-col items-center justify-center text-center gap-6 w-full">
              <p className="text-zinc-500 dark:text-zinc-400 max-w-md">
                Klik tombol di bawah untuk memunculkan modal. Modal akan menutupi konten ini dan memfokuskan interaksi pengguna.
              </p>
              <button 
                  onClick={() => setIsOpen(true)}
                  className="rounded-xl bg-zinc-900 px-8 py-4 font-bold text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-all active:scale-95 shadow-xl"
              >
                Buka Modal Demo
              </button>
            </div>
          </CodeBlock>
        </section>
      </div>

      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        title="Konfirmasi Aksi"
      >
        <p>Apakah Anda yakin ingin melanjutkan aksi ini? Tindakan ini tidak dapat dibatalkan setelah dikonfirmasi.</p>
      </Modal>
    </main>
  );
}