"use client";

import { useRef, useState } from "react";
import NavBar from "../components/layout/NavBar";
import Hero from "../components/sections/Hero";
import ProjectGrid from "../components/projects/ProjectGrid";
import Quote from "../components/sections/Quote";
import Contact from "../components/sections/Contact";
import AboutDrawer from "../components/ui/drawer";

export default function Home() {
  const navbarRef = useRef<HTMLDivElement>(null!);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="relative">

      <div
        ref={navbarRef}
        className="fixed top-0 left-0 w-full px-6 pointer-events-none"
        style={{ zIndex: 20, mixBlendMode: "difference" }}
      >
        <div className="pointer-events-auto">
          <NavBar onOpenAbout={() => setAboutOpen(true)} />
        </div>
      </div>

      <AboutDrawer open={aboutOpen} onClose={() => setAboutOpen(false)} />

      <div className="pointer-events-none fixed inset-0 z-[99999] px-6">
        <div className="grid h-full w-full grid-cols-12 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border border-red-500/80 h-full" />
          ))}
        </div>
      </div>

      <Hero paused={aboutOpen} navbarRef={navbarRef} />

      <div id="top" className="relative">
        <div id="blur-details">
          <div><Quote /></div>
          <div id="works"><ProjectGrid /></div>
          <div id="contact"><Contact /></div>
        </div>
      </div>

    </div>
  );
}