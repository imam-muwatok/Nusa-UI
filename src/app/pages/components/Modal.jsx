import React, { useState, useEffect } from "react";
import { XMarkIcon, CheckCircleIcon, ExclamationCircleIcon, ExclamationTriangleIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import CodeBlock from "../../components/ui/CodeBlock";

const Modal = ({ isOpen, onClose, title, children, variant = "default", autoCloseDelay = null }) => {
  const [isMounted, setIsMounted] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    } else {
      // Wait for exit animation to finish before unmounting
      const timer = setTimeout(() => setIsMounted(false), 300); // Match longest animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    // Auto-close for success variant if delay is provided
    if (isOpen && variant === 'success' && typeof autoCloseDelay === 'number') {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [isOpen, variant, autoCloseDelay, onClose]);

  if (!isMounted) return null;

  const isAlert = variant !== "default";

  const getIcon = () => {
    switch (variant) {
      case "success": return <CheckCircleIcon className="h-20 w-20 text-green-500 mx-auto mb-6 animate-sweet-icon" />;
      case "danger": return <ExclamationCircleIcon className="h-20 w-20 text-red-500 mx-auto mb-6 animate-sweet-icon" />;
      case "warning": return <ExclamationTriangleIcon className="h-20 w-20 text-yellow-500 mx-auto mb-6 animate-sweet-icon" />;
      case "info": return <InformationCircleIcon className="h-20 w-20 text-blue-500 mx-auto mb-6 animate-sweet-icon" />;
      default: return null;
    }
  };

  const getConfirmButtonClass = () => {
    switch (variant) {
      case "success": return "bg-green-600 hover:bg-green-500 shadow-green-500/20";
      case "danger": return "bg-red-600 hover:bg-red-500 shadow-red-500/20";
      case "warning": return "bg-yellow-500 hover:bg-yellow-400 shadow-yellow-500/20";
      case "info": return "bg-blue-600 hover:bg-blue-500 shadow-blue-500/20";
      default: return "bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/20";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-zinc-950/60 backdrop-blur-sm ${isOpen ? 'animate-in fade-in duration-300' : 'animate-out fade-out duration-200'}`}
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className={`relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-zinc-900 border dark:border-zinc-800 ${isAlert ? "text-center pt-10" : ""} ${isOpen ? "animate-sweet-pop" : "animate-out fade-out zoom-out-95 duration-200"}`}>
        {!isAlert && (
          <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">{title}</h3>
              <button onClick={onClose} className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <XMarkIcon className="h-6 w-6" />
              </button>
          </div>
        )}

        {isAlert && getIcon()}
        {isAlert && title && <h3 className="text-2xl font-bold mb-2">{title}</h3>}

        <div className={`text-zinc-500 dark:text-zinc-400 ${isAlert ? "mb-8" : "mb-6"}`}>
            {children}
        </div>
        <div className={`flex gap-3 ${isAlert ? "justify-center" : "justify-end"}`}>
            <button 
                onClick={onClose} 
                className="rounded-xl px-4 py-2 text-sm font-bold text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors"
            >
                {isAlert ? "Tutup" : "Batal"}
            </button>
            <button 
                onClick={onClose} 
                className={`rounded-xl px-6 py-2 text-sm font-bold text-white shadow-lg transition-colors ${getConfirmButtonClass()}`}
            >
                {isAlert ? "Oke" : "Konfirmasi"}
            </button>
        </div>
      </div>
    </div>
  );
};

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isDangerOpen, setIsDangerOpen] = useState(false);
  const [isWarningOpen, setIsWarningOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

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

        {/* Live Demo for Alert Variants */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Live Demo: Alert Variants</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Klik tombol di bawah untuk melihat modal notifikasi dengan berbagai varian.
          </p>
          <div className="p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 flex flex-col items-center justify-center text-center gap-6 w-full">
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => setIsSuccessOpen(true)} className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-500 transition-all shadow-lg shadow-green-500/20">Show Success Modal</button>
              <button onClick={() => setIsDangerOpen(true)} className="rounded-xl bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-500 transition-all shadow-lg shadow-red-500/20">Show Danger Modal</button>
              <button onClick={() => setIsWarningOpen(true)} className="rounded-xl bg-yellow-500 px-6 py-3 font-bold text-white hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/20">Show Warning Modal</button>
              <button onClick={() => setIsInfoOpen(true)} className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20">Show Info Modal</button>
            </div>
          </div>
        </section>

        {/* Alert Variants */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Alert Variants</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Modal juga mendukung varian alert seperti <code>success</code>, <code>danger</code>, <code>warning</code>, dan <code>info</code> untuk notifikasi status.
          </p>
          <CodeBlock code={`{/* The success modal will auto-close after 1 second */}
<Modal 
  variant="success" 
  title="Berhasil!" 
  isOpen={isOpen} 
  onClose={close}
  autoCloseDelay={1000}
>
  <p>Data berhasil disimpan. Modal ini akan tertutup otomatis.</p>
</Modal>`}>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setIsSuccessOpen(true)} className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-500 transition-all shadow-lg shadow-green-500/20">Success</button>
              <button onClick={() => setIsDangerOpen(true)} className="rounded-xl bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-500 transition-all shadow-lg shadow-red-500/20">Danger</button>
              <button onClick={() => setIsWarningOpen(true)} className="rounded-xl bg-yellow-500 px-6 py-3 font-bold text-white hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/20">Warning</button>
              <button onClick={() => setIsInfoOpen(true)} className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20">Info</button>
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

      <Modal 
        isOpen={isSuccessOpen} 
        onClose={() => setIsSuccessOpen(false)} 
        variant="success" 
        title="Berhasil!"
        autoCloseDelay={1000}
      >
        <p>Data Anda telah berhasil disimpan ke database. Modal ini akan tertutup otomatis.</p>
      </Modal>
      <Modal isOpen={isDangerOpen} onClose={() => setIsDangerOpen(false)} variant="danger" title="Terhapus!">
        <p>Data yang dihapus tidak dapat dikembalikan lagi.</p>
      </Modal>
      <Modal isOpen={isWarningOpen} onClose={() => setIsWarningOpen(false)} variant="warning" title="Peringatan!">
        <p>Pastikan Anda telah memeriksa kembali data sebelum melanjutkan.</p>
      </Modal>
      <Modal isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} variant="info" title="Informasi">
        <p>Fitur ini akan tersedia pada pembaruan berikutnya.</p>
      </Modal>
    </main>
  );
}