"use client";

import ScrollIcon from "@/components/scrollIcon/ScrollIcon";
import React, { useState } from "react";
import { CgScrollV } from "react-icons/cg";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Home = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="p-6 flex justify-between items-center">
        <IoMenu size={40} />
        <button onClick={toggleTheme}>
          {theme === "light" ? <FaMoon size={40} /> : <FaSun size={40} />}
        </button>
      </div>

      {/* left center area */}
      <div className="flex-1 px-8 flex flex-col justify-center">
        <div>
          <div className="flex justify-start flex-col items-start font-normal	text-2xl  pl-8">
            <p>Frontend Developer / Designer</p>
          </div>

          <div className="flex justify-start flex-col items-start my-5 text-[6rem]  pl-8">
            <p>Beyond the extraordinary:</p>
            <p>
              <span className="text-[#6D37FF]">Original </span>
              and <span className="text-[#6D37FF]">distinctive</span>{" "}
            </p>
            <p>Design X development</p>
          </div>
        </div>

        {/* lower area */}
        <div className="p-4 mt-auto">
          <span className="font-normal	text-2xl	mx-2">Diptanshu Bhawsar</span>
          <div className="flex justify-center items-center">
            <ScrollIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
