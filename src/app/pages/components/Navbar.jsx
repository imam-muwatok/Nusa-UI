import React, { useState } from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Navbar, { NavbarBrand, NavbarToggle, NavbarCollapse } from "../../components/ui/Navbar";
import Nav, { NavItem, NavMegaMenu } from "../../components/ui/Nav";
import Button from "../../components/ui/Button";

export default function NavbarPage() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Navbar</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Header navigasi responsif yang mencakup branding, navigasi, dan tindakan lainnya.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Navbar */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Navbar</h2>
          <CodeBlock code={`const [isOpen, setIsOpen] = useState(false);

<Navbar>
  <NavbarBrand href="#">Nusa-UI</NavbarBrand>
  <NavbarToggle isOpen={isOpen} setIsOpen={setIsOpen} />
  <NavbarCollapse isOpen={isOpen}>
    <Nav className="flex-col lg:flex-row mt-4 lg:mt-0">
      <NavItem active href="#">Home</NavItem>
      <NavItem href="#">About</NavItem>
      <NavItem href="#">Services</NavItem>
      <NavItem href="#">Contact</NavItem>
    </Nav>
  </NavbarCollapse>
</Navbar>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
              <Navbar>
                <NavbarBrand href="#">
                  <img src="/logo.png" alt="Nusa UI Logo" className="h-7 w-7" />
                  <span>Nusa-UI</span>
                </NavbarBrand>
                <NavbarToggle isOpen={isOpen1} setIsOpen={setIsOpen1} />
                <NavbarCollapse isOpen={isOpen1}>
                  <Nav className="flex-col lg:flex-row mt-4 lg:mt-0">
                    <NavItem active href="#">Home</NavItem>
                    <NavItem href="#">About</NavItem>
                    <NavItem href="#">Services</NavItem>
                    <NavItem href="#">Contact</NavItem>
                  </Nav>
                </NavbarCollapse>
              </Navbar>
            </div>
          </CodeBlock>
        </section>

        {/* With Button */}
        <section>
          <h2 className="text-2xl font-bold mb-6">With Button</h2>
          <CodeBlock code={`<Navbar>
  <NavbarBrand href="#">Nusa-UI</NavbarBrand>
  <div className="flex lg:order-2 items-center">
    <Button size="sm">Get started</Button>
    <NavbarToggle isOpen={isOpen} setIsOpen={setIsOpen} />
  </div>
  <NavbarCollapse isOpen={isOpen}>
    <Nav className="flex-col lg:flex-row mt-4 lg:mt-0">
      <NavItem active href="#">Home</NavItem>
      <NavItem href="#">About</NavItem>
    </Nav>
  </NavbarCollapse>
</Navbar>`}>
            <div className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
              <Navbar>
                <NavbarBrand href="#">
                  <img src="/logo.png" alt="Nusa UI Logo" className="h-7 w-7" />
                  <span>Nusa-UI</span>
                </NavbarBrand>
                <div className="flex lg:order-2 items-center">
                    <Button size="sm">Get started</Button>
                    <NavbarToggle isOpen={isOpen2} setIsOpen={setIsOpen2} />
                </div>
                <NavbarCollapse isOpen={isOpen2}>
                  <Nav className="flex-col lg:flex-row mt-4 lg:mt-0">
                    <NavItem active href="#">Home</NavItem>
                    <NavItem href="#">About</NavItem>
                  </Nav>
                </NavbarCollapse>
              </Navbar>
            </div>
          </CodeBlock>
        </section>

        {/* Sticky Navbar */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Sticky Navbar</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>sticky</code> agar navbar tetap menempel di atas saat di-scroll.
          </p>
          <CodeBlock code={`<Navbar sticky>
  <NavbarBrand href="#">Nusa-UI</NavbarBrand>
  <NavbarToggle isOpen={isOpen} setIsOpen={setIsOpen} />
  <NavbarCollapse isOpen={isOpen}>
    <Nav className="flex-col lg:flex-row mt-4 lg:mt-0">
      <NavItem active href="#">Home</NavItem>
      <NavItem href="#">About</NavItem>
    </Nav>
  </NavbarCollapse>
</Navbar>`}>
            <div className="w-full h-64 overflow-y-auto border border-zinc-200 dark:border-zinc-800 rounded-xl relative bg-zinc-50 dark:bg-zinc-900">
              <Navbar sticky className="absolute top-0 left-0 right-0">
                <NavbarBrand href="#">
                  <img src="/logo.png" alt="Nusa UI Logo" className="h-7 w-7" />
                  <span>Nusa-UI</span>
                </NavbarBrand>
                <NavbarToggle isOpen={isOpen3} setIsOpen={setIsOpen3} />
                <NavbarCollapse isOpen={isOpen3}>
                  <Nav className="flex-col lg:flex-row mt-4 lg:mt-0">
                    <NavItem active href="#">Home</NavItem>
                    <NavItem href="#">About</NavItem>
                  </Nav>
                </NavbarCollapse>
              </Navbar>
              <div className="p-4 pt-20 space-y-4">
                {[...Array(10)].map((_, i) => <p key={i} className="text-zinc-500 dark:text-zinc-400">Scroll content placeholder {i + 1}...</p>)}
              </div>
            </div>
          </CodeBlock>
        </section>

        {/* Transparent Navbar */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Transparent Navbar</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>transparent</code> untuk membuat navbar transparan di awal dan menjadi solid saat halaman di-scroll (window scroll).
          </p>
          <CodeBlock code={`<Navbar transparent>
  <NavbarBrand href="#">Nusa-UI</NavbarBrand>
  <NavbarToggle isOpen={isOpen} setIsOpen={setIsOpen} />
  <NavbarCollapse isOpen={isOpen}>
    <Nav>
      <NavItem active href="#">Home</NavItem>
      <NavItem href="#">About</NavItem>
    </Nav>
  </NavbarCollapse>
</Navbar>`}>
            <div className="w-full h-48 rounded-xl relative bg-gradient-to-r from-cyan-500 to-blue-600 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-4xl">Hero Image Area</div>
              <Navbar transparent className="absolute top-0 left-0 right-0">
                <NavbarBrand href="#" className="text-white">
                  <img src="/logo.png" alt="Nusa UI Logo" className="h-7 w-7" />
                  <span>Nusa-UI</span>
                </NavbarBrand>
                <NavbarToggle isOpen={isOpen4} setIsOpen={setIsOpen4} className="text-white hover:bg-white/20" />
                <NavbarCollapse isOpen={isOpen4}>
                  <Nav className="flex-col lg:flex-row mt-4 lg:mt-0">
                    <NavItem active href="#" className="text-white hover:text-white/80">Home</NavItem>
                    <NavItem href="#" className="text-white/80 hover:text-white">About</NavItem>
                  </Nav>
                </NavbarCollapse>
              </Navbar>
            </div>
          </CodeBlock>
        </section>

        {/* Mega Menu */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Mega Menu</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan komponen <code>NavMegaMenu</code> untuk membuat dropdown lebar yang dapat menampung konten kompleks.
          </p>
          <CodeBlock code={`<Navbar>
  <NavbarBrand href="#">Nusa-UI</NavbarBrand>
  <NavbarToggle isOpen={isOpen} setIsOpen={setIsOpen} />
  <NavbarCollapse isOpen={isOpen}>
    <Nav className="flex-col lg:flex-row mt-4 lg:mt-0">
      <NavItem active href="#">Home</NavItem>
      <NavMegaMenu title="Products">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Complex Content Here */}
        </div>
      </NavMegaMenu>
    </Nav>
  </NavbarCollapse>
