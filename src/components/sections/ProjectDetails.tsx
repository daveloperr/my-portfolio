type Project = {
  id: number;
  title: string;
  year: string;
  slug: string;
  link?: string;
  deliverables: string[];
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
  return (
    <main className="px-6 py-20 ">

      <div className="pointer-events-none fixed inset-0 z-[99999] px-6">
        <div className="grid h-full w-full grid-cols-12 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border border-red-500/80 h-full" />
          ))}
        </div>
      </div>


      {/* HEADER */}
      <div className=" mb-16 mt-10">
        <h1 className="text-[7rem] font-semibold uppercase tracking-tighter leading-[0.9]">
          {project.title}
        </h1>
      </div>


      {/* PROJECT INFO */}
      <div className="grid grid-cols-12 gap-6 mb-20 mx-auto mt-30 items-start">

        {/* ROW 1: LABELS */}
        <div className="col-span-2">
          <h2 className="uppercase text-xs text-neutral-500 mb-1">Timeline</h2>
          <span>{project.year}</span>
        </div>

        <div className="col-span-3">
          <h2 className="uppercase text-xs text-neutral-500 mb-1">Role</h2>
          <div className="flex flex-col">
            {project.roles?.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>
        </div>

        <div className="col-span-4 col-start-9">
          <h2 className="uppercase text-xs text-neutral-500 mb-1">Summary</h2>
          <p className="max-w-md leading-snug">{project.description}</p>
        </div>

        {/* ROW 2: LINK + DELIVERABLES — always aligned */}
        <div className="col-span-2">
          <h2 className="uppercase text-xs text-neutral-500 mb-1">Link</h2>
          {project.link ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline">
              Visit Site
            </a>
          ) : (
            <span className="text-neutral-400">—</span>
          )}
        </div>

        <div className="col-span-3">
          <h2 className="uppercase text-xs text-neutral-500 mb-1">Deliverables</h2>
          <div className="flex flex-col">
            {project.deliverables?.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

      </div>

      {/* LAYOUT IMAGES */}
      <div className="flex flex-col gap-6">
        {project.layout.map((block, i) => (
          <div
            key={i}
            className={`grid gap-6 ${block.type === "split" ? "grid-cols-2" : "grid-cols-1"
              }`}
          >
            {block.images.map((src) => (
              <img
                key={src}
                src={src}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            ))}
          </div>
        ))}
      </div>

    </main>
  );
}