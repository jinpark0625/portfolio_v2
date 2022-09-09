import React from "react";
import { motion } from "framer-motion";

const ScrollBar = ({ scaleX, color }) => {
  return (
    <motion.div
      className="progress_bar"
      style={{ scaleX, background: color }}
    />
  );
};

export default ScrollBar;
