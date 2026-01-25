import React, { useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";
import Popover from "../components/ui/Popover";
import Button from "../components/ui/Button";
import Switch from "../components/ui/Switch";

export default function PopoversPage() {
  const [manualOpen, setManualOpen] = useState(false);
  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Popovers</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Menampilkan konten overlay yang kaya saat elemen diklik.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Example</h2>
          <CodeBlock code={`<Popover 
  trigger={<Button>Click me</Button>} 
  title="Popover Title" 
  content="And here's some amazing content. It's very engaging. Right?" 
/>`}>
            <div className="flex justify-center py-12">
              <Popover 
                trigger={<Button>Click me</Button>} 
                title="Popover Title" 
                content="And here's some amazing content. It's very engaging. Right?" 
              />
            </div>
          </CodeBlock>
        </section>

        {/* Positions */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Positions</h2>
          <CodeBlock code={`<Popover position="top" trigger={<Button>Top</Button>} content="Top Popover" />
<Popover position="right" trigger={<Button>Right</Button>} content="Right Popover" />
<Popover position="bottom" trigger={<Button>Bottom</Button>} content="Bottom Popover" />
<Popover position="left" trigger={<Button>Left</Button>} content="Left Popover" />`}>
            <div className="flex flex-wrap justify-center gap-8 py-12">
              <Popover position="top" trigger={<Button variant="secondary">Top</Button>} content="Top Popover content goes here." />
              <Popover position="right" trigger={<Button variant="secondary">Right</Button>} content="Right Popover content goes here." />
              <Popover position="bottom" trigger={<Button variant="secondary">Bottom</Button>} content="Bottom Popover content goes here." />
              <Popover position="left" trigger={<Button variant="secondary">Left</Button>} content="Left Popover content goes here." />
            </div>
          </CodeBlock>
        </section>

        {/* Dismiss on Scroll */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Dismiss on Scroll</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>dismissOnScroll</code> agar popover tertutup otomatis saat halaman digulir.
          </p>
          <CodeBlock code={`<Popover 
  dismissOnScroll 
  trigger={<Button>Scroll to Dismiss</Button>} 
  content="I will close when you scroll the page." 
/>`}>
            <div className="flex justify-center py-12">
              <Popover 
                dismissOnScroll 
                trigger={<Button>Scroll to Dismiss</Button>} 
                content="I will close when you scroll the page." 
              />
            </div>
          </CodeBlock>
        </section>

        {/* Delay */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Delay</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>openDelay</code> dan <code>closeDelay</code> (dalam ms) untuk menunda aksi.
          </p>
          <CodeBlock code={`<Popover 
  openDelay={500} 
  closeDelay={300} 
  trigger={<Button>Delay Example</Button>} 
  content="I appeared after 500ms and will disappear after 300ms." 
/>`}>
            <div className="flex justify-center py-12">
              <Popover 
                openDelay={500} 
                closeDelay={300} 
                trigger={<Button>Delay Example</Button>} 
                content="I appeared after 500ms and will disappear after 300ms." 
              />
            </div>
          </CodeBlock>
        </section>

        {/* Hover Trigger */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Hover Trigger</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>triggerMode="hover"</code> agar popover muncul saat kursor diarahkan (hover).
          </p>
          <CodeBlock code={`<Popover 
  triggerMode="hover"
  trigger={<Button>Hover Me</Button>} 
  content="I appear on hover!" 
/>`}>
            <div className="flex justify-center py-12">
              <Popover 
                triggerMode="hover"
                trigger={<Button>Hover Me</Button>} 
                content="I appear on hover!" 
              />
            </div>
          </CodeBlock>
        </section>

        {/* Focus Trap */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Focus Trap</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>focusTrap</code> untuk mengunci fokus keyboard di dalam popover (penting untuk aksesibilitas jika ada elemen interaktif).
          </p>
          <CodeBlock code={`<Popover 
  focusTrap
  trigger={<Button>Open Form</Button>} 
  title="Sign In"
  content={
    <div className="flex flex-col gap-3 w-48">
      <input type="text" placeholder="Email" className="border p-1 rounded text-sm" />
      <input type="password" placeholder="Password" className="border p-1 rounded text-sm" />
      <button className="bg-cyan-600 text-white p-1 rounded text-sm">Login</button>
    </div>
  } 
/>`}>
            <div className="flex justify-center py-12">
              <Popover 
                focusTrap
                trigger={<Button>Open Form</Button>} 
                title="Sign In"
                content={
                  <div className="flex flex-col gap-3 w-48">
                    <input type="text" placeholder="Email" className="border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-2 rounded text-sm outline-none focus:border-cyan-500" />
                    <input type="password" placeholder="Password" className="border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-2 rounded text-sm outline-none focus:border-cyan-500" />
                    <button className="bg-cyan-600 text-white p-2 rounded text-sm hover:bg-cyan-700 transition-colors">Login</button>
                  </div>
                } 
              />
            </div>
          </CodeBlock>
        </section>

        {/* Custom Width */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Custom Width</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>width</code> untuk mengatur lebar popover (misal: <code>w-96</code>, <code>w-auto</code>).
          </p>
          <CodeBlock code={`<Popover 
  width="w-96"
  trigger={<Button>Wide Popover</Button>} 
  title="Wide Content"
  content="This popover has a custom width of w-96 (24rem). You can use any Tailwind width utility class." 
/>`}>
            <div className="flex justify-center py-12">
              <Popover 
                width="w-96"
                trigger={<Button>Wide Popover</Button>} 
                title="Wide Content"
                content="This popover has a custom width of w-96 (24rem). You can use any Tailwind width utility class." 
              />
            </div>
          </CodeBlock>
        </section>

        {/* Backdrop */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Backdrop</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>backdrop</code> untuk meredupkan latar belakang saat popover aktif.
          </p>
          <CodeBlock code={`<Popover 
  backdrop
  trigger={<Button>With Backdrop</Button>} 
  title="Focus Here"
  content="The background is dimmed to focus attention on this popover." 
/>`}>
            <div className="flex justify-center py-12">
              <Popover 
                backdrop
                trigger={<Button>With Backdrop</Button>} 
                title="Focus Here"
                content="The background is dimmed to focus attention on this popover." 
              />
            </div>
          </CodeBlock>
        </section>

        {/* Nested Popover */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Nested Popover</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>nested</code> pada popover anak untuk menempatkannya di dalam popover lain.
          </p>
          <CodeBlock code={`<Popover 
  trigger={<Button>Open Parent</Button>} 
  content={
    <div className="flex flex-col gap-2">
      <p>This is the parent popover.</p>
      <Popover 
        nested 
        position="right"
        trigger={<Button size="sm" variant="secondary">Open Child</Button>} 
        content="This is a nested popover!" 
      />
    </div>
  } 
/>`}>
            <div className="flex justify-center py-12">
              <Popover trigger={<Button>Open Parent</Button>} content={<div className="flex flex-col gap-4"><p>This is the parent popover.</p><Popover nested position="right" trigger={<Button size="sm" variant="secondary">Open Child</Button>} content="This is a nested popover!" /></div>} />
            </div>
          </CodeBlock>
        </section>

        {/* Arrow Customization */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Arrow Customization</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>showArrow</code> untuk menyembunyikan panah, atau <code>arrowClassName</code> untuk mengubah ukurannya.
          </p>
          <CodeBlock code={`<Popover 
  showArrow={false}
  trigger={<Button>No Arrow</Button>} 
  content="This popover has no arrow." 
/>

<Popover 
  arrowClassName="h-4 w-4"
  trigger={<Button>Large Arrow</Button>} 
  content="This popover has a larger arrow." 
/>`}>
            <div className="flex justify-center gap-8 py-12">
              <Popover 
                showArrow={false}
                trigger={<Button>No Arrow</Button>} 
                content="This popover has no arrow." 
              />
              <Popover 
                arrowClassName="h-4 w-4"
                trigger={<Button>Large Arrow</Button>} 
                content="This popover has a larger arrow." 
              />
            </div>
          </CodeBlock>
        </section>

        {/* Close Button */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Close Button</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>closeButton</code> untuk menampilkan tombol tutup di header popover.
          </p>
          <CodeBlock code={`<Popover 
  closeButton
  trigger={<Button>With Close Button</Button>} 
  title="Popover Title"
  content="This popover has a close button in the header." 
/>`}>
            <div className="flex justify-center py-12">
              <Popover 
                closeButton
                trigger={<Button>With Close Button</Button>} 
                title="Popover Title"
                content="This popover has a close button in the header." 
              />
            </div>
          </CodeBlock>
        </section>

        {/* Manual Control */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Manual Control</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>isOpen</code> dan <code>onOpenChange</code> untuk mengontrol popover dari luar (controlled component).
          </p>
          <CodeBlock code={`const [isOpen, setIsOpen] = useState(false);

<div className="flex gap-4 items-center">
  <Switch checked={isOpen} onChange={(e) => setIsOpen(e.target.checked)} label="Toggle Popover" />
  
  <Popover 
    isOpen={isOpen}
    onOpenChange={setIsOpen}
    trigger={<Button>Controlled Popover</Button>} 
    content="I am controlled by the switch!" 
  />
</div>`}>
            <div className="flex justify-center gap-8 py-12 items-center">
               <Switch checked={manualOpen} onChange={(e) => setManualOpen(e.target.checked)} label="Toggle Popover" />
               <Popover isOpen={manualOpen} onOpenChange={setManualOpen} trigger={<Button>Controlled Popover</Button>} content="I am controlled by the switch!" />
            </div>
          </CodeBlock>
        </section>

        {/* Animation Preset */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Animation Preset</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>animation</code> untuk memilih efek animasi: <code>fade</code>, <code>zoom</code>, atau <code>slide</code>.
          </p>
          <CodeBlock code={`<Popover animation="fade" trigger={<Button>Fade</Button>} content="Fade Animation" />
<Popover animation="zoom" trigger={<Button>Zoom</Button>} content="Zoom Animation" />
<Popover animation="slide" trigger={<Button>Slide</Button>} content="Slide Animation" />`}>
            <div className="flex justify-center gap-8 py-12">
              <Popover 
                animation="fade"
                trigger={<Button>Fade</Button>} 
                content="Fade Animation" 
              />
              <Popover 
                animation="zoom"
                trigger={<Button>Zoom</Button>} 
                content="Zoom Animation" 
              />
              <Popover 
                animation="slide"
                trigger={<Button>Slide</Button>} 
                content="Slide Animation" 
              />
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}