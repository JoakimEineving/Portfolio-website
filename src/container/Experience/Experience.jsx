import { React } from "react";
import { motion } from "framer-motion";

import "./Experience.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <div className="container-experience" id="experience">
      <motion.div
        class="container"
        viewport={{ once: true }}
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "easeIn", duration: 1, delay: 0.1 }}
      >
        <h1>IT Experience</h1>
        <div class="boxes">
          <div class="box">
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="icon"
              title={"LinkedIn"}
            />
            <h2>University of Gothenburg</h2>
            <p class="text-container">2020-2023</p>
            <p class="text-container">
              Bachelor of Science - Information Systems
            </p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit
          </div>
          <div class="box">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="icon"
              title={"LinkedIn"}
            />
            <h2>HCL Technologies</h2>
            <p class="text-container">2021-Present</p>
            <p class="text-container">Mainframe Operator</p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit
          </div>
        </div>
        <motion.div className="button-container"
        viewport={{once: true}}
        initial={{ opacity: 0, x: 0}}
        whileInView={{ opacity: 1, x: 0}}
        transition={{ type: "easeIn", duration: 1, delay: .1}}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ rotate: 10, scale: 0.75 }}
            className="button"
          >
            Full Resume
          </motion.button>
          <motion.button
          
            whileHover={{ scale: 1.05 }}
            whileTap={{ rotate: -10, scale: 0.75 }}
            className="button"
            onClick={() =>
              (window.location = "mailto:joakim.eineving@gmail.com")
            }
          >
            Contact
          </motion.button>
        </motion.div>
        <div className="divider"></div>
      </motion.div>
    </div>
  );
};

export default Experience;
