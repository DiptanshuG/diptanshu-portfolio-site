"use client";

import React, { useState } from "react";
import Home from "@/components/home/Home";
import Projects from "@/components/home/projects/Projects";
import About from "@/components/home/about/About";
import Skills from "@/components/home/skills/Skills";
import Header from "@/components/Header";
import Contact from "@/components/home/contacts/Contact";
import Footer from "@/components/Footer/Footer";
import Canvas from "@/components/canvas";
import { ScrollProvider, useScrollContext } from "./context/ScrollContext";

const MainContent = () => {
  const [theme, setTheme] = useState("light");
  const { sectionRef } = useScrollContext();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

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

const Main = () => {
  return (
    <ScrollProvider>
      <MainContent />
    </ScrollProvider>
  );
};

export default Main;
