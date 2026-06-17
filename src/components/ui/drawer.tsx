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
const targets = ["#blur-hero", "#blur-navbar", "#blur-details"]
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
        <div className="p-8">
          <button onClick={onClose} className="mb-16 text-sm uppercase">Close</button>
          <h2 className="text-6xl font-bold mb-8">About</h2>
          <p className="max-w-xl text-lg leading-relaxed">
            I discovered design through curiosity and learned it through
            mistakes. Every answer led to another question, and over time I
            realized the search itself had become the thing I loved most.
          </p>
        </div>
      </aside>
    </>
  );
}