import React, { useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";
import Select2 from "../components/ui/Select2";

export default function Select2Page() {
  const [singleValue, setSingleValue] = useState(null);
  const [multiValue, setMultiValue] = useState([]);
  
  const options = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "nextjs", label: "Next.js" },
    { value: "nuxtjs", label: "Nuxt.js" },
    { value: "nodejs", label: "Node.js" },
    { value: "python", label: "Python" },
    { value: "go", label: "Go" },
  ];

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Select2</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen select yang lebih canggih dengan fitur pencarian dan multi-select.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Searchable */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Searchable Single Select</h2>
          <CodeBlock code={`const [value, setValue] = useState(null);
const options = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  // ...
];

<Select2 
  label="Framework"
  options={options} 
  value={value} 
  onChange={setValue} 
/>`}>
            <div className="w-full max-w-sm">
              <Select2 
                label="Framework"
                options={options} 
                value={singleValue} 
                onChange={setSingleValue} 
              />
            </div>
          </CodeBlock>
        </section>

        {/* Multi Select */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Multi Select</h2>
          <CodeBlock code={`const [value, setValue] = useState([]);

<Select2 
  multiple
  label="Skills"
  options={options} 
  value={value} 
  onChange={setValue} 
/>`}>
            <div className="w-full max-w-sm">
              <Select2 
                multiple
                label="Skills"
                options={options} 
                value={multiValue} 
                onChange={setMultiValue} 
              />
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}