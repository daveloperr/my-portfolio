"use client";

import { useLayoutEffect, useRef, Fragment } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const KEYWORDS = ["curiosity", "mistakes", "question", "search", "solve"];

const TEXT =
  "I discovered design through deep curiosity and learned it through mistakes. " +
  "Every answer led to another question, and over time I realized the " +
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
            backgroundImage:
              "linear-gradient(120deg, rgba(255,20,147,0.55) 0%, rgba(255,20,147,0.55) 100%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "0% 80%", // hidden initially
            backgroundPosition: "0 90%",
            boxDecorationBreak: "clone",
            WebkitBoxDecorationBreak: "clone",
            padding: "0 0.05em",
            borderRadius: "4px",
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
      const highlights =
        h1.querySelectorAll<HTMLElement>(".highlight-word");

      if (!highlights.length) return;

      // Force hidden state on mount
      gsap.set(highlights, {
        backgroundSize: "0% 80%",
      });

    const mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
    ScrollTrigger.create({
        trigger: h1,
        start: "bottom 10%",
        once: true,
        onEnter: () => {
            gsap.to(highlights, {
                backgroundSize: "100% 80%",
                duration: 0.7,
                ease: "power2.out",
                stagger: 0.2,
            });
        },
    });
});

mm.add("(max-width: 767px)", () => {
    ScrollTrigger.create({
        trigger: h1,
        start: "top 80%",
        once: true,
        onEnter: () => {
            gsap.to(highlights, {
                backgroundSize: "100% 80%",
                duration: 0.7,
                ease: "power2.out",
                stagger: 0.2,
            });
        },
    });
});
});

    return () => ctx.revert();
  }, []);

  return (
   <section className="mt-20 lg:mt-80 mb-20 w-full">
      <div className="grid grid-cols-12">
        <h1
          ref={h1Ref}
          className="col-span-12 text-[2rem] md:text-[4rem] font-semibold leading-[1.1] tracking-tighter md:indent-70  md:px-0"
        >
          {renderWithHighlights()}
        </h1>
      </div>
    </section>

  );
}