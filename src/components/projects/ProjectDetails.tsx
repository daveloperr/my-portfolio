"use client";

import { Fragment, useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ViewMoreProjects from "./ViewMoreProjects";
import NavBar from "../layout/NavBar";
import Contact from "../sections/Contact";
import AboutDrawer from "../ui/drawer";

type Project = {
  id: number;
  title: string;
  year: string;
  slug: string;
  link?: string;
  deliverables: string[];
  overview: string[];
  techStack?: string[];
  roles?: string[];
  description: string;
  imageUrl: string;
  layout: {
    type: "full" | "split";
    images: string[];
  }[];
};

type Props = {
  project: Project;
};

export default function ProjectDetails({ project }: Props) {
  const [aboutOpen, setAboutOpen] = useState(false);

  const titleInnerRef      = useRef<HTMLHeadingElement>(null);
  const yearInnerRef       = useRef<HTMLSpanElement>(null);
  const rolesInnerRef      = useRef<HTMLDivElement>(null);
  const summaryInnerRef    = useRef<HTMLParagraphElement>(null);
  const deliverablesInnerRef = useRef<HTMLDivElement>(null);
  const linkInnerRef       = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const els = [
      titleInnerRef.current,
      yearInnerRef.current,
      rolesInnerRef.current,
      summaryInnerRef.current,
      deliverablesInnerRef.current,
      linkInnerRef.current,
    ].filter(Boolean);

    gsap.set(els, { y: "100%" });

    gsap.to(els, {
      y: "0%",
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.08,
    });
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-[99999] px-6">
        <div className="grid h-full w-full grid-cols-12 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border border-red-500/80 h-full" />
          ))}
        </div>
      </div>

      <div
        className="fixed top-0 left-0 w-full px-6 pointer-events-none"
        style={{ zIndex: 50, mixBlendMode: "difference", transform: "translateY(18px)" }}
      >
        <div className="pointer-events-auto">
          <NavBar onOpenAbout={() => setAboutOpen(true)} />
        </div>
      </div>

      <AboutDrawer open={aboutOpen} onClose={() => setAboutOpen(false)} />

      <main id="blur-details">

        {/* HEADER */}
        <div className="mb-16 mt-42">
          <div className="overflow-hidden flex justify-center">
            <h1
              ref={titleInnerRef}
              className="text-[7rem] font-semibold uppercase tracking-tighter leading-[0.9] text-center"
            >
              {project.title}
            </h1>
          </div>
        </div>

        {/* PROJECT INFO */}
        <div className="grid grid-cols-12 gap-6 mb-20 mx-auto mt-30 items-start">

          <div className="col-span-2">
            <h2 className="uppercase text-xs text-neutral-500 mb-1">Timeline</h2>
            <div className="overflow-hidden">
              <span ref={yearInnerRef} className="text-5xl font-bold tracking-tighter block">
                {project.year}
              </span>
            </div>
          </div>

          <div className="col-span-3">
            <h2 className="uppercase text-xs text-neutral-500 mb-1">Role</h2>
            <div className="overflow-hidden">
              <div ref={rolesInnerRef} className="flex flex-col">
                {project.roles?.map((role) => (
                  <span key={role}>{role}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-4 col-start-9">
            <h2 className="uppercase text-xs text-neutral-500 mb-1">Summary</h2>
            <div className="overflow-hidden">
              <p ref={summaryInnerRef} className="max-w-md leading-snug">
                {project.description}
              </p>
            </div>
          </div>

          <div className="col-span-6 col-start-3">
            <h2 className="uppercase text-xs text-neutral-500 mb-1">Deliverables</h2>
            <div className="overflow-hidden">
              <div ref={deliverablesInnerRef} className="flex flex-col">
                {project.deliverables?.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <h2 className="uppercase text-xs text-neutral-500 mb-1">Link</h2>
            <div className="overflow-hidden">
              <div ref={linkInnerRef}>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline">
                    Visit Site
                  </a>
                ) : (
                  <span className="text-neutral-400">—</span>
                )}
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col gap-32">
          {project.layout.map((block, i) => (
            <Fragment key={i}>
              <div className={`grid gap-6 ${block.type === "split" ? "grid-cols-2" : "grid-cols-1"}`}>
                {block.images.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt={project.title}
                    className="w-full h-auto object-cover rounded-md"
                  />
                ))}
              </div>

              {i === 1 && project.overview && (
                <div className="grid grid-cols-12 gap-6 py-10">
                  <span className="col-span-4 text-2xl tracking-tighter text-black font-medium">
                    Overview
                  </span>
                  <div className="col-span-6 max-w-4xl space-y-6">
                    {project.overview?.map((paragraph, index) => (
                      <p key={index} className="text-lg leading-relaxed font-sans">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>

      </main>
    </>
  );
}