import projects from "../../data/projects";
import Link from "next/link";
import { useTransition } from "../TransistionLayer";

export default function ProjectGrid() {
  const { navigate } = useTransition();

  return (
    // Added px-6 to ensure content doesn't hit the very edge on mobile
    <section className="py-20 md:py-32 mt-20 md:mt-30">
      {/* grid-cols-1: Forces everything into one vertical line on mobile
        md:grid-cols-12: Switches back to your 12-column desktop layout
      */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-12">
        
        {/* LEFT SIDE LABEL: Now stacks at the top */}
        <div className="md:col-span-2 ">
          <div className="flex items-center gap-3 md:sticky md:top-32">
            <span className="w-3 h-3 rounded-full bg-pink-400 block"></span>
            <span className="text-[1.2rem] font-semibold">Selected work</span>
          </div>
        </div>

        {/* RIGHT SIDE: Full width on mobile, col-span-8 on desktop */}
        <div className="col-span-1 md:col-span-8 lg:cols-span-10 flex flex-col gap-y-16">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/works/${project.slug}`}
              className="group block"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/works/${project.slug}`);
              }}
            >
              {/* Image Container: Full width, adjusted height for mobile */}
              <div className="w-full h-[250px] md:h-[700px] overflow-hidden rounded-md flex items-center justify-center bg-[#f0f0f0]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center rounded-md transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-black text-lg md:text-xl font-semibold uppercase leading-tight">
                    {project.title}
                  </h3>
                  <span className="text-gray-700 text-md md:text-lg font-medium tracking-tight uppercase">
                    {project.year}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}