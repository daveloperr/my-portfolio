"use client";

import Link from "next/link";

import { useTransition } from "../TransistionLayer";

interface Project {
    id: number;
    title: string;
    slug: string;
    imageUrl: string;
    previewVideo: string;
    year: string;
}

export default function ProjectCard({ project }: { project: Project }) {
    const { navigate } = useTransition();




    return (
        <Link
            href={`/works/${project.slug}`}
            className="group block"
            onClick={(e) => {
                e.preventDefault();
                navigate(`/works/${project.slug}`);
            }}
        >

            <div className="bg-[#171717] p-4 rounded-2xl">
                <div className="relative overflow-hidden rounded-xl">

                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="
        w-full
        h-[250px]
        md:h-[500px]
        object-cover
        transition-all
        duration-700
        ease-out
        group-hover:scale-105
        group-hover:brightness-75
      "
                    />

                    {/* Arrow */}
                    <div
                        className="
        absolute
        right-6
        bottom-6
        w-12
        h-12
        rounded-full
        bg-white
        flex
        items-center
        justify-center
        opacity-0
        translate-y-3
        transition-all
        duration-500
        group-hover:opacity-100
        group-hover:translate-y-0
      "
                    >
                        ↗
                    </div>

                </div>

                <div className="mt-4 flex justify-between">
                    <h3 className="text-lg md:text-xl font-semibold uppercase">
                        {project.title}
                    </h3>

                    <span className="uppercase">
                        {project.year}
                    </span>
                </div>
            </div>

        </Link>
    );
}