import "./Slider.scss";
import "swiper/css/bundle";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import { Pagination } from "swiper";
import { mySkills } from "../../components/SoftwareSkill";
import { RiFlutterFill } from "react-icons/ri";
import ReusableButton from "../../components/Buttons/ReusableButton";
import portfolio from "../../assets/portfolio.gif";
import chatbotdemo from "../../assets/chatbotdemo.gif";
import SwiperSlideContent from "./SwiperSlideContent";


export default function Slider() {
  let project1 = [];
  let project2 = [];
  let project3 = [];
  // 0=javascript, 1=python, 2=react, 3=html, 4=css, 5=sass, 6=git, 7=sql, 8=figma, 9=firebase
  for (let i = 0; i < mySkills.softwareSkills.length; i++) {
    if (i === 0 || i === 3 || i === 4 || i === 6)
      project1.push(mySkills.softwareSkills[i]);
    if (i === 5 || i === 3 || i === 0 || i === 2 || i === 6)
      project2.push(mySkills.softwareSkills[i]);
    if (i === 9 || i === 6)
      project3.push(mySkills.softwareSkills[i]);
  }

  return (
    <div className="container-projects">
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, x: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "easeIn", duration: 2, delay: 0.1 }}
      className="container-slider"
    >
      <h1>Projects</h1>
      <Swiper
        spaceBetween={40}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SwiperSlideContent 
            project1={project1} 
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideContent 
            project2={project2} 
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideContent 
            project3={project3} 
          />
        </SwiperSlide>
      </Swiper>
    </motion.div>
    </div>
  );
}
