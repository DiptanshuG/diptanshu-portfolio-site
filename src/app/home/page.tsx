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

      <div className="h-screen pt-20 relative z-10">
        <div className="flex flex-col justify-between h-[80%] pt-20 md:px-8">
          <div className="md:m-8">
            <div className="flex flex-col items-start text-xl font-normal md:text-3xl pl-8 fade-in">
              <p
                className="fade-in text-white"
                style={{ animationDelay: "0.5s" }}
              >
                Frontend Expert / Designer
              </p>
              <p
                className="fade-in text-white"
                style={{ animationDelay: "1s" }}
              >
                Full-Stack Developer
              </p>
            </div>

            <div className="flex flex-col items-start my-5 text-3xl md:text-6xl font-extrabold pl-8">
              <p
                className="fade-in text-white"
                style={{ animationDelay: "1.5s" }}
              >
                Beyond the extraordinary:
              </p>
              <p className="fade-in" style={{ animationDelay: "2s" }}>
                <span className="text-purple-600">Original</span> and{" "}
                <span className="text-purple-600">distinctive</span>
              </p>
              <p className="fade-in" style={{ animationDelay: "2.5s" }}>
                Design X development
              </p>
            </div>
          </div>

          <div className="m-8 fade-in" style={{ animationDelay: "3s" }}>
            <span className="font-normal text-xl md:text-2xl">
              Diptanshu Bhawsar
            </span>
            <div className="flex justify-center items-center mt-8 md:mt-0">
              {/* <ScrollIcon /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
