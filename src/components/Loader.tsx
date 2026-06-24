"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";

type LoaderProps = {
  onComplete: () => void;
};

export default function Loader({ onComplete }: LoaderProps) {
  const [count, setCount] = useState(0);
  const numberRef = useRef<HTMLSpanElement>(null);
  const stableOnComplete = useCallback(onComplete, []);

useEffect(() => {
  let current = 0;
  
  // Small delay to ensure DOM is ready
  const startDelay = setTimeout(() => {
    const interval = setInterval(() => {
      current++;
      setCount(current);

      if (current >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          gsap.to(numberRef.current, {
            yPercent: -120,
            duration: 0.8,
            ease: "expo.inOut",
            onComplete: stableOnComplete,
          });
        }, 600);
      }
    }, 25);

    return () => clearInterval(interval);
  }, 100);

  return () => clearTimeout(startDelay);
}, [stableOnComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
      <div className="overflow-hidden h-[1em]">
        <span ref={numberRef} className="block text-sm font-medium">
          {count}
        </span>
      </div>
    </div>
  );
}