import { React, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Experience.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const animation = useAnimation();

  useEffect(() => {
    console.log("in view", inView);
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",

          damping: 20,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: "15vh",
      });
    }
  }, [inView]);
  return (
    <div ref={ref} className="container-experience" id="experience">
      <motion.div class="container" animate={animation}>
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
        <div className="button-container">
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
        </div>
        <div className="divider"></div>
      </motion.div>
    </div>
  );
};

export default Experience;
