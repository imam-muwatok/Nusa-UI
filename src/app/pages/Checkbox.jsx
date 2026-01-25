import React, { useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";
import { Checkbox, Radio } from "../components/ui/Checkbox";

export default function CheckboxPage() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Checkbox & Radio</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen seleksi kustom dengan animasi dan dukungan tema gelap.
        </p>
      </div>

      <div className="space-y-12">
        {/* Checkbox */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Checkbox</h2>
          <CodeBlock code={`const [checked, setChecked] = useState(false);

<Checkbox 
  label="Accept terms and conditions" 
  checked={checked} 
  onChange={(e) => setChecked(e.target.checked)} 
/>`}>
            <div className="flex flex-col gap-4">
              <Checkbox 
                label="Accept terms and conditions" 
                checked={checked} 
                onChange={(e) => setChecked(e.target.checked)} 
              />
              <Checkbox label="Disabled checkbox" disabled />
              <Checkbox label="Disabled checked" checked disabled />
            </div>
          </CodeBlock>
        </section>

        {/* Radio */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Radio Button</h2>
          <CodeBlock code={`const [value, setValue] = useState("option1");

<Radio 
  name="plan" 
  label="Free Plan" 
  checked={value === "option1"} 
  onChange={() => setValue("option1")} 
/>
<Radio 
  name="plan" 
  label="Pro Plan" 
  checked={value === "option2"} 
  onChange={() => setValue("option2")} 
/>`}>
            <div className="flex flex-col gap-4">
              <Radio 
                name="demo-radio" 
                label="Free Plan" 
                checked={radioValue === "option1"} 
                onChange={() => setRadioValue("option1")} 
              />
              <Radio 
                name="demo-radio" 
                label="Pro Plan" 
                checked={radioValue === "option2"} 
                onChange={() => setRadioValue("option2")} 
              />
              <Radio 
                name="demo-radio" 
                label="Enterprise (Disabled)" 
                disabled 
              />
            </div>
          </CodeBlock>
        </section>

        {/* Color Variants */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Color Variants</h2>
          <CodeBlock code={`<Checkbox label="Primary" checked variant="primary" onChange={() => {}} />
<Checkbox label="Success" checked variant="success" onChange={() => {}} />
<Checkbox label="Danger" checked variant="danger" onChange={() => {}} />
<Checkbox label="Warning" checked variant="warning" onChange={() => {}} />

<Radio name="colors" label="Primary" checked variant="primary" onChange={() => {}} />
<Radio name="colors" label="Success" checked variant="success" onChange={() => {}} />
<Radio name="colors" label="Danger" checked variant="danger" onChange={() => {}} />`}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-6">
                <Checkbox label="Primary" checked readOnly variant="primary" />
                <Checkbox label="Success" checked readOnly variant="success" />
                <Checkbox label="Danger" checked readOnly variant="danger" />
                <Checkbox label="Warning" checked readOnly variant="warning" />
              </div>
              <div className="flex flex-wrap gap-6">
                <Radio name="colors-demo" label="Primary" checked readOnly variant="primary" />
                <Radio name="colors-demo" label="Success" checked readOnly variant="success" />
                <Radio name="colors-demo" label="Danger" checked readOnly variant="danger" />
                <Radio name="colors-demo" label="Warning" checked readOnly variant="warning" />
              </div>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}