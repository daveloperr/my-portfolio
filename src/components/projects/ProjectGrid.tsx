import projects from "../../data/projects";
import Link from "next/link";

export default function ProjectGrid() {
  return (
    <section className="py-32 mt-30">

      <div className="grid grid-cols-12 gap-x-12">
        {/* LEFT SIDE LABEL */}
        <div className="col-span-2">
          <div className="flex items-center gap-3 sticky top-32">
            <span className="w-3 h-3 rounded-full bg-pink-400 block"></span>
            <span className="text-[1.2rem] font-semibold">Selected work</span>
          </div>
        </div>

        {/* RIGHT SIDE — SINGLE VERTICAL COLUMN OF PROJECTS */}
        <div className="col-span-8 flex flex-col gap-y-12">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/works/${project.slug}`}
              className="group block"
            >
              <div className="w-full h-[700px] overflow-hidden rounded-md flex items-center justify-center bg-[#f0f0f0]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center rounded-md transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-black text-xl font-semibold uppercase leading-tight">
                    {project.title}
                  </h3>
                  <span className="text-gray-700 text-lg font-medium tracking-tight uppercase">
                    {project.year}
                  </span>
                </div>

                {/* <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack?.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-neutral-500 bg-[#e5e5e5] rounded-xs uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}