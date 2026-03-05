"use client";

import { motion } from "framer-motion";
import Link from "next/link";


export default function HomeAbout() {
    return (
        <section className="bg-background pt-10 md:pt-16 pb-20 md:pb-28 px-6 md:px-12 relative z-10 text-foreground transition-colors duration-300">
            <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center text-center">



                {/* Big Statement */}
                <div className="mb-10 max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-black/90 dark:text-white/90"
                    >
                        I design clarity
                        <br />
                        <span className="text-black/30 dark:text-white/25">inside complex systems.</span>
                    </motion.h2>
                </div>


                {/* Body Text - single column left */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="max-w-2xl mx-auto space-y-6 text-base md:text-lg font-light leading-relaxed text-black/50 dark:text-white/40 text-center"
                >
                    <p>
                        With 14 years shaping digital products and enterprise platforms, I help organizations turn insight into execution. My work connects business ambition with human-centered design aligning strategy, experience, and delivery.
                    </p>
                    <p>
                        I lead multidisciplinary teams, build scalable design systems, and influence product direction at every level from roadmap conversations to shipped experiences.
                    </p>
                    <div className="pt-4">
                        <Link
                            href="/about"
                            className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors border-b border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white pb-0.5"
                        >
                            Full Story →
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
