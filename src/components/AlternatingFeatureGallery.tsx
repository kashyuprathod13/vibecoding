import ZoomableImage from "./ZoomableImage";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  image: string;
  content: React.ReactNode;
}

interface AlternatingFeatureGalleryProps {
  sections: Section[];
  className?: string;
}

export default function AlternatingFeatureGallery({ sections, className }: AlternatingFeatureGalleryProps) {
  return (
    <div className={cn("space-y-32 py-12", className)}>
      {sections.map((section, index) => {
        // Even indices: Image on left, Text on right.
        // Odd indices: Text on left, Image on right.
        const isImageLeft = index % 2 === 0;

        return (
          <div 
            key={section.id} 
            className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
          >
            {/* Image Container */}
            <div className={cn(
                "w-full lg:w-1/2 relative h-[50vh] md:h-[70vh] rounded-[2rem] overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-4 flex items-center justify-center transition-transform hover:scale-[1.02] duration-500",
                !isImageLeft && "lg:order-2"
            )}>
              <ZoomableImage
                  src={section.image}
                  alt={`Feature ${section.id}`}
                  className="w-full h-full object-contain"
              />
            </div>

            {/* Content Container */}
            <div className={cn(
                "w-full lg:w-1/2 flex flex-col justify-center",
                !isImageLeft && "lg:order-1"
            )}>
              {section.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
