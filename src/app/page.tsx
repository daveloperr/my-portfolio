"use client";

import { useRef } from "react";
import NavBar from "../components/layout/NavBar";
import Hero from "../components/sections/Hero";
import ProjectGrid from "../components/projects/ProjectGrid";
import Quote from "../components/sections/Quote";
import Contact from "../components/sections/Contact";

export default function Home() {
  const navbarRef = useRef<HTMLDivElement>(null!);

  return (
    <div className="relative">
      
  <div
  ref={navbarRef}
  className="fixed top-0 left-0 w-full px-6 pointer-events-none"
  style={{ 
    zIndex: 50,
    mixBlendMode: "difference",
  }}
>
  <div className="pointer-events-auto">
    <NavBar />
  </div>
</div>

       <div className="pointer-events-none fixed inset-0 z-[99999] px-6">

        <div className="grid h-full w-full grid-cols-12 gap-6">

          {Array.from({ length: 12 }).map((_, i) => (

            <div key={i} className="border border-red-500/80 h-full" />

          ))}

        </div>

      </div>

      <Hero navbarRef={navbarRef} />
            <Quote />

      <ProjectGrid />
      <Contact />
    </div>
  );
}