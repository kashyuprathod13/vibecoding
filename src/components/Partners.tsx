"use client";

import { motion, Variants } from "framer-motion";

const TOOLS = [
    "Figma",
    "Miro",
    "Adobe Creative Cloud",
    "Google Antigravity",
    "Google Whisk"
];

const CLIENTS = [
    "Microsoft",
    "Google",
    "Citrix",
    "Target"
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Partners() {
    return (
        <section className="bg-background pt-16 pb-32 px-6 md:px-12 relative z-10 text-foreground flex flex-col items-center justify-center transition-colors duration-300">
            <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h3 className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-4 text-black/50 dark:text-white/50">
                        Partners & Platforms
                    </h3>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6 leading-tight text-black/50 dark:text-white/50">
                        Trusted by <span className="text-black dark:text-white">Industry Leaders.</span><br className="hidden md:block" /> Powered by <span className="text-black dark:text-white">Modern Tools.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-black/60 dark:text-white/60 font-light max-w-2xl mx-auto">
                        Collaborating with Global Brands. Building with Best-in-Class Tools.
                    </p>
                </motion.div>

                {/* Clients Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="w-full mb-16"
                >
                    <p className="text-xs tracking-widest text-black/40 dark:text-white/40 uppercase mb-8 border-b border-black/10 dark:border-white/10 pb-4 inline-block">Select Clients</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
                        {CLIENTS.map((client) => (
                            <motion.div
                                key={client}
                                variants={itemVariants}
                                className="flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
                            >
                                <span className="text-xl md:text-3xl font-bold tracking-tighter mix-blend-screen">{client}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Tools Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="w-full"
                >
                    <p className="text-xs tracking-widest text-black/40 dark:text-white/40 uppercase mb-8 border-b border-black/10 dark:border-white/10 pb-4 inline-block">Core Tools</p>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 items-center">
                        {TOOLS.map((tool) => (
                            <motion.div
                                key={tool}
                                variants={itemVariants}
                                className="flex items-center justify-center grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-300"
                            >
                                <span className="text-lg md:text-xl font-medium tracking-tight bg-black/5 dark:bg-white/5 px-6 py-3 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20 transition-colors">
                                    {tool}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
