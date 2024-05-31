import React from "react";
import ProjectsCards from "./ProjectsCards";
import DexOrdi from "~/images/dexordi.jpeg";
import admin from "~/images/adminheebee.jpeg";
import dukkandar from "~/images/sellerdukandar2.jpeg";
import heebeecustomer from "~/images/heebeecafe.png";
import imperial from "~/images/imperialassetadmin.jpeg";
import kitchenheebee from "~/images/kitchen.jpeg";
import kitchenIqLanding from "~/images/kitcheniq.png";
import portfolio from "~/images/portfolio.png";
import pos from "~/images/pos.png";
import rentyourdress from "~/images/rentyourdress.png";
import todo from "~/images/todos.jpeg";
import uniqart from "~/images/uniqart.png";
import blockseblock from "~/images/blockseblock.png";
import dao from "~/images/Dao.jpeg";
import battleChan from "~/images/battlechan.jpeg";

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
      technologies: "ReactJs, Redux , Bootstrap, NodeJs ,PostgreSQL ",
      description: "Description for Project 6",
      link: "https://kitchen.heebee.in/",
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
    {
      image: blockseblock,
      title: "BlockseBlock - Empowering Student Projects and Hackathons",
      technologies: " ReactJS, TailwindCSS, MongoDB",
      link: "https://blockseblock.com/",
      description: "Revolutionizing student collaboration and hackathon management with intuitive design and powerful functionality."
    },
    {
      image: dao,
      title: "Daouhouse -  A blockchain-based platform",
      technologies: "Rust , Tailwind, Difinity, React Js Plug wallet , Internet Identity",
      link: "https://qcvph-nqaaa-aaaak-aksra-cai.icp0.io/",
      description: "Daouhouse Project: A blockchain-based platform for creating DAO organizations, enabling proposal voting and organizational changes based on community votes."
    },
    {
      image: battleChan,
      title: "Battlechan -  A blockchain-based platform",
      technologies: "Motoko , Tailwind, Difinity, React Js Plug wallet , Internet Identity",
      link: "https://rinem-tyaaa-aaaak-qigua-cai.icp0.io/",
      description: "Battlechan: A blockchain-based platform built with Motoko and React.js, where users can create and find posts, participate in battles by upvoting or downvoting, and showcase their skills."
    },
  ];

  return (
    <div className="showcase h-fit w-screen  flex justify-center items-center bg-[rgb(9,4,22)]">
      <div className="mx-auto px-4  h-full p-8">
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
