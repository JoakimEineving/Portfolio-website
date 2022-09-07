import { React } from "react";
import "./Experience.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <div className="container-experience">
      <div class="container">
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
        <button class="button">Full Resume</button>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default Experience;