</Navbar>`}>
            <div className="w-full h-80 overflow-y-auto border border-zinc-200 dark:border-zinc-800 rounded-xl relative bg-zinc-50 dark:bg-zinc-900">
              <Navbar className="absolute top-0 left-0 right-0">
                <NavbarBrand href="#">
                  <img src="/logo.png" alt="Nusa UI Logo" className="h-7 w-7" />
                  <span>Nusa-UI</span>
                </NavbarBrand>
                <NavbarToggle isOpen={isOpen5} setIsOpen={setIsOpen5} />
                <NavbarCollapse isOpen={isOpen5}>
                  <Nav className="flex-col lg:flex-row mt-4 lg:mt-0">
                    <NavItem active href="#">Home</NavItem>
                    <NavMegaMenu title="Products">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div>
                          <h4 className="font-bold text-zinc-900 dark:text-white mb-3">Development</h4>
                          <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                            <li><a href="#" className="hover:text-cyan-600">Web Apps</a></li>
                            <li><a href="#" className="hover:text-cyan-600">Mobile Apps</a></li>
                            <li><a href="#" className="hover:text-cyan-600">Desktop Apps</a></li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-zinc-900 dark:text-white mb-3">Design</h4>
                          <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                            <li><a href="#" className="hover:text-cyan-600">UI/UX Design</a></li>
                            <li><a href="#" className="hover:text-cyan-600">Graphic Design</a></li>
                            <li><a href="#" className="hover:text-cyan-600">Branding</a></li>
                          </ul>
                        </div>
                        <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-xl">
                          <h4 className="font-bold text-zinc-900 dark:text-white mb-2">Featured</h4>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3">Check out our latest UI kit release.</p>
                          <Button size="sm" className="w-full">View Kit</Button>
                        </div>
                      </div>
                    </NavMegaMenu>
                    <NavItem href="#">Pricing</NavItem>
                  </Nav>
                </NavbarCollapse>
              </Navbar>
            </div>
          </CodeBlock>
        </section>

        {/* Scroll Spy */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Scroll Spy</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>scrollSpy</code> pada <code>Nav</code> untuk menyorot link aktif secara otomatis berdasarkan posisi scroll.
          </p>
          <CodeBlock code={`<div id="scroll-container" className="relative h-80 overflow-y-auto border border-zinc-200 dark:border-zinc-800 rounded-xl scroll-smooth">
  <Navbar sticky className="absolute top-0 left-0 right-0">
    <NavbarBrand href="#">Docs</NavbarBrand>
    <Nav scrollSpy spyContainer="#scroll-container">
      <NavItem href="#section-1">Intro</NavItem>
      <NavItem href="#section-2">Usage</NavItem>
      <NavItem href="#section-3">API</NavItem>
    </Nav>
  </Navbar>
  
  <div className="p-4 pt-20 space-y-8">
    <div id="section-1" className="h-64 bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4">...</div>
    <div id="section-2" className="h-64 bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4">...</div>
    <div id="section-3" className="h-64 bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4">...</div>
  </div>
