// import { useState, useRef, useLayoutEffect } from "react";

// const services = [
//   { title: "Website Design", img: "/path-to-4.jpg" },
//   { title: "Website Development", img: "/Asset.webp" },

//   { title: "Graphic Design", img: "/path-to-6.jpg" },
//   { title: "Motion Design", img: "/path-to-6.jpg" },
// ];

// export default function Services() {
// const [hoveredIndex, setHoveredIndex] = useState(0);
//   const [cardTop, setCardTop] = useState(0);

//   const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const CARD_HEIGHT = 380;

// useLayoutEffect(() => {
//   requestAnimationFrame(() => {
//     const row = rowRefs.current[hoveredIndex];
//     const container = containerRef.current;
//     if (!row || !container) return;

//     const rowRect = row.getBoundingClientRect();
//     const containerRect = container.getBoundingClientRect();

//     const rowCenter =
//       rowRect.top - containerRect.top + rowRect.height / 2;

//     setCardTop(rowCenter - CARD_HEIGHT / 2);
//   });
// }, [hoveredIndex]);
//   return (
//     <section className="relative py-32 bg-black text-white rounded-2xl overflow-hidden">
//       {/* isolate creates a fresh stacking context so blend-mode only mixes with siblings inside it */}
//       <div ref={containerRef} className="relative max-w-[1400px] mx-auto px-8 isolate">

//         <div className="flex  items-center mb-2 gap-2">
//           <div className="flex items-center gap-3">
//             <span className="w-3 h-3 rounded-full bg-pink-400 block"></span>
//             <span className="text-[1.2rem] font-semibold">What can I help you with</span>
//           </div>
//         </div>

//         <div className="flex flex-col">
//           {services.map((service, index) => {
//             const isActive = hoveredIndex === index;

//             return (
//               // ... inside your map function ...
//             <div
//   key={service.title}
//   ref={(el) => (rowRefs.current[index] = el)}
//   onMouseEnter={() => setHoveredIndex(index)}
//   className="group cursor-pointer py-2"
// >
//                 <div className="flex items-start gap-18">
//                   {/* NUMBER */}
//                   <span className="text-3xl font-medium text-white/40 mt-6 ">
//                     {String(index + 1).padStart(2, '0')}
//                   </span>

//                   {/* TITLE */}
//                   <h3
//                     className={`relative z-10 text-[6.5rem] font-bold leading-[1.05] tracking-tighter mix-blend-difference transition-colors duration-500 ${isActive ? "text-white" : "text-white/20"
//                       }`}
//                   >
//                     {service.title}
//                   </h3>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* IMAGE CARD — sits behind the text in paint order (lower z-index) so blend-difference applies */}
//         <div
//           className="absolute right-8 w-[300px] z-0 rounded-sm overflow-hidden bg-neutral-200 shadow-2xl pointer-events-none transition-[top] duration-500 ease-out"
//           style={{ top: cardTop, height: CARD_HEIGHT }}
//         >
//           {services.map((service, index) => (
//             <img
//               key={service.title}
//               src={service.img}
//               alt={service.title}
//               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredIndex === index ? "opacity-100" : "opacity-0"
//                 }`}
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }