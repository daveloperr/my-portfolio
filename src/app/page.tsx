import NavBar from "../components/NavBar";
import Hero from "../sections/Hero";
import ProjectGrid from "../components/projects/ProjectGrid";
import { TechStack } from "../sections/TechStack";
import Quote from "../sections/Quote";
import Contact from "../sections/Contact";


export default function Home() {
  return (
    <div className="relative">

      {/* <NavBar /> */}

      {/* GRID OVERLAY */}
      <div className="pointer-events-none fixed inset-0 z-[99999] px-6">
        <div className="grid h-full w-full grid-cols-12 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border border-red-500/80 h-full" />
          ))}
        </div>
      </div>

      <Hero/>
      <ProjectGrid />
      <Quote />
      {/* <TechStack /> */}
      <Contact />
    </div>
  );
}