"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";

interface ZoomableImageProps {
    src: string;
    alt: string;
    className?: string;
}

export default function ZoomableImage({ src, alt, className = "" }: ZoomableImageProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isZoomed, setIsZoomed] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    // Prevent scrolling when modal is open
    const toggleModal = () => {
        if (!isOpen) {
            document.body.style.overflow = "hidden";
            setIsOpen(true);
        } else {
            document.body.style.overflow = "unset";
            setIsOpen(false);
            setTimeout(() => setIsZoomed(false), 300);
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isZoomed) return;
        const rect = e.currentTarget.getBoundingClientRect();
        // Calculate mouse position as a percentage of the container
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x: 50, y }); // Lock X to center (50%)
    };

    const handleImageClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        
        if (!isZoomed) {
            // Set initial zoom origin to where the user clicked
            const rect = e.currentTarget.getBoundingClientRect();
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            setMousePos({ x: 50, y }); // Lock X to center (50%)
        }
        
        setIsZoomed(!isZoomed);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            
            if (e.key === "Escape") {
                document.body.style.overflow = "unset";
                setIsOpen(false);
                setTimeout(() => setIsZoomed(false), 300);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    return (
        <>
            <div 
                className={`relative cursor-zoom-in transition-transform duration-300 hover:scale-[1.01] ${className}`}
                onClick={toggleModal}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain"
                />
            </div>

            {/* Fullscreen Modal Popup */}
            {isOpen && typeof document !== 'undefined' && createPortal(
                <div 
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-12 animate-in fade-in duration-200 overflow-hidden"
                    onClick={toggleModal}
                >
                    <button 
                        className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md z-50 text-white dark:text-white"
                        onClick={(e) => { e.stopPropagation(); toggleModal(); }}
                        aria-label="Close image"
                    >
                        <X size={24} />
                    </button>
                    
                    <div 
                        className={`relative w-full h-full max-w-7xl max-h-[90vh] transition-transform duration-300 ease-out ${isZoomed ? "cursor-pointer scale-[2] md:scale-[2.5]" : "cursor-zoom-in scale-100"}`}
                        style={{ transformOrigin: `${mousePos.x}% ${mousePos.y}%` }}
                        onClick={handleImageClick}
                        onMouseMove={handleMouseMove}
                    >
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            className="object-contain drop-shadow-2xl select-none"
                            quality={100}
                        />
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
