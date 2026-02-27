"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Section 1: 0% to 20% Fade out
    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

    // We make the pointer-events-none so it doesn't block scrolling on the canvas, 
    // but if you have buttons later, you'd need pointer-events-auto on the children.
    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none">
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center text-white p-8">

                {/* Hero Layout Container - Matching the reference image structure */}
                <motion.div
                    style={{ opacity: opacity1, y: y1 }}
                    className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 pb-24"
                >
                    {/* Top Row: Small tracking copy */}
                    <div className="flex justify-between items-start w-full">
                        <div className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-white/50 max-w-[200px] leading-tight mt-16 lg:mt-32">
                            Strategy is where digital systems are designed, deployed, and scaled
                        </div>
                    </div>

                    {/* Middle Section: Massive Title & Right Context */}
                    <div className="flex flex-col lg:flex-row justify-between items-end w-full relative z-10 -mt-20">
                        {/* Massive "SEKO" style title */}
                        <div className="overflow-visible w-full lg:w-auto mt-24 lg:mt-0 text-left">
                            <h1 className="text-[4rem] sm:text-[6rem] lg:text-[10rem] xl:text-[12rem] font-bold tracking-tighter uppercase leading-[0.8] text-white">
                                Kashyap <br /> Rathod
                            </h1>
                        </div>

                        {/* Middle Right Text Blocks */}
                        <div className="flex flex-col gap-12 lg:mb-24 lg:w-[400px] shrink-0 lg:pr-12 mt-12 lg:mt-0 items-end text-right">
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
                                Design starts here. <br /> Build impact. <br /> Move forward.
                            </h2>
                            <div className="text-[10px] font-semibold tracking-widest uppercase text-white/50">
                                Next-Gen Experience <br /> Ecosystem
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: Circular Button & Details */}
                    <div className="flex justify-end lg:justify-between items-end w-full lg:px-12 mt-12 lg:-mt-20 z-20">
                        {/* Right Content - Circle button and trailing text */}
                        <div className="flex items-center gap-12 lg:ml-auto">
                            {/* Circular Button */}
                            <div
                                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                                className="w-32 h-32 rounded-full bg-[#E5E5E5] flex items-center justify-center text-black font-bold uppercase tracking-widest text-xs cursor-pointer hover:bg-white transition-colors duration-300 pointer-events-auto"
                            >
                                View Work
                            </div>

                            {/* Far right micro terms */}
                            <div className="hidden md:flex flex-col gap-4 text-[10px] font-semibold tracking-widest uppercase text-white/70 text-right mr-12 border-r-4 border-white/20 pr-4">
                                <span>Human-Centered Protocol</span>
                                <span>Enterprise Infra</span>
                                <span>Layered Architecture</span>
                            </div>
                        </div>
                    </div>

                </motion.div>

            </div>
        </div>
    );
}
