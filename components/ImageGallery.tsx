"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "@/components/Icon"; // Reusing your existing Icon component

interface ImageGalleryProps {
  gallery: { src: string; alt?: string }[];
  title: string;
}

export default function ImageGallery({ gallery, title }: ImageGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!gallery || gallery.length === 0) return null;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  return (
    <>
      {/* Carousel Section */}
      <section className="mt-16 pt-10 border-t border-surface-variant max-w-container mx-auto w-full">
        <h2 className="font-display text-headline-sm text-primary mb-8 text-center">
          Gallery
        </h2>
        
        <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-4 md:gap-6 pb-8 -mx-5 px-5 md:-mx-20 md:px-20 scroll-smooth">
          {gallery.map((img, index) => (
            <div 
              key={index} 
              onClick={() => openLightbox(index)}
              className="relative shrink-0 snap-center w-[85%] sm:w-[60%] md:w-[45%] h-64 md:h-80 rounded-xl overflow-hidden shadow-soft cursor-pointer group"
            >
              <Image
                src={img.src}
                alt={img.alt || `${title} gallery image ${index + 1}`}
                fill
                sizes="(max-width: 640px) 85vw, (max-width: 768px) 60vw, 45vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Optional: Add a subtle overlay on hover to indicate it's clickable */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
          ))}
        </div>
      </section>

      {/* Full-screen Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 z-50 p-2"
            aria-label="Close"
          >
            <Icon name="close" className="text-3xl" />
          </button>

          {/* Previous Button */}
          <button 
            onClick={prevImage}
            className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-50 p-2 bg-black/50 rounded-full"
            aria-label="Previous Image"
          >
            <Icon name="arrow_back" className="text-3xl" />
          </button>

          {/* Current Image Viewer */}
          <div className="relative w-full h-full max-w-5xl max-h-[85vh]">
            <Image
              src={gallery[currentIndex].src}
              alt={gallery[currentIndex].alt || `${title} gallery image ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Next Button */}
          <button 
            onClick={nextImage}
            className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-50 p-2 bg-black/50 rounded-full"
            aria-label="Next Image"
          >
            <Icon name="arrow_forward" className="text-3xl" />
          </button>

          {/* Image Counter (Optional) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 font-display text-sm tracking-widest uppercase">
            {currentIndex + 1} / {gallery.length}
          </div>
        </div>
      )}
    </>
  );
}