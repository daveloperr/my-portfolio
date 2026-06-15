import projects from "../../data/projects";
import Link from "next/link";

export default function ProjectGrid() {
  return (
    <section className="px-6 py-32 mt-20">
      <div className="flex flex-col gap-0">
        {projects.map((project, index) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="group grid grid-cols-[1fr_2fr_1fr] items-start gap-8 py-10 cursor-pointer"
          >
            {/* LEFT — label only on first item */}
            <div className="flex items-start pt-1">
              {index === 0 && (
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-pink-400 block" />

                  <span className="text-lg font-sans  text-gray-900 font-semibold">
                    All Works
                  </span>
                </div>
              )}
            </div>

            {/* CENTER — image */}
            <div className="relative w-full rounded-md aspect-[4/3] overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                  loading="lazy"

                className="w-full h-full object-cover rounded-md transition-transform duration-700 group-hover:scale-[1.10]"
              />
            </div>

            {/* RIGHT — details */}
            <div className="flex flex-col justify-start pt-1 gap-2">
              <span className="text-black text-xs tracking-tight uppercase">
                {project.year}
              </span>
              <h3 className="text-black text-lg font-semibold font-sans tracking-tight uppercase leading-tight mt-3">
                {project.title}
              </h3>

              {project.description && (
                <p className="text-neutral-400   font-medium font-sans text-md mt-6 leading-relaxed">
                  {project.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}