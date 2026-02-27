"use client";

import Image from "next/image";
import { ProjectFrontmatter } from "@/lib/projects";

interface ProjectCardProps {
  slug: string;
  frontmatter: ProjectFrontmatter;
  onClick: () => void;
}

export default function ProjectCard({ frontmatter, onClick }: ProjectCardProps) {
  const { title, subtitle, tags, description, image, category } = frontmatter;

  return (
    <button
      onClick={onClick}
      className="group w-full text-left bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
    >
      {/* Image */}
      <div className="relative w-full aspect-video bg-elevated overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted">
            <span className="text-4xl opacity-30">📁</span>
          </div>
        )}
        {/* Category badge */}
        {category && (
          <span className="absolute top-3 right-3 px-2 py-1 text-xs bg-background/80 backdrop-blur-sm text-accent rounded-md">
            {category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-2 text-xs bg-elevated text-muted rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <p className="text-sm text-muted mt-2 line-clamp-2">{description}</p>
      </div>
    </button>
  );
}
