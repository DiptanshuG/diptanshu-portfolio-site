"use client";

import React from "react";
import ScrollIcon from "@/components/scrollIcon/ScrollIcon";
import Canvas from "@/components/canvas";
import { useScrollContext } from "@/app/context/ScrollContext";

const Home: React.FC = () => {
    const { scrollToSection } = useScrollContext();

    return (
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Canvas />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
            </div>

            <div className="min-h-screen pt-28 relative z-10 flex items-center">
                <div className="section-shell w-full">
                    <div className="glass-surface rounded-3xl px-6 md:px-10 py-10 md:py-14 flex flex-col gap-10">
                        <div className="flex flex-wrap gap-3 items-center fade-in">
                            <span className="pill">Frontend Expert · Full-Stack Builder</span>
                            <span className="text-sm text-white/70">
                                React • Next.js • TypeScript • Design Systems
                            </span>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-5 fade-in">
                            <p className="text-3xl md:text-6xl font-extrabold tracking-tight text-white">
                                Beyond the ordinary:
                            </p>
                            <p className="text-3xl md:text-6xl font-extrabold tracking-tight text-white">
                                <span className="text-purple-400">Original</span> and{" "}
                                <span className="text-purple-400">distinctive</span> product
                                experiences
                            </p>
                            <p className="text-lg md:text-xl text-white/80 max-w-3xl">
                                I design and ship performant interfaces that feel intentional,
                                consistent, and memorable — from prototypes to production.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center gap-6 fade-in">
                            <button
                                onClick={scrollToSection}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-purple-900/40 transition-transform duration-200 hover:scale-[1.02]"
                            >
                                View featured work
                            </button>
                            <div className="flex items-center gap-4 text-white/80">
                                <span className="h-10 w-10 rounded-full bg-white/10 grid place-items-center text-lg font-semibold">
                                    DB
                                </span>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-white">
                                        Diptanshu Bhawsar
                                    </span>
                                    <span className="text-sm text-white/70">
                                        Building immersive UI for the web
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-start md:justify-end fade-in">
                            <div onClick={scrollToSection}>
                                <ScrollIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

