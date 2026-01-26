import React from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import Carousel from "../../components/ui/Carousel";

export default function CarouselPage() {
  const images = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
  ];

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Carousel</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen slideshow untuk menelusuri elemen seperti gambar atau kartu secara berurutan.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Example</h2>
          <CodeBlock code={`<Carousel>
  <img src="..." alt="" />
  <img src="..." alt="" />
  <img src="..." alt="" />
</Carousel>`}>
            <div className="w-full max-w-2xl mx-auto">
              <Carousel>
                {images.map((src, i) => (
                  <img key={i} src={src} alt="" className="w-full h-64 object-cover bg-zinc-100 dark:bg-zinc-800" />
                ))}
              </Carousel>
            </div>
          </CodeBlock>
        </section>

        {/* Auto Slide */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Auto Slide</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Gunakan prop <code>autoSlide</code> dan <code>autoSlideInterval</code> (ms) untuk mengaktifkan slideshow otomatis.
          </p>
          <CodeBlock code={`<Carousel autoSlide autoSlideInterval={3000}>
  {/* slides */}
</Carousel>`}>
            <div className="w-full max-w-2xl mx-auto">
              <Carousel autoSlide autoSlideInterval={3000}>
                {images.map((src, i) => (
                  <img key={i} src={src} alt="" className="w-full h-64 object-cover bg-zinc-100 dark:bg-zinc-800" />
                ))}
              </Carousel>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}