"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryModalProps {
  images: { src: string; caption?: string; title?: string }[];
  title?: string;
}

export function ProjectGalleryModal({ images, title = "Project Gallery" }: GalleryModalProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setActiveIdx(idx);
  const closeLightbox = () => setActiveIdx(null);

  const prev = () => {
    if (activeIdx === null) return;
    setActiveIdx((activeIdx - 1 + images.length) % images.length);
  };

  const next = () => {
    if (activeIdx === null) return;
    setActiveIdx((activeIdx + 1) % images.length);
  };

  return (
    <div>
      {/* Grid of gallery thumbnails */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <button
            key={img.src + idx}
            type="button"
            onClick={() => openLightbox(idx)}
            className="group relative aspect-[4/3] bg-[#FAF8F2] border border-[#D9D5CB] overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#14241B]"
          >
            <Image
              src={img.src}
              alt={img.caption || `${title} photo ${idx + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#14241B] text-white p-2 rounded-full">
                <Maximize2 size={16} />
              </span>
            </div>
            {img.title && (
              <div className="absolute bottom-0 inset-x-0 bg-[#14241B]/90 text-white text-[0.65rem] px-2 py-1 truncate">
                {img.title}
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white border-b border-white/10 pb-4">
            <span className="font-[var(--font-display)] text-xl sm:text-2xl">
              {title} • Image {activeIdx + 1} of {images.length}
            </span>
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close fullscreen view"
              className="p-2 text-white/80 hover:text-white transition-colors"
            >
              <X size={28} />
            </button>
          </div>

          {/* Center Image */}
          <div className="relative flex-grow flex items-center justify-center py-4">
            <div className="relative w-full h-full max-h-[78vh] max-w-5xl">
              <Image
                src={images[activeIdx].src}
                alt={images[activeIdx].caption || title}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Navigation buttons */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 sm:left-4 p-3 bg-white/10 hover:bg-white/25 text-white rounded-full transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 sm:right-4 p-3 bg-white/10 hover:bg-white/25 text-white rounded-full transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Bottom Caption */}
          <div className="text-center text-white/80 text-sm py-2 border-t border-white/10">
            {images[activeIdx].caption || images[activeIdx].title || title}
          </div>
        </div>
      )}
    </div>
  );
}
