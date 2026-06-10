import projects from "../data/projects";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="px-6 py-20 max-w-6xl mx-auto">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-auto rounded-lg mb-10"
      />

      <div className="flex justify-between mb-6">
        <h1 className="text-5xl font-bold">{project.title}</h1>
        <span>{project.year}</span>
      </div>

      <p className="text-lg text-neutral-600">{project.description}</p>

      <div className="mt-10">{/* {project.content} */}</div>
    </main>
  );
}