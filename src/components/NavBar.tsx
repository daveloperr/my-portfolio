


export default function NavBar() {
    return (
        <nav className="flex items-center gap-x-8 py-4 text-xs font-bold tracking-wider text-neutral-500">
            <a href="#" className="font-bold text-black uppercase mr-auto">
                DaveLopez
            </a>
            <a href="#about" className="hover:text-black transition-colors uppercase">
                About
            </a>
            <a href="#works" className="hover:text-black transition-colors uppercase">
                Works
            </a>
            <a href="#contact" className="hover:text-black transition-colors uppercase">
                Contact
            </a>
            <span className="text-neutral-400 select-none">|</span>
            <span className="uppercase text-neutral-400">
                Manila, PH
            </span>
        </nav>

    )

}