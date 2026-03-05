import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import HomeAbout from "@/components/HomeAbout";
import Projects from "@/components/Projects";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <div className="relative w-full h-[500vh]">
        <div className="absolute inset-0">
          <ScrollyCanvas />
        </div>
        <Overlay />
      </div>
      <HomeAbout />
      <Partners />
      <Projects limit={3} />
      <Contact />
    </main>
  );
}
