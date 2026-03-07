"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
    src: string;
    alt: string;
}

interface ZoomGalleryProps {
    images: GalleryImage[];
}

export default function ZoomGallery({ images }: ZoomGalleryProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    // Prevent scrolling when modal is open
    const toggleModal = (index: number) => {
        if (!isOpen) {
            document.body.style.overflow = "hidden";
            setCurrentIndex(index);
            setIsOpen(true);
        } else {
            document.body.style.overflow = "unset";
            setIsOpen(false);
            setTimeout(() => setIsZoomed(false), 300);
        }
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsZoomed(false);
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsZoomed(false);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isZoomed) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x, y });
    };

    const handleImageClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        
        if (!isZoomed) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            setMousePos({ x, y });
        }
        
        setIsZoomed(!isZoomed);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            
            if (e.key === "ArrowRight") {
                setIsZoomed(false);
                setCurrentIndex((prev) => (prev + 1) % images.length);
            } else if (e.key === "ArrowLeft") {
                setIsZoomed(false);
                setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
            } else if (e.key === "Escape") {
                document.body.style.overflow = "unset";
                setIsOpen(false);
                setIsZoomed(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, images.length]);

    return (
        <>
            <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap lg:grid lg:grid-cols-5 md:gap-6">
                {images.map((img, index) => (
                    <div 
                        key={index} 
                        className="relative aspect-[9/19] rounded-2xl overflow-hidden shadow-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:shadow-xl transition-all cursor-zoom-in hover:scale-[1.02]"
                        onClick={() => toggleModal(index)}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>

            {/* Fullscreen Modal Popup */}
            {isOpen && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-12 animate-in fade-in duration-200 overflow-hidden"
                    onClick={() => toggleModal(0)}
                >
                    <button 
                        className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md z-50"
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleModal(0);
                        }}
                        aria-label="Close image gallery"
                    >
                        <X size={24} />
                    </button>

                    {images.length > 1 && (
                        <>
                            <button 
                                className="absolute left-4 md:left-8 p-3 md:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md z-50 text-2xl hidden md:block hover:scale-110"
                                onClick={prevImage}
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={32} />
                            </button>
                            <button 
                                className="absolute right-4 md:right-8 p-3 md:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md z-50 text-2xl hidden md:block hover:scale-110"
                                onClick={nextImage}
                                aria-label="Next image"
                            >
                                <ChevronRight size={32} />
                            </button>
                            
                            {/* Mobile tap zones */}
                            <div className="absolute inset-y-0 left-0 w-1/3 z-40 md:hidden" onClick={prevImage} />
                            <div className="absolute inset-y-0 right-0 w-1/3 z-40 md:hidden" onClick={nextImage} />
                        </>
                    )}
                    
                    <div 
                        className={`relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center transition-transform duration-300 ease-out ${isZoomed ? "cursor-zoom-out scale-[2] md:scale-[2.5]" : "cursor-zoom-in scale-100"}`}
                        style={{ transformOrigin: `${mousePos.x}% ${mousePos.y}%` }}
                        onClick={handleImageClick}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => setMousePos({ x: 50, y: 50 })}
                    >
                        <Image
                            src={images[currentIndex].src}
                            alt={images[currentIndex].alt}
                            fill
                            className="object-contain drop-shadow-2xl select-none"
                            quality={100}
                        />
                    </div>

                    {/* Image Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white/90 text-sm font-medium tracking-widest border border-white/10">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    );
}
