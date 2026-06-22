"use client";

import { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
    navbarRef: React.RefObject<HTMLDivElement>;
    paused: boolean;
}

export default function Hero({ navbarRef, paused }: HeroProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const imgWrapperRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null!);
    const titleInnerRef = useRef<HTMLHeadingElement>(null);
    const paragraphRef1 = useRef<HTMLDivElement>(null);
    const para1InnerRef = useRef<HTMLHeadingElement>(null);
    const paragraphRef2 = useRef<HTMLDivElement>(null);
    const para2InnerRef = useRef<HTMLHeadingElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useLayoutEffect(() => {
        const titleBottom = titleRef.current.getBoundingClientRect().bottom;
        gsap.set(navbarRef.current, { y: titleBottom }); // baseline ONLY

        const ctx = gsap.context(() => {
            const img = imgWrapperRef.current!;
            const mm = gsap.matchMedia();
            // ── INTRO: rise from below their overflow-hidden container ───────────
            gsap.set(titleInnerRef.current, { y: "100%" });
            gsap.set(para1InnerRef.current, { y: "100%" });
            gsap.set(para2InnerRef.current, { y: "100%" });
            gsap.set(img, { y: 60, autoAlpha: 0 });

            const introTl = gsap.timeline({
                defaults: { ease: "power3.out" },
                onComplete: buildScrollTl,
            });

            introTl.to(titleInnerRef.current, { y: "0%", duration: 0.9 }, 0);
            introTl.to(img, { y: 0, autoAlpha: 1, duration: 0.9 }, 0.15);
            introTl.to(para1InnerRef.current, { y: "0%", duration: 0.8 }, 0.28);
            introTl.to(para2InnerRef.current, { y: "0%", duration: 0.8 }, 0.38);

            // ── SCROLL ────────────────────────────────────────────────────────────
            function buildScrollTl() {
                gsap.set([paragraphRef1.current, paragraphRef2.current], { clipPath: "inset(0% 0% 0% 0%)", y: 0 });
                gsap.set(titleRef.current, { clipPath: "inset(0% 0% 0% 0%)" });

                mm.add("(min-width: 768px)", () => {
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

                    tl.to(navbarRef.current, {
                        y: 5,
                        ease: "none",
                    }, 0);


                    tl.to([paragraphRef1.current, paragraphRef2.current], {
                        clipPath: "inset(0% 0% 50% 0%)",
                        y: -10,
                        ease: "power2.out",
                        duration: 0.4,
                    }, 0);

                    tl.to([paragraphRef1.current, paragraphRef2.current], {
                        clipPath: "inset(0% 0% 100% 0%)",
                        y: -40,
                        ease: "power2.in",
                        duration: 0.3,
                    }, 0.4);

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
                });
            }


        }, sectionRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (!videoRef.current) return;
        if (paused) {
            videoRef.current.pause();
        } else {
            videoRef.current.play().catch(() => { });
        }
    }, [paused]);

    return (
        <section ref={sectionRef} id="blur-hero" className="relative h-screen flex flex-col">

            {/* TITLE — overflow-hidden masks the rise */}
            <div className="fixed top-0 left-0 w-full z-20 pb-2 mt-2">
                <div
                    ref={titleRef}
                    className="w-full flex justify-center overflow-hidden"
                >
                    <h3
                        ref={titleInnerRef}
                        className="
                    uppercase
                    font-bold
                    tracking-[-0.05em]
                    text-[#1a1a1a]
                    select-none
                    text-[23vw]
                    text-center
                    leading-[0.8]
                    whitespace-normal
                    md:text-[13.6vw]
                    md:leading-[0.75]
                    md:whitespace-nowrap
                "
                    >
                        <span className="block md:inline">Vaughn</span>
                        <span className="block md:inline">Lopez</span>
                    </h3>
                </div>
            </div>

            <div className="absolute inset-0 flex items-end justify-center pb-16">
                <div className="relative flex flex-col items-center w-full">

                    {/* VIDEO — unchanged, no wrapper added */}
                    <div
                        ref={imgWrapperRef}
                        className="z-20 rounded-lg overflow-hidden w-[90vw] h-[50vw] md:w-[400px] md:h-[230px]"
                        style={{ transformOrigin: "center center" }}
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
                        {/* overflow-hidden masks the rise, ref on inner h2 */}
                        <div ref={paragraphRef1} className="overflow-hidden">
                            <h2
                                ref={para1InnerRef}
                                className="uppercase text-3xl lg:text-5xl tracking-tighter leading-[0.95] lg:leading-[0.85] text-center font-extrabold"
                            >
                                FULL-STACK DEVELOPER / UI & UX DESIGNER CRAFTING
                            </h2>
                        </div>
                        <div ref={paragraphRef2} className="overflow-hidden md:mt-2">
                            <h2
                                ref={para2InnerRef}
                                className="uppercase text-3xl lg:text-5xl tracking-tighter  leading-[0.95] lg:leading-[0.85] text-center font-extrabold"
                            >
                                WITH PRECISION AND INTENT.
                            </h2>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}