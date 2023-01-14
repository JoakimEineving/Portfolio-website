import "./Slider.scss";
import "swiper/css/bundle";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import { Pagination } from "swiper";
import { mySkills } from "../../components/SoftwareSkill";
import { RiFlutterFill } from "react-icons/ri";



export default function Slider() {
  let project1 = []
  let project2 = []
  let project3 = []
  //0=html, 1=css, 2=sass, 3=js, 4=react, 5=python, 6=git, 7=sql, 8=figma, 9=firebase
  for (let i = 0; i < mySkills.softwareSkills.length; i++) {
    if (i === 0 || i === 1 || i === 3 || i === 6)
      project1.push(mySkills.softwareSkills[i])
    if (i === 4 || i === 3 || i === 0 || i === 2)
      project2.push(mySkills.softwareSkills[i])
    if (i === 0 || i === 1 || i === 3)
      project3.push(mySkills.softwareSkills[i])

  }

  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, x: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "easeIn", duration: 2, delay: 0.1 }}
      className="container-slider">
      <h1>Projects</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>

          <ul className="project-icons">
            {project1.map((skills, i) => {
              return (
                <motion.li
                  viewport={{ once: true }}
                  initial={{ opacity: 0.1 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ type: "easein", duration: 1, delay: i * 0.15 }}
                  key={i}
                  className="skill"
                  name={skills.skill}
                >
                  <i className={skills.fontAwesome}></i>

                </motion.li>
              );
            })}
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <ul className="project-icons">
            {project2.map((skills, i) => {
              return (
                <motion.li
                  viewport={{ once: true }}
                  initial={{ opacity: 0.1 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ type: "easein", duration: 1, delay: i * 0.15 }}
                  key={i}
                  className="skill"
                  name={skills.skill}
                >
                  <i className={skills.fontAwesome}></i>

                </motion.li>
              );
            })}
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-body">
            <h2>Recipe Generator App</h2>
            {/* <img src="https://appradar.com/wp-content/uploads/wpe-uploads/Screenshots-in-App-Store-Search-iOS11-iOS10-1-2.jpg"></img> */}
            <ul className="project-icons">
              <RiFlutterFill className="flutter" />
              {project3.map((skills, i) => {
                return (
                  <motion.li
                    viewport={{ once: true }}
                    initial={{ opacity: 0.1 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ type: "easein", duration: 1, delay: i * 0.15 }}
                    key={i}
                    className="skill"
                    name={skills.skill}
                  >
                    <i className={skills.fontAwesome}></i>
                  </motion.li>
                );
              })}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.75 }}
              className="project-button"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1nmTHyosEO99c-fRQozXfHEpaAZj2AIhL/view?usp=share_link",
                  "_blank"
                )
              }
            >
              Show on Github
            </motion.button>
          </div>

        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}
