import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";

export default function FigurePage() {
  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Figure</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen untuk menampilkan gambar dengan caption atau keterangan.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Figure</h2>
          <CodeBlock code={`<figure>
  <img 
    className="rounded-xl" 
    src="https://picsum.photos/id/48/800/450" 
    alt="Deskripsi gambar" 
  />
  <figcaption className="mt-2 text-sm text-center text-zinc-500 dark:text-zinc-400">
    Contoh caption untuk gambar di atas.
  </figcaption>
</figure>`}>
            <div className="w-full max-w-lg">
              <figure>
                <img 
                  className="rounded-xl shadow-md" 
                  src="https://picsum.photos/id/48/800/450" 
                  alt="A winding road through a forest." 
                />
                <figcaption className="mt-3 text-sm text-center text-zinc-500 dark:text-zinc-400">
                  A winding road through a sunlit forest.
                </figcaption>
              </figure>
            </div>
          </CodeBlock>
        </section>

        {/* Figure with Border */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Figure with Border & Background</h2>
          <CodeBlock code={`<figure className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
  <img 
    className="rounded-lg" 
    src="https://picsum.photos/id/54/800/450" 
    alt="Deskripsi gambar" 
  />
  <figcaption className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
    Caption dengan latar belakang dan border.
  </figcaption>
</figure>`}>
            <div className="w-full max-w-lg">
              <figure className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900 shadow-sm">
                <img 
                  className="rounded-lg" 
                  src="https://picsum.photos/id/54/800/450" 
                  alt="A person walking on a beach." 
                />
                <figcaption className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
                  A person walking on a beach during sunset.
                </figcaption>
              </figure>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}