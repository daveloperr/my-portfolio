"use client";

import { useRef, useState } from "react";
import NavBar from "../components/layout/NavBar";
import Hero from "../components/sections/Hero";
import ProjectGrid from "../components/projects/ProjectGrid";
import Quote from "../components/sections/Quote";
import Contact from "../components/sections/Contact";
import AboutDrawer from "../components/ui/drawer";
import { TechStack } from "../components/sections/TechStack";

export default function Home() {
  const navbarRef = useRef<HTMLDivElement>(null!);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <main className="w-full">
<div className="relative w-full px-3 lg:px-6">
        {/* Navbar Wrapper */}
      <div ref={navbarRef} className="fixed top-0 left-0 w-full z-20 px-3 lg:px-6 lg:pt-2 pointer-events-none" style={{ mixBlendMode: "difference" }}>
        <div className="pointer-events-auto">
          <NavBar onOpenAbout={() => setAboutOpen(true)} />
        </div>
      </div>

      <AboutDrawer open={aboutOpen} onClose={() => setAboutOpen(false)} />

      {/* Grid Overlay remains separate and fixed */}
      <div className="pointer-events-none fixed inset-0 z-[99999] w-full">
        <div className="grid h-full w-full grid-cols-4 md:grid-cols-12 gap-3 lg:gap-6 px-3 lg:px-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={`border border-red-500/80 h-full ${i >= 4 ? 'hidden md:block' : ''} ${i >= 8 ? 'md:hidden lg:block' : ''}`} />
          ))}
        </div>
      </div>

      <Hero paused={aboutOpen} navbarRef={navbarRef} />

      {/* Sections are now direct children of the main wrapper, NOT inside a grid-cols-4 div */}
      <div id="top" className="relative w-full">
        <Quote />
        <ProjectGrid />
      </div>

<div id="contact" className="-mx-3 lg:-mx-6">
  <Contact />
</div>
    </div>
    </main>
  );
}