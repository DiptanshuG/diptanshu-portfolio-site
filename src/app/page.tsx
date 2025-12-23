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
import useScrollToSection from "./hook/useScrollToSection";

const Main = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const { scrollToSection, sectionRef } = useScrollToSection();

  return (
    <div className="min-h-screen overflow-x-hidden bg-[rgb(var(--background-rgb))] text-white">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="flex flex-col gap-16 md:gap-24">
        <Home />
        <Projects sectionRef={sectionRef} />
        <About />
        <Skills />
        <div style={{ position: "relative" }}>
          <Contact />
        </div>
      </main>
      <footer className="mt-10">
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
