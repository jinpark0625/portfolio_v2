import { useState, useLayoutEffect, useCallback, memo } from "react";
import {
  m,
  useScroll,
  useSpring,
  useTransform,
  LazyMotion,
  domAnimation,
} from "framer-motion";
import ResizeObserver from "resize-observer-polyfill";
import useIntersectionObserver from "./useIntersectionObserver";
import { useRouter } from "next/router";
import useRefs from "react-use-refs";
import Image from "next/image";
import { ProjectFooter } from "../styledComponents/commonStyles";

const ScrollSmooth = ({
  mainColor,
  subColor,
  pointColor,
  nextProject,
  link,
  nextImage,
  children,
}) => {
  const [scrollRef, footerRef, percentageRef] = useRefs();

  const { scrollYProgress, scrollY } = useScroll();

  // page scrollable height based on content length
  const [pageHeight, setPageHeight] = useState(0);
  // update scrollable height when browser is resizing
  const resizePageHeight = useCallback((entries) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  // current screen height
  const [innerHeight, setInnerHeight] = useState(0);
  // observe when browser is resizing
  useLayoutEffect(() => {
    setInnerHeight(window.innerHeight);

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
    [0.2, 0.3, 0.7, 0.8],
    [mainColor, subColor, subColor, mainColor]
  );

  // progress of scroll
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const customThreshold = [...Array(100).keys()].map((x) => x / 100);

  const img1Observer = useIntersectionObserver(footerRef, customThreshold);

  const testOpacity = useTransform(img1Observer.springValue, [0, 1], [0, 1]);

  const router = useRouter();
  let routerCheck = 0;
  scrollY.onChange((y) => {
    percentageRef.current.innerText = 0;
    if (img1Observer.inView) {
      let scrollPercent = (y - footerRef.current.offsetTop) / innerHeight;
      let scrollPercentRounded = Math.round(scrollPercent * 100);
      let finalNum = scrollPercentRounded + 100;
      if (finalNum < 0) finalNum = 0;
      percentageRef.current.innerText = finalNum;
      if (finalNum === 100) {
        if (routerCheck === 1) return;
        router.push(`/work/${link}`);
        routerCheck = 1;
      }
    }
  });

  return (
    <LazyMotion features={domAnimation}>
      {/* smooth scroll */}
      <m.div
        ref={scrollRef}
        style={{ y: spring, backgroundColor: backgroundFramer, zIndex: 2 }} // translateY of scroll container using negative scroll value
        className="scroll-container"
      >
        {children}
      </m.div>

      {/* scroll progress bar */}
      <m.div
        className="progress_bar"
        style={{ scaleY, background: pointColor }}
      />
      {/* the basis for content height  */}
      <div style={{ height: pageHeight }} />

      {/* footer */}
      <ProjectFooter>
        <div className="footer_container">
          <m.div
            ref={testOpacity}
            className="footer_image_wrap"
            style={{
              opacity: testOpacity,
            }}
          >
            <Image
              alt="project_image"
              src={nextImage}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </m.div>
          <div className="footer_text_container">
            <div className="footer_text_wrap">
              <m.div ref={percentageRef} className="footer_percentage"></m.div>
              <h2 className="footer_title">{nextProject}</h2>
            </div>
            <p>Next Project</p>
          </div>
        </div>
        <div className="footer_empty_height" ref={footerRef}></div>
      </ProjectFooter>
    </LazyMotion>
  );
};

export default memo(ScrollSmooth);
