import { React, useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./About.scss";
import Marquee from "react-marquee-slider";
import { images } from '../../constants';

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



const About = () => {
  
  return (
    <>
    <div className="container-slider">
      
      <motion.div 
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="title">
        <h1>Experience</h1>
        <p className="title-text">
          I am a freelance UI/UX designer with 4+ years working with startups
          and companies of various sizes. I specialize in designing web apps,
          mobile apps for Android and iOS. I also do photography
          work occasionally.
        </p>
      
      </motion.div>

      <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
        <Marquee direction="right" speed={100} delay={5}>
          <div className="image_wrapper">
            <img src={images.css} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={images.flutter} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={images.git} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={images.html} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={images.js} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={images.python} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={images.react} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={images.scss} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={images.photoshop} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={images.figma} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={images.vscode} alt="" />
          </div>
        </Marquee>
      </motion.div>
    </div>
    </>
  );
}
export default About;
