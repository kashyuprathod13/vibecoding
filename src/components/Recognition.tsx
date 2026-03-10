"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Award = {
    title: string;
    organization: string;
    year: string;
    images: string[];
};

const awards: Award[] = [
    {
        title: "Silver Star Award",
        organization: "HDFC Bank",
        year: "2019",
        images: ["/Silverstar Award.jpeg"]
    },
    {
        title: "Silver Star Award",
        organization: "HDFC Bank",
        year: "2018",
        images: ["/Silverstar Award.jpeg"]
    },
    {
        title: "App Contest Finalist",
        organization: "Google + Prime Minister's Office App Innovation Challenge",
        year: "2015",
        images: [
            "/PMO App Contest.jpeg",
            "/PMO pp Contest Certification.jpeg"
        ]
    }
];

export default function Recognition() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-background py-16 md:py-24 px-6 md:px-12 relative z-10 text-foreground flex flex-col justify-center transition-colors duration-300">
            <div className="max-w-[1400px] mx-auto w-full">

                {/* Split Layout */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">

                    {/* Left Column (Section Title) */}
                    <div className="lg:w-1/3 shrink-0 flex flex-col gap-6 lg:sticky lg:top-32">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-sm md:text-base font-semibold tracking-[0.3em] text-black/50 dark:text-white/50 uppercase"
                        >
                            Community & Recognition
                        </motion.h2>
                    </div>

                    {/* Right Column: Awards List */}
                    <div className="w-full lg:w-2/3">
                        <div className="flex flex-col w-full">
                            {awards.map((award, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                                    className="border-b first:border-t border-black/10 dark:border-white/10 -mx-4 md:-mx-6 px-4 md:px-6"
                                >
                                    {/* Row Header (Clickable) */}
                                    <button
                                        onClick={() => toggle(index)}
                                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-6 md:py-8 w-full text-left group cursor-pointer transition-all duration-300 hover:bg-black/[0.03] dark:hover:bg-white/[0.03]"
                                        aria-expanded={openIndex === index}
                                    >
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-8 w-full pr-4 md:pr-8">
                                            {/* Award Title */}
                                            <div className="w-full sm:w-64 xl:w-72 shrink-0 flex flex-col items-start gap-1">
                                                <span className="font-semibold text-base md:text-lg tracking-tight text-black/90 dark:text-white/90 leading-none">
                                                    {award.title}
                                                </span>
                                            </div>

                                            {/* Organization & Year */}
                                            <div className="flex-grow flex gap-1 w-full sm:w-auto mt-2 sm:mt-0 flex-col lg:flex-row lg:justify-between lg:items-center">
                                                <span className="text-sm md:text-base font-light text-black/80 dark:text-white/80 pr-4">
                                                    {award.organization}
                                                </span>
                                                <span className="text-xs md:text-[13px] font-mono text-black/40 dark:text-white/40 mt-2 lg:mt-0 shrink-0">
                                                    {award.year}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Chevron */}
                                        <div className={`shrink-0 ml-4 mt-2 sm:mt-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-black/40 dark:text-white/40 group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors"
                                            >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </div>
                                    </button>

                                    {/* Dropdown Image Gallery */}
                                    <AnimatePresence initial={false}>
                                        {openIndex === index && (
                                            <motion.div
                                                key="content"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pb-8 pt-2 flex flex-wrap gap-4">
                                                    {award.images.map((src, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ opacity: 0, scale: 0.95 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ duration: 0.3, delay: i * 0.1 }}
                                                            className="rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shadow-lg cursor-zoom-in"
                                                            onClick={() => setLightboxSrc(src)}
                                                        >
                                                            <img
                                                                src={src}
                                                                alt={`${award.title} ${i + 1}`}
                                                                className="h-48 md:h-64 w-auto object-cover"
                                                            />
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            {/* Lightbox Overlay */}
            <AnimatePresence>
                {lightboxSrc && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
                        onClick={() => setLightboxSrc(null)}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                            onClick={() => setLightboxSrc(null)}
                            aria-label="Close image"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        {/* Full-size Image */}
                        <motion.img
                            src={lightboxSrc}
                            alt="Enlarged view"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
