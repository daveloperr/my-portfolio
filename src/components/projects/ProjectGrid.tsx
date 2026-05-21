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
    title: "E-commerce Platform",
    deliverables: ["Web Design", "Web Development"],
    description: "Crafted a cohesive brand identity and designed an intuitive website for E-commerce Platform, an online retail business, resulting in a 30% increase in user engagement.",
    imageUrl: "/celestial.jpg"
  }
];

export default function ProjectGrid() {
  return (
    <section className=" px-6 py-32">
      {/* SECTION HEADER */}
      <div className="mb-24 border-b border-white/10 pb-6">
        <h2 className=" lg:text-8xl font-sans font-bold tracking-tighter uppercase text-black text-center">
          ALL WORKS
        </h2>
      </div>

      {/* DYNAMIC SCALE GRID CONTAINER */}
      <div className="grid grid-cols-12 gap-x-12 gap-y-32">
        {projects.map((project, index) => {
          // Identify if the card is on the left (index 0, 2) or right (index 1, 3)
          const isRightSide = index % 2 !== 0;
          
          // Determine the row set (Set 0 = Projects 1&2, Set 1 = Projects 3&4)
          const setIndex = Math.floor(index / 2);
          const isEvenSet = setIndex % 2 === 0;

          // Apply your custom twist logic
          let colSpan = "col-span-12 md:col-span-6"; // Fallback
          
          if (isEvenSet) {
            // Set 1: Right is bigger (Left 5, Right 7)
            colSpan = isRightSide ? "col-span-12 md:col-span-7" : "col-span-12 md:col-span-5";
          } else {
            // Set 2: Right is smaller (Left 7, Right 5)
            colSpan = isRightSide ? "col-span-12 md:col-span-5" : "col-span-12 md:col-span-7";
          }

          // Optional: Add vertical alignment offset to complement the unequal widths
          const alignmentClass = isRightSide ? "md:pt-24" : "md:pt-0";

          return (
            <div
              key={project.id}
              className={`${colSpan} ${alignmentClass} flex flex-col group cursor-pointer`}
            >
              {/* IMAGE CONTAINER WITH CUSTOM SHADERS */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-900 mb-6">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]" 
                />

                {/* CRT / Radial Shader Overlays */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'repeating-radial-gradient(circle at 17% 32%, white, black 0.00085px)',
                  animation: 'back1 1s linear infinite',
                  mixBlendMode: 'screen',
                  opacity: 0.11,
                  zIndex: 10,
                }} />

                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'repeating-radial-gradient(circle at 17% 32%, white, black 0.00085px)',
                  animation: 'back2 0.1s linear infinite',
                  mixBlendMode: 'screen',
                  opacity: 0.11,
                  zIndex: 11,
                }} />
              </div>

              {/* PROJECT DATA BLOCK */}
              <div className="flex flex-col">
                {/* Deliverables / Tags */}
                <div className="flex flex-wrap items-center gap-x-2 text-[10px] font-mono tracking-wider text-neutral-400 uppercase mb-2">
                  {project.deliverables.map((item, index) => (
                    <span key={index} className="flex items-center">
                      {item}
                      {index < project.deliverables.length - 1 && (
                        <span className="ml-2 text-neutral-600 select-none">•</span>
                      )}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-white text-xl font-medium tracking-tight mb-3 group-hover:text-neutral-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 text-sm leading-relaxed max-w-xl mb-4">
                  {project.description}
                </p>

                {/* Action Link */}
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