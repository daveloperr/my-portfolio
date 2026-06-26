"use client";

import { useRef, useState, useEffect } from "react";
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
const [ready, setReady] = useState(false);
  useEffect(() => {
  const handlePageShow = () => {
    console.log("PAGESHOW", window.scrollY);
  };

  window.addEventListener("pageshow", handlePageShow);

  return () => {
    window.removeEventListener("pageshow", handlePageShow);
  };
}, []);


useEffect(() => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      setReady(true);
    });
  });
}, []);


useEffect(() => {
  console.log("HOME MOUNT");
}, []);

  return (
    <main className="w-full">
      <div className="relative w-full px-3 lg:px-6" 
      style={{
    opacity: ready ? 1 : 0,
    transition: "opacity 0.2s ease",
  }}
  >
    

        {/* Grid Overlay remains separate and fixed */}
        <div className="pointer-events-none fixed inset-0 z-[99999] w-full">
          <div className="grid h-full w-full grid-cols-4 md:grid-cols-12 gap-3 lg:gap-6 px-3 lg:px-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className={`border border-red-500/80 h-full ${i >= 4 ? 'hidden md:block' : ''} ${i >= 8 ? 'md:hidden lg:block' : ''}`} />
            ))}
          </div>
        </div>

        <Hero paused={aboutOpen} />

        {/* Sections are now direct children of the main wrapper, NOT inside a grid-cols-4 div */}
        <div id="top" className="relative w-full">
          <Quote />
        
        </div>

         <div id="works">
            <ProjectGrid />
        </div>

        <div id="contact" className="-mx-3 lg:-mx-6">
          <Contact />
        </div>
      </div>
    </main>
  );
}