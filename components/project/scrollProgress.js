import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = ({ color, children }) => {
  //scroll progress
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div className="progress_bar" style={{ scaleY, background: color }}>
      {children}
    </motion.div>
  );
};

export default React.memo(ScrollProgress);
