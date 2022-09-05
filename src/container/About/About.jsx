import { React, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import Marquee from "react-marquee-slider";
import { images } from "../../constants";

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
    <div className="container-about">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="title"
      >
        <h1>About Me</h1>
        <p className="title-text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur
        </p>
      </motion.div>

      {/* <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Marquee direction="right" speed={100} delay={5}>
          <div className="image_wrapper">
            <img src={images.js} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={images.css} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={images.html} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={images.scss} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={images.react} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={images.flutter} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={images.python} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={images.git} alt="" />
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
          <div className="image_wrapper">
            <img src={images.js} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={images.css} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={images.html} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={images.scss} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={images.react} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={images.flutter} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={images.python} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={images.git} alt="" />
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
      </motion.div> */}
    </div>
  );
};
export default About;
