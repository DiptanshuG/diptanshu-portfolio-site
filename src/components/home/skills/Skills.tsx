import React from "react";

import bootstrap from "~/logos/bootstrap.png";
import d3 from "~/logos/d3.png";
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
import "./Skills.css";
import Image from "next/image";

const skillSections = [
  {
    title: "Core frontend",
    items: [
      { icon: html, title: "HTML" },
      { icon: css, title: "CSS" },
      { icon: js, title: "JavaScript" },
      { icon: ts, title: "TypeScript" },
      { icon: reactLogo, title: "React" },
    ],
  },
  {
    title: "Modern frameworks",
    items: [
      { icon: bootstrap, title: "Bootstrap" },
      { icon: redux, title: "Redux" },
      { icon: d3, title: "D3.js" },
      { icon: node, title: "Node.js" },
      { icon: semantic, title: "Semantic UI" },
    ],
  },
  {
    title: "Tools & delivery",
    items: [
      { icon: github, title: "GitHub" },
      { icon: gitlab, title: "GitLab" },
      { icon: node, title: "Node.js" },
      { icon: npm, title: "npm" },
      { icon: jira, title: "Jira" },
    ],
  },
];

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

        <div className="grid gap-6 lg:grid-cols-3">
          {skillSections.map((section) => (
            <div key={section.title} className="rounded-3xl border border-theme bg-[rgba(var(--foreground-rgb),0.06)] p-6">
              <h3 className="text-xl font-semibold text-theme mb-5">{section.title}</h3>
              <div className="grid gap-4">
                {section.items.map((tech) => (
                  <div key={tech.title} className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-3xl bg-[rgba(var(--foreground-rgb),0.06)] grid place-items-center">
                      <Image src={tech.icon} alt={tech.title} width={32} height={32} />
                    </div>
                    <p className="text-theme-muted">{tech.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
