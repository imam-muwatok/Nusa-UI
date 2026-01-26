import React, { useState, useEffect } from "react";
import CodeBlock from "../../components/ui/CodeBlock";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Lightbox = ({ images, startIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrevious();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-50">
        <XMarkIcon className="h-8 w-8" />
      </button>

      <div className="relative flex items-center justify-center w-full h-full p-16">
        <img
          src={images[currentIndex]}
          alt={`Lightbox content ${currentIndex + 1}`}
          className="max-h-full max-w-full object-contain animate-in zoom-in-95 duration-300"
        />
      </div>

      <button onClick={goToPrevious} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors">
        <ChevronLeftIcon className="h-6 w-6" />
      </button>

      <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors">
        <ChevronRightIcon className="h-6 w-6" />
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default function LightboxPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  ];

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Lightbox</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Tampilkan gambar dalam mode layar penuh saat diklik.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Gallery</h2>
          <CodeBlock code={`const [lightboxOpen, setLightboxOpen] = useState(false);
const [selectedImageIndex, setSelectedImageIndex] = useState(0);

const openLightbox = (index) => {
  setSelectedImageIndex(index);
  setLightboxOpen(true);
};

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {images.map((src, index) => (
    <img key={index} src={src} onClick={() => openLightbox(index)} className="cursor-pointer" />
  ))}
</div>

{lightboxOpen && (
  <Lightbox images={images} startIndex={selectedImageIndex} onClose={() => setLightboxOpen(false)} />
)}`}>
            <div className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    onClick={() => openLightbox(index)}
                    className="h-40 w-full cursor-pointer rounded-lg object-cover transition-opacity hover:opacity-80"
                    alt={`Gallery image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </CodeBlock>
        </section>
      </div>

      {lightboxOpen && (
        <Lightbox images={images} startIndex={selectedImageIndex} onClose={() => setLightboxOpen(false)} />
      )}
    </main>
  );
}