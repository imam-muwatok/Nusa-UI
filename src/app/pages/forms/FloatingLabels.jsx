import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import FormControl from "../../components/ui/FormControl";

export default function FloatingLabelsPage() {
  const inputClasses = "block w-full rounded-xl border border-zinc-200 bg-transparent px-4 py-2.5 text-sm text-zinc-900 focus:border-cyan-600 focus:outline-none focus:ring-0 dark:border-zinc-700 dark:text-white dark:focus:border-cyan-500";
  const errorInputClasses = "block w-full rounded-xl border border-red-500 bg-transparent px-4 py-2.5 text-sm text-zinc-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500";

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Floating Labels</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Gaya input modern di mana label berfungsi sebagai placeholder dan berpindah ke atas saat fokus.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Example</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Tambahkan prop <code>floating</code> pada <code>FormControl</code>. Pastikan input memiliki background transparan agar terlihat menyatu.
          </p>
          <CodeBlock code={`<FormControl floating label="Email Address">
  <input 
    type="email" 
    className="block w-full rounded-xl border border-zinc-200 bg-transparent px-4 py-2.5 text-sm text-zinc-900 focus:border-cyan-600 focus:outline-none focus:ring-0 dark:border-zinc-700 dark:text-white dark:focus:border-cyan-500" 
    placeholder=" " 
  />
</FormControl>`}>
            <div className="w-full max-w-lg pt-4">
              <FormControl floating label="Email Address">
                <input type="email" className={inputClasses} placeholder=" " />
              </FormControl>
            </div>
          </CodeBlock>
        </section>

        {/* With Value (Filled) */}
        <section>
          <h2 className="text-2xl font-bold mb-6">With Value</h2>
          <CodeBlock code={`<FormControl floating label="Username">
  <input type="text" defaultValue="johndoe" className="..." />
</FormControl>`}>
            <div className="w-full max-w-lg pt-4">
              <FormControl floating label="Username">
                <input type="text" className={inputClasses} defaultValue="johndoe" />
              </FormControl>
            </div>
          </CodeBlock>
        </section>

        {/* Validation Error */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Validation Error</h2>
          <CodeBlock code={`<FormControl floating label="Password" error="Password is required">
  <input type="password" className="border-red-500 ..." />
</FormControl>`}>
            <div className="w-full max-w-lg pt-4">
              <FormControl floating label="Password" error="Password is required">
                <input type="password" className={errorInputClasses} />
              </FormControl>
            </div>
          </CodeBlock>
        </section>

        {/* Select */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Select Input</h2>
          <CodeBlock code={`<FormControl floating label="Country">
  <select className="..."><option>Indonesia</option>...</select>
</FormControl>`}>
            <div className="w-full max-w-lg pt-4">
              <FormControl floating label="Country">
                <select className={inputClasses}><option>Indonesia</option><option>Malaysia</option><option>Singapore</option></select>
              </FormControl>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}