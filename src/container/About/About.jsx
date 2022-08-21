import { useEffect, useState } from "react";
import AnimatedLetters from "../../components/AnimatedLetters";
import { motion } from "framer-motion";
import "./About.scss";

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

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const aboutArray = ["A", "b", "o", "u", "t", " ", "M", "e"];

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container-about">
      <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5, }}
      className="container-about"
    >
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={aboutArray}
            idx={15}
          />
          <br />
        </h1>
        <div className="box">
        <p>
          I am a freelance UI/UX designer with 4+ years working with startups
          and companies of various sizes. I specialize in designing web apps,
          mobile apps for Android and iOS. I also do photography
          work occasionally.
        </p>
        
          <div className="box-container">
            <h2>2014-2017</h2>
            <p>Hulebäcksgymnasiet</p>
            <p>SOCIAL SCIENCE (SAMHÄLLSVETENSKAP)</p>
          </div>
          <div className="box-container">
            <h2>2020-2023</h2>
            <p>University Of Gothenburg</p>
            <p>INFORMATION SYSTEMS (SYSTEMVETENSKAP)</p>
          </div>
          
        </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
