"use client";

import { useRef, useState } from "react";
import NavBar from "../components/layout/NavBar";
import Hero from "../components/sections/Hero";
import ProjectGrid from "../components/projects/ProjectGrid";
import Quote from "../components/sections/Quote";
import Contact from "../components/sections/Contact";
import AboutDrawer from "../components/ui/drawer";
import { TechStack } from "../components/sections/TechStack";
import Services from "../components/sections/Services";

export default function Home() {
  const navbarRef = useRef<HTMLDivElement>(null!);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
<div className="relative overflow-x-hidden w-full"> 
  
  {/* NAVBAR WRAPPER */}
  <div ref={navbarRef} className="fixed top-0 left-0 w-full z-20 px-6 pointer-events-none" style={{ mixBlendMode: "difference" }}>
    <div className="pointer-events-auto">
      <NavBar onOpenAbout={() => setAboutOpen(true)} />
    </div>
  </div>

      <AboutDrawer open={aboutOpen} onClose={() => setAboutOpen(false)} />

       <div className="pointer-events-none fixed inset-0 z-[99999] w-full">
    <div className="grid h-full w-full grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-3 md:gap-6 px-3 lg:px-6">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className={`border border-red-500/80 h-full ${i >= 4 ? 'hidden md:block' : ''} ${i >= 8 ? 'md:hidden lg:block' : ''}`}
        />
      ))}
    </div>




      </div>
      <Hero paused={aboutOpen} navbarRef={navbarRef} />

      <div id="top" className="relative">
        <div id="blur-details">
          <div><Quote /></div>
          <div id="works"><ProjectGrid /></div>
                      <div ><Services /></div>

          <div id="contact"><Contact /></div>
        </div>
      </div>

    </div>
  );
}