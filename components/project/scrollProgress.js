import { memo } from "react";
import { m, useScroll, useSpring } from "framer-motion";

const ScrollProgress = ({ color, children }) => {
  //scroll progress
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <m.div className="progress_bar" style={{ scaleY, background: color }}>
      {children}
    </m.div>
  );
};

export default memo(ScrollProgress);
