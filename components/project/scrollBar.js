const ScrollBar = ({ scrollYProgress, pointColor, m, useSpring }) => {
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <m.div
      className="progress_bar"
      style={{ scaleY, background: pointColor }}
    />
  );
};

export default ScrollBar;
