import React, { useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";
import Select, { NativeSelect } from "../components/ui/Select";

export default function SelectPage() {
  const [selectedFramework, setSelectedFramework] = useState("");
  
  const frameworks = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "nextjs", label: "Next.js" },
  ];

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Select</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen input pilihan yang memungkinkan pengguna memilih satu opsi dari daftar.
        </p>
      </div>

      <div className="space-y-12">
        {/* Custom Select */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Custom Select</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Dropdown kustom dengan styling yang konsisten dan dukungan ikon.
          </p>
          <CodeBlock code={`const [value, setValue] = useState("");
const options = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  // ...
];

<Select 
  options={options} 
  value={value} 
  onChange={setValue} 
  placeholder="Choose a framework..." 
/>`}>
            <div className="w-full max-w-sm">
              <Select 
                options={frameworks} 
                value={selectedFramework} 
                onChange={setSelectedFramework} 
                placeholder="Choose a framework..." 
              />
              <p className="mt-4 text-sm text-zinc-500">Selected value: <span className="font-mono text-zinc-900 dark:text-white">{selectedFramework || "-"}</span></p>
            </div>
          </CodeBlock>
        </section>

        {/* Native Select */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Native Select</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Menggunakan elemen <code>&lt;select&gt;</code> asli browser untuk aksesibilitas dan perilaku default di perangkat mobile.
          </p>
          <CodeBlock code={`<NativeSelect 
  options={[
    { value: "id", label: "Indonesia" },
    { value: "en", label: "English" },
  ]} 
/>`}>
            <div className="w-full max-w-sm">
              <NativeSelect 
                options={[
                  { value: "id", label: "Indonesia" },
                  { value: "en", label: "English" },
                  { value: "jp", label: "Japanese" },
                ]} 
              />
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}