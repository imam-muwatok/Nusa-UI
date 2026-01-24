import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

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
    title: "Components",
    items: [
      { name: "Alerts" },
      { name: "Badges" },
      { name: "Buttons" },
      { name: "Cards" },
      { name: "Forms" },
      { name: "Modals" },
    ],
  },
];

export const SidebarContent = ({ activePage, setActivePage, setIsSidebarOpen }) => (
  <div className="space-y-8">
    {sidebarData.map((section, index) => (
      <div key={index}>
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">{section.title}</h4>
        <ul className="space-y-3 text-sm">
          {section.items.map((item, idx) => (
            <li
              key={idx}
              onClick={() => {
                setActivePage(item.name);
                if (setIsSidebarOpen) setIsSidebarOpen(false);
              }}
              className={
                activePage === item.name
                  ? "font-medium text-cyan-500"
                  : "cursor-pointer transition-colors hover:text-cyan-500 text-zinc-600 dark:text-zinc-400"
              }
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen, activePage, setActivePage }) {
  return (
    <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)}></div>

      {/* Sidebar Panel */}
      <aside className={`absolute top-0 left-0 h-full w-72 bg-white p-6 shadow-xl transition-transform duration-300 dark:bg-zinc-900 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="mb-8 flex items-center justify-between">
          <div className="text-lg font-black uppercase tracking-tighter">Nusa-UI</div>
          <button onClick={() => setIsSidebarOpen(false)}><XMarkIcon className="h-6 w-6" /></button>
        </div>
        <SidebarContent activePage={activePage} setActivePage={setActivePage} setIsSidebarOpen={setIsSidebarOpen} />
      </aside>
    </div>
  );
}