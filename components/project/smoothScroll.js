import { forwardRef } from "react";

const SmoothScroll = forwardRef(function SmoothScroll(
  {
    children,
    mainColor,
    subColor,
    pageHeight,
    scrollY,
    scrollYProgress,
    m,
    useSpring,
    useTransform,
    isMobile,
  },
  ref
) {
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = isMobile
    ? { damping: 30, mass: 1, stiffness: 100 }
    : { damping: 15, mass: 0.27, stiffness: 55 }; // easing of smooth scroll
  const spring = useSpring(transform, physics); // apply easing to the negative scroll value

  const backgroundFramer = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.7, 0.8],
    [mainColor, subColor, subColor, mainColor]
  );

  return (
    <m.div
      ref={ref}
      style={{ y: spring, backgroundColor: backgroundFramer, zIndex: 2 }} // translateY of scroll container using negative scroll value
      className="scroll-container"
    >
      {children}
    </m.div>
  );
});

export default SmoothScroll;
