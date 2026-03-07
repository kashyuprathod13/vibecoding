"use client";

import { useEffect, useRef, useState } from "react";
import ZoomableImage from "./ZoomableImage";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  image: string;
  content: React.ReactNode;
}

interface StickyScrollGalleryProps {
  sections: Section[];
  className?: string;
}

export default function StickyScrollGallery({ sections, className }: StickyScrollGalleryProps) {
  const [activeImage, setActiveImage] = useState(sections[0].image);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when element is near the middle of viewport
      threshold: 0.1,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1) {
            setActiveImage(sections[index].image);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [sections]);

  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative items-start", className)} ref={containerRef}>
      {/* Sticky Image Section (Left on desktop) */}
      <div className="lg:sticky lg:top-[20vh] h-[40vh] lg:h-[70vh] w-full rounded-2xl overflow-hidden shadow-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-4 flex items-center justify-center transition-all duration-500">
        <ZoomableImage
            src={activeImage}
            alt="Feature Screen"
            className="w-full h-full object-contain transition-opacity duration-300"
        />
      </div>

      {/* Scrollable Content Section */}
      <div className="space-y-32 lg:py-32">
        {sections.map((section, index) => (
          <div 
            key={section.id} 
            ref={el => { sectionRefs.current[index] = el }}
            className="min-h-[50vh] flex flex-col justify-center transition-opacity duration-500"
            style={{ opacity: activeImage === section.image ? 1 : 0.4 }}
          >
            {section.content}
          </div>
        ))}
      </div>
    </div>
  );
}
