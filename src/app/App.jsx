import React, { useState, useEffect } from 'react';
import { 
  SunIcon, MoonIcon, CubeIcon, 
  CommandLineIcon, RocketLaunchIcon,
  CheckCircleIcon,
  Bars3BottomLeftIcon // Icon Menu baru
} from '@heroicons/react/24/outline';

// Layouts
import Navbar from './components/layouts/Navbar';
import Sidebar, { SidebarContent } from './components/layouts/Sidebar';
import Footer from './components/layouts/Footer';

// Pages
import IntroPage from './pages/Intro';
import ButtonPage from './pages/Button';
import CardPage from './pages/Card';
import InputPage from './pages/Input';
import ModalPage from './pages/Modal';
import AlertPage from './pages/Alert';
import BadgePage from './pages/Badge';
import AccordionPage from './pages/Accordion';
import BreadcrumbPage from './pages/Breadcrumb';
import CarouselPage from './pages/Carousel';
import CollapsePage from './pages/Collapse';
import DropdownsPage from './pages/Dropdowns';
import SelectPage from './pages/Select';
import CheckboxPage from './pages/Checkbox';
import SwitchPage from './pages/Switch';
import TextareaPage from './pages/Textarea';
import RangePage from './pages/Range';

export default function App() {
  const [dark, setDark] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State sidebar mobile
  const [activePage, setActivePage] = useState('Introduction');

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  return (
    <div className="min-h-screen">
      {/* NAVBAR */}
      <Navbar dark={dark} setDark={setDark} setIsSidebarOpen={setIsSidebarOpen} />

      {/* MOBILE SIDEBAR (DRAWER) */}
      <Sidebar 
        isSidebarOpen={isSidebarOpen} 
        setIsSidebarOpen={setIsSidebarOpen} 
        activePage={activePage} 
        setActivePage={setActivePage} 
      />

      <div className="flex px-4 py-10">
        {/* DESKTOP SIDEBAR (Selalu tampil di layar besar) */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-28">
            <SidebarContent activePage={activePage} setActivePage={setActivePage} />
          </div>
        </aside>

        {/* MAIN CONTENT */}
        {activePage === 'Introduction' && <IntroPage setIsModalOpen={setIsModalOpen} />}
        {activePage === 'Buttons' && <ButtonPage />}
        {activePage === 'Cards' && <CardPage />}
        {activePage === 'Input' && <InputPage />}
        {activePage === 'Modals' && <ModalPage />}
        {activePage === 'Alerts' && <AlertPage />}
        {activePage === 'Badges' && <BadgePage />}
        {activePage === 'Accordion' && <AccordionPage />}
        {activePage === 'Breadcrumb' && <BreadcrumbPage />}
        {activePage === 'Carousel' && <CarouselPage />}
        {activePage === 'Collapse' && <CollapsePage />}
        {activePage === 'Dropdowns' && <DropdownsPage />}
        {activePage === 'Select' && <SelectPage />}
        {(activePage === 'Checkbox' || activePage === 'Radio') && <CheckboxPage />}
        {activePage === 'Switch' && <SwitchPage />}
        {activePage === 'Textarea' && <TextareaPage />}
        {activePage === 'Range' && <RangePage />}
        {['Installation', 'Theming'].includes(activePage) && (
          <main className="flex-1 lg:pl-16">
            <h1 className="text-4xl font-black md:text-6xl mb-4">{activePage}</h1>
            <p className="text-zinc-500 dark:text-zinc-400">Halaman ini sedang dalam pengembangan.</p>
          </main>
        )}
        
      </div>
      {/* Footer */}
      <Footer />
    </div>
    
  );
}