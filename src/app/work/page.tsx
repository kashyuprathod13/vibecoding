"use client";

import { motion } from "framer-motion";
import Projects from "@/components/Projects";

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-background pt-24">
            <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12">
                {/* Hero Section */}
                <div className="flex flex-col items-center text-center w-full">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-black/90 dark:text-white/90 mb-8"
                    >
                        The work I can show
                        <br />
                        <span className="text-black/30 dark:text-white/25">built to reflect the work I can't.</span>
                    </motion.h2>

                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
                        For 14 years, I've operated at the intersection of business strategy and human-centered design leading multidisciplinary teams, building scalable design systems, and shaping product direction from roadmap to release. I don't just design experiences. I help organizations make better decisions.
                    </p>
                </div>
            </div>

            {/* Projects Grid */}
            <Projects hideSeeAll />
        </main>
    );
}
