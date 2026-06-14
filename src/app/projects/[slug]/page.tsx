import projects from "../../../data/projects";
import { notFound } from "next/navigation";
import ProjectDetails from "../../../components/sections/ProjectDetails";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectSlugPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return notFound();

  return <ProjectDetails project={project} />;
}