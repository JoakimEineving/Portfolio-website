import { motion } from "framer-motion";
import React from "react";



const mySkills = {
    

  softwareSkills: [
    {
      skill: "HTML",
      fontAwesome: "fab fa-html5"
    },
    {
      skill: "CSS",
      fontAwesome: "fab fa-css3-alt"
    },
    {
      skill: "Sass",
      fontAwesome: "fab fa-sass"
    },
    {
      skill: "JavaScript",
      fontAwesome: "fab fa-js"
    },
    {
      skill: "React",
      fontAwesome: "fab fa-react"
    },
    {
      skill: "Python",
      fontAwesome: "fab fa-python"
    },
    {
      skill: "Git",
      fontAwesome: "fab fa-git-alt"
    },
    {
      skill: "SQL",
      fontAwesome: "fas fa-database"
    },
    {
      skill: "Figma",
      fontAwesome: "fab fa-figma"
    },
    {
      skill: "Firebase",
      fontAwesome: "fas fa-fire"
    }
  ],
};


export default function SoftwareSkill() {
  return (

    <div >
        <ul className="developer-icons">
          {mySkills.softwareSkills.map((skills, i) => {
            return (
              <motion.li
              whileHover={{ scale: 1.1 }}
                key={i}
                className="skill"
                name={skills.skill}
              >
                <i className={skills.fontAwesome}></i>
                <p>{skills.skill}</p>
              </motion.li>
            );
          })}
        </ul>
      </div>

  );
}
