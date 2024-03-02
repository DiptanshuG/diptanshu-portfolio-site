"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import ScrollIcon from "@/components/scrollIcon/ScrollIcon";
import Projects from "@/components/home/projects/Projects";
import About from "@/components/home/about/About";

const Home = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="h-screen overflow-auto">
      {/* Header with transparent, blurred background */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      <div className="h-screen">
        <div className="pt-20 px-8 flex flex-col justify-between h-[80%]">
          <div className="m-8">
            <div className="flex justify-start flex-col items-start font-normal text-3xl pl-8">
              <p>Frontend Developer / Designer</p>
            </div>

            <div className="flex justify-start flex-col items-start my-5 text-6xl font-extrabold pl-8">
              <p>Beyond the extraordinary:</p>
              <p>
                <span className="text-purple-600">Original </span>
                and <span className="text-purple-600">distinctive</span>{" "}
              </p>
              <p>Design X development</p>
            </div>
          </div>

          <div className="p-4 m-8">
            <span className="font-normal text-2xl mx-3">Diptanshu Bhawsar</span>
            <div className="flex justify-center items-center">
              <ScrollIcon />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Projects />
      </div>

      <div>
        <About/>
      </div>
    </div>
  );
};

export default Home;
