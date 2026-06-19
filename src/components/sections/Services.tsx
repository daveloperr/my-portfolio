import { useState } from "react";

const services = [
  { title: "Full-Stack Dev", desc: "Performance & Scalability.", img: "/path-to-image-1.jpg" },
  { title: "UI/UX Design", desc: "User-centric & Intuitive.", img: "/path-to-image-2.jpg" },
  { title: "Vibe Coding", desc: "Taste & Intent.", img: "/path-to-image-3.jpg" },
  { title: "Motion & Interaction", desc: "Adding life to the web.", img: "/path-to-image-4.jpg" }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section className="py-32 bg-black text-white rounded-2xl">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        
        {/* LEFT COLUMN: Clean typography and soft list */}
        <div className="flex flex-col">
          <span className="text-sm font-medium tracking-wide text-neutral-400 uppercase mb-12">
            What I can help with
          </span>
          
          <div className="flex flex-col">
            {services.map((service, index) => (
              <div 
                key={service.title}
                onMouseEnter={() => setHoveredIndex(index)}
                className="group cursor-pointer py-10 border-b border-white/10 transition-all hover:pl-6"
              >
                <h3 className="text-3xl font-semibold uppercase tracking-tight group-hover:text-pink-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-500 font-normal text-md mt-3 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Soft-Modern image display */}
        <div className="hidden md:flex items-center justify-center sticky top-20 h-[600px]">
          <div className="w-full h-full overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl">
            <img 
              src={services[hoveredIndex].img} 
              className="w-full h-full object-cover transition-opacity duration-700 opacity-90 hover:opacity-100" 
              alt="Service Preview"
            />
          </div>
        </div>
      </div>
    </section>
  );
}