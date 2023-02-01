import { React} from "react";
import { motion } from "framer-motion";

import "./About.scss";

const About = () => {
  return (
    <>
      <div className="container-about" id="about">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "easeIn", duration: 1, delay: 0.1 }}
          className="title"
        >
          <h1>About Me</h1>
          <p className="title-text">
            As a 24-year-old student from Gothenburg, Sweden, I am pursuing a
            Bachelor's degree in Information Systems at the University of
            Gothenburg. In addition to my studies, I am also working as a
            Mainframe Operations Analyst at HCL Technologies and occasionally
            take on freelance photography projects. 
          </p>
          <p className="title-text">
            My passion lies in programming, new technology, and IT in general. I
            am always seeking new challenges, and if you have a project or job
            opportunity that you would like to discuss with me (for summer/fall
            2023), please don't hesitate to reach out. This website serves as a
            complement to my CV, so feel free to check that out as well. Below, you'll find
            a list of some technologies and projects I've worked with.
          </p>
        </motion.div>
      </div>
    </>
  );
};
export default About;
