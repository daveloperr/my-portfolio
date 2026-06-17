"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface AboutDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function AboutDrawer({ open, onClose }: AboutDrawerProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!drawerRef.current) return;
    gsap.set(drawerRef.current, { x: "100%" });
  }, []);

  useEffect(() => {
    const targets = ["#blur-hero", "#blur-navbar", "#blur-details", "#more-projects", "#contacts"]
      .map((id) => document.querySelector(id))
      .filter(Boolean);
    if (!overlayRef.current || !drawerRef.current) return;

    if (open) {
      document.body.style.overflow = "hidden";
      gsap.killTweensOf([overlayRef.current, drawerRef.current, ...targets]);

      gsap.to(targets, { filter: "blur(4px)", duration: 0.4, ease: "power2.out" });
      gsap.to(overlayRef.current, { backgroundColor: "rgba(0,0,0,0.4)", duration: 0.4, pointerEvents: "auto" });
      gsap.to(drawerRef.current, { x: 0, duration: 1, ease: "power4.out" });
    } else {
      document.body.style.overflow = "";
      gsap.killTweensOf([overlayRef.current, drawerRef.current, ...targets]);

      gsap.to(targets, { filter: "blur(0px)", duration: 0.4, ease: "power2.inOut" });
      gsap.to(overlayRef.current, { backgroundColor: "rgba(0,0,0,0)", duration: 0.3, pointerEvents: "none" });
      gsap.to(drawerRef.current, { x: "100%", duration: 0.8, ease: "power4.inOut" });
    }

    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <>
      <div
        ref={overlayRef}
        onClick={onClose}
        style={{ backgroundColor: "rgba(0,0,0,0)" }}
        className="fixed inset-0 z-50 pointer-events-none"
      />
      <aside
        ref={drawerRef}
        className="fixed top-0 right-0 z-50 h-screen w-full max-w-[700px] bg-[#111111] text-[#F5F5F5] overflow-y-auto"
      >
        <div className="py-8 px-6">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-pink-400 block"></span>
              <span className="text-[1.2rem] font-semibold">About me</span>
            </div>

            <button
              onClick={onClose}
              className="text-md rounded-sm bg-[#f5f5f5] p-2 text-black font-medium"
            >
              Close
            </button>
          </div>

          <div className="mt-4 w-130 font-semibold text-[1.4rem] leading-7">
            <p className="w-full ">
              Hey, I'm Vaughn. I started designing because I wanted to understand what made certain digital experiences feel memorable.
            </p>

            <p className=" mt-6">
              As my interest grew, so did my desire to build the experiences I imagined rather than just design them. Since then, I've been drawn to the balance between visual creativity and technical problem-solving.        </p>

            <p className="mt-6">
              Today, I focus on creating digital products that combine thoughtful design, smooth interactions, and modern web technologies.
            </p>
          </div>


          <div className="flex items-center justify-between w-full uppercase mt-40  text-[0.7rem]">


            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" />
                <path d="M12 6v6l4 2" stroke="currentColor" />
              </svg>
              Since 2024
            </span>

            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" stroke="currentColor" />
                <circle cx="12" cy="10" r="2" stroke="currentColor" />
              </svg>
              Based in Manila
            </span>

            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2 2-7z" stroke="currentColor" />
              </svg>
              Design & Engineering
            </span>

          </div>


          <div className="mt-6 relative"
          >
            {/* scattered words - large, bold, white, no rotation */}
            <span className="absolute top-6 left-8 text-6xl font-bold text-[#F472B6]">
              build
            </span>

            <span className="absolute top-1/3 right-6 text-6xl font-bold text-[#F472B6]">
              worlds
            </span>

            <span className="absolute bottom-80 left-4 text-6xl font-bold text-[#F472B6]">
              break
            </span>

            <span className="absolute bottom-10 right-6 text-6xl font-bold text-[#F472B6]">
              rules
            </span>

            {/* image */}
            <img src="/me-cool.png" alt="dave-vaughn" className="w-full h-auto" />
          </div>


            <div className="grid grid-cols-2 items-start w-full mt-10 border-b border-gray-800 pb-8">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-pink-400 block"></span>
              <span className="text-[1.4rem] font-semibold">Expertise</span>
            </div>


            <div className="flex flex-col text-[1.4rem] font-semibold ">
              <span>UI/UX Design</span>
              <span>Front-end Development</span>
              <span>Back-end Development</span>
              <span>Motion & Interaction</span>
              <span>Responsive Layouts</span>
           
            </div>
          </div>


          <div className="grid grid-cols-2 items-start w-full mt-10 border-b border-gray-900  pb-8">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-pink-400 block"></span>
              <span className="text-[1.4rem] font-semibold">Tech Stack</span>
            </div>


            <div className="flex flex-col text-[1.4rem] font-semibold ">
              <span>React.JS</span>
              <span>Next.JS</span>
              <span>Node.JS</span>
              <span>Typescript</span>
              <span>GSAP</span>
              <span>Motion</span>
              <span>Tailwind CSS</span>
              <span>Firebase</span>
              <span>Figma</span>
            </div>
          </div>

         



        </div>
      </aside>
    </>
  );
}