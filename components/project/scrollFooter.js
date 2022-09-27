import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollFooter = ({ children }) => {
  //scroll progress
  const { scrollYProgress } = useScroll();
  const opacityAni = useTransform(scrollYProgress, [0, 0.97, 1], [0, 0.2, 1]);
  return (
    <motion.div
      style={{
        textAlign: "center",
        padding: "100px 0",
        height: "100%",
        opacity: opacityAni,
      }}
    >
      {children}
    </motion.div>
  );
};

export default React.memo(ScrollFooter);
