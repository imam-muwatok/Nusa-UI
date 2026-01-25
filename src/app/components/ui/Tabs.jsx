import React, { useState } from "react";
import Nav, { NavItem } from "./Nav";

export default function Tabs({ items = [], defaultActive = 0, variant = "tabs", vertical = false, className = "" }) {
  const [activeTab, setActiveTab] = useState(defaultActive);

  return (
    <div className={`${vertical ? "flex gap-6" : ""} ${className}`}>
      <Nav variant={variant} vertical={vertical} className={vertical ? "w-64 shrink-0" : "mb-6"}>
        {items.map((item, index) => (
          <NavItem
            key={index}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
            disabled={item.disabled}
            className={vertical ? "justify-start text-left" : ""}
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.label}
          </NavItem>
        ))}
      </Nav>
      <div className="flex-1">
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            {items[activeTab] && items[activeTab].content}
        </div>
      </div>
    </div>
  );
}