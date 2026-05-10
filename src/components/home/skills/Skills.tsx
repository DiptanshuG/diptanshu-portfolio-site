import React from "react";
import Image, { StaticImageData } from "next/image";

// ── Existing logo images ──────────────────────────────────────────────────────
import bootstrap from "~/logos/bootstrap.png";
import firebase from "~/logos/firebase.png";
import github from "~/logos/github.png";
import gitlab from "~/logos/gitlab.png";
import html from "~/logos/html5.png";
import css from "~/logos/css3.png";
import js from "~/logos/javascript.png";
import ts from "~/logos/typescript.png";
import node from "~/logos/nodejs.png";
import npm from "~/logos/npm.png";
import redux from "~/logos/redux.png";
import reactLogo from "~/logos/react.png";
import jira from "~/logos/jira.png";
import semantic from "~/logos/semantic-ui.png";

// ── React-icons ───────────────────────────────────────────────────────────────
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiMui,
  SiIonic,
  SiGo,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGithubactions,
  SiApollographql,
  SiOpenai,
  SiGmail,
  SiGooglecalendar,
  SiTwilio,
  SiGit,
  SiBitbucket,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

import "./Skills.css";

// ── Types ─────────────────────────────────────────────────────────────────────
type ReactIconComp = (props: { size?: number; color?: string }) => React.ReactElement;

type SkillItem =
  | { kind: "image"; src: StaticImageData; title: string }
  | { kind: "icon"; Icon: ReactIconComp; color?: string; title: string }
  | { kind: "text"; title: string };

interface SkillSection {
  title: string;
  items: SkillItem[];
}

