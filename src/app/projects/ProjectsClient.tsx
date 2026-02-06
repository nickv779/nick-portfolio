"use client";

import { useState, useEffect } from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { Project } from "@/lib/projects";

interface ProjectsClientProps {
  projects: Project[];
}

interface SelectedProject {
  project: Project;
  mdxSource: MDXRemoteSerializeResult;
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [selectedProject, setSelectedProject] = useState<SelectedProject | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleProjectClick = async (project: Project) => {
    setIsLoading(true);
    try {
      const mdxSource = await serialize(project.content);
      setSelectedProject({ project, mdxSource });
    } catch (error) {
      console.error("Error serializing MDX:", error);
    }
    setIsLoading(false);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Handle body scroll lock
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  if (projects.length === 0) {
    return (
      <div className="max-w-6xl">
        <div className="bg-surface border border-border rounded-xl p-12 text-center">
          <p className="text-muted text-lg">No projects yet.</p>
          <p className="text-muted/60 mt-2">
            Add MDX files to the <code className="bg-elevated px-2 py-1 rounded">content/projects</code> folder to get started.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            frontmatter={project.frontmatter}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>

      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="text-accent">Loading...</div>
        </div>
      )}

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={true}
          onClose={handleCloseModal}
          frontmatter={selectedProject.project.frontmatter}
          mdxSource={selectedProject.mdxSource}
        />
      )}
    </>
  );
}
