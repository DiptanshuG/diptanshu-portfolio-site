import React from "react";

import bootstrap from "~/logos/bootstrap.png";
import d3 from "~/logos/d3.png";
import firebase from "~/logos/firebase.png";
import github from "~/logos/github.png";
import gitlab from "~/logos/gitlab.png";
import html from "~/logos/html5.png";
import css from "~/logos/css3.png";
import js from "~/logos/javascript.png";
import ts from "~/logos/typescript.png";
import node from "~/logos/nodejs.png";
import npm from "~/logos/npm.png";
import php from "~/logos/php.png";
import semantic from "~/logos/semantic-ui.png";
import redux from "~/logos/redux.png";
import reactLogo from "~/logos/react.png";
import jquery from "~/logos/jquery.png";
import jira from "~/logos/jira.png";
import bitbucket from "~/logos/bitbucket (1).png";
import "./Skills.css";
import Image from "next/image";

const technologies = [
  { icon: html, title: "HTML" },
  { icon: css, title: "CSS" },
  { icon: js, title: "JavaScript" },
  { icon: ts, title: "TypeScript" },
  { icon: bootstrap, title: "Bootstrap" },
  { icon: d3, title: "D3.js" },
  { icon: firebase, title: "Firebase" },
  { icon: github, title: "GitHub" },
  { icon: gitlab, title: "GitLab" },
  { icon: node, title: "Node.js" },
  { icon: npm, title: "npm" },
  { icon: php, title: "PHP" },
  { icon: semantic, title: "Semantic UI" },
  { icon: redux, title: "Redux" },
  { icon: reactLogo, title: "React" },
  { icon: jquery, title: "jQuery" },
  { icon: jira, title: "Jira" },
  { icon: bitbucket, title: "Bitbucket" },
];

const Skills: React.FC = () => {
  return (
    <div
      className="skills py-12 bg-[rgb(9,4,22)] "
      style={{
        background:
          "linear-gradient(135deg, rgba(3,1,8,1) 0%, rgba(5,2,11,1) 25%, rgba(9,4,22,1) 100%)",
      }}
    >
        <h2 className="text-4xl my-6 font-bold mb-8 text-white text-center font-extrabold">
        My Tech Stack</h2>
      <div className="flex flex-wrap justify-center p-8 ">
        {/* Map over technologies array */}
        {technologies.map((tech, index) => (
          <div key={index} className="skill mr-6 mb-6 delay-100 mx-4 md:px-4">
            <div className="tech-icon p-8">
              <Image
                src={tech.icon}
                alt={`${tech.title} Logo`}
                width={64}
                height={64}
              />

              <p className="text-center tech-title">{tech.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
