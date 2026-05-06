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
import wordlineEduTechPlatform from "~/images/wordlineedutechplatform.png";
import todo from "~/images/todos.jpeg";
import uniqart from "~/images/uniqart.png";
import blockseblock from "~/images/blockseblock.png";
import dao from "~/images/Dao.jpeg";
import battleChan from "~/images/battlechan.jpeg";
import pevnost from "~/images/pevnostclient.jpeg";
import agent360 from "~/images/agent360.png";
import buyca from "~/images/buyca.png";
import mestokart from "~/images/mestokart.png";
import mestokartsellerdashboard from "~/images/mestokartsellerdashboard.png";

interface ProjectsProps {
  sectionRef: React.RefObject<HTMLDivElement | null>;
}
const Projects: React.FC<ProjectsProps> = ({ sectionRef }) => {
  const projectsData = [
    {
      image: DexOrdi,
      title: "Dexordi — Blockchain-native marketplace",
      description:
        "Spearheaded frontend architecture for a Web3 marketplace, improving token listing UX and onboarding flows.",
      link: "https://dexordi.com/",
      technologies: "Next.js, Tailwind, Web3",
    },
    {
      image: admin,
      title: "Heebee Admin Dashboard",
      technologies: "React, Node.js, Bootstrap",
      link: "https://admin.heebee.in/",
      description:
        "Built an admin panel for operations teams to manage orders, users, and inventory with optimized data grids.",
    },
    {
      image: dukkandar,
      title: "Dukkandar Seller Portal",
      technologies: "React, TypeScript, Bootstrap",
      description:
        "Designed seller onboarding and inventory workflows for a marketplace-style supplier portal.",
      link: "https://seller.quadbtech.com/",
    },
    {
      image: heebeecustomer,
      title: "Heebee Customer Ordering Experience",
      technologies: "React, Tailwind, Node.js, PostgreSQL",
      link: "https://heebee-customer-new.vercel.app/",
      description:
        "Delivered a responsive order flow with rich product discovery and mobile-first checkout experiences.",
    },
    {
      image: imperial,
      title: "Imperial Assets Marketplace",
      technologies: "Next.js, Tailwind, D3",
      description:
        "Created interactive data-driven listings and bidding experiences for a digital asset marketplace.",
      link: "https://imperialsto.com/",
    },
    {
      image: kitchenheebee,
      title: "Kitchen Heebee Business Portal",
      technologies: "React, Redux, Bootstrap, Node.js, PostgreSQL",
      description:
        "Built a business dashboard for kitchen operations with order tracking and supplier management.",
      link: "https://kitchen.heebee.in/",
    },
    {
      image: kitchenIqLanding,
      technologies: "HTML, CSS, JavaScript, PHP, MySQL",
      title: "KitchenIQ Landing Page",
      description:
        "Crafted a high-conversion landing page for a B2B logistics brand with compelling content hierarchy.",
      link: "https://kitcheniq.quadbtech.com/",
    },
    {
      image: portfolio,
      title: "Personal Portfolio Theme",
      description:
        "Built a modern brand showcase experience with motion and responsive visuals for creative services.",
      technologies: "HTML, CSS, JavaScript, GSAP",
      link: "https://info-weld.vercel.app/",
    },
    {
      image: pos,
      title: "Heebee POS Platform",
      description:
        "Implemented a point-of-sale dashboard with fast inventory search and checkout controls.",
      technologies: "Express, PostgreSQL, React, Tailwind",
      link: "https://heebee-pos.vercel.app",
    },
    {
      image: rentyourdress,
      title: "Dress Rental UI Theme",
      technologies: "React, Bootstrap",
      description:
        "Designed a polished rental storefront with product filters and booking-first flows.",
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
      link: "https://uniqart.io/",

      description: "Description for Project 12",
    },
    {
      image: blockseblock,
      title: "BlockseBlock - Empowering Student Projects and Hackathons",
      technologies: " ReactJS, TailwindCSS, MongoDB",
      link: "https://blockseblock.com/",
      description:
        "Revolutionizing student collaboration and hackathon management with intuitive design and powerful functionality.",
    },
    {
      image: dao,
      title: "Daouhouse -  A blockchain-based platform",
      technologies:
        "Rust , Tailwind, Difinity, React Js Plug wallet , Internet Identity",
      link: "https://qcvph-nqaaa-aaaak-aksra-cai.icp0.io/",
      description:
        "Daouhouse Project: A blockchain-based platform for creating DAO organizations, enabling proposal voting and organizational changes based on community votes.",
    },
    {
      image: battleChan,
      title: "Battlechan -  A blockchain-based platform",
      technologies:
        "Motoko , Tailwind, Difinity, React Js Plug wallet , Internet Identity",
      link: "https://rinem-tyaaa-aaaak-qigua-cai.icp0.io/",
      description:
        "Battlechan: A blockchain-based platform built with Motoko and React.js, where users can create and find posts, participate in battles by upvoting or downvoting, and showcase their skills.",
    },
    {
      image: pevnost,
      title: "Pevnost Corporation",
      technologies: "React.js, Bootstrap",
      link: "https://pevnostcorporation.com/",
      description:
        "Pevnost Corporation's website showcases their expertise in providing technical, accounting, and HR services. Built with React.js and Bootstrap, the site offers a sleek and professional platform for marketing their business.",
    },
    {
      image: agent360,
      title: "Agent360 Platform",
      link: "http://agent360.io/",
      technologies: "React, Next.js, SaaS",
      description:
        "Delivered a polished customer-facing platform for agent workflows, real-time service management, and AI-ready automation.",
    },
    {
      image: buyca,
      title: "Buy.ca Ecommerce Experience",
      link: "http://buy.ca/",
      technologies: "React, Next.js, Tailwind",
      description:
        "Built a responsive ecommerce storefront with fast product discovery and checkout experiences.",
    },
    {
      image: "https://image.thum.io/get/jpeg/wordline.zerra.in",
      title: "Wordline Merchant Portal",
      link: "https://wordline.zerra.in/",
      technologies: "React, TypeScript, PWA",
      description:
        "Developed a merchant portal with secure payment workflows, progressive web app capabilities, and cloud-friendly commerce flows.",
    },
    {
      image: mestokart,
      title: "MestoKart Marketplace",
      link: "http://mestokart.com/",
      technologies: "React, Bootstrap, Marketplace UX",
      description:
        "Implemented buyer and seller web experiences for an ecommerce marketplace with robust listing and order flows.",
    },
    {
      image: mestokartsellerdashboard,
      title: "MestoKart Seller Portal",
      link: "http://seller.mestokart.com/",
      technologies: "React, TypeScript, Admin UX",
      description:
        "Designed the seller portal for inventory, order management, and store controls across the MestoKart platform.",
    },
    {
      image: portfolio,
      title: "ONDC Grocery Ecommerce Apps",
      technologies: "React, PWA, Commerce",
      link: "https://ondc.org/",
      description:
        "Built grocery ecommerce interfaces aligned with ONDC marketplace guidelines for a modern retail experience.",
    },
    {
      image: wordlineEduTechPlatform,
      title: "EduTech Learning Platform",
      technologies: "React, Node.js, Tailwind",
      description:
        "Implemented learning journeys and course management workflows for a modern edutech application.",
    },
    {
      image: "https://image.thum.io/get/jpeg/wordline.zerra.in",
      title: "Mobile TWA & App Publishing",
      technologies: "PWA, Android TWA, iOS packaging",
      link: "https://wordline.zerra.in/",
      description:
        "Published web experiences as Android Trusted Web Activities and prepared iOS app packaging for modern mobile distribution.",
    },
  ];

  return (
    <section id="work" className="showcase w-screen bg-surface">
      <div className="section-shell mx-auto px-4 py-16" ref={sectionRef}>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-[rgba(var(--accent-rgb),0.9)] mb-4">
            Selected work
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-theme">
            Projects demonstrating full-stack, cloud, and AI product delivery.
          </h2>
          <p className="mt-4 text-theme-muted max-w-3xl mx-auto text-base md:text-lg">
            A curated showcase of responsive, AWS-ready, and AI-aware web experiences built for marketplaces, SaaS, product platforms, and blockchain interfaces.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {projectsData.map((project, index) => (
            <ProjectsCards
              key={index}
              project={project}
              className={index % 3 === 1 ? "mt-8" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
