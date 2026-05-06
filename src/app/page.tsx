import Image from "next/image";
import NavBar from "../components/NavBar";
import Hero from "../sections/Hero";
import ProjectGrid from "../components/projects/ProjectGrid";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero/>
      <ProjectGrid/>
    
    </div>
  );
}
