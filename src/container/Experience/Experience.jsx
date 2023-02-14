import { React } from "react";
import { motion } from "framer-motion";
import "./Experience.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import ReusableButton from "../../components/Buttons/ReusableButton";

const Experience = () => {
  return (
    <div className="container-experience" id="experience">
      <motion.div
        className="container"
        viewport={{ once: true }}
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "easeIn", duration: 1, delay: 0.1 }}
      >
        <h1>IT Experience</h1>
        <div className="boxes">
          <div className="box">
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="icon"
              title={"LinkedIn"}
            />
            <h2>University of Gothenburg</h2>
            <p className="text-container">2020-2023</p>
            <p className="text-container">
              Bachelor of Science - Information Systems
            </p>
            The education includes among other things programming, databases,
            human-computer interaction, artificial intelligence and information
            technology from an organizational and management perspective.
            Knowledge about digitalisation, IT systems as strategic support and
            management of business changes linked to IT.
          </div>
          <div className="box">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="icon"
              title={"LinkedIn"}
            />
            <h2>HCL Technologies</h2>
            <p className="text-container">2021-Present</p>
            <p className="text-container">Mainframe Operations Analyst</p>
            AHS Mainframe Core Operations is responsible for monitoring and
            operation of a large number of Mainframe z/OS machines worldwide. My
            work involves monitoring the environments, taking care of
            infrastructure problems, correct batch and application-abends and
            having close contact with engineers all over the world.
          </div>
        </div>
        <motion.div
          className="button-container"
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "easeIn", duration: 1, delay: 0.1 }}
        >
          <ReusableButton
            className="button"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1-UROOEy987PduWeYkVoZ7xLdKN4do6KL/view?usp=sharing",
                "_blank"
              )
            }
          >
            Full CV
          </ReusableButton>
          <ReusableButton
            className="button"
            onClick={() =>
              (window.location = "mailto:joakim.eineving@gmail.com")
            }
          >
            Contact
          </ReusableButton>
        </motion.div>
        <div className="divider-experience"></div>
      </motion.div>
    </div>
  );
};

export default Experience;
