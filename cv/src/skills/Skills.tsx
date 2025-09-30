import React from "react";
import "./Skills.scss";

const skills = [
  "HTML5",
  "CSS",
  "JavaScrips",
  "TypeScript",
  "React with Redux",
  "NodeJS",
  "Git",
  "CSS-preprocessors (Sass)",
  "Angular (basic)",
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <h3> Skills</h3>
      <ul>
        {skills.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
