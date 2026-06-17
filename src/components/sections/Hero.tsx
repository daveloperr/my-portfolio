"use client";

import { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


interface HeroProps {
  navbarRef: React.RefObject<HTMLDivElement>;
  paused: boolean;
}

export default function Hero({
  navbarRef,
  paused,
}: HeroProps) {


    const sectionRef = useRef<HTMLElement>(null);
    const imgWrapperRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null!);
    const paragraphRef1 = useRef<HTMLDivElement>(null);
    const paragraphRef2 = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);


    useLayoutEffect(() => {
        // Set navbar below title BEFORE anything else renders
        const titleBottom = titleRef.current.getBoundingClientRect().bottom;
        gsap.set(navbarRef.current, {
            y: titleBottom,
            immediateRender: true,
        });

        const ctx = gsap.context(() => {
            const img = imgWrapperRef.current!;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=100%",
                    scrub: 0.8,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });

            // Animate navbar from below title up to top
            tl.to(navbarRef.current, {
                y: 18,
                ease: "power2.inOut",
                duration: 0.4,
            }, 0);

            // --- TEXT CROPPING ---
            const texts = [
                paragraphRef1.current,
                paragraphRef2.current,
            ].filter(Boolean);

            gsap.set(texts, { clipPath: "inset(0% 0% 0% 0%)", y: 0 });

            tl.to(texts, {
                clipPath: "inset(0% 0% 50% 0%)",
                y: -10,
                ease: "power2.out",
                duration: 0.4,
            }, 0);

            tl.to(texts, {
                clipPath: "inset(0% 0% 100% 0%)",
                y: -40,
                ease: "power2.in",
                duration: 0.3,
            }, 0.4);

            gsap.set(titleRef.current, { clipPath: "inset(0% 0% 0% 0%)" });

            tl.to(titleRef.current, {
                clipPath: "inset(0% 0% 50% 0%)",
                ease: "power2.out",
                duration: 0.4,
            }, 0);

            tl.to(titleRef.current, {
                clipPath: "inset(0% 0% 100% 0%)",
                ease: "power2.in",
                duration: 0.3,
            }, 0.4);

            // --- VIDEO SCALING ---
            tl.to(img, {
                y: () => -(img.getBoundingClientRect().top + img.offsetHeight / 2 - window.innerHeight / 2),
                ease: "none",
                duration: 0.4,
            }, 0);

            tl.to(img, {
                scale: () => Math.max(
                    (window.innerWidth - 60) / img.offsetWidth,
                    (window.innerHeight - 80) / img.offsetHeight
                ),
                y: () => -(img.getBoundingClientRect().top + img.offsetHeight / 2 - window.innerHeight / 2) + 20,
                borderRadius: "6px",
                ease: "none",
                duration: 0.6,
            }, 0.4);

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
  if (!videoRef.current) return;

  if (paused) {
    videoRef.current.pause();
  } else {
    videoRef.current.play().catch(() => {});
  }
}, [paused]);

    

    return (
        <section ref={sectionRef} id="blur-hero" className="relative h-screen flex flex-col">

            {/* GIANT TITLE */}
            <div className="fixed top-0 left-0 w-full z-20  pb-2">
                <div ref={titleRef} className="w-full flex justify-center overflow-hidden">
                    <h3 className="uppercase text-[13.6vw] font-bold leading-[0.75] tracking-[-0.05em] pb-2 text-[#1a1a1a] select-none whitespace-nowrap">
                        VaughnLopez
                    </h3>
                </div>
            </div>

            {/* LOWER CONTENT: VIDEO & PARAGRAPHS */}
            <div className="absolute inset-0 flex items-end justify-center pb-16">
                <div className="relative flex flex-col items-center w-full">
                    <div
                        ref={imgWrapperRef}
                        className="z-20 rounded-lg overflow-hidden"
                        style={{ width: "400px", height: "230px", transformOrigin: "center center" }}
                    >
                        <video
                          ref={videoRef}

                            src="/video-showcase.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="mt-10 z-10 text-[#1a1a1a]">
                        <div ref={paragraphRef1}>
                            <h2 className="uppercase lg:text-5xl tracking-tighter leading-[0.85] text-center font-extrabold">
                                FULL-STACK DEVELOPER / UI & UX DESIGNER CRAFTING
                            </h2>
                        </div>
                        <div ref={paragraphRef2} className="mt-2">
                            <h2 className="uppercase lg:text-5xl tracking-tighter leading-[0.85] text-center font-extrabold">
                                WITH PRECISION AND INTENT.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}