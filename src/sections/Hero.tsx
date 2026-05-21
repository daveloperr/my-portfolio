"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "./../components/NavBar";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const imgWrapperRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null!);
    const navbarRef = useRef<HTMLDivElement>(null!);
    const paragraphRef1 = useRef<HTMLDivElement>(null);
    const paragraphRef2 = useRef<HTMLDivElement>(null);



    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=140%",
                    scrub: 0.3,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });

            const texts = [
                titleRef.current,
                paragraphRef1.current,
                paragraphRef2.current,
            ].filter(Boolean);



            tl.to(texts, {
                clipPath: "inset(0% 0% 100% 0%)",
                ease: "none",
            }, 0);

            tl.to(texts, {
                clipPath: "inset(0% 0% 100% 0%)",
                ease: "none",
            }, 1);

            tl.to(navbarRef.current, {
                y: () => -titleRef.current.offsetHeight,
                ease: "power3.inOut",
            }, 0);


            tl.to(imgWrapperRef.current, {
                scale: 2,
                y: () => -window.innerHeight / 2 + 250,
                ease: "power2.out",
            }, 0);




        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section
                ref={sectionRef}
                className="relative h-screen px-6  overflow-hidden flex flex-col"
            >
                <div className="relative w-full">

                    <div
                        ref={titleRef}
                        className="w-full flex overflow-hidden"
                    >
                        <h3 className="uppercase text-[13.6vw] font-bold leading-[0.85] tracking-[-0.05em]">
                            VaughnLopez
                        </h3>
                    </div>

                    <div
                        ref={navbarRef}
                        className="absolute left-0 w-full z-20"
                        style={{ top: "100%" }}   
                    >
                        <NavBar />
                    </div>

                </div>

                <div className="absolute inset-0 flex items-end justify-center pb-16">


                    <div className="flex flex-col items-center">

                        <div
                            ref={imgWrapperRef}
                            className="z-20 overflow-hidden rounded-md origin-center"
                            style={{ width: "200px", height: "200px" }}
                        >
                            <img
                                src="/me.png"
                                alt="Vaughn Lopez"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="mt-3 z-10 overflow-hidden">
                            <div ref={paragraphRef1}>
                                <h2 className="uppercase lg:text-5xl tracking-tighter leading-[0.85] text-center font-extrabold">
                                    FULL-STACK DEVELOPER / UI & UX DESIGNER CRAFTING
                                </h2>
                            </div>
                            <div ref={paragraphRef2}>
                                <h2 className="uppercase lg:text-5xl tracking-tighter leading-[0.85] text-center font-extrabold">
                                    WITH PRECISION AND INTENT.
                                </h2>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

        </>
    );
}