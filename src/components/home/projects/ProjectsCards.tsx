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

const ProjectsCards: React.FC<ProjectsCardsProps> = ({ project, className }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card ${className} bg-gray-800 text-white rounded-xl md:mx-4 mb-8 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl`}
    >
      <div className="relative w-full overflow-hidden rounded-t-xl">
        <Image
          src={project.image}
          alt={project.title}
          layout="responsive"
          width={300}
          height={200}
          objectFit="cover"
          className="transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4 flex flex-col h-full">
        <h3
          className={`text-lg font-semibold mb-2 text-orange-400  ${
            project.title === "BlockseBlock - Empowering Student Projects and Hackathons"
              ? "text-orange-500"
              : "text-white"
          }`}
        >
          {project.title}
        </h3>
        <p className="project-description text-sm italic  text-gray-400 mb-2">
          {project.technologies}
        </p>
        {project.description && (
          <p className="text-xs mt-2 text-gray-500 leading-relaxed">
            {project.description}
          </p>
        )}
      </div>
    </a>
  );
};

export default ProjectsCards;
