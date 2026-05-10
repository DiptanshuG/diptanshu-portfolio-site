"use client";

import React, { useEffect, useState } from "react";
import Home from "@/components/home/Home";
import Projects from "@/components/home/projects/Projects";
import About from "@/components/home/about/About";
import Skills from "@/components/home/skills/Skills";
import Header from "@/components/Header";
import Contact from "@/components/home/contacts/Contact";
import Footer from "@/components/Footer/Footer";
import { ScrollProvider, useScrollContext } from "./context/ScrollContext";
import CurrentlyBuilding from "@/components/home/CurrentlyBuilding";

const MainContent = () => {
  const [theme, setTheme] = useState("light");
  const { sectionRef } = useScrollContext();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(savedTheme ?? preferredTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="flex flex-col gap-16 md:gap-24">
        <Home />
        <Projects sectionRef={sectionRef} />
        <About />
        <Skills />
        <CurrentlyBuilding />
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
