import { React, useEffect, useState } from "react";
import AnimatedLetters from "../../components/AnimatedLetters";
import LogoPython from "../../assets/python-icon.png";
import LogoFlutter from "../../assets/flutter-icon.png";
import { motion } from "framer-motion";
import "./Skills.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const skillsArray = ["S", "k", "i", "l", "l", "s"];

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container-skills">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="container-skills"
        >
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>Some of the tools and programming languages i've worked with.</p>
        </motion.div>
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="container-skills"
        >
          <div id="skills-logo">
            <div className="logo1">
              <img src={LogoPython} />
            </div>
            <div className="logo2">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="logo3">
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className="logo4">
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="logo5">
              <img src={LogoFlutter} />
            </div>
            <div className="logo6">
              <FontAwesomeIcon icon={faGitAlt} />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
