import { React, useEffect, useState } from "react";
import AnimatedLetters from "../../components/AnimatedLetters";
import { images } from '../../constants';
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
        
      </div>
    </>
  );
};

export default Skills;
