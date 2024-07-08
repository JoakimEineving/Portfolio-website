import "./Slider.scss";
import "swiper/css/bundle";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { Pagination } from "swiper";
import { mySkills } from "../../components/SoftwareSkill";

import SwiperSlideContent from "./SwiperSlideContent";

export default function Slider() {
  let project1 = [];
  let project2 = [];
  let project3 = [];
  let project4 = [];
 
  // 0=javascript, 1=python, 2=react, 3=html, 4=css, 5=sass, 6=git, 7=databases, 8= node.js, 9=firebase 10 = git
  for (let i = 0; i < mySkills.softwareSkills.length; i++) {
    if (i === 0 || i === 3 || i === 4 || i === 6 || i === 7 || i === 9)
      project1.push(mySkills.softwareSkills[i]);
    if (i === 5 || i === 0 || i === 2 || i === 9)
      project2.push(mySkills.softwareSkills[i]);
    if (i === 9 || i === 6 || i === 8)
      project3.push(mySkills.softwareSkills[i]);
    if (i === 0 || i === 2 || i === 7 || i === 6|| i === 9)
      project4.push(mySkills.softwareSkills[i]);
  }

  return (
    <div className="container-projects" id="projects">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "easeIn", duration: 2, delay: 0.1 }}
        className="container-slider"
      >
        <h1>Projects</h1>
        <Swiper
          breakpoints={{
            380: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1028: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
            
          }}
        
          spaceBetween={40}
          slidesPerView={4}
          pagination={{ clickable: true, el: ".swiper-custom-pagination" }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SwiperSlideContent project3={project3} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideContent project4={project4} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideContent project1={project1} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideContent project2={project2} />
          </SwiperSlide>
        </Swiper>
      <div className="swiper-custom-pagination"/>
      </motion.div>
    </div>
  );
}
