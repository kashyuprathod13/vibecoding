"use client";

import { motion } from "framer-motion";
import { Compass, Hexagon, LayoutGrid, Target, Triangle, Command } from "lucide-react";

const services = [
  {
    number: "01",
    icon: <Compass className="w-6 h-6" strokeWidth={1.5} />,
    title: "Creative Direction",
    description: "Setting the vision that unifies product, brand, and experience. I translate ambiguous business goals into clear creative principles teams can build toward.",
    tags: ["VISION SETTING", "BRAND STRATEGY", "CREATIVE LEADERSHIP"]
  },
  {
    number: "02",
    icon: <Hexagon className="w-6 h-6" strokeWidth={1.5} />,
    title: "Enterprise UX",
    description: "Designing for complexity at scale. I specialize in untangling dense enterprise products turning workflows that exhaust users into systems they trust.",
    tags: ["UX RESEARCH", "SYSTEMS THINKING", "ACCESSIBILITY"]
  },
  {
    number: "03",
    icon: <LayoutGrid className="w-6 h-6" strokeWidth={1.5} />,
    title: "Design Systems",
    description: "Building the design infrastructure that accelerates teams. Scalable component libraries, governance frameworks, and the documentation that makes them last.",
    tags: ["COMPONENT LIBRARIES", "FIGMA", "GOVERNANCE"]
  },
  {
    number: "04",
    icon: <Target className="w-6 h-6" strokeWidth={1.5} />,
    title: "Product Strategy",
    description: "Sitting at the intersection of business and design. I contribute to roadmap decisions, shape product direction, and align design investments with growth goals.",
    tags: ["ROADMAPPING", "OKRS", "STAKEHOLDER ALIGNMENT"]
  },
  {
    number: "05",
    icon: <Triangle className="w-6 h-6" strokeWidth={1.5} />,
    title: "Team Building",
    description: "Growing and leading multidisciplinary design teams. From hiring and mentorship to establishing culture and critique practices that produce exceptional work.",
    tags: ["HIRING", "MENTORSHIP", "CULTURE"]
  },
  {
    number: "06",
    icon: <Command className="w-6 h-6" strokeWidth={1.5} />,
    title: "Experience Innovation",
    description: "Exploring what's next. Prototyping emerging interaction patterns, AI-assisted experiences, and next-generation interface paradigms for forward-thinking organizations.",
    tags: ["AI/UX", "PROTOTYPING", "EMERGING TECH"]
  }
];

export default function WorkServices() {
  return (
    <section className="bg-background text-foreground py-24 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header Area */}
        <div className="flex flex-col items-center text-center w-full mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-black/90 dark:text-white/90 mb-6"
          >
            Let&apos;s build
            <br />
            <span className="text-black/30 dark:text-white/25">something extraordinary.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 leading-relaxed font-light"
          >
            Here&apos;s the full picture of what I bring to the table. Some clients need one of these. Most need three.<br className="hidden md:block" /> If you see something that sounds familiar, let&apos;s talk.
          </motion.p>
        </div>

        {/* CSS Grid for the bordered layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-start justify-center p-6 md:p-8 lg:p-10 rounded-3xl border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-md shadow-2xl overflow-hidden relative group transition-all duration-300 hover:-translate-y-1 hover:bg-black/[0.04] dark:hover:bg-white/[0.04] hover:border-black/10 dark:hover:border-white/10 w-full"
            >
              {/* Added a subtle decorative glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

              <div className="flex flex-col flex-grow relative z-10">
                <span className="text-foreground/30 text-xs font-mono mb-8">{service.number}</span>
                
                <div className="mb-8 text-foreground/80 group-hover:text-foreground transition-colors">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-12 font-light">
                  {service.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="text-[10px] font-semibold tracking-wider text-black/50 dark:text-white/50 border border-black/20 dark:border-white/20 hover:border-black/40 dark:hover:border-white/40 hover:text-black/80 dark:hover:text-white/80 transition-colors cursor-default px-3 py-1 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
