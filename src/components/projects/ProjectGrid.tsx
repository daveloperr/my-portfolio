import projects from "../../data/projects";
import Link from "next/link";

export default function ProjectGrid() {
  // group projects into pairs
  const pairs: (typeof projects)[number][][] = [];
  for (let i = 0; i < projects.length; i += 2) {
    pairs.push(projects.slice(i, i + 2));
  }

  return (
    <section className="py-32 mt-30">
      {/* 1. LABEL AREA */}
      <div className="mb-20">
        <div className="w-full">
          <div className="flex items-center justify-center gap-2">
            <span className="w-3 h-3 rounded-full bg-pink-400 block" />
            <span className="text-6xl font-bold uppercase text-gray-900 tracking-tighter">Selected Works</span>
                        <span className="w-3 h-3 rounded-full bg-pink-400 block" />

          </div>
        </div>
      </div>

      {/* 2. PAIRED GRID — evenly aligned */}
      <div className="flex flex-col gap-y-24">
        {pairs.map((pair, rowIndex) => (
          <div key={rowIndex} className="flex gap-x-12">
            {pair.map((project) => (
              <Link
                key={project.id}
                href={`/works/${project.slug}`}
                className="group block w-[calc(50%-24px)]"
              >
                {/* IMAGE CONTAINER */}
                <div className="w-full h-[700px] overflow-hidden rounded-md bg-neutral-100">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>

                {/* TITLE & DESCRIPTION */}
                <div className="flex flex-col mt-6">
                  <div className="flex justify-between">
                    <h3 className="text-2xl font-bold uppercase leading-tight">
                      {project.title}
                    </h3>
                    <h3 className="text-lg font-medium uppercase leading-tight">
                      {project.year}
                    </h3>
                  </div>

                  {project.description && (
                    <p className="text-neutral-500 font-medium text-md mt-4 leading-relaxed max-w-[80%]">
                      {project.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}

            {/* LEFTOVER SLOT: keeps the row's width consistent if odd count */}
            {pair.length === 1 && <div className="w-[calc(50%-24px)]" />}
          </div>
        ))}
      </div>
    </section>
  );
}