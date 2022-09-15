import { React, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; 
import "./Skills.scss";
import  SoftwareSkill  from "../../components/SoftwareSkill";



const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const animation = useAnimation();

  useEffect(() => {
    console.log("in view", inView);
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          
          damping: 20,
        }
      })
    }
    if (!inView) {
      animation.start({
        y: "15vh",
      });
    }
  }, [inView]);
  return (
    <div ref={ref} className='container-skills'> 
    <motion.div   animate={animation}>
      <SoftwareSkill />
    </motion.div>
    </div>
  );
};

export default Skills;
