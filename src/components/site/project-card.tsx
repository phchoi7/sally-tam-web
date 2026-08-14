import { IconArrowUpRight as ArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import type { TeachingProject } from "@/lib/teaching-projects";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: TeachingProject;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/project/${project.slug}`}
      className={`project-card project-${project.accent} ${featured ? "project-featured" : ""}`}
    >
      <div className="project-card-top">
        <span>{project.category}</span>
        <ArrowUpRight aria-hidden size={24} stroke={1.4} />
      </div>
      {project.gallery?.[0] ? (
        <div className="project-card-image">
          <Image
            src={project.gallery[0].src}
            alt=""
            fill
            sizes={
              featured
                ? "(max-width: 780px) 100vw, 55vw"
                : "(max-width: 780px) 100vw, 42vw"
            }
          />
        </div>
      ) : (
        <div className="project-visual" aria-hidden>
          <span className="visual-ring" />
          <span className="visual-block" />
          <span className="visual-line" />
        </div>
      )}
      <div className="project-card-copy">
        <p>{project.year}</p>
        <h3>{project.title}</h3>
        <span>{project.titleEn}</span>
        <p className="project-card-summary">{project.summary}</p>
        <span className="project-card-audience">
          {project.audience} · {project.tools.slice(0, 3).join("、")}
        </span>
      </div>
    </Link>
  );
}
