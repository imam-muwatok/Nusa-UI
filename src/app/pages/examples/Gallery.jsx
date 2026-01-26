import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";

export default function GalleryPage() {
  const images = [
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  ];

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Gallery</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Tampilkan koleksi gambar dengan layout masonry yang responsif.
        </p>
      </div>

      <div className="space-y-12">
        {/* Masonry Gallery */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Masonry Gallery</h2>
          <CodeBlock code={`<div className="masonry-grid">
  {images.map((src, index) => (
    <div key={index} className="break-inside-avoid mb-4">
      <img className="h-auto max-w-full rounded-lg" src={src} alt="" />
    </div>
  ))}
</div>

/* CSS (Add to your global CSS) */
.masonry-grid {
  column-count: 1;
  column-gap: 1rem;
}
@media (min-width: 640px) {
  .masonry-grid {
    column-count: 2;
  }
}
@media (min-width: 1024px) {
  .masonry-grid {
    column-count: 3;
  }
}`}>
            <div className="w-full">
              <div className="masonry-grid">
                {images.map((src, index) => (
                  <div key={index} className="break-inside-avoid mb-4">
                    <img className="h-auto max-w-full rounded-lg" src={src} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </CodeBlock>
        </section>

        {/* Grid Gallery */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Grid Gallery</h2>
          <CodeBlock code={`<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  {images.map((src, index) => (
    <div key={index}>
      <img className="h-auto max-w-full rounded-lg" src={src} alt="" />
    </div>
  ))}
</div>`}>
            <div className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.slice(0, 9).map((src, index) => (
                  <div key={index}>
                    <img className="h-auto max-w-full rounded-lg" src={src} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}