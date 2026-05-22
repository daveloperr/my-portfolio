const projects = [
  {
    id: 1,
    title: "InnovationOne Inc.",
    deliverables: ["Web Design", "Web Development"],
    description: "Crafted a cohesive brand identity and designed an intuitive website for InnovationOne Inc., a leading tech startup, resulting in a 30% increase in user engagement.",
    imageUrl: "/innov_front.jpg"
  },
  {
    id: 2,
    title: "UNAI Asset Management",
    deliverables: ["Web Development"],
    description: "Crafted a cohesive brand identity and designed an intuitive website for UNAI Asset Management, a financial services company, resulting in a 25% increase in user engagement.",
    imageUrl: "/asset2.jpg"
  },
  {
    id: 3,
    title: "DRL Construction Services",
    deliverables: ["Web Design", "Web Development"],
    description: "Crafted a cohesive brand identity and designed an intuitive website for DRL Construction Services, a construction company, resulting in a 20% increase in user engagement.",
    imageUrl: "/capstone.jpg"
  },
  {
    id: 4,
    title: "Makeup E-commerce Platform",
    deliverables: ["Web Design", "Web Development"],
    description: "Crafted a cohesive brand identity and designed an intuitive website for E-commerce Platform, an online retail business, resulting in a 30% increase in user engagement.",
    imageUrl: "/celestial.jpg"
  },
  {
    id: 5,
    title: "Kitchenware E-commerce Platform",
    deliverables: ["Web Design", "Web Development"],
    description: "Crafted a cohesive brand identity and designed an intuitive website for E-commerce Platform, an online retail business, resulting in a 30% increase in user engagement.",
    imageUrl: "/kitchen.jpg"
  }
];

export default function ProjectGrid() {
  const [hero, ...rest] = projects;

  return (
    <section className="px-6 py-32">
      {/* SECTION HEADER */}
      <div className="mb-24 border-b border-white/10 pb-6">
        <h2 className="lg:text-8xl font-sans font-bold tracking-tighter uppercase text-black text-center">
          ALL WORKS
        </h2>
      </div>

      {/* HERO PROJECT — full width */}
      <div className="group cursor-pointer mb-32">
        {/* IMAGE */}
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-neutral-900 mb-6">
          <img
            src={hero.imageUrl}
            alt={hero.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
          />

          {/* CRT Overlays */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'repeating-radial-gradient(circle at 17% 32%, white, black 0.00085px)',
            animation: 'back1 1s linear infinite',
            mixBlendMode: 'screen', opacity: 0.11, zIndex: 10,
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'repeating-radial-gradient(circle at 17% 32%, white, black 0.00085px)',
            animation: 'back2 0.1s linear infinite',
            mixBlendMode: 'screen', opacity: 0.11, zIndex: 11,
          }} />
        </div>

        {/* META */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="flex flex-col">
            {/* Deliverables */}
            <div className="flex flex-wrap items-center gap-x-2 text-[10px] font-mono tracking-wider text-neutral-400 uppercase mb-2">
              {hero.deliverables.map((item, i) => (
                <span key={i} className="flex items-center">
                  {item}
                  {i < hero.deliverables.length - 1 && (
                    <span className="ml-2 text-neutral-600 select-none">•</span>
                  )}
                </span>
              ))}
            </div>
            {/* Title — larger for hero */}
            <h3 className="text-white text-4xl md:text-5xl font-medium tracking-tight group-hover:text-neutral-300 transition-colors">
              {hero.title}
            </h3>
          </div>

          <div className="flex flex-col gap-3 md:items-end max-w-lg">
            <p className="text-neutral-400 text-sm leading-relaxed">
              {hero.description}
            </p>
            <span className="text-xs font-medium tracking-wider uppercase text-white group-hover:text-neutral-400 transition-colors inline-flex items-center gap-x-1">
              View Case Study <span className="text-[10px]">→</span>
            </span>
          </div>
        </div>
      </div>

      {/* REMAINING PROJECTS — asymmetric grid */}
      <div className="grid grid-cols-12 gap-x-12 gap-y-32">
        {rest.map((project, index) => {
          const isRightSide = index % 2 !== 0;
          const setIndex = Math.floor(index / 2);
          const isEvenSet = setIndex % 2 === 0;

          let colSpan = "col-span-12 md:col-span-6";
          if (isEvenSet) {
            colSpan = isRightSide ? "col-span-12 md:col-span-7" : "col-span-12 md:col-span-5";
          } else {
            colSpan = isRightSide ? "col-span-12 md:col-span-5" : "col-span-12 md:col-span-7";
          }

          const alignmentClass = isRightSide ? "md:pt-24" : "md:pt-0";

          return (
            <div
              key={project.id}
              className={`${colSpan} ${alignmentClass} flex flex-col group cursor-pointer`}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-900 mb-6">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'repeating-radial-gradient(circle at 17% 32%, white, black 0.00085px)',
                  animation: 'back1 1s linear infinite',
                  mixBlendMode: 'screen', opacity: 0.11, zIndex: 10,
                }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'repeating-radial-gradient(circle at 17% 32%, white, black 0.00085px)',
                  animation: 'back2 0.1s linear infinite',
                  mixBlendMode: 'screen', opacity: 0.11, zIndex: 11,
                }} />
              </div>

              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-x-2 text-[10px] font-mono tracking-wider text-neutral-400 uppercase mb-2">
                  {project.deliverables.map((item, i) => (
                    <span key={i} className="flex items-center">
                      {item}
                      {i < project.deliverables.length - 1 && (
                        <span className="ml-2 text-neutral-600 select-none">•</span>
                      )}
                    </span>
                  ))}
                </div>
                <h3 className="text-white text-xl font-medium tracking-tight mb-3 group-hover:text-neutral-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-xl mb-4">
                  {project.description}
                </p>
                <div>
                  <span className="text-xs font-medium tracking-wider uppercase text-white group-hover:text-neutral-400 transition-colors inline-flex items-center gap-x-1">
                    View Case Study <span className="text-[10px]">→</span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}