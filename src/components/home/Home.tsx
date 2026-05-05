"use client";

import React from "react";
import ScrollIcon from "@/components/scrollIcon/ScrollIcon";
import Canvas from "@/components/canvas";
import { useScrollContext } from "@/app/context/ScrollContext";

const Home: React.FC = () => {
    const { scrollToSection } = useScrollContext();

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Canvas />
                <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/90" />
            </div>

            <div className="min-h-screen pt-28 relative z-10 flex items-center">
                <div className="section-shell w-full">
                    <div className="glass-surface rounded-[2rem] px-6 md:px-10 py-10 md:py-14 flex flex-col gap-10">
                        <div className="flex flex-wrap items-center gap-3 fade-in">
                            <span className="pill">Senior Frontend Engineer</span>
                            <span className="text-sm text-white/70">
                                React • Next.js • TypeScript • Web Performance
                            </span>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-5 fade-in">
                            <p className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                                Building high-performance interfaces that move products forward.
                            </p>
                            <p className="text-lg md:text-2xl text-white/75 max-w-3xl">
                                I help teams ship polished SaaS and marketplace experiences with modern frontend architecture, design system discipline, and measurable product outcomes.
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3 fade-in">
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                                <p className="text-xs uppercase tracking-[0.24em] text-white/50">Experience</p>
                                <p className="mt-3 text-3xl font-bold text-white">4+ years</p>
                                <p className="text-sm text-white/60 mt-1">Developing customer-facing digital products.</p>
                            </div>
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                                <p className="text-xs uppercase tracking-[0.24em] text-white/50">Impact</p>
                                <p className="mt-3 text-3xl font-bold text-white">50+</p>
                                <p className="text-sm text-white/60 mt-1">UI screens shipped for enterprise and consumer apps.</p>
                            </div>
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                                <p className="text-xs uppercase tracking-[0.24em] text-white/50">Focus</p>
                                <p className="mt-3 text-3xl font-bold text-white">Performance</p>
                                <p className="text-sm text-white/60 mt-1">Fast, resilient, accessible frontend journeys.</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between fade-in">
                            <button
                                onClick={scrollToSection}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-purple-900/30 transition-transform duration-200 hover:scale-[1.02]"
                            >
                                Explore featured work
                            </button>
                            <div className="flex items-center gap-4 text-white/80">
                                <span className="h-12 w-12 rounded-full bg-white/10 grid place-items-center text-lg font-semibold">
                                    DB
                                </span>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-white">Diptanshu Bhawsar</span>
                                    <span className="text-sm text-white/70">Design-driven frontend for business growth</span>
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
        </section>
    );
};

export default Home;

