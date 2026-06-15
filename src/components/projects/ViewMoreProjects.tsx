import projects from "@/src/data/projects"
import Link from "next/link"

export default function ViewMoreProjects({ currentSlug }: { currentSlug: string }) {
    const filtered = projects
        .filter((p) => p.slug !== currentSlug)
        .sort(() => Math.random() - 0.5)
        .slice(0, 2);

    return (
        <section className="mt-32 flex justify-end py-24">
    <div className="grid grid-cols-2 gap-4 w-fit">

        <span className="col-span-2  text-left uppercase text-5xl font-bold">
            More Works
        </span>

        {filtered.map((project) => (
            <Link
                key={project.id}
                href={`/works/${project.slug}`}
                className="block w-64"
            >
                <div className="aspect-[3/2] overflow-hidden rounded-md">
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                </div>

                <h3 className="mt-3 text-sm font-medium uppercase text-left">
                    {project.title}
                </h3>
            </Link>
        ))}

    </div>
</section>
    )
}