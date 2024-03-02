import React from "react";
import ProjectsCards from "./ProjectsCards";
import DexOrdi from "~/images/dexordi.png";
import admin from "~/images/admin.png";
import dukkandar from "~/images/sellerDukkandar.png";
import heebeecustomer from "~/images/heebeecafe.png";
import imperial from "~/images/imperial.png";
import kitchenheebee from "~/images/heebeekitchen.png";
import kitchenIqLanding from "~/images/kitcheniq.png";
import portfolio from "~/images/portfolio.png";
import pos from "~/images/pos.png";
import rentyourdress from "~/images/rentyourdress.png";
import todo from "~/images/todo.png";
import uniqart from "~/images/uniqart.png";

const Projects: React.FC = () => {
  const projectsData = [
    {
      image: DexOrdi,
      title: "Dexordi Project based on blockchain technology (in progress )",
      description: "Description for Project 1",
      link: "https://dexordi-frontend.atican.dev/",
      technologies: "Next JS, Tailwind",
    },
    {
      image: admin,
      title: "Admin-Dashboard for management CRUD-Operation",
      technologies: "React JS, Node.js, Bootstrap",
      link: "https://admin.heebee.in/",
      description: "Description for Project 2",
    },
    {
      image: dukkandar,
      title:
        "Dukkandaar seller module project (similar to meesho seller supplier )",
      technologies: "React, react-bootstrap , typescript ",
      description: "Description for Project 3",
      link: "https://seller.quadbtech.com/",
    },
    {
      image: heebeecustomer,
      title: "Customer-Online-Order",
      technologies: "React.js, Tailwind, Node.js, postgre'sql",
      link: "https://heebee-customer-new.vercel.app/",
      description: "Description for Project 4",
    },
    {
      image: imperial,
      title:
        "Imperial Assets (building selling platforms based on blockchain bids type system)",
      technologies: "Next JS, Tailwind D3",
      description: "Description for Project 5",
      link: "https://imperial-frontend.atican.dev/",
    },
    {
      image: kitchenheebee,
      title: "Project 6",
      description: "Description for Project 6",
    },
    {
      image: kitchenIqLanding,
      technologies: "Html, CSS, JS, PHP, MYSQL",
      title: "Static Template",
      description: "Description for Project 7",
      link: "https://kitcheniq.quadbtech.com/",
    },
    {
      image: portfolio,
      title: "Portfolio Services",
      description: "Description for Project 8",
      technologies: "Html, CSS, JS, GSAP",
      link: "https://info-weld.vercel.app/",
    },
    {
      image: pos,
      title: "E-commerce Pos System",
      description: "Description for Project 9",
      technologies: "Express.js, PostgreSQL, ReactJs, Tailwind",
      link: "https://heebee-pos.vercel.app",
    },
    {
      image: rentyourdress,
      title: "Dress rental website static frontend theme",
      technologies: "React, react-bootstrap",
      description: "Description for Project 10",
      link: "https://rent-your-dress.vercel.app/",
    },
    {
      title: "Todo App",
      technologies:
        "React, Typescript, Localstorage, context State management, Dummy Login",
      image: todo,
      description: "Description for Project 11",
      link: "https://to-do-app-diptanshug.vercel.app/",
    },
    {
      image: uniqart,
      title: "A platform for buy and sell NFT's (Non-fungible token)",
      technologies: "ReactJS, Bootstrap",
      link: "https://demo.uniqart.io/",

      description: "Description for Project 12",
    },
  ];

  return (
    <div className="showcase h-fit w-screen  flex justify-center items-center bg-[rgb(9,4,22)]">
      <div className=" mx-auto px-4  h-full p-8">
        <h2 className="text-4xl my-6 font-bold mb-8 text-white text-center font-extrabold">
          Selected Projects
        </h2>
        <div className="flex justify-center  mb-8 flex-wrap gap-6 px-4 mx-8">
          {projectsData.map((project, index) => (
            <ProjectsCards
              key={index}
              project={project}
              className={index % 3 === 1 ? "mt-8" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
