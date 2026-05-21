export default function NavBar() {
  return (
    <nav className="flex items-center py-4 text-xs font-bold tracking-wider text-neutral-500">
      
      <a href="#" className="font-bold text-black uppercase">
        VAUGHNLOPEZ
      </a>

      <div className="flex justify-evenly flex-1">
        <a href="#about" className="hover:text-black uppercase">About</a>
        <a href="#about" className="hover:text-black uppercase">Skills</a>
        <a href="#works" className="hover:text-black uppercase">Works</a>
        <a href="#contact" className="hover:text-black uppercase">Contact</a>
      </div>

      <a href="#contact" className="hover:text-black uppercase">
        Hire Me
      </a>

    </nav>
  );
}