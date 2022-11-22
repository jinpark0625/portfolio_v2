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

const ScrollSmooth = ({
  mainColor,
  subColor,
  pointColor,
  nextProject,
  link,
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
    [0.2, 0.3, 0.8, 0.9],
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
      <m.div
        ref={scrollRef}
        style={{ y: spring, backgroundColor: backgroundFramer, zIndex: 2 }} // translateY of scroll container using negative scroll value
        className="scroll-container"
      >
        {children}
      </m.div>
      <m.div
        className="progress_bar"
        style={{ scaleY, background: pointColor }}
      />
      <div style={{ height: pageHeight }} />

      <div
        style={{
          height: "auto",
        }}
      >
        <div style={{ height: "100vh", zIndex: 1 }}>
          <m.div
            ref={testOpacity}
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              background: "red",
              scale: testOpacity,
              opacity: testOpacity,
            }}
          />
          <m.div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              color: "#fff",
              textAlign: "center",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div style={{ position: "relative", width: "100%" }}>
              <div
                ref={percentageRef}
                style={{ position: "absolute", right: "-24px", top: "-10px" }}
              ></div>
              <h2>{nextProject}</h2>
            </div>
            <p>Next Project</p>
          </m.div>
        </div>
        <div
          ref={footerRef}
          style={{
            height: "100vh",
          }}
        />
      </div>
    </LazyMotion>
  );
};

export default memo(ScrollSmooth);
