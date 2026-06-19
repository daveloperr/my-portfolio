"use client";

import { useEffect, useRef } from "react";

export function TechStack() {
const topStack = [
  { name: "React",      icon: "https://cdn.simpleicons.org/react/111111" },
  { name: "Next.js",    icon: "https://cdn.simpleicons.org/nextdotjs/111111" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/111111" },
];

const bottomStack = [
  { name: "Node",     icon: "https://cdn.simpleicons.org/nodedotjs/111111" },
  { name: "Express",  icon: "https://cdn.simpleicons.org/express/111111" },
  { name: "MongoDB",  icon: "https://cdn.simpleicons.org/mongodb/111111" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/111111" },
  { name: "Figma",    icon: "https://cdn.simpleicons.org/figma/111111" },
  { name: "Framer",   icon: "https://cdn.simpleicons.org/framer/111111" },
  { name: "Git",      icon: "https://cdn.simpleicons.org/git/111111" },
];
  const wrapRef = useRef<HTMLDivElement>(null);
  const hlRef = useRef<HTMLDivElement>(null);
  const cur = useRef({ x: 0, y: 0, w: 0, h: 0 });
  const target = useRef({ x: 0, y: 0, w: 0, h: 0 });
  const inside = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const tick = () => {
      const s = 0.12;
      const c = cur.current;
      const t = target.current;
      c.x += (t.x - c.x) * s;
      c.y += (t.y - c.y) * s;
      c.w += (t.w - c.w) * s;
      c.h += (t.h - c.h) * s;

      if (hlRef.current) {
        hlRef.current.style.left   = `${c.x}px`;
        hlRef.current.style.top    = `${c.y}px`;
        hlRef.current.style.width  = `${c.w}px`;
        hlRef.current.style.height = `${c.h}px`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cell = (e.target as HTMLElement).closest(".cell") as HTMLElement;
    if (!cell || !wrapRef.current || !hlRef.current) return;

    const wrapRect = wrapRef.current.getBoundingClientRect();
    const r = cell.getBoundingClientRect();

    target.current = {
      x: r.left - wrapRect.left,
      y: r.top  - wrapRect.top,
      w: r.width,
      h: r.height,
    };

    if (!inside.current) {
      cur.current = { ...target.current };
      inside.current = true;
      hlRef.current.style.opacity = "1";
    }
  };

  const handleMouseLeave = () => {
    inside.current = false;
    if (hlRef.current) hlRef.current.style.opacity = "0";
  };

  return (
    <div className=" text-black">

      {/* HERO */}
      <section className="h-screen flex items-center justify-center uppercase text-9xl font-bold">
        <span className="text-center">
          Modern <br /> Tech Stack
        </span>
      </section>

      {/* GRID SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center">

        <div
          ref={wrapRef}
          className="relative w-full"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* THE ONE TRAVELING HIGHLIGHT */}
          <div
            ref={hlRef}
            className="absolute bg-black pointer-events-none z-10 opacity-0 transition-opacity duration-300"
          />

          {/* TOP - 3 */}
          <div className="grid grid-cols-3 w-full">
            {topStack.map((item) => (
  <div
    key={item.name}  // ← fix
    className="cell h-80 border border-gray-300 flex items-center justify-center cursor-pointer"
  >
    <img
      src={item.icon}
      alt={item.name}
      className="w-16 h-16 relative z-20 mix-blend-difference invert"
    />
  </div>
))}
          </div>

          {/* BOTTOM - 7 */}
          <div className="grid grid-cols-7 w-full">
           {bottomStack.map((item) => (
  <div
    key={item.name}  // ← fix
    className="cell h-60 border border-gray-300 flex items-center justify-center cursor-pointer"
  >
    <img
      src={item.icon}
      alt={item.name}
      className="w-12 h-12 relative z-20 mix-blend-difference invert"
    />
  </div>
))}
          </div>

        </div>
      </section>
    </div>
  );
}