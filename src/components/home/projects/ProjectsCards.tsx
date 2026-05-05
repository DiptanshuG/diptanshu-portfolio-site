import React from "react";
import Image, { StaticImageData } from "next/image";
import "./ProjectsCards.css";

interface Project {
  image: StaticImageData | string;
  title: string;
  technologies?: string;
  description?: string;
  link?: string;
}

interface ProjectsCardsProps {
  project: Project;
  className?: string;
}

const ProjectsCards: React.FC<ProjectsCardsProps> = ({
  project,
  className,
}) => {
  const isRemoteImage = typeof project.image === "string";

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card group ${className || ""}`}
      aria-label={`Open ${project.title}`}
    >
      <div className="project-image">
        {isRemoteImage ? (
          <img
            src={project.image as string}
            alt={project.title}
            className="project-image-img"
          />
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            unoptimized
            className="project-image-img"
          />
        )}
      </div>
      <div className="project-overlay" />
      <div className="project-info">
        <div className="project-tag">{project.technologies}</div>
        <h3 className="project-title">{project.title}</h3>
        {project.description && (
          <p className="project-description">{project.description}</p>
        )}
        <div className="project-footer">
          <span className="project-link">
            View project <span aria-hidden>↗</span>
          </span>
        </div>
      </div>
    </a>
  );
};

export default ProjectsCards;
