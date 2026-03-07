import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/constants";
import SidebarNav from "@/components/SidebarNav";
import { GridPatternCard, GridPatternCardBody } from "@/components/ui/card-with-grid-ellipsis-pattern";

export function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const project = PROJECTS.find(p => p.slug === slug);

    if (!project) {
        notFound();
    }

    const titleParts = project.title.split(" | ");
    const mainTitle = titleParts[0];
    const subtitle = titleParts.length > 1 ? titleParts[1] : "";

    return (
        <main className="min-h-screen bg-background text-foreground pt-36 pb-32 px-6 md:px-12 transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto">
                <Link href="/work" className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors mb-12 inline-flex items-center gap-2">
                    <span>←</span> Back to Work
                </Link>
                
                {/* Hero Section */}
                <header className="mb-20">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 leading-[1.1]">
                        {mainTitle}.
                    </h1>
                    {subtitle && (
                        <p className="text-2xl md:text-4xl font-light text-black/70 dark:text-white/70 max-w-4xl leading-tight">
                            {subtitle}
                        </p>
                    )}
                </header>
                
                {/* Project Meta Info */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 mb-20 border-y border-black/10 dark:border-white/10 py-10 w-fit md:w-full max-w-full overflow-hidden">
                    <div className="shrink-0">
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-3">Category</h4>
                        <p className="font-medium">{project.category}</p>
                    </div>
                    <div className="shrink-0">
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-3">Year</h4>
                        <p className="font-medium">{project.year}</p>
                    </div>
                    <div className="shrink-0">
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-3">Client</h4>
                        <p className="font-medium">{mainTitle}</p>
                    </div>
                    <div>
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 dark:text-white/50 mb-3">Status</h4>
                        <p className="font-medium">Case Study in Progress</p>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative w-full aspect-[16/9] md:h-[75vh] rounded-[2rem] overflow-hidden mb-32 shadow-2xl">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        quality={100}
                        priority
                        className="object-cover object-center"
                    />
                </div>
                
                {/* Main Content with Sticky Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative items-start">
                    {/* Left Sidebar */}
                    <div className="lg:col-span-3 lg:sticky lg:top-[30vh] h-fit">
                        <SidebarNav sections={[
                            { id: "overview", label: "Overview" },
                            { id: "context", label: "Context" },
                            { id: "approach", label: "Approach" },
                            { id: "outcomes", label: "Outcomes" },
                        ]} />
                    </div>

                    {/* Right Content */}
                    <div className="lg:col-span-9 space-y-32">
                        
                        {/* Section: Overview */}
                        <section id="overview" className="scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">Overview</h2>
                            <GridPatternCard>
                                <GridPatternCardBody className="space-y-6">
                                    <p className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80">
                                        This detailed case study is currently being compiled and will be published shortly.
                                    </p>
                                    <p className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80">
                                        It showcases a robust implementation connecting complex technical requirements with an intuitive, user-centered design approach for {mainTitle}. Check back soon for the full breakdown including wireframes, flow architecture, and interactive components.
                                    </p>
                                    <p className="text-lg md:text-xl font-medium leading-relaxed text-black dark:text-white bg-white/50 dark:bg-black/50 p-4 rounded-xl backdrop-blur-sm border border-black/5 dark:border-white/5 inline-block">
                                        Full breakdown touching down soon.
                                    </p>
                                </GridPatternCardBody>
                            </GridPatternCard>
                        </section>

                        {/* Section: Context */}
                        <section id="context" className="scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">Context</h2>
                            <div className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80 mb-16">
                                <p>
                                    As a key player in the <strong>{project.category}</strong> sector, {mainTitle} required a specialized solution tailored to extremely specific audience needs. Identifying the core frustration points early in the discovery phase allowed the project to pivot from a standard feature checklist to a tightly-focused experiential redesign.
                                </p>
                            </div>
                        </section>

                        {/* Section: Approach */}
                        <section id="approach" className="scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">Approach</h2>
                            <div className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80 border-l-4 border-blue-500/50 pl-8 py-2">
                                <ul className="space-y-4 list-disc list-inside">
                                    <li>Extensive stakeholder interviews to map hidden constraints</li>
                                    <li>Rapid prototyping to validate key interaction models</li>
                                    <li>Design system construction to ensure scalability</li>
                                </ul>
                            </div>
                        </section>
                        
                        {/* Section: Outcomes */}
                        <section id="outcomes" className="scroll-mt-32">
                            <div className="p-12 md:p-20 bg-blue-50 dark:bg-blue-950/20 rounded-[2rem] border border-blue-100 dark:border-blue-900/50">
                                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-900 dark:text-blue-100 mb-8">Outcomes</h2>
                                <p className="text-lg md:text-2xl font-medium leading-relaxed text-blue-800 dark:text-blue-200 mb-12">
                                    A highly refined, performant deliverable that bridges the gap between the brand's sophisticated capability and the end user's demand for friction-free simplicity.
                                </p>

                                <ul className="space-y-6 text-base md:text-lg font-light leading-relaxed text-blue-800 dark:text-blue-200/80 list-none ml-0">
                                    <li className="flex gap-4 items-start">
                                        <span className="bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full text-sm font-bold mt-1">1</span> 
                                        <p><strong>Deeper UX dive</strong> into specific interface challenges handled during production.</p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full text-sm font-bold mt-1">2</span> 
                                        <p><strong>Metrics & Impact</strong> detailing the quantitative shift post-launch.</p>
                                    </li>
                                </ul>
                            </div>
                        </section>

                    </div>
                </div>

                {/* Footer Outro */}
                <div className="text-center py-20 border-t border-black/10 dark:border-white/10 mt-32">
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">Thank you for reading!</h2>
                    <Link href="/work" className="inline-flex items-center justify-center px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm font-semibold tracking-wide hover:scale-105 transition-transform">
                        Explore More Work
                    </Link>
                </div>
            </div>
        </main>
    );
}
