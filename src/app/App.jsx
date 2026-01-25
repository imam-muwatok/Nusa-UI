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
import Select2Page from './pages/Select2';
import CheckboxPage from './pages/Checkbox';
import SwitchPage from './pages/Switch';
import TextareaPage from './pages/Textarea';
import RangePage from './pages/Range';
import FileInputPage from './pages/FileInput';
import FormControlPage from './pages/FormControl';
import FloatingLabelsPage from './pages/FloatingLabels';
import WizardPage from './pages/Wizard';
import AutocompletePage from './pages/Autocomplete';
import TimelinePage from './pages/Timeline';
import RatingPage from './pages/Rating';
import DatePickerPage from './pages/DatePicker';
import TimePickerPage from './pages/TimePicker';
import CalendarPage from './pages/Calendar';
import PaginationPage from './pages/Pagination';
import ListsPage from './pages/Lists';
import TabsPage from './pages/Tabs';
import NavsPage from './pages/Navs';
import NavbarPage from './pages/Navbar';
import OffcanvasPage from './pages/Offcanvas';
import PopoversPage from './pages/Popovers';
import TooltipsPage from './pages/Tooltips';
import TablePage from './pages/Table';
import ToastsPage from './pages/Toasts';
import Toaster from './components/ui/Toaster';
import SpinnerPage from './pages/Spinner';
import ProgressPage from './pages/Progress';
import SkeletonPage from './pages/Skeleton';

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
      <Toaster />
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
          <div className="sticky top-28 max-h-[calc(100vh-9rem)] overflow-y-auto pr-2">
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
        {activePage === 'Select2' && <Select2Page />}
        {activePage === 'Checkbox' && <CheckboxPage />}
        {activePage === 'Switch' && <SwitchPage />}
        {activePage === 'Textarea' && <TextareaPage />}
        {activePage === 'Range' && <RangePage />}
        {activePage === 'File input' && <FileInputPage />}
        {activePage === 'Form control' && <FormControlPage />}
        {activePage === 'Floating labels' && <FloatingLabelsPage />}
        {activePage === 'Wizard' && <WizardPage />}
        {activePage === 'Autocomplete' && <AutocompletePage />}
        {activePage === 'Timeline' && <TimelinePage />}
        {activePage === 'Rating' && <RatingPage />}
        {activePage === 'Datepicker' && <DatePickerPage />}
        {activePage === 'Timepicker' && <TimePickerPage />}
        {activePage === 'Calendar' && <CalendarPage />}
        {activePage === 'Pagination' && <PaginationPage />}
        {activePage === 'Lists' && <ListsPage />}
        {activePage === 'Tabs' && <TabsPage />}
        {activePage === 'Navs' && <NavsPage />}
        {activePage === 'Navbar' && <NavbarPage />}
        {activePage === 'Offcanvas' && <OffcanvasPage />}
        {activePage === 'Popovers' && <PopoversPage />}
        {activePage === 'Tooltips' && <TooltipsPage />}
        {activePage === 'Tables' && <TablePage />}
        {activePage === 'Toasts' && <ToastsPage />}
        {activePage === 'Spinners' && <SpinnerPage />}
        {activePage === 'Progress' && <ProgressPage />}
        {activePage === 'Skeleton' && <SkeletonPage />}
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