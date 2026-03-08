"use client";

import { motion } from "framer-motion";

export default function HomeProcess() {
    return (
        <section className="bg-background py-24 md:py-32 px-6 md:px-12 relative z-10 text-foreground flex flex-col items-center justify-center transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center text-center">
                
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-20"
                >
                    <h3 className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-4 text-black/50 dark:text-white/50">
                        How I Work
                    </h3>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] text-black/90 dark:text-white/90">
                        A process built <br />
                        <span className="text-black/30 dark:text-white/25">for complex problems</span>
                    </h2>
                </motion.div>

                {/* Double Diamond Diagram */}
                <div className="w-full max-w-5xl mx-auto mb-20 relative px-4">
                    {/* Top Labels */}
                    <div className="flex justify-between w-[80%] mx-auto mb-8 text-[10px] md:text-xs font-medium tracking-[0.2em] text-black/40 dark:text-white/30 uppercase italic">
                        <span>Understand Problem</span>
                        <span>Create Solution</span>
                    </div>

                    <div className="relative flex items-center justify-center py-12">
                        {/* Side Label: PROBLEM */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
                            <span className="text-[10px] md:text-xs font-medium tracking-[0.3em] text-black/30 dark:text-white/20 uppercase whitespace-nowrap">
                                Problem
                            </span>
                        </div>

                        {/* Side Label: SOLUTION */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-center">
                            <span className="text-[10px] md:text-xs font-medium tracking-[0.3em] text-black/30 dark:text-white/20 uppercase whitespace-nowrap">
                                Solution
                            </span>
                        </div>

                        {/* The Diamonds Container */}
                        <div className="relative flex items-center gap-0 md:gap-4">
                            
                            {/* Diamond 1: Discover & Define */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                whileHover={{ scale: 1.02 }}
                                className="relative w-[35vw] h-[35vw] max-w-[300px] max-h-[300px] border border-black/10 dark:border-white/10 rotate-45 flex items-center justify-center bg-black/[0.02] dark:bg-white/[0.02] shadow-[0_0_40px_rgba(0,0,0,0.03)] dark:shadow-[0_0_40px_rgba(255,255,255,0.03)] group/diamond hover:bg-black/[0.03] dark:hover:bg-white/[0.04] hover:border-black/20 dark:hover:border-white/20 transition-all duration-700"
                            >
                                <div className="-rotate-45 flex flex-col items-center justify-center w-full h-full relative">
                                    {/* Content inside Diamond 1 */}
                                    <div className="flex items-center justify-between w-full px-4 md:px-8">
                                        <div className="flex flex-col items-center gap-1 group-hover/diamond:scale-110 transition-transform duration-500">
                                            <span className="text-[8px] md:text-[10px] font-medium text-black/30 dark:text-white/20">01</span>
                                            <span className="text-[10px] md:text-sm font-bold tracking-widest uppercase text-black/80 dark:text-white/80">Discover</span>
                                        </div>
                                        
                                        {/* Iterative Arrow Icon */}
                                        <div className="relative w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                                            <svg viewBox="0 0 24 24" className="w-full h-full text-black/20 dark:text-white/20 animate-spin-slow group-hover/diamond:text-black/40 dark:group-hover/diamond:text-white/40 transition-colors duration-500">
                                                <path d="M12 4V2M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20M12 20V22" stroke="currentColor" strokeWidth="1" fill="none"/>
                                                <path d="M10 2L12 4L10 6" stroke="currentColor" strokeWidth="1" fill="none" />
                                                <path d="M14 22L12 20L14 18" stroke="currentColor" strokeWidth="1" fill="none" />
                                            </svg>
                                        </div>

                                        <div className="flex flex-col items-center gap-1 group-hover/diamond:scale-110 transition-transform duration-500">
                                            <span className="text-[8px] md:text-[10px] font-medium text-black/30 dark:text-white/20">02</span>
                                            <span className="text-[10px] md:text-sm font-bold tracking-widest uppercase text-black/80 dark:text-white/80">Define</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Center Connector */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none">
                                <span className="text-[7px] md:text-[9px] font-bold tracking-[0.2em] text-black/40 dark:text-white/30 uppercase whitespace-nowrap mb-6">Specific<br/>Problems</span>
                                
                                <div className="relative w-8 h-12 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-black/40 dark:bg-white/40 rotate-45 animate-pulse-slow" />
                                    {/* Iterative Connection Arrows */}
                                    <svg className="absolute inset-0 w-full h-full text-black/20 dark:text-white/20 overflow-visible" viewBox="0 0 40 60">
                                        <style>{`
                                            .dash-flow {
                                                stroke-dasharray: 4;
                                                animation: dash 1s linear infinite;
                                            }
                                            @keyframes dash {
                                                to {
                                                    stroke-dashoffset: -8;
                                                }
                                            }
                                        `}</style>
                                        <path d="M0 20 Q 20 0 40 20" stroke="currentColor" fill="none" strokeWidth="1" className="dash-flow" />
                                        <path d="M40 40 Q 20 60 0 40" stroke="currentColor" fill="none" strokeWidth="1" className="dash-flow" />
                                        <path d="M38 22 L40 20 L36 18" stroke="currentColor" fill="none" strokeWidth="1" />
                                        <path d="M2 38 L0 40 L4 42" stroke="currentColor" fill="none" strokeWidth="1" />
                                    </svg>
                                </div>

                                <span className="text-[7px] md:text-[9px] font-bold tracking-[0.2em] text-black/40 dark:text-white/30 uppercase whitespace-nowrap mt-6">Iterative<br/>Process</span>
                            </div>

                            {/* Diamond 2: Design & Deliver */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                whileHover={{ scale: 1.02 }}
                                className="relative w-[35vw] h-[35vw] max-w-[300px] max-h-[300px] border border-black/10 dark:border-white/10 rotate-45 flex items-center justify-center bg-black/[0.02] dark:bg-white/[0.02] shadow-[0_0_40px_rgba(0,0,0,0.03)] dark:shadow-[0_0_40px_rgba(255,255,255,0.03)] group/diamond hover:bg-black/[0.03] dark:hover:bg-white/[0.04] hover:border-black/20 dark:hover:border-white/20 transition-all duration-700"
                            >
                                <div className="-rotate-45 flex flex-col items-center justify-center w-full h-full relative">
                                    {/* Content inside Diamond 2 */}
                                    <div className="flex items-center justify-between w-full px-4 md:px-8">
                                        <div className="flex flex-col items-center gap-1 group-hover/diamond:scale-110 transition-transform duration-500">
                                            <span className="text-[8px] md:text-[10px] font-medium text-black/30 dark:text-white/20">03</span>
                                            <span className="text-[10px] md:text-sm font-bold tracking-widest uppercase text-black/80 dark:text-white/80">Design</span>
                                        </div>
                                        
                                        {/* Iterative Arrow Icon */}
                                        <div className="relative w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                                            <svg viewBox="0 0 24 24" className="w-full h-full text-black/20 dark:text-white/20 animate-spin-slow group-hover/diamond:text-black/40 dark:group-hover/diamond:text-white/40 transition-colors duration-500">
                                                <path d="M12 4V2M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20M12 20V22" stroke="currentColor" strokeWidth="1" fill="none"/>
                                                <path d="M10 2L12 4L10 6" stroke="currentColor" strokeWidth="1" fill="none" />
                                                <path d="M14 22L12 20L14 18" stroke="currentColor" strokeWidth="1" fill="none" />
                                            </svg>
                                        </div>

                                        <div className="flex flex-col items-center gap-1 group-hover/diamond:scale-110 transition-transform duration-500">
                                            <span className="text-[8px] md:text-[10px] font-medium text-black/30 dark:text-white/20">04</span>
                                            <span className="text-[10px] md:text-sm font-bold tracking-widest uppercase text-black/80 dark:text-white/80">Deliver</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Glassmorphic Description Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-7xl">
                    {[
                        { 
                            id: "01", 
                            title: "Deep Listening", 
                            desc: "Before a single frame is drawn, I spend time understanding the problem landscape the business pressures, user realities, and organizational constraints." 
                        },
                        { 
                            id: "02", 
                            title: "Strategic Framing", 
                            desc: "Turning discovery into clarity. I define success metrics, align stakeholders around shared principles, and establish the creative brief." 
                        },
                        { 
                            id: "03", 
                            title: "Iterative Building", 
                            desc: "Moving fast with purpose. From concepts to high-fidelity prototypes, I run tight design sprints that bring teams along the journey." 
                        },
                        { 
                            id: "04", 
                            title: "Scalable Systems", 
                            desc: "Shipping is only the beginning. I ensure the work is documented, systems are scalable, and teams have everything they need." 
                        }
                    ].map((step, i) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="p-6 md:p-8 rounded-2xl border border-black/5 dark:border-white/[0.08] bg-black/[0.01] dark:bg-white/[0.01] backdrop-blur-sm flex flex-col items-start text-left group hover:bg-black/[0.03] dark:hover:bg-white/[0.03] hover:border-black/10 dark:hover:border-white/10 transition-all duration-300"
                        >
                            <span className="text-[10px] md:text-xs font-medium text-black/30 dark:text-white/20 mb-4 block uppercase tracking-widest leading-none">
                                {step.id}
                            </span>
                            <h4 className="text-xl md:text-2xl font-medium tracking-tight text-black/90 dark:text-white/90 mb-4 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                                {step.title}
                            </h4>
                            <p className="text-sm md:text-base font-light leading-relaxed text-black/60 dark:text-white/50 group-hover:text-black/80 dark:group-hover:text-white/70 transition-colors duration-300">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