// ── Skill data (6 sections) ───────────────────────────────────────────────────
const skillSections: SkillSection[] = [
  {
    title: "Frontend Core",
    items: [
      { kind: "image", src: html, title: "HTML" },
      { kind: "image", src: css, title: "CSS" },
      { kind: "image", src: js, title: "JavaScript" },
      { kind: "image", src: ts, title: "TypeScript" },
      { kind: "image", src: reactLogo, title: "React" },
      { kind: "icon", Icon: SiNextdotjs, title: "Next.js" },
      { kind: "icon", Icon: SiTailwindcss, color: "#06B6D4", title: "Tailwind CSS" },
    ],
  },
  {
    title: "UI Libraries & Mobile",
    items: [
      { kind: "icon", Icon: SiMui, color: "#007FFF", title: "MUI" },
      { kind: "text", title: "Daisy UI" },
      { kind: "image", src: bootstrap, title: "Bootstrap" },
      { kind: "image", src: semantic, title: "Semantic UI" },
      { kind: "icon", Icon: SiReact, color: "#61DAFB", title: "React Native" },
      { kind: "icon", Icon: SiIonic, color: "#3880FF", title: "Ionic" },
    ],
  },
  {
    title: "Backend & Database",
    items: [
      { kind: "image", src: node, title: "Node.js" },
      { kind: "icon", Icon: SiExpress, title: "Express" },
      { kind: "icon", Icon: SiGo, color: "#00ADD8", title: "Golang" },
      { kind: "icon", Icon: SiMongodb, color: "#47A248", title: "MongoDB" },
      { kind: "icon", Icon: SiPostgresql, color: "#4169E1", title: "PostgreSQL" },
      { kind: "image", src: firebase, title: "Firebase" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { kind: "icon", Icon: FaAws, color: "#FF9900", title: "AWS" },
      { kind: "icon", Icon: SiDocker, color: "#2496ED", title: "Docker" },
      { kind: "icon", Icon: SiGithubactions, color: "#2088FF", title: "GitHub Actions" },
      { kind: "text", title: "AWS ECS / ECR" },
      { kind: "image", src: redux, title: "Redux Toolkit" },
      { kind: "icon", Icon: SiApollographql, color: "#311C87", title: "Apollo GraphQL" },
    ],
  },
  {
    title: "APIs & Integrations",
    items: [
      { kind: "icon", Icon: SiOpenai, title: "OpenAI APIs" },
      { kind: "icon", Icon: SiGmail, color: "#EA4335", title: "Gmail API" },
      { kind: "icon", Icon: SiGooglecalendar, color: "#4285F4", title: "Google Calendar API" },
      { kind: "icon", Icon: SiTwilio, color: "#F22F46", title: "Twilio" },
      { kind: "text", title: "Trigger.dev" },
      { kind: "text", title: "Webhooks" },
      { kind: "text", title: "Clearout" },
    ],
  },
  {
    title: "Tools & Collaboration",
    items: [
      { kind: "icon", Icon: SiGit, color: "#F05032", title: "Git" },
      { kind: "image", src: github, title: "GitHub" },
      { kind: "image", src: gitlab, title: "GitLab" },
      { kind: "icon", Icon: SiBitbucket, color: "#0052CC", title: "Bitbucket" },
      { kind: "image", src: npm, title: "npm" },
      { kind: "image", src: jira, title: "Jira" },
      { kind: "text", title: "Scrum" },
      { kind: "text", title: "Kanban" },
    ],
  },
];

// ── AI learning path data (unchanged) ────────────────────────────────────────
type SkillStatus = "learning" | "exploring";

interface AiItem {
  name: string;
  status: SkillStatus;
}

const STATUS_STYLE: Record<SkillStatus, { label: string; bg: string; border: string; color: string }> = {
  learning: {
    label: "Learning",
    bg: "rgba(251,191,36,0.15)",
    border: "rgba(251,191,36,0.38)",
    color: "#fde68a",
  },
  exploring: {
    label: "Exploring",
    bg: "rgba(56,189,248,0.13)",
    border: "rgba(56,189,248,0.32)",
    color: "#7dd3fc",
  },
};

const aiCategories: { label: string; color: string; border: string; text: string; items: AiItem[] }[] = [
  {
    label: "LLMs",
    color: "rgba(167,139,250,0.18)",
    border: "rgba(167,139,250,0.35)",
    text: "#c4b5fd",
    items: [
      { name: "Claude (Anthropic)", status: "learning" },
      { name: "GPT-4o", status: "learning" },
      { name: "Gemini 1.5", status: "exploring" },
      { name: "Llama 3", status: "exploring" },
    ],
  },
  {
    label: "Frameworks",
    color: "rgba(167,139,250,0.12)",
    border: "rgba(167,139,250,0.28)",
    text: "#c4b5fd",
    items: [
      { name: "LangChain", status: "learning" },
      { name: "LlamaIndex", status: "learning" },
      { name: "Vercel AI SDK", status: "learning" },
      { name: "CrewAI", status: "exploring" },
    ],
  },
  {
    label: "Patterns",
    color: "rgba(52,211,153,0.12)",
    border: "rgba(52,211,153,0.3)",
    text: "#6ee7b7",
    items: [
      { name: "RAG Pipelines", status: "learning" },
      { name: "Tool Use / Function Calling", status: "learning" },
      { name: "Agentic Workflows", status: "learning" },
      { name: "Prompt Engineering", status: "learning" },
    ],
  },
  {
    label: "Infrastructure",
    color: "rgba(251,146,60,0.12)",
    border: "rgba(251,146,60,0.28)",
    text: "#fdba74",
    items: [
      { name: "Vector DBs", status: "learning" },
      { name: "Embeddings", status: "learning" },
      { name: "Pinecone", status: "exploring" },
      { name: "OpenAI / Claude APIs", status: "learning" },
    ],
  },
];

// ── Sub-component: item icon ──────────────────────────────────────────────────
const ItemIcon = ({ item }: { item: SkillItem }) => {
  if (item.kind === "image") {
    return <Image src={item.src} alt={item.title} width={28} height={28} className="object-contain" />;
  }
  if (item.kind === "icon") {
    const IconComp = item.Icon;
    return <IconComp size={26} color={item.color} />;
  }
  // Text badge — first word, max 3 chars
  const abbr = item.title.split(/[\s/]/)[0].slice(0, 3).toUpperCase();
  return (
    <span
      style={{
        fontSize: "9px",
        fontWeight: 800,
        letterSpacing: "0.06em",
        color: "var(--accent)",
        lineHeight: 1,
        textAlign: "center",
      }}
    >
      {abbr}
    </span>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills py-16 bg-surface">
      <div className="section-shell">

        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[rgba(var(--accent-rgb),0.9)] mb-2">
            Core capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-theme">
            A strong stack for modern product delivery.
          </h2>
        </div>

        {/* 6-section grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillSections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-theme bg-[rgba(var(--foreground-rgb),0.06)] p-6"
            >
              <h3 className="text-xl font-semibold text-theme mb-5">{section.title}</h3>
              <div className="grid gap-3">
                {section.items.map((item) => (
                  <div key={item.title} className="flex items-center gap-4">
                    <div className="h-11 w-11 rounded-2xl bg-[rgba(var(--foreground-rgb),0.06)] grid place-items-center flex-shrink-0">
                      <ItemIcon item={item} />
                    </div>
                    <p className="text-theme-muted text-sm">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI & GenAI learning path */}
        <div
          className="mt-8 rounded-3xl border p-6 md:p-8"
          style={{
            borderColor: "rgba(124,58,237,0.28)",
            background: "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(56,189,248,0.05) 100%)",
          }}
        >
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="pill text-sm">AI & GenAI</span>
                <span className="text-xs text-theme-muted">Active learning path</span>
              </div>
              <p className="text-sm text-theme-muted max-w-lg">
                The GenAI market is moving fast. I&apos;ve mapped my learning toward the tools and patterns that matter
                most — these are technologies I&apos;m actively studying and building with to grow into full GenAI
                product engineering.
              </p>
            </div>

            {/* Legend */}
            <div className="flex flex-col gap-1.5 flex-shrink-0">
              <p className="text-xs text-theme-muted uppercase tracking-widest mb-1">Legend</p>
              {(Object.entries(STATUS_STYLE) as [SkillStatus, (typeof STATUS_STYLE)[SkillStatus]][]).map(([key, s]) => (
                <span
                  key={key}
                  className={`ai-legend-badge ai-status-${key} inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold w-fit`}
                  style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.color }}
                >
                  <span
                    className="ai-legend-dot"
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: s.color,
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  {s.label}
                </span>
              ))}
            </div>
          </div>

          {/* Skills grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aiCategories.map((cat) => {
              const catKey = cat.label.toLowerCase();
              return (
                <div key={cat.label} className="flex flex-col gap-3">
                  <p
                    className="ai-cat-header text-xs font-semibold uppercase tracking-[0.2em]"
                    data-cat={catKey}
                    style={{ color: cat.text }}
                  >
                    {cat.label}
                  </p>
                  <div className="flex flex-col gap-2">
                    {cat.items.map((item) => {
                      const s = STATUS_STYLE[item.status];
                      return (
                        <div
                          key={item.name}
                          className="ai-item-card flex items-center justify-between gap-2 rounded-full px-3 py-1.5"
                          data-cat={catKey}
                          style={{ background: cat.color, border: `1px solid ${cat.border}` }}
                        >
                          <span
                            className="ai-item-name text-xs font-medium truncate"
                            data-cat={catKey}
                            style={{ color: cat.text }}
                          >
                            {item.name}
                          </span>
                          <span
                            className={`ai-status-badge ai-status-${item.status} flex-shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold`}
                            style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.color }}
                          >
                            {s.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
