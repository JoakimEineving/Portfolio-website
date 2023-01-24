import React from "react";
import { motion } from "framer-motion";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <motion.div
        className="container-footer"
        viewport={{ once: true }}
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "easeIn", duration: 1, delay: 0.1 }}
      >
        <p>Joakim Eineving © Copyright 2023</p>
      </motion.div>
    </div>
  );
};

export default Footer;
