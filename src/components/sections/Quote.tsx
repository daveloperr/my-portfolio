"use client";

import { useLayoutEffect, useRef, Fragment } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const KEYWORDS = ["curiosity", "mistakes", "question", "search", "solve"];

const TEXT =
  "I discovered design through deep curiosity and learned it through mistakes. " +
  "Every answer led to another question, and over time I realized  the " +
  "search became my driving force, profoundly influencing the way I " +
  "solve.";

function renderWithHighlights() {
  const tokens = TEXT.split(/(\s+)/);

  return tokens.map((token, i) => {
    const cleaned = token.toLowerCase().replace(/[.,!?]/g, "");

    if (KEYWORDS.includes(cleaned)) {
      return (
        <span
          key={i}
          className="highlight-word"
          style={{
            backgroundImage: "linear-gradient(120deg, #facc15 0%, #facc15 100%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "0% 100%",
            backgroundPosition: "0 88%", // sits behind lower portion of glyphs, like a marker
            boxDecorationBreak: "clone",
            WebkitBoxDecorationBreak: "clone",
            padding: "0 0.05em",
          }}
        >
          {token}
        </span>
      );
    }

    return <Fragment key={i}>{token}</Fragment>;
  });
}

export default function Quote() {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const h1 = h1Ref.current;
    if (!h1) return;

    const ctx = gsap.context(() => {
      const highlights = h1.querySelectorAll<HTMLElement>(".highlight-word");
      if (!highlights.length) return;

      const play = () =>
        gsap.to(highlights, {
          backgroundSize: "100% 100%",
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.25,
          overwrite: true,
        });

      const reset = () =>
        gsap.set(highlights, { backgroundSize: "0% 100%" });

      ScrollTrigger.create({
        trigger: h1,
        start: "top 75%",
        onEnter: play,
        onEnterBack: play,
        onLeave: reset,
        onLeaveBack: reset,
      });
    }, h1);

    return () => ctx.revert();
  }, []);

  return (
    <section className="mt-80 w-full">
      <div className="grid grid-cols-12">
        
        <h1 ref={h1Ref} className="col-span-12 text-[4rem] font-semibold leading-[1.1] tracking-tighter indent-70">
          {renderWithHighlights()}
        </h1>

      </div>
    </section>
  );
}