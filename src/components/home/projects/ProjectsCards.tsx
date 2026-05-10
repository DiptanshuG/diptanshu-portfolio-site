import React, { useState } from "react";
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
  aiTag?: boolean;
}

const ProjectsCards: React.FC<ProjectsCardsProps> = ({
  project,
  className,
  aiTag,
}) => {
  const [imgError, setImgError] = useState(false);
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
        {isRemoteImage && !imgError ? (
          <img
            src={project.image as string}
            alt={project.title}
            className="project-image-img"
            onError={() => setImgError(true)}
          />
        ) : !isRemoteImage ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            unoptimized
            className="project-image-img"
          />
        ) : (
          <div className="project-image-fallback">
            <span>Preview unavailable</span>
          </div>
        )}
      </div>
      <div className="project-overlay" />
      {aiTag && (
        <span
          style={{
            position: "absolute",
            top: "0.75rem",
            right: "0.75rem",
            zIndex: 10,
            background: "rgba(124,58,237,0.82)",
            border: "1px solid rgba(167,139,250,0.6)",
            color: "#e9d5ff",
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            padding: "0.2rem 0.55rem",
            borderRadius: "999px",
            backdropFilter: "blur(6px)",
          }}
        >
          AI
        </span>
      )}
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
