import React, { useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";
import Nav, { NavItem, NavDropdown } from "../components/ui/Nav";
import { DropdownItem, DropdownDivider } from "../components/ui/Dropdown";

export default function NavsPage() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Navs</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen navigasi yang tersedia dalam berbagai gaya seperti tabs, pills, dan underline.
        </p>
      </div>

      <div className="space-y-12">
        {/* Base Nav */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Base Nav</h2>
          <CodeBlock code={`<Nav>
  <NavItem active href="#">Active</NavItem>
  <NavItem href="#">Link</NavItem>
  <NavItem href="#">Link</NavItem>
  <NavItem disabled href="#">Disabled</NavItem>
</Nav>`}>
            <div className="w-full">
              <Nav>
                <NavItem active href="#">Active</NavItem>
                <NavItem href="#">Link</NavItem>
                <NavItem href="#">Link</NavItem>
                <NavItem disabled href="#">Disabled</NavItem>
              </Nav>
            </div>
          </CodeBlock>
        </section>

        {/* Tabs */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Tabs</h2>
          <CodeBlock code={`<Nav variant="tabs">
  <NavItem active href="#">Home</NavItem>
  <NavItem href="#">Profile</NavItem>
  <NavItem href="#">Messages</NavItem>
</Nav>`}>
            <div className="w-full">
              <Nav variant="tabs">
                <NavItem active href="#">Home</NavItem>
                <NavItem href="#">Profile</NavItem>
                <NavItem href="#">Messages</NavItem>
              </Nav>
            </div>
          </CodeBlock>
        </section>

        {/* Pills */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Pills</h2>
          <CodeBlock code={`<Nav variant="pills">
  <NavItem active href="#">Home</NavItem>
  <NavItem href="#">Profile</NavItem>
  <NavItem href="#">Messages</NavItem>
</Nav>`}>
            <div className="w-full">
              <Nav variant="pills">
                <NavItem active href="#">Home</NavItem>
                <NavItem href="#">Profile</NavItem>
                <NavItem href="#">Messages</NavItem>
              </Nav>
            </div>
          </CodeBlock>
        </section>

        {/* Underline */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Underline</h2>
          <CodeBlock code={`<Nav variant="underline">
  <NavItem active href="#">Home</NavItem>
  <NavItem href="#">Profile</NavItem>
  <NavItem href="#">Messages</NavItem>
</Nav>`}>
            <div className="w-full">
              <Nav variant="underline">
                <NavItem active href="#">Home</NavItem>
                <NavItem href="#">Profile</NavItem>
                <NavItem href="#">Messages</NavItem>
              </Nav>
            </div>
          </CodeBlock>
        </section>

        {/* Vertical */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Vertical</h2>
          <CodeBlock code={`<Nav vertical variant="pills" className="w-48">
  <NavItem active href="#">Home</NavItem>
  <NavItem href="#">Profile</NavItem>
  <NavItem href="#">Messages</NavItem>
</Nav>`}>
            <div className="w-full">
              <Nav vertical variant="pills" className="w-48">
                <NavItem active href="#">Home</NavItem>
                <NavItem href="#">Profile</NavItem>
                <NavItem href="#">Messages</NavItem>
              </Nav>
            </div>
          </CodeBlock>
        </section>

        {/* Fill & Justified */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Fill & Justified</h2>
          <CodeBlock code={`<Nav variant="pills" fill className="mb-8">
  <NavItem active href="#">Active</NavItem>
  <NavItem href="#">Much longer link</NavItem>
  <NavItem href="#">Link</NavItem>
</Nav>

<Nav variant="pills" justified>
  <NavItem active href="#">Active</NavItem>
  <NavItem href="#">Much longer link</NavItem>
  <NavItem href="#">Link</NavItem>
</Nav>`}>
            <div className="w-full space-y-8">
              <Nav variant="pills" fill>
                <NavItem active href="#">Active</NavItem>
                <NavItem href="#">Much longer link</NavItem>
                <NavItem href="#">Link</NavItem>
              </Nav>
              <Nav variant="pills" justified>
                <NavItem active href="#">Active</NavItem>
                <NavItem href="#">Much longer link</NavItem>
                <NavItem href="#">Link</NavItem>
              </Nav>
            </div>
          </CodeBlock>
        </section>

        {/* Scrollable Nav */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Scrollable Nav</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>scrollable</code> untuk membuat navigasi dapat digulir secara horizontal jika item melebihi lebar container.
          </p>
          <CodeBlock code={`<div className="w-full max-w-md border border-zinc-200 dark:border-zinc-800 rounded-xl p-4">
  <Nav variant="underline" scrollable>
    <NavItem active href="#">Overview</NavItem>
    <NavItem href="#">Accounts</NavItem>
    <NavItem href="#">Transactions</NavItem>
    <NavItem href="#">Settings</NavItem>
    <NavItem href="#">Integrations</NavItem>
  </Nav>
</div>`}>
            <div className="w-full max-w-md border border-zinc-200 dark:border-zinc-800 rounded-xl p-4">
              <Nav variant="underline" scrollable>
                <NavItem active href="#">Overview</NavItem>
                <NavItem href="#">Accounts</NavItem>
                <NavItem href="#">Transactions</NavItem>
                <NavItem href="#">Settings</NavItem>
                <NavItem href="#">Integrations</NavItem>
              </Nav>
            </div>
          </CodeBlock>
        </section>

        {/* Responsive Nav */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Responsive Nav</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>responsive</code> agar navigasi berubah menjadi menu hamburger pada layar kecil (mobile). Resize browser untuk melihat efeknya.
          </p>
          <CodeBlock code={`<Nav variant="pills" responsive>
  <NavItem active href="#">Dashboard</NavItem>
  <NavItem href="#">Team</NavItem>
  <NavItem href="#">Projects</NavItem>
  <NavItem href="#">Calendar</NavItem>
</Nav>`}>
            <div className="w-full max-w-md border border-zinc-200 dark:border-zinc-800 rounded-xl p-4">
              <Nav variant="pills" responsive>
                <NavItem active href="#">Dashboard</NavItem>
                <NavItem href="#">Team</NavItem>
                <NavItem href="#">Projects</NavItem>
                <NavItem href="#">Calendar</NavItem>
              </Nav>
            </div>
          </CodeBlock>
        </section>

        {/* With Dropdown */}
        <section>
          <h2 className="text-2xl font-bold mb-6">With Dropdown</h2>
          <CodeBlock code={`<Nav variant="tabs">
  <NavItem active href="#">Active</NavItem>
  <NavDropdown title="Dropdown">
    <DropdownItem>Action</DropdownItem>
    <DropdownItem>Another action</DropdownItem>
    <DropdownDivider />
    <DropdownItem>Something else here</DropdownItem>
  </NavDropdown>
  <NavItem href="#">Link</NavItem>
</Nav>`}>
            <div className="w-full h-48">
              <Nav variant="tabs">
                <NavItem active href="#">Active</NavItem>
                <NavDropdown title="Dropdown">
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another action</DropdownItem>
                  <DropdownDivider />
                  <DropdownItem>Something else here</DropdownItem>
                </NavDropdown>
                <NavItem href="#">Link</NavItem>
              </Nav>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}