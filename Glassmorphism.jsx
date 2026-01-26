import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";

export default function GlassmorphismPage() {
  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Glassmorphism</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Efek visual seperti kaca buram yang memberikan kesan kedalaman dan transparansi.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Example</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Efek ini dicapai dengan kombinasi <code>backdrop-blur</code> dan warna latar belakang semi-transparan.
          </p>
          <CodeBlock code={`<div className="relative h-80 w-full rounded-2xl overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588420343618-6141de271e2b?auto=format&fit=crop&w=1470&q=80')" }}>
  <div className="absolute inset-0 flex items-center justify-center p-4">
    <div className="w-full max-w-sm rounded-2xl border border-white/20 bg-white/10 p-8 text-white shadow-lg backdrop-blur-lg">
      <h3 className="text-2xl font-bold mb-2">Glass Card</h3>
      <p className="text-sm opacity-80">
        This card uses backdrop-blur and a semi-transparent background to create the glassmorphism effect.
      </p>
    </div>
  </div>
</div>`}>
            <div className="w-full">
              <div className="relative h-80 w-full rounded-2xl overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588420343618-6141de271e2b?auto=format&fit=crop&w=1470&q=80')" }}>
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="w-full max-w-sm rounded-2xl border border-white/20 bg-white/10 p-8 text-white shadow-lg backdrop-blur-lg">
                    <h3 className="text-2xl font-bold mb-2">Glass Card</h3>
                    <p className="text-sm opacity-80">
                      This card uses backdrop-blur and a semi-transparent background to create the glassmorphism effect.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}