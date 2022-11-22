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
import useIntersectionObserver from "./useIntersectionObserver";

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

  // current screen height
  const [screenHeight, setScreenHeight] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);
  // observe when browser is resizing
  useLayoutEffect(() => {
    setInnerHeight(window.innerHeight);
    setScreenHeight(document.body.offsetHeight);
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

  const test = useRef();
  const hmm = useRef();

  const img1Ref = useRef();

  scrollY.onChange((y) => {
    // if(y >= test.current.offsetTop)
    // let currentScroll = y >= test.current.offsetTop ? y : 0;
    // console.log(test.current.offsetTop, innerHeight);
    // (pageHeight - test.current.offsetTop - innerHeight);
    // let scrollPercent = (y - test.current.offsetTop) / innerHeight;
    // let scrollPercentRounded = Math.round(scrollPercent * 100);
    // let finalNumber = 100 + scrollPercentRounded;
    // if (finalNumber < 0) finalNumber = 0;
    // console.log(hmm.current.style.transform.scale);
    // hmm.current.style = `transform:scale(${
    //   finalNumber / 100
    // }); background: green;
    // width: 100%;
    // height: 100%;`;
    // hmm.current.style.transform = `scale(${finalNumber / 10})`;
    // test.current.innerText = finalNumber;
  });
  const customThreshold = [...Array(100).keys()].map((x) => x / 100);

  const img1Observer = useIntersectionObserver(img1Ref, customThreshold);
  const img1ContainerTransform = useTransform(
    img1Observer.springValue,
    [0, 1],
    [5, 0]
  );

  const img1transform = useTransform(
    img1Observer.springValue,
    [0, 0.3, 1],
    [0, 0, 1]
  );

  const testOpacity = useTransform(img1Observer.springValue, [0, 1], [0, 1]);

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
            <h2>BinWorks</h2>
            <p>Next Project</p>
          </m.div>
        </div>
        <div
          ref={img1Ref}
          style={{
            height: "100vh",
          }}
        />
      </div>
    </LazyMotion>
  );
};

export default memo(ScrollSmooth);
