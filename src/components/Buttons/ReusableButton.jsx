import React from 'react';
import { motion } from 'framer-motion';

const ReusableButton = (props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.75 }}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </motion.button>
  );
}

export default ReusableButton;