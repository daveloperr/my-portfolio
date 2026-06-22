"use client";

import { createContext, useContext, useRef, useEffect } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

type TransitionContextType = {
  navigate: (href: string) => void;
};

const TransitionContext = createContext<TransitionContextType | null>(null);

export function useTransition() {
  const ctx = useContext(TransitionContext);
  if (!ctx) throw new Error("useTransition must be used inside TransitionProvider");
  return ctx;
}

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current) return;
    gsap.set(overlayRef.current, { yPercent: 100 });
  }, []);

  const navigate = (href: string) => {
    if (!overlayRef.current) return;

    // Phase 1: slide overlay UP to cover the screen
    gsap.to(overlayRef.current, {
      yPercent: 0,
      duration: 0.75,
      ease: "power4.inOut",
      onComplete: () => {
        // Phase 2: change the route while screen is covered
        router.push(href);

        // Phase 3: slide overlay back DOWN to reveal the new page
        if (overlayRef.current) {
          gsap.to(overlayRef.current, {
            yPercent: -100,
            duration: 0.75,
            ease: "power4.inOut",
            delay: 0.1,
            onComplete: () => {
              // Reset so it's ready for the next navigation
              if (overlayRef.current) {
                gsap.set(overlayRef.current, { yPercent: 100 });
              }
            },
          });
        }
      },
    });
  };

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}

      <div
        ref={overlayRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99999,
          background: "#000",
          pointerEvents: "none",
          willChange: "transform",
        }}
      />
    </TransitionContext.Provider>
  );
}