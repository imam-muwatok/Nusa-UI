import React, { useState, useEffect } from "react";
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const sidebarData = [
  {
    title: "Getting Started",
    items: [
      { name: "Introduction" },
      { name: "Installation" },
      { name: "Theming" },
    ],
  },
  {
    title: "Forms",
    items: [
      { name: "Autocomplete" },
      { name: "Checkbox" },
      { name: "Datepicker" },
      { name: "File input" },
      { name: "Floating labels" },
      { name: "Form control" },
      { name: "Range" },
      { name: "Select" },
      { name: "Select2" },
      { name: "Switch" },
      { name: "Textarea" },
      { name: "Timepicker" },
      { name: "Validation" },
      { name: "Wizard" },

    ],
  },
  {
    title: "Components",
    items: [
      { name: "Accordion" },
      { name: "Alerts" },
      { name: "Badges" },
      { name: "Breadcrumb" },
      { name: "Buttons" },
      { name: "Calendar" },
      { name: "Cards" },
      { name: "Carousel" },
      { name: "Collapse" },
      { name: "Dropdowns" },
      { name: "Figure" },
      { name: "MasonryLayout" },
      { name: "Glassmorphism" },
      
      { name: "Lists" },
      { name: "Modals" },
      { name: "Navbar" },
      { name: "Navs" },
      { name: "Offcanvas" },
      { name: "Pagination" },
      { name: "Popovers" },
      { name: "Parallax" },
      { name: "Progress" },
      { name: "Rating" },
      { name: "Skeleton" },
      { name: "Spinners" },
      { name: "Tables" },
      { name: "Tabs" },
      { name: "Timeline" },
      { name: "Toasts" },
      { name: "Tooltips" },

    ],
  },
  // {
  //   title: "Page Templates",
  //   items: [
  //     { name: "Hero" },
 
  //   ],
  // },
];

export const SidebarContent = ({ activePage, setActivePage, setIsSidebarOpen }) => {
  const [openSections, setOpenSections] = useState({});

  // Efek untuk otomatis membuka section jika ada item aktif di dalamnya
  useEffect(() => {
    const activeSection = sidebarData.find((section) =>
      section.items.some((item) => item.name === activePage)
    );

    if (activeSection) {
      setOpenSections((prev) => ({
        ...prev,
        [activeSection.title]: true,
      }));
    }
  }, [activePage]);

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="space-y-2">
      {sidebarData.map((section, index) => {
        const isOpen = openSections[section.title];
        return (
          <div key={index} className="group">
            <h4
              onClick={() => toggleSection(section.title)}
              className="flex items-center ms-3 justify-between py-2 text-xs font-semibold uppercase tracking-widest text-zinc-500 cursor-pointer hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors select-none"
            >
              {section.title}
              <ChevronDownIcon className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "-rotate-180" : ""}`} />
            </h4>
            <ul className={`space-y-1 ms-6 text-sm overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[2000px] opacity-100 pb-2" : "max-h-0 opacity-0"}`}>
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  onClick={() => {
                    setActivePage(item.name);
                    if (setIsSidebarOpen) setIsSidebarOpen(false);
                  }}
                  className={
                    activePage === item.name
                      ? "font-medium text-cyan-500 py-1 block"
                      : "cursor-pointer transition-colors hover:text-cyan-500 text-zinc-600 dark:text-zinc-400 py-1 block"
                  }
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen, activePage, setActivePage }) {
  return (
    <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)}></div>

      {/* Sidebar Panel */}
      <aside className={`absolute top-0 left-0 h-full w-64 bg-white p-4 shadow-xl transition-transform duration-300 dark:bg-zinc-900 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} overflow-y-auto`}>
        <div className="mb-8 flex items-center justify-between">
          <div className="text-lg font-black uppercase tracking-tighter">Nusa-UI</div>
          <button onClick={() => setIsSidebarOpen(false)}><XMarkIcon className="h-6 w-6" /></button>
        </div>
        <SidebarContent activePage={activePage} setActivePage={setActivePage} setIsSidebarOpen={setIsSidebarOpen} />
      </aside>
    </div>
  );
}