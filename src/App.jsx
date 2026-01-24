import React, { useState, useEffect } from 'react';
import { 
  SunIcon, MoonIcon, CubeIcon, 
  CommandLineIcon, RocketLaunchIcon,
  XMarkIcon, CheckCircleIcon,
  Bars3BottomLeftIcon // Icon Menu baru
} from '@heroicons/react/24/outline';

export default function App() {
  const [dark, setDark] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State sidebar mobile

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  // Komponen Sidebar Content agar tidak duplikasi
  const SidebarContent = () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Mulai</h4>
        <nav className="flex flex-col gap-2 text-sm font-medium">
          <a className="text-cyan-500 cursor-pointer">Pengenalan</a>
          <a className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white cursor-pointer">Instalasi</a>
          <a className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white cursor-pointer">Kustomisasi</a>
        </nav>
      </div>
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Komponen</h4>
        <nav className="flex flex-col gap-2 text-sm font-medium">
          {['Buttons', 'Cards', 'Forms', 'Modals', 'Alerts'].map(item => (
            <a key={item} className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white cursor-pointer">{item}</a>
          ))}
        </nav>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            {/* Tombol Hamburger Menu (Hanya muncul di Mobile) */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-1 text-zinc-600 dark:text-zinc-400"
            >
              <Bars3BottomLeftIcon className="h-6 w-6" />
            </button>
            
            <div className="flex items-center gap-2 text-xl font-black tracking-tighter uppercase">
              <span className="bg-cyan-500 px-2 py-0.5 rounded text-white">Nusa</span>
              <span className="hidden xs:block text-zinc-900 dark:text-white">UI</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => setDark(!dark)} className="rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800">
              {dark ? <SunIcon className="h-5 w-5 text-yellow-400" /> : <MoonIcon className="h-5 w-5 text-zinc-600" />}
            </button>
            <button className="rounded-full bg-zinc-900 px-5 py-2 text-xs font-bold text-white dark:bg-white dark:text-black">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR (DRAWER) */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)}></div>
        
        {/* Sidebar Panel */}
        <aside className={`absolute top-0 left-0 h-full w-72 bg-white p-6 shadow-xl dark:bg-zinc-900 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex items-center justify-between mb-8">
            <div className="font-black text-lg uppercase tracking-tighter">Nusa-UI</div>
            <button onClick={() => setIsSidebarOpen(false)}>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <SidebarContent />
        </aside>
      </div>

      <div className="container mx-auto flex px-6 py-10">
        {/* DESKTOP SIDEBAR (Selalu tampil di layar besar) */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-28">
            <SidebarContent />
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 lg:pl-16">
          <h1 className="text-4xl font-black md:text-6xl mb-4">Dokumentasi</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8">Gunakan menu di samping (atau klik icon menu di mobile) untuk navigasi komponen.</p>
          
          <div className="p-12 rounded-3xl border-2 border-dashed border-zinc-200 dark:border-zinc-800 flex flex-col items-center text-center">
            <CubeIcon className="h-12 w-12 text-zinc-300 mb-4" />
            <p className="text-sm text-zinc-400">Pilih komponen untuk melihat preview</p>
          </div>
        </main>
      </div>
    </div>
  );
}