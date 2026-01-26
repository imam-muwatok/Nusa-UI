import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";

export default function MasonryLayoutPage() {
  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Masonry Layout</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Tata letak grid dinamis yang mengisi ruang secara optimal dengan mengatur elemen dengan berbagai ukuran.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Example</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Contoh implementasi dasar masonry layout menggunakan CSS Columns.
          </p>
          <CodeBlock code={`<div className="masonry-grid">
  <div className="animate-in fade-in duration-700">...</div>
  <div className="animate-in fade-in duration-700">...</div>
  <div className="animate-in fade-in duration-700">...</div>
</div>

.masonry-grid {
  column-count: 3;
  column-gap: 24px;
}
@media (max-width: 1024px) { .masonry-grid { column-count: 2; } }
@media (max-width: 640px) { .masonry-grid { column-count: 1; } }

.masonry-grid > div {
  break-inside: avoid;
  margin-bottom: 24px;
}`}>
            <div className="w-full">
              <div className="masonry-grid">
                <div className="h-48 rounded-xl bg-red-200 animate-in fade-in duration-700"></div>
                <div className="h-32 rounded-xl bg-green-200 animate-in fade-in duration-700"></div>
                <div className="h-56 rounded-xl bg-blue-200 animate-in fade-in duration-700"></div>
                <div className="h-40 rounded-xl bg-yellow-200 animate-in fade-in duration-700"></div>
                <div className="h-48 rounded-xl bg-purple-200 animate-in fade-in duration-700"></div>
                <div className="h-32 rounded-xl bg-pink-200 animate-in fade-in duration-700"></div>
                <div className="h-56 rounded-xl bg-orange-200 animate-in fade-in duration-700"></div>
                <div className="h-40 rounded-xl bg-teal-200 animate-in fade-in duration-700"></div>
              </div>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}