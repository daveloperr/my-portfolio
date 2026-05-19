"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Quote() {
  const component = useRef(null);
  const pinSection = useRef(null);
  const videoWrap = useRef(null);
  const scrollTrack = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // PIN THE ENTIRE CONTAINER
      ScrollTrigger.create({
        trigger: pinSection.current,
        start: "top top",
        end: "+=300%", 
        pin: true,
        scrub: 1,
      });

      //  ANIMATE FROM DEFAULT VALUES TO FULL WIDTH
      gsap.fromTo(videoWrap.current, 
        { 
          width: "96vw",   //  matches starting default width
          height: "100vh",  
        },
        {
          width: "100vw",  // animates out to full screen width
          height: "100vh", 
          ease: "none",
          scrollTrigger: {
            trigger: pinSection.current,
            start: "top top",
            end: "+=80%", // finishes stretching halfway through the scroll
            scrub: 0.3,
          },
        }
      );

      // 3. PHYSICAL SCROLL THE TEXT TRACK
      gsap.to(scrollTrack.current, {
        yPercent: -100, 
        ease: "none",
        scrollTrigger: {
          trigger: pinSection.current,
          start: "top top",
          end: "+=300%",
          scrub: 0.8,
        },
      });

    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={component} className="relative text-white">

      {/* THE MASTER PIN CONTAINER */}
      <div
        ref={pinSection}
        className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      >

        {/* BACKGROUND VIDEO */}
        <div className="absolute flex items-center justify-center z-0">
          <div
            ref={videoWrap}
            className="
              w-[96vw]         
              h-[100vh]          
              rounded-lg
              overflow-hidden
            "
          >
            <video
              src="/dv-story.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* THE TALL SCROLLING TEXT TRACK */}
        <div 
          ref={scrollTrack} 
          className="absolute top-0 left-0 w-full h-[200vh] z-10 pointer-events-none flex flex-col"
        >

          {/* QUOTE 1 */}
          <div className="h-screen flex items-center justify-center px-4">
            <h1 className="text-[3vw] font-semibold uppercase text-center leading-[0.9]">
              Design is not just seen.
              <br />
              It is felt.
            </h1>
          </div>

          {/* QUOTE 2 */}
          <div className="h-screen flex items-center justify-center px-4">
            <h2 className="text-[3vw] font-semibold uppercase text-center leading-[0.95]">
              Cinematic interfaces
              <br />
              crafted through motion.
            </h2>
          </div>

        </div>

      </div>
    </section>
  );
}