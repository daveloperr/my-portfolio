export default function NavBar() {
  return (
    <nav className="w-full flex justify-between items-center text-xs font-medium uppercase tracking-wider " style={{ color: "white" }}>
      <div>VaughnLopez.Studio</div>
      <div>Freelance Developer — UI / UX</div>
      <div className="flex gap-4">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}