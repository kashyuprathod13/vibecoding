"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="bg-background py-32 px-6 md:px-12 relative z-10 text-foreground min-h-[80vh] flex items-center border-t border-black/5 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* Left Side: Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col justify-between h-full"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
                            Contact Me
                        </h2>
                        <p className="text-black/60 dark:text-white/60 text-lg md:text-xl leading-relaxed max-w-md font-light">
                            Have questions or need assistance? just reach out!
                        </p>
                    </div>

                    <div className="mt-16 lg:mt-32 space-y-6">
                        <div className="flex items-center gap-4 text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white transition-colors">
                            <svg className="w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            <span className="font-light tracking-wide">00-0000-000</span>
                        </div>
                        <div className="flex items-center gap-4 text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white transition-colors">
                            <svg className="w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            <span className="font-light tracking-wide">support@support.com</span>
                        </div>
                        <div className="flex items-start gap-4 text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white transition-colors">
                            <svg className="w-5 h-5 opacity-50 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <span className="font-light tracking-wide max-w-[250px]">
                                1255 Treat Blvd suite 300 Walnut Creek, CA, 94597
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Type your name here"
                                className="w-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-lg px-6 py-4 text-foreground placeholder:text-black/30 dark:placeholder:text-white/30 focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors font-light"
                            />
                            <input
                                type="text"
                                placeholder="Type your last name here"
                                className="w-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-lg px-6 py-4 text-foreground placeholder:text-black/30 dark:placeholder:text-white/30 focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors font-light"
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="Type your e-mail address here"
                            className="w-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-lg px-6 py-4 text-foreground placeholder:text-black/30 dark:placeholder:text-white/30 focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors font-light"
                        />

                        <textarea
                            placeholder="Type your message here"
                            rows={6}
                            className="w-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-lg px-6 py-4 text-foreground placeholder:text-black/30 dark:placeholder:text-white/30 focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors font-light resize-y"
                        ></textarea>

                        <div className="flex items-center gap-3 py-2">
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="peer appearance-none w-5 h-5 border border-black/20 dark:border-white/20 rounded-sm bg-transparent checked:bg-black/10 dark:checked:bg-white/10 checked:border-black/50 dark:checked:border-white/50 transition-all cursor-pointer"
                                />
                                <svg className="absolute w-3 h-3 pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <label htmlFor="terms" className="text-black/60 dark:text-white/60 font-light text-sm cursor-pointer select-none">
                                I accept the <span className="underline hover:text-black dark:hover:text-white transition-colors">Terms</span>
                            </label>
                        </div>

                        <button
                            type="button"
                            className="w-full bg-black text-white dark:bg-white dark:text-black font-semibold tracking-wide py-4 mt-2 rounded-lg hover:bg-black/90 dark:hover:bg-white/90 transition-colors"
                        >
                            Send
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
}
