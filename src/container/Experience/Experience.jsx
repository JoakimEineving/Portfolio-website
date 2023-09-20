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
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const experiences = [
    {
      date: "2023 - Present",
      icon: faBriefcase,
      title: "Automation Consultant",
      subtitle: "Bots & Friends",
      description:
        "As an Automation Consultant, I specialize in optimizing business processes by developing automation solutions. My day-to-day responsibilities center around development — coding, debugging, and piecing together different components to create a cohesive automation system.",
    },
    {
      date: "2021 - 06/2023",
      icon: faBriefcase,
      title: "Mainframe Operations Analyst",
      subtitle: "HCL Technologies",
      description:
        "AHS Mainframe Core Operations is responsible for monitoring and operation of a large number of Mainframe z/OS machines worldwide. My work involved monitoring the environments, taking care of infrastructure problems, correct batch and application-abends and having close contact with engineers all over the world.",
    },
    {
      date: "03/2023 - 06/2023",
      icon: faGraduationCap,
      title: "Bachelor Thesis",
      subtitle: "TietoEvry",
      description:
        "The thesis was conducted in collaboration with TietoEvry where we developed a course recommendation system for a university.",
    },
    {
      date: "08/2020 - 06/2023",
      icon: faGraduationCap,
      title: "Bachelor of Science - Information Systems",
      subtitle: "University of Gothenburg",
      description:
        "The education included among other topics programming, databases, human-computer interaction, artificial intelligence and information technology from an organizational and management perspective. Knowledge about digitalisation, IT systems as strategic support and management of business changes linked to IT.",
    },
  ];
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
        <VerticalTimeline lineColor={"var(--third-color)"}>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                border: "1px solid var(--third-color)",
                background: "var(--background-color)",
                color: "#fff",
                borderColor: "var(--third-color)",
                boxShadow: "none",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  var(--third-color)",
              }}
              date={exp.date}
              iconStyle={{
                background: "var(--third-color)",
                color: "var(--background-color)",
                border: "1px solid var(--third-color)",
              }}
              icon={
                <FontAwesomeIcon
                  icon={exp.icon}
                  className="icon"
                  title={"LinkedIn"}
                />
              }
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "var(--secondary-color)" }}
              >
                {exp.title}
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ color: "var(--third-color)" }}
              >
                {exp.subtitle}
              </h4>
              <p style={{ color: "var(--third-color)" }}>{exp.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
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
                "https://drive.google.com/file/d/1WAs18Xd9xZ9H68PrQDCemSESXz2juhUX/view?usp=sharing",
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
