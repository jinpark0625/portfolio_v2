import { useState, useRef, useLayoutEffect, useCallback, memo } from "react";
import {
  m,
  useScroll,
  useSpring,
  useTransform,
  LazyMotion,
  domAnimation,
} from "framer-motion";
import ResizeObserver from "resize-observer-polyfill";

const ScrollSmooth = ({ mainColor, subColor, pointColor, children }) => {
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

  // set points to change background
  const backgroundFramer = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.8, 0.9],
    [mainColor, subColor, subColor, mainColor]
  );

  // progress of scroll
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={scrollRef}
        style={{ y: spring, backgroundColor: backgroundFramer }} // translateY of scroll container using negative scroll value
        className="scroll-container"
      >
        {children}
      </m.div>
      <m.div
        className="progress_bar"
        style={{ scaleY, background: pointColor }}
      />
      <div style={{ height: pageHeight }} />
    </LazyMotion>
  );
};

export default memo(ScrollSmooth);
