"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isPastHero, setIsPastHero] = useState(false);

    // Prevent hydration mismatch by only rendering after mount
    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
                setIsPastHero(window.scrollY >= aboutSection.offsetTop - 50);
            } else {
                setIsPastHero(window.scrollY >= window.innerHeight * 4);
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) {
        return <div className="fixed top-8 right-8 z-50 w-10 h-10" />; // Placeholder to prevent layout shift
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`fixed top-8 right-8 z-50 p-2 rounded-full backdrop-blur-xl shadow-2xl border transition-colors duration-300 ${isPastHero
                    ? "bg-white/5 border-black/10 dark:border-white/10 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
                    : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                }`}
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
                <Moon className={`w-5 h-5 ${isPastHero ? "text-slate-700" : "text-white"}`} />
            )}
        </button>
    );
}
