import React, { useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";
import Switch from "../components/ui/Switch";
import { CheckIcon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function SwitchPage() {
  const [enabled, setEnabled] = useState(false);
  const [enabled2, setEnabled2] = useState(true);

  // State for Sizes
  const [sizeStates, setSizeStates] = useState({
    xxs: true, xs: true, sm: true, md: true, lg: true, xl: true, '2xl': true
  });

  // State for Colors
  const [colorStates, setColorStates] = useState({
    primary: true, success: true, danger: true, warning: true
  });

  // State for Icons
  const [iconStates, setIconStates] = useState({
    on: true, off: false, dark: true
  });

  // State for Custom Colors
  const [customStates, setCustomStates] = useState({
    purple: true, pink: true, indigo: true
  });

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Switch</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen toggle untuk mengaktifkan atau menonaktifkan pengaturan tunggal.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Example</h2>
          <CodeBlock code={`const [enabled, setEnabled] = useState(false);

<Switch 
  checked={enabled} 
  onChange={(e) => setEnabled(e.target.checked)} 
  label="Toggle me" 
/>`}>
            <div className="flex flex-col gap-4">
              <Switch 
                checked={enabled} 
                onChange={(e) => setEnabled(e.target.checked)} 
                label="Toggle me" 
              />
              <Switch 
                checked={enabled2} 
                onChange={(e) => setEnabled2(e.target.checked)} 
                label="Checked by default" 
              />
            </div>
          </CodeBlock>
        </section>

        {/* Sizes */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Sizes</h2>
          <CodeBlock code={`<Switch size="} onChange={() => {}} />
<Switch size="sm" label="Small" checked={true} onChange={() => {}} />
<Switch size="md" label="Medium" checked={true} onChange={() => {}} />
<Switch size="lg" label="Large" Large" checked={true} onChange={() =>} />
<Switch size="2xl" label="2XL" checked={true} onChange={() => {}} />`}>
            <div className="flex flex-col gap-4">
              <Switch size="xxs" label="XXS" checked={sizeStates.xxs} onChange={(e) => setSizeStates({...sizeStates, xxs: e.target.checked})} />
              <Switch size="xs" label="XS" checked={sizeStates.xs} onChange={(e) => setSizeStates({...sizeStates, xs: e.target.checked})} />
              <Switch size="sm" label="Small" checked={sizeStates.sm} onChange={(e) => setSizeStates({...sizeStates, sm: e.target.checked})} />
              <Switch size="md" label="Medium" checked={sizeStates.md} onChange={(e) => setSizeStates({...sizeStates, md: e.target.checked})} />
              <Switch size="lg" label="Large" checked={sizeStates.lg} onChange={(e) => setSizeStates({...sizeStates, lg: e.target.checked})} />
              <Switch size="xl" label="Extra Large" checked={sizeStates.xl} onChange={(e) => setSizeStates({...sizeStates, xl: e.target.checked})} />
              <Switch size="2xl" label="2XL" checked={sizeStates['2xl']} onChange={(e) => setSizeStates({...sizeStates, '2xl': e.target.checked})} />
            </div>
          </CodeBlock>
        </section>

        {/* Disabled State */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Disabled State</h2>
          <CodeBlock code={`<Switch disabled label="Disabled off" checked={false} onChange={() => {}} />
<Switch disabled label="Disabled on" checked={true} onChange={() => {}} />`}>
            <div className="flex flex-col gap-4">
              <Switch disabled label="Disabled off" checked={false} onChange={() => {}} />
              <Switch disabled label="Disabled on" checked={true} onChange={() => {}} />
            </div>
          </CodeBlock>
        </section>

        {/* Color Variants */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Color Variants</h2>
          <CodeBlock code={`<Switch label="Primary" checked variant="primary" onChange={() => {}} />
<Switch label="Success" checked variant="success" onChange={() => {}} />
<Switch label="Danger" checked variant="danger" onChange={() => {}} />
<Switch label="Warning" checked variant="warning" onChange={() => {}} />`}>
            <div className="flex flex-col gap-4">
              <Switch label="Primary" checked={colorStates.primary} onChange={(e) => setColorStates({...colorStates, primary: e.target.checked})} variant="primary" />
              <Switch label="Success" checked={colorStates.success} onChange={(e) => setColorStates({...colorStates, success: e.target.checked})} variant="success" />
              <Switch label="Danger" checked={colorStates.danger} onChange={(e) => setColorStates({...colorStates, danger: e.target.checked})} variant="danger" />
              <Switch label="Warning" checked={colorStates.warning} onChange={(e) => setColorStates({...colorStates, warning: e.target.checked})} variant="warning" />
            </div>
          </CodeBlock>
        </section>

        {/* With Icons */}
        <section>
          <h2 className="text-2xl font-bold mb-6">With Icons</h2>
          <CodeBlock code={`<Switch 
  checked={true} 
  onIcon={<CheckIcon />} 
  offIcon={<XMarkIcon />} 
  label="Status" 
/>`}>
            <div className="flex flex-col gap-4">
              <Switch checked={iconStates.on} onChange={(e) => setIconStates({...iconStates, on: e.target.checked})} onIcon={<CheckIcon />} offIcon={<XMarkIcon />} label={iconStates.on ? "Status (On)" : "Status (Off)"} />
            
              <Switch checked={iconStates.dark} onChange={(e) => setIconStates({...iconStates, dark: e.target.checked})} size="lg" variant="warning" onIcon={<SunIcon />} offIcon={<MoonIcon />} label={iconStates.dark ? "Light Mode" : "Dark Mode"} />
            </div>
          </CodeBlock>
        </section>

        {/* Custom Colors */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Custom Colors</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>checkedClass</code> untuk mendefinisikan warna kustom menggunakan utility class Tailwind.
          </p>
          <CodeBlock code={`<Switch 
  label="Purple" 
  checked={true} 
  checkedClass="peer-checked:bg-purple-600 peer-focus:ring-purple-500/20" 
/>`}>
            <div className="flex flex-col gap-4">
              <Switch label="Purple" checked={customStates.purple} onChange={(e) => setCustomStates({...customStates, purple: e.target.checked})} checkedClass="peer-checked:bg-purple-600 peer-focus:ring-purple-500/20" />
              <Switch label="Pink" checked={customStates.pink} onChange={(e) => setCustomStates({...customStates, pink: e.target.checked})} checkedClass="peer-checked:bg-pink-600 peer-focus:ring-pink-500/20" />
              <Switch label="Indigo" checked={customStates.indigo} onChange={(e) => setCustomStates({...customStates, indigo: e.target.checked})} checkedClass="peer-checked:bg-indigo-600 peer-focus:ring-indigo-500/20" />
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}