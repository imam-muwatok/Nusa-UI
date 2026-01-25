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

// --- 1. Getting Started ---
import IntroPage from './pages/Intro';
import ThemingPage from './pages/Theming';
import InstallationPage from './pages/Installation';
import MyProjectPage from './pages/MyProject';

// --- 2. Forms ---
import AutocompletePage from './pages/Autocomplete';
import CheckboxPage from './pages/Checkbox';
import DatePickerPage from './pages/DatePicker';
import FileInputPage from './pages/FileInput';
import FloatingLabelsPage from './pages/FloatingLabels';
import FormControlPage from './pages/FormControl';
import RangePage from './pages/Range';
import SelectPage from './pages/Select';
import Select2Page from './pages/Select2';
import SwitchPage from './pages/Switch';
import TextareaPage from './pages/Textarea';
import TimePickerPage from './pages/TimePicker';
import WizardPage from './pages/Wizard';
// (Validation belum ada di list import Anda)

// --- 3. Components ---
import AccordionPage from './pages/Accordion';
import AlertPage from './pages/Alert';
import BadgePage from './pages/Badge';
import BreadcrumbPage from './pages/Breadcrumb';
import ButtonPage from './pages/Button';
import CalendarPage from './pages/Calendar';
import CardPage from './pages/Card';
import CarouselPage from './pages/Carousel';
import CollapsePage from './pages/Collapse';
import DropdownsPage from './pages/Dropdowns';
import ListsPage from './pages/Lists';
import ModalPage from './pages/Modal';
import NavbarPage from './pages/Navbar';
import NavsPage from './pages/Navs';
import OffcanvasPage from './pages/Offcanvas';
import PaginationPage from './pages/Pagination';
import PopoversPage from './pages/Popovers';
import ProgressPage from './pages/Progress';
import RatingPage from './pages/Rating';
import SkeletonPage from './pages/Skeleton';
import SpinnerPage from './pages/Spinner';
import TablePage from './pages/Table';
import TabsPage from './pages/Tabs';
import TimelinePage from './pages/Timeline';
import ToastsPage from './pages/Toasts';
import TooltipsPage from './pages/Tooltips';

// --- Extra / UI Components ---
import Toaster from './components/ui/Toaster';

// example app

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
        {activePage !== 'MyProject' && (
          <aside className="hidden w-64 shrink-0 lg:block">
            <div className="sticky top-28 max-h-[calc(100vh-9rem)] overflow-y-auto pr-2">
              <SidebarContent activePage={activePage} setActivePage={setActivePage} />
            </div>
          </aside>
        )}

        {/* MAIN CONTENT */}
        {activePage === 'Introduction' && <IntroPage setIsModalOpen={setIsModalOpen} />}
        {activePage === 'Theming' && <ThemingPage />}
        {activePage === 'Installation' && <InstallationPage />}
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
        {activePage === 'Bootcamp' && <BootcampPage />}
        {activePage === 'MyProject' && <MyProjectPage />}
        
      </div>
      {/* Footer */}
      <Footer />
    </div>
    
  );
}