import { useState, useEffect } from "react";
import { useSpring } from "framer-motion";

const useIntersectionObserver = (
  target,
  customThreshold = [0],
  customRoot = null
) => {
  const [inView, setInView] = useState(false);
  // const springPhysics = { damping: 400, friction: 100 };
  const springPhysics = { damping: 30, friction: 30 };
  const springValue = useSpring(0, springPhysics);

  useEffect(() => {
    const observerCallback = ([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        springValue.set(entry.intersectionRatio);
      } else {
        setInView(false);
      }
    };

    const observerOptions = {
      root: customRoot,
      rootMargin: "0px 0px 0px 0px",
      threshold: customThreshold,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    observer.observe(target.current);

    return () => observer.disconnect();
  }, [target, customThreshold, customRoot, springValue]);

  return { inView, springValue };
};

export default useIntersectionObserver;
