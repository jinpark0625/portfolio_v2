import { useState, useLayoutEffect, useCallback, useRef } from "react";
import { useScroll, LazyMotion, domAnimation } from "framer-motion";
import ResizeObserver from "resize-observer-polyfill";
import SmoothScroll from "./smoothScroll";
import dynamic from "next/dynamic";
import { m, useSpring, useTransform } from "framer-motion";
import { isMobile } from "react-device-detect";

// const ScrollBar = dynamic(() => import("./scrollBar"));
const ScrollBar = dynamic(() => import("./scrollBar"));
const ProjectFooter = dynamic(() => import("./projectFooter"));

const ScrollContainer = ({
  mainColor,
  subColor,
  pointColor,
  nextProject,
  link,
  nextImage,
  children,
}) => {
  const scrollRef = useRef();

  const { scrollYProgress, scrollY } = useScroll();

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

  return (
    <LazyMotion features={domAnimation}>
      {/* smooth scroll */}
      <SmoothScroll
        mainColor={mainColor}
        subColor={subColor}
        pageHeight={pageHeight}
        scrollY={scrollY}
        scrollYProgress={scrollYProgress}
        ref={scrollRef}
        m={m}
        useSpring={useSpring}
        useTransform={useTransform}
        isMobile={isMobile}
      >
        {children}
      </SmoothScroll>

      {/* scroll progress bar */}
      <ScrollBar
        pointColor={pointColor}
        scrollYProgress={isMobile ? 0 : scrollYProgress}
        m={m}
        useSpring={useSpring}
      />

      {/* the basis for content height  */}
      <div style={{ height: pageHeight }} />

      {/* footer */}
      <ProjectFooter
        nextImage={nextImage}
        scrollY={scrollY}
        nextProject={nextProject}
        link={link}
        m={m}
        useTransform={useTransform}
      />
    </LazyMotion>
  );
};

export default ScrollContainer;
