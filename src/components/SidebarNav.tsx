"use client";

import { useEffect, useState } from "react";

interface Section {
    id: string;
    label: string;
    subSections?: Section[];
}

export default function SidebarNav({ sections }: { sections: Section[] }) {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -60% 0px", // Triggers when element is primarily entering the top/middle of screen
            threshold: 0,
        };

        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Flatten sections to observe all
        const allSections = sections.reduce((acc: Section[], section) => {
            acc.push(section);
            if (section.subSections) {
                acc.push(...section.subSections);
            }
            return acc;
        }, []);

        allSections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, [sections, activeSection]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // Smooth scroll with 100px offset for the fixed header
            const y = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <aside className="hidden lg:block">
            <nav className="flex flex-col gap-4">
                {sections.map((section) => (
                <li key={section.id} className="list-none">
                    <button
                        onClick={() => scrollToSection(section.id)}
                        className={`text-xs font-semibold tracking-[0.2em] uppercase text-left w-full transition-colors duration-200 ${
                            activeSection === section.id
                                ? "text-black dark:text-white"
                                : "text-black/30 dark:text-white/30 hover:text-black/60 dark:hover:text-white/60"
                        }`}
                    >
                        {section.label}
                    </button>
                    {section.subSections && (
                        <ul className="pl-4 mt-4 space-y-4">
                            {section.subSections.map((subSection) => (
                                <li key={subSection.id} className="list-none">
                                    <button
                                        onClick={() => scrollToSection(subSection.id)}
                                        className={`text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-left w-full transition-colors duration-200 ${
                                            activeSection === subSection.id
                                                ? "text-black dark:text-white"
                                                : "text-black/30 dark:text-white/30 hover:text-black/60 dark:hover:text-white/60"
                                        }`}
                                    >
                                        {subSection.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
            </nav>
        </aside>
    );
}
