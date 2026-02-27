"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PROJECTS = [
    {
        title: "Work 1",
        description: "We build trust",
        category: "Website Presentation",
        year: "2025",
        image: "/projects/work_1.png"
    },
    {
        title: "Work 2",
        description: "Only The Best is Good Enough!",
        category: "Website Presentation",
        year: "2025",
        image: "/projects/work_2.png"
    },
    {
        title: "Work 3",
        description: "Residential, commercial and industrial construction",
        category: "Website Presentation",
        year: "2025",
        image: "/projects/work_3.png"
    }
];

export default function Projects() {
    return (
        <section id="work" className="min-h-screen bg-background text-foreground py-24 px-6 md:px-12 relative z-10 overflow-hidden transition-colors duration-300">
            <div className="max-w-[1400px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16 flex flex-col items-center text-center"
                >
                    <h2 className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-4 text-black/50 dark:text-white/50">
                        Selected Work
                    </h2>
                </motion.div>

                {/* Responsive container for the cards */}
                <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 md:gap-8 pb-12 w-full mx-auto">
                    {PROJECTS.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                            className="group relative rounded-[2rem] w-[90vw] sm:w-full max-w-[500px] md:w-[32%] h-[450px] md:h-[550px] overflow-hidden bg-[#0a0a0a] border border-black/5 dark:border-white/5 cursor-pointer mx-auto md:mx-0 shadow-lg"
                        >
                            {/* The Project Image */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-60 group-hover:opacity-80"
                            />

                            {/* Heavy dark gradient overlay on the left mimicking the reference */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent w-[90%]" />

                            {/* Content Container */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                {/* Top: Title and Subtitle */}
                                <div className="max-w-[70%] z-10">
                                    <h3 className="text-2xl font-bold tracking-tight mb-3 whitespace-pre-line leading-snug text-white">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/70 text-sm leading-relaxed font-light">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Bottom Left: Year */}
                                <div className="text-white/50 text-sm font-medium tracking-widest pl-1 z-10">
                                    {project.year}
                                </div>
                            </div>

                            {/* Right side: Vertical Text */}
                            <div className="absolute right-6 top-8 bottom-8 flex flex-col justify-between items-end pointer-events-none z-10">
                                <div className="text-white/40 text-[10px] tracking-[0.2em] uppercase origin-top-right rotate-90 translate-y-full whitespace-nowrap mt-4">
                                    {project.category}
                                </div>
                                <div className="text-white/40 text-2xl font-light mb-[-10px]">
                                    +
                                </div>
                            </div>

                            {/* Subtle hover edge glow */}
                            <div className="absolute inset-0 rounded-[2rem] border border-white/0 group-hover:border-white/10 transition-colors duration-500 pointer-events-none z-20" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
