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
import IntroPage from './pages/gettingStarting/Intro';
import ThemingPage from './pages/gettingStarting/Theming';
import InstallationPage from './pages/gettingStarting/Installation';

// --- 2. Forms ---
import AutocompletePage from './pages/forms/Autocomplete';
import CheckboxPage from './pages/forms/Checkbox';
import DatePickerPage from './pages/forms/DatePicker';
import FileInputPage from './pages/forms/FileInput';
import FloatingLabelsPage from './pages/forms/FloatingLabels';
import FormControlPage from './pages/forms/FormControl';
import RangePage from './pages/forms/Range';
import SelectPage from './pages/forms/Select';
import Select2Page from './pages/forms/Select2';
import SwitchPage from './pages/forms/Switch';
import TextareaPage from './pages/forms/Textarea';
import TimePickerPage from './pages/forms/TimePicker';
import WizardPage from './pages/forms/Wizard';
// (Validation belum ada di list import Anda)

// --- 3. Components ---
import AccordionPage from './pages/components/Accordion';
import AlertPage from './pages/components/Alert';
import BadgePage from './pages/components/Badge';
import BreadcrumbPage from './pages/components/Breadcrumb';
import ButtonPage from './pages/components/Button';
import CalendarPage from './pages/components/Calendar';
import CardPage from './pages/components/Card';
import CarouselPage from './pages/components/Carousel';
import CollapsePage from './pages/components/Collapse';
import DropdownsPage from './pages/components/Dropdowns';
import ListsPage from './pages/components/Lists';
import ModalPage from './pages/components/Modal';
import NavbarPage from './pages/components/Navbar';
import NavsPage from './pages/components/Navs';
import OffcanvasPage from './pages/components/Offcanvas';
import PaginationPage from './pages/components/Pagination';
import PopoversPage from './pages/components/Popovers';
import ProgressPage from './pages/components/Progress';
import RatingPage from './pages/components/Rating';
import SkeletonPage from './pages/components/Skeleton';
import SpinnerPage from './pages/components/Spinner';
import TablePage from './pages/components/Table';
import TabsPage from './pages/components/Tabs';
import TimelinePage from './pages/components/Timeline';
import ToastsPage from './pages/components/Toasts';
import TooltipsPage from './pages/components/Tooltips';

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