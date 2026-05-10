"use client";

import React, { useEffect, useState } from "react";

const LINES = [
  { prompt: "$ ", text: "whoami", type: "cmd" },
  { prompt: "  ", text: "Diptanshu Bhawsar — GenAI & Full-stack Engineer", type: "out" },
  { prompt: "$ ", text: "skills --ai", type: "cmd" },
  { prompt: "  ", text: "Claude · GPT-4o · RAG Pipelines · Agentic Workflows · LangChain", type: "out" },
  { prompt: "$ ", text: "status --current", type: "cmd" },
  { prompt: "✓ ", text: "Building AI-powered products at production scale", type: "success" },
];

const TerminalBlock: React.FC = () => {
  const [completedLines, setCompletedLines] = useState<typeof LINES>([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setCursor((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (lineIdx >= LINES.length) return;
    const line = LINES[lineIdx];
    if (typed.length < line.text.length) {
      const speed = line.type === "cmd" ? 60 : 22;
      const t = setTimeout(() => setTyped(line.text.slice(0, typed.length + 1)), speed);
      return () => clearTimeout(t);
    }
    const pauseMs = line.type === "cmd" ? 400 : 820;
    const t = setTimeout(() => {
      setCompletedLines((p) => [...p, line]);
      setLineIdx((p) => p + 1);
      setTyped("");
    }, pauseMs);
    return () => clearTimeout(t);
  }, [lineIdx, typed]);

  const active = LINES[lineIdx];

  const colorFor = (type: string, role: "prompt" | "text") => {
    if (role === "prompt") {
      if (type === "cmd") return "#a78bfa";
      if (type === "success") return "#34d399";
      return "rgba(255,255,255,0.38)";
    }
    if (type === "cmd") return "#e2e8f0";
    if (type === "success") return "#6ee7b7";
    return "rgba(255,255,255,0.58)";
  };

  return (
    <div
      style={{
        background: "rgba(3, 7, 18, 0.94)",
        border: "1px solid rgba(124, 58, 237, 0.28)",
        borderRadius: "1rem",
        fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', 'Courier New', monospace",
        fontSize: "0.8rem",
        overflow: "hidden",
        boxShadow: "0 0 40px rgba(124,58,237,0.12), 0 8px 32px rgba(0,0,0,0.4)",
      }}
    >
      {/* Mac-style window chrome */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.45rem",
          padding: "0.55rem 1rem",
          borderBottom: "1px solid rgba(124, 58, 237, 0.15)",
          background: "rgba(124, 58, 237, 0.07)",
        }}
      >
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57", display: "block", flexShrink: 0 }} />
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ffbd2e", display: "block", flexShrink: 0 }} />
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840", display: "block", flexShrink: 0 }} />
        <span style={{ marginLeft: "0.6rem", color: "rgba(255,255,255,0.32)", fontSize: "0.72rem", letterSpacing: "0.04em" }}>
          portfolio.sh — zsh
        </span>
      </div>

      {/* Terminal body */}
      <div style={{ padding: "1rem 1.25rem", minHeight: "9.5rem", lineHeight: 2 }}>
        {completedLines.map((line, i) => (
          <div key={i} style={{ display: "flex", gap: "0.4rem" }}>
            <span style={{ color: colorFor(line.type, "prompt"), flexShrink: 0, userSelect: "none" }}>
              {line.prompt}
            </span>
            <span style={{ color: colorFor(line.type, "text") }}>{line.text}</span>
          </div>
        ))}

        {lineIdx < LINES.length && active && (
          <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
            <span style={{ color: colorFor(active.type, "prompt"), flexShrink: 0, userSelect: "none" }}>
              {active.prompt}
            </span>
            <span style={{ color: colorFor(active.type, "text") }}>{typed}</span>
            <span
              style={{
                display: "inline-block",
                width: "0.48rem",
                height: "1.1em",
                background: "#a78bfa",
                opacity: cursor ? 1 : 0,
                marginLeft: "1px",
                verticalAlign: "middle",
                borderRadius: "1px",
                transition: "opacity 0.06s",
              }}
            />
          </div>
        )}

        {lineIdx >= LINES.length && (
          <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
            <span style={{ color: "#a78bfa", userSelect: "none" }}>$ </span>
            <span
              style={{
                display: "inline-block",
                width: "0.48rem",
                height: "1.1em",
                background: "#a78bfa",
                opacity: cursor ? 1 : 0,
                verticalAlign: "middle",
                borderRadius: "1px",
                transition: "opacity 0.06s",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalBlock;
