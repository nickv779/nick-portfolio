import { getAllProjects } from "@/lib/projects";
import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "Projects | Nick's Portfolio",
  description: "Browse my projects including software, games, and hardware.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="px-8 py-16 md:px-16 lg:px-24">
        <div className="max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projects
          </h1>
          <p className="text-lg text-muted max-w-2xl">
            A collection of my work across software development, game development,
            and hardware projects. Click on any project to learn more.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-8 pb-16 md:px-16 lg:px-24">
        <ProjectsClient projects={projects} />
      </section>
    </div>
  );
}
