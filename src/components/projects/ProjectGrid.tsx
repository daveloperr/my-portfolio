
import projects from "../../data/projects";
import Link from "next/link";


export default function ProjectGrid() {

  return (
    <section className="px-6 py-32">
      <div className="mb-24 border-b border-white/10 pb-6">
        <h2 className="lg:text-8xl font-sans font-bold tracking-tighter uppercase text-black text-center">
          ALL WORKS
        </h2>
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {projects.map((project, index) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className={`flex flex-col group cursor-pointer ${index % 2 !== 0 ? "md:mt-20" : ""
              }`}
          >
            {/* IMAGE */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-900 mb-6">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>

            {/* META */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center gap-2 ">
                <h3 className="text-black text-lg md:text-xl lg:text-2xl font-semibold tracking-tight uppercase">
                  {project.title}
                </h3>

                <span className="text-neutral-600 text-sm md:text-md lg:text-lg  tracking-tight uppercase">
                  {project.year}
                </span>
              </div>

              {project.description && (
                <p className="text-neutral-500 text-sm  mt-2 leading-relaxed w-150">
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