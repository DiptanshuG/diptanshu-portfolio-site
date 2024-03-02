"use client";

import React, { useState } from "react";
import Home from "./home/page";
import Projects from "@/components/home/projects/Projects";
import About from "@/components/home/about/About";
import Skills from "@/components/home/skills/Skills";
import Header from "@/components/Header";
import Contact from "@/components/home/contacts/Contact";
import Footer from "@/components/Footer/Footer";
import Canvas from "@/components/canvas";

const Main = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="h-screen overflow-x-hidden bg-black">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Home />
      <Projects />

      <About />

      <Skills />

      <div style={{ position: "relative" }}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default Main;
