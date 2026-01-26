import React, { useState, useRef } from "react";
import CodeBlock from "../../components/ui/CodeBlock";

export default function GlassmorphismPage() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const rotateX = ((clientY - centerY) / height) * 20; // Max 20deg rotation
    const rotateY = ((clientX - centerX) / width) * -20; // Max 20deg rotation

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

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
          <CodeBlock code={`import React, { useState, useRef } from "react";

export default function GlassmorphismPage() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => { /* ... logic ... */ };
  const handleMouseLeave = () => { /* ... logic ... */ };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-80 w-full rounded-2xl overflow-hidden bg-cover bg-center" 
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1588420343618-6141de271e2b?auto=format&fit=crop&w=1470&q=80')",
        transform: \`perspective(1000px) rotateX(\${tilt.x}deg) rotateY(\${tilt.y}deg)\`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      {/* Background Shapes */}
      <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-cyan-500/50 blur-3xl opacity-70 animate-blob-move"></div>
      <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-purple-500/50 blur-3xl opacity-70 animate-blob-move" style={{ animationDuration: '25s' }}></div>

      <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/20">
        <div className="w-full max-w-sm rounded-2xl border border-white/20 bg-white/10 p-8 text-white shadow-lg backdrop-blur-lg">
          <h3 className="text-2xl font-bold mb-2">Glass Card</h3>
          <p className="text-sm opacity-80">
            This card uses backdrop-blur and a semi-transparent background to create the glassmorphism effect.
          </p>
        </div>
      </div>
    </div>
  );
}`}>
            <div className="w-full">
              <div 
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative h-80 w-full rounded-2xl overflow-hidden bg-cover bg-center transition-transform duration-100 ease-out" 
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1588420343618-6141de271e2b?auto=format&fit=crop&w=1470&q=80')",
                  transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
                }}
              >
                {/* Background Shapes */}
                <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-cyan-500/50 blur-3xl opacity-70 animate-blob-move"></div>
                <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-purple-500/50 blur-3xl opacity-70 animate-blob-move" style={{ animationDuration: '25s' }}></div>

                <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/20">
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

        {/* Frosted Glass */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Frosted Glass</h2>
          <p className="mb-4 text-zinc-500 dark:text-zinc-400">
            Varian dengan efek blur yang lebih kuat dan transparansi yang lebih rendah untuk keterbacaan yang lebih baik.
          </p>
          <CodeBlock code={`<div className="relative h-80 w-full rounded-2xl overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1470&q=80')" }}>
  <div className="absolute inset-0 flex items-center justify-center p-4">
    <div className="w-full max-w-sm rounded-2xl border border-white/30 bg-white/20 p-8 text-white shadow-xl backdrop-blur-2xl">
      <h3 className="text-2xl font-bold mb-2">Frosted Card</h3>
      <p className="text-sm font-medium">
        This card uses backdrop-blur-2xl and slightly more opaque background for a frosted look.
      </p>
    </div>
  </div>
</div>`}>
            <div className="w-full">
              <div className="relative h-80 w-full rounded-2xl overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1470&q=80')" }}>
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="w-full max-w-sm rounded-2xl border border-white/30 bg-white/20 p-8 text-white shadow-xl backdrop-blur-2xl">
                    <h3 className="text-2xl font-bold mb-2">Frosted Card</h3>
                    <p className="text-sm font-medium">
                      This card uses backdrop-blur-2xl and slightly more opaque background for a frosted look.
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
