import { React } from "react";
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
            Hi, I'm a 24-year-old from Gothenburg, Sweden. I recently finished
            my Bachelor's degree in Information Systems at the University of
            Gothenburg and have started working as an Automation Consultant. I
            enjoy programming and have a general interest in emerging technology
            and IT. I find it rewarding to apply technical skills to solve
            problems, whether they're big or small.
          </p>
          <p className="title-text">
            I'm not currently looking for a new job, but I always appreciate
            connecting with people who share similar interests. This website is
            a space where I share some of the programming projects I've worked
            on and other tech-related activities. Feel free to take a look
            around and get in touch if you'd like to chat or collaborate on
            something interesting. Below, you'll find some of the technologies
            and projects I've worked with.
          </p>
        </motion.div>
      </div>
    </>
  );
};
export default About;
