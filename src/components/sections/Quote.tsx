"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Quote() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const lines = containerRef.current?.querySelectorAll(".line-mask");

    if (!lines || !containerRef.current) return;

    // Hide the lines below
    gsap.set(lines, {
      yPercent: 100,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          gsap.to(lines, {
            yPercent: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power4.out",
          });

          observer.disconnect(); // Animate only once
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mt-100 mb-80 w-full">
      <div ref={containerRef}>
        {[
          { text: "FROM USER FLOWS", highlight: false },
          { text: "TO CLEAN CODE,", highlight: true },
          { text: "I BUILD EXPERIENCES", highlight: false },
          { text: "THAT WORK.", highlight: true },
        ].map((line, i) => (
          <div key={i} className="overflow-hidden">
          <h1
  className={`line-mask w-full text-[clamp(3rem,10vw,8rem)] font-bold uppercase leading-[0.9] tracking-tighter ${
    line.highlight
      ? "text-black/30 text-right"
      : "text-black text-left"
  }`}
>
  {line.text}
</h1>
          </div>
        ))}
      </div>
    </section>
  );
}