"use client";

import React from "react";
import ScrollIcon from "@/components/scrollIcon/ScrollIcon";
import Canvas from "@/components/canvas";

const Home = () => {
  return (
    <div className="relative">
      {/* Set canvas as background */}
      <div className="absolute inset-0 z-0">
        <Canvas />
      </div>

      <div className="h-screen pt-20 relative z-10 flex flex-col justify-center items-center text-center">
        <div className="flex flex-col justify-between h-full w-full max-w-4xl px-8 pt-20">
          <div className="flex flex-col items-center text-2xl font-light md:text-4xl fade-in">
            <p className="fade-in text-white" style={{ animationDelay: "0.5s" }}>
              Frontend Expert / Designer
            </p>
            <p className="fade-in text-white" style={{ animationDelay: "1s" }}>
              Golang Developer /   Full-Stack Developer
            </p>
          </div>

          <div className="flex flex-col items-center my-5 text-4xl md:text-7xl font-extrabold">
            <p className="fade-in text-white" style={{ animationDelay: "1.5s" }}>
              Beyond the extraordinary:
            </p>
            <p className="fade-in text-white" style={{ animationDelay: "2s" }}>
              <span className="text-orange-500">Original</span> and{" "}
              <span className="text-orange-500">distinctive</span>
            </p>
            <p className="fade-in text-white" style={{ animationDelay: "2.5s" }}>
              Design X development
            </p>
          </div>

          <div className="m-8 fade-in text-white" style={{ animationDelay: "3s" }}>
            <span className="font-normal text-2xl md:text-3xl">
              Diptanshu Bhawsar
            </span>
            <div className="flex justify-center items-center mt-9 md:mt-0">
              <ScrollIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
