import { React, useEffect, useState } from "react";
import { motion } from "framer-motion";
import './Work.scss';

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


const Testimonial = () => {
  return (
    <>
      <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="container-timeline"
        >

        <div class="timeline-block timeline-block-left">
          <div class="marker"></div>
          <div class="timeline-content">
            <h3>💻HCL Technologies</h3>
            <span>Mainframe Operations Analyst 2021 - Present</span>
            <p> AHS Mainframe Core Operations is responsible for monitoring and operation of a large number of Mainframe / z / OS machines worldwide. 
              We monitor the environments, take care of infrastructure problems, correct batch and application-abends and have close contact with technicians all over the world.</p>
          </div>
        </div>

        <div class="timeline-block timeline-block-right">
          <div class="marker"></div>
          <div class="timeline-content">
            <h3>🎓University Of Gothenburg</h3>
            <span>Bachelor of Science - Information Systems 2020-2023</span>
          </div>
        </div>

        <div class="timeline-block timeline-block-left">
          <div class="marker"></div>
          <div class="timeline-content">
            <h3>ICA Kvantum Landvetter</h3>
            <span>Shop Assistant 2017-2021</span>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p> */}
          </div>
        </div>

        <div class="timeline-block timeline-block-right">
          <div class="marker"></div>
          <div class="timeline-content">
            <h3>Liseberg</h3>
            <span>Warehouse Worker 2017-2018</span>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p> */}
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Testimonial