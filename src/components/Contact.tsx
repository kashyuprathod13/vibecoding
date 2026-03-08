"use client";

import { motion } from "framer-motion";
import { RetroGrid } from "@/components/ui/retro-grid";
import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="bg-background py-32 px-6 md:px-12 relative z-10 text-foreground min-h-[80vh] flex items-center justify-center border-t border-black/5 dark:border-white/5 transition-colors duration-300 overflow-hidden">
            <RetroGrid />
            <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center relative z-20">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-8">
                        <span className="text-black/50 dark:text-white/50">Let's build </span>
                        <span className="text-black/95 dark:text-white/95">something extraordinary</span>
                    </h2>
                    <p className="text-black/60 dark:text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
                        Whether you're scaling an enterprise platform, redefining a product experience, or just need a partner who can hold the vision while the work gets done. I'd love to hear what you're building.
                    </p>

                    <div className="mt-12 lg:mt-16 flex items-center justify-center gap-6">
                        <a href="mailto:kashyuprathod@gmail.com" className="group text-black hover:text-black/70 dark:text-white dark:hover:text-white/70 transition-colors" title="Email">
                            <Mail className="w-8 h-8 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                        </a>

                        <a href="https://www.linkedin.com/in/kashyaprathod13/" target="_blank" rel="noopener noreferrer" className="group text-black hover:text-black/70 dark:text-white dark:hover:text-white/70 transition-colors" title="LinkedIn">
                            <svg className="w-8 h-8 opacity-80 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2.5" y="2.5" width="15" height="15" rx="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                <circle cx="6" cy="5.8" r="1.3" />
                                <rect x="4.8" y="8.2" width="2.4" height="7.2" />
                                <path d="M8.8 8.2 h2.4 v1.2 c0.4-1.2 1.2-1.2 2-1.2 c0.8 0 2 0.8 2 3.2 v4 h-2.4 v-3.6 c0-1-0.4-1.4-0.8-1.4 c-0.4 0-0.8 0.4-0.8 1.4 v3.6 H8.8 V8.2 z" />
                            </svg>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
