import React, { useState, useRef, useLayoutEffect, useCallback } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ResizeObserver from "resize-observer-polyfill";

const ScrollSmooth = ({ mainColor, subColor, children }) => {
  const { scrollYProgress, scrollY } = useScroll();
  // scroll container
  const scrollRef = useRef(null);
  // page scrollable height based on content length
  const [pageHeight, setPageHeight] = useState(0);
  // update scrollable height when browser is resizing
  const resizePageHeight = useCallback((entries) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  // observe when browser is resizing
  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    );
    scrollRef && resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }; // easing of smooth scroll
  const spring = useSpring(transform, physics); // apply easing to the negative scroll value

  const backgroundFramer = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.8, 0.9],
    [mainColor, subColor, subColor, mainColor]
  );

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring, backgroundColor: backgroundFramer }} // translateY of scroll container using negative scroll value
        className="scroll-container"
      >
        {children}
      </motion.div>
      <div style={{ height: pageHeight }} className="test" />
    </>
  );
};

export default React.memo(ScrollSmooth);
