"use client";

import { motion } from "framer-motion";



export default function About() {
    return (
        <section id="about" className="bg-background pt-32 pb-16 px-6 md:px-12 relative z-10 text-foreground flex flex-col justify-center border-t border-black/5 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-[1400px] mx-auto w-full">

                {/* Top Section: Title & Description */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-24 lg:mb-32">

                    {/* Left: Section Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:w-1/3 shrink-0"
                    >
                        <h3 className="text-sm md:text-base font-semibold tracking-[0.3em] text-black/50 dark:text-white/50 uppercase">
                            UX Design Lead. Strategy-Driven. Impact-Focused.
                        </h3>
                    </motion.div>

                    {/* Right: Body Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="lg:w-1/2"
                    >
                        <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-black/60 dark:text-white/50">
                            <p className="text-2xl md:text-3xl font-medium text-black/90 dark:text-white/90 mb-8 leading-tight">
                                I design clarity inside complex systems.
                            </p>
                            <p>
                                With 14 years shaping digital products and enterprise platforms, I help organizations turn insight into execution. My work connects business ambition with human-centered design aligning strategy, experience, and delivery.
                            </p>
                            <p>
                                I lead multidisciplinary teams, build scalable design systems, and influence product direction at every level from roadmap conversations to shipped experiences.
                            </p>
                            <p className="mt-8 text-black/80 dark:text-white/80">
                                <span className="font-medium text-black/90 dark:text-white/90 block mb-2">Design, to me, is leverage.</span>
                                It simplifies decisions, accelerates growth, and makes technology feel human.
                            </p>
                        </div>
                    </motion.div>
                </div>



            </div>
        </section>
    );
}
