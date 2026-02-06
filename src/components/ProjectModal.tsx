"use client";

import { useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";
import { ProjectFrontmatter } from "@/lib/projects";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  frontmatter: ProjectFrontmatter;
  mdxSource: MDXRemoteSerializeResult;
}

// Custom MDX components
const mdxComponents = {
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const src = typeof props.src === "string" ? props.src : "";
    return (
      <Image
        src={src}
        alt={props.alt || ""}
        width={800}
        height={450}
        className="rounded-lg my-4"
      />
    );
  },
  // Add more custom components as needed
};

export default function ProjectModal({
  isOpen,
  onClose,
  frontmatter,
  mdxSource,
}: ProjectModalProps) {
  const { title, subtitle, image, tags } = frontmatter;

  // Handle escape key
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] mx-4 bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-background/50 backdrop-blur-sm text-muted hover:text-foreground hover:bg-background transition-colors"
        >
          <X size={20} />
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Hero image */}
          {image && (
            <div className="relative w-full aspect-video bg-elevated">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-foreground">{title}</h1>
              <p className="text-lg text-accent mt-2">{subtitle}</p>
              
              {/* Tags */}
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-elevated text-muted rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* MDX Content */}
            <div className="mdx-content">
              <MDXRemote {...mdxSource} components={mdxComponents} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
