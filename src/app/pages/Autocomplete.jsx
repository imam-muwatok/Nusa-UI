import React from "react";
import CodeBlock from "../components/ui/CodeBlock";
import Autocomplete from "../components/ui/Autocomplete";

export default function AutocompletePage() {
  const countries = [
    "Indonesia", "Malaysia", "Singapore", "Thailand", "Vietnam", 
    "Philippines", "Brunei", "Cambodia", "Laos", "Myanmar",
    "United States", "United Kingdom", "Japan", "South Korea", "China"
  ];

  const techStack = [
    "React", "Vue", "Angular", "Svelte", "Next.js", "Nuxt.js", 
    "Tailwind CSS", "Bootstrap", "Node.js", "Python", "Go", "Rust"
  ];

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Autocomplete</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Input teks dengan saran prediksi saat mengetik (Typeahead).
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Example</h2>
          <CodeBlock code={`const countries = ["Indonesia", "Malaysia", "Singapore", ...];

<Autocomplete 
  label="Country" 
  placeholder="Type a country name..." 
  suggestions={countries} 
  onSelect={(val) => console.log(val)}
/>`}>
            <div className="w-full max-w-lg">
              <Autocomplete 
                label="Country" 
                placeholder="Type a country name..." 
                suggestions={countries} 
                onSelect={(val) => console.log("Selected:", val)}
              />
            </div>
          </CodeBlock>
        </section>

        {/* Disabled */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Disabled</h2>
          <CodeBlock code={`<Autocomplete disabled label="Technology" suggestions={techStack} />`}>
            <div className="w-full max-w-lg">
              <Autocomplete disabled label="Technology" placeholder="Cannot type here..." suggestions={techStack} />
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}