</div>`}>
            <div id="scroll-container" className="relative h-80 overflow-y-auto border border-zinc-200 dark:border-zinc-800 rounded-xl scroll-smooth bg-white dark:bg-zinc-900">
              <Navbar sticky className="absolute top-0 left-0 right-0">
                <NavbarBrand href="#">
                  <img src="/logo.png" alt="Nusa UI Logo" className="h-7 w-7" />
                  <span>Docs</span>
                </NavbarBrand>
                <NavbarToggle isOpen={isOpen6} setIsOpen={setIsOpen6} />
                <NavbarCollapse isOpen={isOpen6}>
                  <Nav scrollSpy spyContainer="#scroll-container" className="flex-col lg:flex-row">
                    <NavItem href="#section-1">Intro</NavItem>
                    <NavItem href="#section-2">Usage</NavItem>
                    <NavItem href="#section-3">API</NavItem>
                  </Nav>
                </NavbarCollapse>
              </Navbar>
              <div className="p-4 pt-20 space-y-8">
                <div id="section-1" className="h-64 bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4 border border-zinc-100 dark:border-zinc-700"><h3 className="text-xl font-bold">Introduction</h3><p className="text-zinc-500">Scroll down to see the active link change.</p></div>
                <div id="section-2" className="h-64 bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4 border border-zinc-100 dark:border-zinc-700"><h3 className="text-xl font-bold">Usage</h3><p className="text-zinc-500">Keep scrolling...</p></div>
                <div id="section-3" className="h-64 bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4 border border-zinc-100 dark:border-zinc-700"><h3 className="text-xl font-bold">API</h3><p className="text-zinc-500">You reached the end.</p></div>
              </div>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}