import React from "react";
import CodeBlock from "../components/ui/CodeBlock";
import FormControl from "../components/ui/FormControl";

export default function FormControlPage() {
  const inputClasses = "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white transition-all";
  const errorInputClasses = "w-full rounded-xl border border-red-500 bg-red-50 px-4 py-3 text-sm outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 dark:border-red-500/50 dark:bg-red-950/20 dark:text-white transition-all";

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Form Control</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen pembungkus untuk memberikan konteks (label, helper text, error) pada elemen form.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Example</h2>
          <CodeBlock code={`<FormControl label="Email Address" helperText="We'll never share your email.">
  <input 
    type="email" 
    className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white transition-all" 
    placeholder="name@example.com" 
  />
</FormControl>`}>
            <div className="w-full max-w-lg">
              <FormControl label="Email Address" helperText="We'll never share your email.">
                <input type="email" className={inputClasses} placeholder="name@example.com" />
              </FormControl>
            </div>
          </CodeBlock>
        </section>

        {/* Required Field */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Required Field</h2>
          <CodeBlock code={`<FormControl label="Username" required>
  <input type="text" className="..." />
</FormControl>`}>
            <div className="w-full max-w-lg">
              <FormControl label="Username" required>
                <input type="text" className={inputClasses} placeholder="johndoe" />
              </FormControl>
            </div>
          </CodeBlock>
        </section>

        {/* Validation Error */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Validation Error</h2>
          <CodeBlock code={`<FormControl label="Password" error="Password must be at least 8 characters.">
  <input type="password" className="border-red-500 ..." />
</FormControl>`}>
            <div className="w-full max-w-lg">
              <FormControl label="Password" error="Password must be at least 8 characters.">
                <input type="password" className={errorInputClasses} defaultValue="123" />
              </FormControl>
            </div>
          </CodeBlock>
        </section>

        {/* With Select */}
        <section>
          <h2 className="text-2xl font-bold mb-6">With Other Inputs</h2>
          <CodeBlock code={`<FormControl label="Role">
  <select className="...">...</select>
</FormControl>`}>
            <div className="w-full max-w-lg">
              <FormControl label="Role">
                <select className={inputClasses}><option>Admin</option><option>User</option></select>
              </FormControl>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}