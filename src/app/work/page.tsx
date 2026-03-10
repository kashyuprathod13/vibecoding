"use client";

import { motion } from "framer-motion";
import Projects from "@/components/Projects";
import WorkServices from "@/components/WorkServices";

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-background pt-24">
            {/* Projects Grid */}
            <Projects hideSeeAll />
            
            {/* Services Grid */}
            <WorkServices />
        </main>
    );
}
