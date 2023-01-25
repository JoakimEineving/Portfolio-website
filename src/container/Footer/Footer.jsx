import React, {useState, useEffect}from "react";
import { motion } from "framer-motion";
import "./Footer.scss";

const Footer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2023-06-01`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        and: " ",
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {" "}
        {timeLeft[interval]} {interval}
      </span>
    );
  });
  return (
    <div className="footer">
      <motion.div
        className="container-footer"
        viewport={{ once: true }}
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "easeIn", duration: 1, delay: 0.1 }}
      >
        
        <p>{timerComponents.length ? timerComponents : <span></span>} left until I graduate 👋</p>
      </motion.div>
    </div>
  );
};

export default Footer;
