import projects from "../../data/projects";
import Link from "next/link";

export default function ProjectGrid() {
  const firstTwo = projects.slice(0, 2);
  const rest = projects.slice(2);

  return (
    <section className="py-32 mt-20 px-6">
      {/* LABEL */}
      <div className="flex items-center gap-2 mb-12">
        <span className="w-3 h-3 rounded-full bg-pink-400 block" />
        <span className="text-lg font-semibold text-gray-900">Selected Works</span>
      </div>

      {/* FIRST 2 — BIGGER, SIDE BY SIDE */}
      <div className="flex gap-x-12 mb-24">
        {firstTwo.map((project) => (
          <Link
            key={project.id}
            href={`/works/${project.slug}`}
            className="group block w-[calc(50%-24px)]"
          >
            <div className="w-full h-[700px] overflow-hidden rounded-md">
              <img
                src={project.imageUrl}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover rounded-md transition-transform duration-700 group-hover:scale-[1.05]"
              />
            </div>

            <div className="flex flex-col mt-6 gap-2">
              <span className="text-black text-xs tracking-tight uppercase">
                {project.year}
              </span>
              <h3 className="text-black text-2xl font-semibold uppercase leading-tight">
                {project.title}
              </h3>
              {/* {project.description && (
                <p className="text-neutral-400 font-medium text-md mt-2 leading-relaxed max-w-[80%]">
                  {project.description}
                </p>
              )} */}
            </div>
          </Link>
        ))}
      </div>

      {/* REMAINING 3 — SMALLER, FLEXED IN A ROW */}
      <div className="flex gap-x-8">
        {rest.map((project) => (
          <Link
            key={project.id}
            href={`/works/${project.slug}`}
            className="group block w-[calc(33.333%-22px)]"
          >
            <div className="w-full h-[400px] overflow-hidden rounded-md">
              <img
                src={project.imageUrl}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover rounded-md transition-transform duration-700 group-hover:scale-[1.10]"
              />
            </div>

            <div className="flex flex-col mt-4 gap-1">
              <span className="text-black text-xs tracking-tight uppercase">
                {project.year}
              </span>
              <h3 className="text-black text-base font-semibold uppercase leading-tight mt-2">
                {project.title}
              </h3>
              {/* {project.description && (
                <p className="text-neutral-400 font-medium text-sm mt-2 leading-relaxed">
                  {project.description}
                </p>
              )} */}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}