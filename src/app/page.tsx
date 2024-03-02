"use client";

import React, { useState } from "react";
import Home from "./home/page";
import Projects from "@/components/home/projects/Projects";
import About from "@/components/home/about/About";
import Skills from "@/components/home/skills/Skills";
import Header from "@/components/Header";
import Contact from "@/components/home/contacts/Contact";
import Footer from "@/components/Footer/Footer";

const Main = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="h-screen overflow-x-hidden">
      <Header theme={theme} toggleTheme={toggleTheme} />
        <Home />
        <Projects />
      
        <About />
   
        <Skills />
        <Contact/>

        <Footer/>
    </div>
  );
};

export default Main;
