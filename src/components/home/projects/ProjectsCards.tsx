import React from "react";
import Image, { StaticImageData } from "next/image";
import "./ProjectsCards.css";

interface Project {
  image: StaticImageData;
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
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card ${className} rounded-xl mx-4`}
    >
      <div className="project-image">
        <Image
          src={project.image}
          alt="Project"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="project-info">
        <h3
          className={` ${
            project.title ===
            "BlockseBlock - Empowering Student Projects and Hackathons"
              ? "project-title-white"
              : "project-title"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`project-description text-sm break-all ${
            project.title === "BlockseBlock" ? "text-white" : ""
          }`}
        >
          {project.technologies}
        </p>
      </div>
    </a>
  );
};

export default ProjectsCards;
