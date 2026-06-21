import { ArrowUp, ArrowUpRight } from "lucide-react";

export default function Contact() {
    return (
        <section className="relative bg-[#111111] text-white px-6 pt-8 pb-16 min-h-screen flex flex-col mt-30">

            <div className="flex items-center justify-between pb-8 pt-20 border-b border-white/10">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-pink-400 block"></span>
                    <span className="text-[1.2rem] font-semibold">Available for Opportunities</span>
                </div>

                <a href="#" className="flex items-center gap-3 text-sm font-semibold text-neutral-400 hover:text-white transition-colors">
                    Back to top
                    <span className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 19V5M5 12l7-7 7 7" />
                        </svg>
                    </span>
                </a>
            </div>

            {/* MAIN GRID */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-16">

                <div className="lg:col-span-6 flex flex-col gap-8">
                    <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight">
                    Create with clear purpose.
                    </h1>
                    <p className="text-neutral-400 text-lg">Logic met with style.</p>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-10 lg:col-start-8">
                    {/* PROFILE BLOCK */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-neutral-700 flex-shrink-0 overflow-hidden">
                                {/* Replace with <img src="..." className="w-full h-full object-cover" /> */}
                            </div>
                            <div>
                                <p className="text-xl font-bold">Dave "Vaughn" Lopez</p>
                                <p className="text-neutral-400 text-sm">Designer & Developer</p>
                            </div>
                        </div>

                        {/* SOCIAL ICONS */}
                        <div className="flex items-center gap-4 ml-20 mt-1 text-neutral-400">
                            <a href="#" aria-label="Dribbble" className="hover:text-white transition-colors">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72M2.65 9.13c5.96 1.34 13.6 1.35 19.1.05M3.07 16.55c5.43-3.75 11.6-5.07 18.62-3.66" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Behance" className="hover:text-white transition-colors text-sm font-bold">
                                Bē
                            </a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* EMAIL */}
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-semibold text-neutral-400">Contact me</p>
                        <a
                            href="mailto:zar.studiolab@gmail.com"
                            className="text-3xl sm:text-4xl font-bold tracking-tight hover:opacity-80 transition-opacity"
                        >
                            zar.studio<span className="text-[#F472B6]">lab</span>@gmail.com
                        </a>
                        <p className="text-neutral-400 text-base mt-1">Interested working with me?</p>
                    </div>

                    {/* SCHEDULE BUTTON */}
                    <a
                        href="#schedule"
                        className="inline-flex items-center gap-3 w-fit bg-[#F472B6] text-black font-bold pl-7 pr-2 py-2 rounded-full 
                        shadow-[0_0_30px_rgba(244,114,182,0.35)] 
                        hover:shadow-[0_0_40px_rgba(244,114,182,0.5)] 
                        transition-shadow"
                                        >
                        Schedule Now
                        <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17L17 7M7 7h10v10" />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
}