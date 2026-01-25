import React, { useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";
import Range from "../components/ui/Range";

export default function RangePage() {
  const [value1, setValue1] = useState(50);
  const [value2, setValue2] = useState(75);
  const [value3, setValue3] = useState(20);
  const [dualValue, setDualValue] = useState([20, 80]);
  const [variantValues, setVariantValues] = useState({
    primary: 50,
    secondary: 50,
    success: 50,
    danger: 50,
    warning: 50
  });
  const [equalizer, setEqualizer] = useState({
    bass: 75,
    mid: 50,
    treble: 85,
    gain: 60,
    vol: 40
  });

  const handleVariantChange = (key, val) => {
    setVariantValues(prev => ({ ...prev, [key]: val }));
  };

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Range</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Input slider untuk memilih nilai dalam rentang tertentu.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Example</h2>
          <CodeBlock code={`const [value, setValue] = useState(50);

<Range 
  value={value} 
  onChange={(e) => setValue(e.target.value)} 
/>`}>
            <div className="w-full max-w-lg">
              <Range 
                value={value1} 
                onChange={(e) => setValue1(e.target.value)} 
              />
            </div>
          </CodeBlock>
        </section>

        {/* With Label & Value */}
        <section>
          <h2 className="text-2xl font-bold mb-6">With Label & Value</h2>
          <CodeBlock code={`<Range 
  label="Volume" 
  showValue 
  value={value} 
  onChange={(e) => setValue(e.target.value)} 
/>`}>
            <div className="w-full max-w-lg">
              <Range 
                label="Volume" 
                showValue 
                value={value2} 
                onChange={(e) => setValue2(e.target.value)} 
              />
            </div>
          </CodeBlock>
        </section>

        {/* Steps */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Steps</h2>
          <CodeBlock code={`<Range 
  label="Step: 10" 
  showValue 
  min={0} 
  max={100} 
  step={10} 
  value={value} 
  onChange={(e) => setValue(e.target.value)} 
/>`}>
            <div className="w-full max-w-lg">
              <Range 
                label="Step: 10" 
                showValue 
                min={0} 
                max={100} 
                step={10} 
                value={value3} 
                onChange={(e) => setValue3(e.target.value)} 
              />
            </div>
          </CodeBlock>
        </section>

        {/* Vertical Slider */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Vertical Slider</h2>
          <CodeBlock code={`<div className="flex gap-8 items-end justify-center h-64">
  <Range vertical label="Bass" value={75} />
  <Range vertical label="Mid" value={50} />
  <Range vertical label="Treble" value={85} />
</div>`}>
            <div className="flex flex-wrap gap-8 items-end justify-center p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <Range vertical label="Bass" value={equalizer.bass} onChange={(e) => setEqualizer({...equalizer, bass: e.target.value})} variant="primary" />
              <Range vertical label="Mid" value={equalizer.mid} onChange={(e) => setEqualizer({...equalizer, mid: e.target.value})} variant="secondary" />
              <Range vertical label="Treble" value={equalizer.treble} onChange={(e) => setEqualizer({...equalizer, treble: e.target.value})} variant="success" />
              <Range vertical label="Gain" value={equalizer.gain} onChange={(e) => setEqualizer({...equalizer, gain: e.target.value})} variant="warning" />
              <Range vertical label="Vol" value={equalizer.vol} onChange={(e) => setEqualizer({...equalizer, vol: e.target.value})} variant="danger" />
            </div>
          </CodeBlock>
        </section>

        {/* Dual Range */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Dual Range</h2>
          <CodeBlock code={`const [value, setValue] = useState([20, 80]);

<Range 
  dual 
  label="Price Range" 
  showValue 
  value={value} 
  onChange={setValue} 
/>`}>
            <div className="w-full max-w-lg">
              <Range dual label="Price Range" showValue value={dualValue} onChange={setDualValue} />
            </div>
          </CodeBlock>
        </section>

        {/* Color Variants */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Color Variants</h2>
          <CodeBlock code={`<Range variant="primary" value={50} />
<Range variant="secondary" value={50} />
<Range variant="success" value={50} />
<Range variant="danger" value={50} />
<Range variant="warning" value={50} />`}>
            <div className="w-full max-w-lg space-y-6">
              <Range label="Primary" variant="primary" value={variantValues.primary} onChange={(e) => handleVariantChange('primary', e.target.value)} showValue />
              <Range label="Secondary" variant="secondary" value={variantValues.secondary} onChange={(e) => handleVariantChange('secondary', e.target.value)} showValue />
              <Range label="Success" variant="success" value={variantValues.success} onChange={(e) => handleVariantChange('success', e.target.value)} showValue />
              <Range label="Danger" variant="danger" value={variantValues.danger} onChange={(e) => handleVariantChange('danger', e.target.value)} showValue />
              <Range label="Warning" variant="warning" value={variantValues.warning} onChange={(e) => handleVariantChange('warning', e.target.value)} showValue />
            </div>
          </CodeBlock>
        </section>

        {/* Disabled */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Disabled</h2>
          <CodeBlock code={`<Range disabled value={30} />`}>
            <div className="w-full max-w-lg">
              <Range disabled value={30} />
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}