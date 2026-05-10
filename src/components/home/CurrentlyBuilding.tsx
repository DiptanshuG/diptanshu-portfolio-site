"use client";

import React, { useEffect, useState } from "react";

const builds = [
  {
    name: "AI Portfolio Assistant",
    desc: "A RAG-powered chatbot that answers anything about me — built on Claude API + Vector DB",
    progress: 72,
    status: "building",
    stack: ["Claude API", "RAG", "Next.js", "Pinecone"],
  },
  {
    name: "Agentic Workflow Engine",
    desc: "Multi-step LLM orchestration for automating product operations and data pipelines",
    progress: 48,
    status: "building",
    stack: ["LangChain", "GPT-4o", "Python", "FastAPI"],
  },
  {
    name: "Real-time Voice Agent",
    desc: "Exploring WebRTC-powered conversational AI with Whisper STT and ElevenLabs TTS",
    progress: 22,
    status: "research",
    stack: ["WebRTC", "Whisper", "ElevenLabs", "Node.js"],
  },
];

const statusConfig = {
  building: { label: "BUILDING", bg: "rgba(52,211,153,0.14)", border: "rgba(52,211,153,0.35)", dot: "#34d399", text: "#6ee7b7" },
  research: { label: "RESEARCHING", bg: "rgba(251,191,36,0.12)", border: "rgba(251,191,36,0.3)", dot: "#fbbf24", text: "#fde68a" },
};

const LiveDot: React.FC<{ color: string }> = ({ color }) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setVisible((v) => !v), 900);
    return () => clearInterval(t);
  }, []);
  return (
    <span
      style={{
        display: "inline-block",
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: color,
        opacity: visible ? 1 : 0.25,
        transition: "opacity 0.4s ease",
        flexShrink: 0,
      }}
    />
  );
};

const CurrentlyBuilding: React.FC = () => {
  return (
    <section className="py-16 bg-surface">
      <div className="section-shell">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <LiveDot color="#34d399" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#34d399]">Live — Active Development</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-theme">Currently Building</h2>
          </div>
          <p className="text-theme-muted max-w-xs text-sm leading-relaxed">
            Real work happening right now — AI-first projects in progress.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-5">
          {builds.map((build, i) => {
            const cfg = statusConfig[build.status as keyof typeof statusConfig];
            return (
              <div
                key={i}
                className="rounded-3xl border p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-5"
                style={{
                  borderColor: "rgba(var(--border-rgb), 0.16)",
                  background: "rgba(var(--foreground-rgb), 0.04)",
                }}
              >
                {/* Status badge */}
                <div className="flex-shrink-0">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold tracking-widest"
                    style={{ background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.text }}
                  >
                    <LiveDot color={cfg.dot} />
                    {cfg.label}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-theme text-base mb-1">{build.name}</p>
                  <p className="text-theme-muted text-sm leading-relaxed">{build.desc}</p>

                  {/* Progress bar */}
                  <div className="mt-3 flex items-center gap-3">
                    <div
                      className="flex-1 h-1.5 rounded-full overflow-hidden"
                      style={{ background: "rgba(var(--foreground-rgb),0.1)" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${build.progress}%`,
                          background: `linear-gradient(90deg, ${cfg.dot}, ${cfg.dot}88)`,
                          transition: "width 1.2s ease",
                        }}
                      />
                    </div>
                    <span className="text-xs text-theme-muted font-mono flex-shrink-0">{build.progress}%</span>
                  </div>
                </div>

                {/* Stack badges */}
                <div className="flex flex-wrap gap-2 md:max-w-[220px] md:justify-end">
                  {build.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                      style={{
                        background: "rgba(124,58,237,0.14)",
                        border: "1px solid rgba(124,58,237,0.3)",
                        color: "#c4b5fd",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-6 text-xs text-theme-muted text-center font-mono">
          // updated manually — these are real active builds
        </p>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
