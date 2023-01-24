import { React, useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./About.scss";

const About = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2023-06-01`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        and: " ",
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {" "}
        {timeLeft[interval]} {interval}
      </span>
    );
  });
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
            I'm a 24-year-old student from Gothenburg, Sweden. I'm currently
            studying for a Bachelor's degree in Information Systems at the
            University of Gothenburg and graduating in
            {timerComponents.length ? timerComponents : <span></span>}. Besides
            studying I am also working as a Mainframe Operations Analyst at HCL
            Technologies and occasionally I do freelance photography.
          </p>
          <p className="title-text">
            I'm passionate about programming, new technology and IT in general.
            I'm always looking for new challenges, so if you have a project or a
            job opportunity that you want to discuss with me (summer/fall 2023), please
            don't hesitate to contact me. I made this website as a complement to
            my CV so feel free to also check that out. Below are some of the
            technologies and some projects of choice that I've worked with.
          </p>
        </motion.div>
      </div>
    </>
  );
};
export default About;
