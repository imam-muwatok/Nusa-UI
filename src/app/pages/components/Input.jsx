import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";

export default function InputPage() {
  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Form Input</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen input untuk mengumpulkan data pengguna dengan gaya yang konsisten.
        </p>
      </div>

      <div className="space-y-12">
        {/* Input Fields */}
        <section>
            <h2 className="text-2xl font-bold mb-6">Input Fields</h2>
            <CodeBlock code={`<div className="grid gap-6 md:grid-cols-2">
  <div className="space-y-2">
    <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Username</label>
    <input type="text" placeholder="johndoe" className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white transition-all" />
  </div>
  <div className="space-y-2">
    <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Email Address</label>
    <input type="email" placeholder="john@example.com" className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white transition-all" />
  </div>
</div>
<div className="space-y-2">
  <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Bio</label>
  <textarea rows="4" placeholder="Tell us about yourself..." className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white transition-all"></textarea>
</div>`}>
              <div className="w-full space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Username</label>
                        <input type="text" placeholder="johndoe" className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Email Address</label>
                        <input type="email" placeholder="john@example.com" className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white transition-all" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Bio</label>
                    <textarea rows="4" placeholder="Tell us about yourself..." className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white transition-all"></textarea>
                </div>
              </div>
            </CodeBlock>
        </section>

        {/* Selection Controls */}
        <section>
            <h2 className="text-2xl font-bold mb-6">Selection Controls</h2>
            <CodeBlock code={`<div className="flex flex-wrap gap-8 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
  <label className="flex items-center gap-3 cursor-pointer group">
    <input type="checkbox" className="h-5 w-5 rounded border-zinc-300 text-cyan-600 focus:ring-cyan-500" />
    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-cyan-600 transition-colors">Remember me</span>
  </label>
  <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800"></div>
  <label className="flex items-center gap-3 cursor-pointer group">
    <input type="radio" name="radio-group" className="h-5 w-5 border-zinc-300 text-cyan-600 focus:ring-cyan-500" />
    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-cyan-600 transition-colors">Option 1</span>
  </label>
  <label className="flex items-center gap-3 cursor-pointer group">
    <input type="radio" name="radio-group" className="h-5 w-5 border-zinc-300 text-cyan-600 focus:ring-cyan-500" />
    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-cyan-600 transition-colors">Option 2</span>
  </label>
</div>`}>
              <div className="flex flex-wrap gap-8 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 w-full">
                <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="h-5 w-5 rounded border-zinc-300 text-cyan-600 focus:ring-cyan-500" />
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-cyan-600 transition-colors">Remember me</span>
                </label>
                <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800"></div>
                <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="radio-group" className="h-5 w-5 border-zinc-300 text-cyan-600 focus:ring-cyan-500" />
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-cyan-600 transition-colors">Option 1</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="radio-group" className="h-5 w-5 border-zinc-300 text-cyan-600 focus:ring-cyan-500" />
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-cyan-600 transition-colors">Option 2</span>
                </label>
              </div>
            </CodeBlock>
        </section>
      </div>
    </main>
  );
}