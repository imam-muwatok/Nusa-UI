import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";

export default function ParallaxPage() {
  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Parallax</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Efek scrolling di mana latar belakang bergerak lebih lambat daripada konten depan.
        </p>
      </div>

      <div className="space-y-12">
        {/* CSS Parallax */}
        <section>
          <h2 className="text-2xl font-bold mb-6">CSS Parallax</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Menggunakan utility <code>bg-fixed</code> dari Tailwind CSS untuk membuat efek parallax sederhana tanpa JavaScript.
          </p>
          <CodeBlock code={`<div className="relative h-96 w-full overflow-hidden rounded-xl">
  <div 
    className="absolute inset-0 bg-fixed bg-center bg-cover"
    style={{ 
      backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" 
    }}
  />
  <div className="relative flex h-full items-center justify-center bg-black/40">
    <h2 className="text-4xl font-bold text-white">Parallax Effect</h2>
  </div>
</div>`}>
            <div className="w-full">
              <div className="relative h-64 w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div 
                  className="absolute inset-0 bg-fixed bg-center bg-cover"
                  style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" 
                  }}
                />
                <div className="relative flex h-full items-center justify-center bg-black/40">
                  <h2 className="text-3xl font-bold text-white">Parallax Effect</h2>
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-zinc-900 border-x border-b border-zinc-200 dark:border-zinc-800 rounded-b-xl">
                <p className="text-zinc-600 dark:text-zinc-400">
                  Scroll halaman utama untuk melihat efeknya. Gambar latar belakang akan tetap diam relatif terhadap viewport.
                </p>
              </div>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}