import { useRef, useMemo, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import useIntersectionObserver from "../project/useIntersectionObserver";
import { StyledProjectFooter } from "../styledComponents/commonStyles";

const ProjectFooter = ({
  nextImage,
  scrollY,
  nextProject,
  link,
  m,
  useTransform,
}) => {
  const count = useRef();
  const footerRef = useRef();

  const router = useRouter();

  const customThreshold = useMemo(
    () => [...Array(100).keys()].map((x) => x / 100),
    []
  );

  const img1Observer = useIntersectionObserver(footerRef, customThreshold);

  const opacityAnimation = useTransform(
    img1Observer.springValue,
    [0, 1],
    [0, 1]
  );

  useEffect(() => {
    let routerCheck = 0;

    function updateOpacity(y) {
      if (img1Observer.inView) {
        let scrollPercent = (y - footerRef.current.offsetTop) / innerHeight;
        let scrollPercentRounded = Math.round(scrollPercent * 100);
        let finalNum = scrollPercentRounded + 100;
        finalNum < 0 && (finalNum = 0);
        finalNum > 100 && (finalNum = 100);
        count.current.textContent = finalNum;
        if (finalNum === 100) {
          if (routerCheck === 1) return;
          // router.push(`/work/${link}`, undefined, { scroll: false });
          router.push(`/work/${link}`);
          routerCheck = 1;
        }
      }
    }
    const unsubscribeY = scrollY.onChange((y) => updateOpacity(y));

    return () => {
      unsubscribeY();
    };
  }, [img1Observer]);

  return (
    <StyledProjectFooter>
      <div className="footer_container">
        <m.div
          ref={opacityAnimation}
          className="footer_image_wrap"
          style={{
            opacity: opacityAnimation,
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
            <div className="footer_percentage" ref={count}>
              0
            </div>
            <h2 className="footer_title">{nextProject}</h2>
          </div>
          <p>Next Project</p>
        </div>
      </div>
      <div className="footer_empty_height" ref={footerRef} />
    </StyledProjectFooter>
  );
};

export default ProjectFooter;
