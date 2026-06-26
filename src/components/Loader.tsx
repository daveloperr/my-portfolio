"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type LoaderProps = {
  onComplete: () => void;
};

export default function Loader({ onComplete }: LoaderProps) {
  const [count, setCount] = useState(0);

  const numberRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current++;
      setCount(current);

      if (current >= 100) {
        clearInterval(interval);

        gsap.timeline({
          delay: 0.4,
          onComplete,
        })
        .to(numberRef.current, {
          yPercent: -120,
          duration: 0.8,
          ease: "expo.inOut",
        })
        .to(
          containerRef.current,
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2"
        );
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[999999] flex items-center justify-center bg-white"
    >
      <div className="overflow-hidden h-[1em]">
        <span
          ref={numberRef}
          className="block text-sm font-medium text-black"
        >
          {count}
        </span>
      </div>
    </div>
  );
}