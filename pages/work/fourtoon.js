import {
  RcWork,
  Foimg1,
  Foimg2,
  Foimg3,
  FoimgM1,
  FoimgM2,
  FoimgM3,
  FoimgM4,
  FoimgM5,
  FoimgM6,
  FoimgM7,
  FoimgM8,
  FoimgM9,
  FoimgM10,
  FoimgM11,
  FoimgM12,
} from "../../components/project/images";
import ScrollContainer from "../../components/project/scrollContainer";
import {
  WorkHeader,
  WorkDevelopment,
  WorkSection,
  ImageContainer,
  FullImageContainer,
  MobileContainer,
} from "../../components/project/projectStyles";
import Seo from "../../components/seo";
import Image from "next/image";
import { m, useTransform } from "framer-motion";
import useRefs from "react-use-refs";
import useIntersectionObserver from "../../components/project/useIntersectionObserver";
import { useLayoutEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";

const Video = dynamic(() => import("../../components/project/videoContainer"), {
  loading: () => <div></div>,
  ssr: false,
});

const FourToon = () => {
  const [mobileFirst, mobileSecond] = useRefs();

  const customThreshold = useMemo(
    () => [...Array(100).keys()].map((x) => x / 100),
    []
  );

  const [_isMobile, set] = useState(null);

  const range = _isMobile ? [0, 0] : [0, 48];
  const rangeSecond = _isMobile ? [0, 0] : [0, 96];

  const mobileAnimationContainer = useIntersectionObserver(
    mobileFirst,
    customThreshold
  );
  const mobileAnimationContainerSecond = useIntersectionObserver(
    mobileSecond,
    customThreshold
  );
  const mobileTransform_first = useTransform(
    mobileAnimationContainer.springValue,
    [0, 1],
    range
  );
  const mobileTransform_second = useTransform(
    mobileAnimationContainer.springValue,
    [0, 1],
    rangeSecond
  );
  const mobileTransform_third = useTransform(
    mobileAnimationContainerSecond.springValue,
    [0, 1],
    range
  );
  const mobileTransform_fourth = useTransform(
    mobileAnimationContainerSecond.springValue,
    [0, 1],
    rangeSecond
  );

  useLayoutEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 601) {
        set(true);
      } else set(false);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      <Seo title="FourToon" />
      <ScrollContainer
        mainColor="#fcb118"
        subColor="#fff"
        pointColor="#1a5285"
        nextProject="Carrot Rent Car"
        link="carrotrentcar"
        nextImage={RcWork}
      >
        {/* header */}
        <WorkHeader
          mainColor="#1a5285"
          subColor="#291919"
          title="Four Toon"
          date="2021"
          roles={["Front-end development", "Web design"]}
        >
          Fourtoon is a new platform that allows users to freely share their
          webtoons, which means comics posted online. Fourtoon allows
          communication between writers and readers by enabling viewers to post
          comments and writers to check responses to their latest work. Through
          Fourtoon, everyone can now share their different stories with
          webtoons.
        </WorkHeader>

        {/* full_width image */}
        <FullImageContainer>
          <Image
            alt="project_image"
            src={Foimg1}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </FullImageContainer>

        {/* description */}
        <WorkDevelopment
          mainColor="#1a5285"
          subColor="#000"
          grayColor="#6c4e44"
          title="Four Toon"
          language="HTML / CSS / Vanila JS"
          link="https://linktr.ee/fourtoon"
        >
          I built a simple and responsive single-page website to aim to provide
          just the right amount of information for a user to make a decision and
          act on it, using HTML, CSS, and JS. I added animations to the site. In
          addition to web development, I designed mobile application,
          contributing to the entire design process from design strategy to
          design execution with a web designer.
        </WorkDevelopment>

        {/* section */}
        <WorkSection>
          {/* first section */}
          <div className="section_margin">
            <div className="project_image_wrap">
              <Video
                padding="56.25"
                border="#e7e7e7"
                source="/images/fourtoon/fourtoon_video_1.mp4"
                scale="1.015"
                poster="/images/fourtoon/video_poster.webp"
              />

              <ImageContainer padding="160" border="#e7e7e7" marginTop>
                <div className="image_wrap">
                  <Image
                    alt="project_image"
                    src={Foimg2}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                  />
                </div>
              </ImageContainer>
            </div>
          </div>

          {/* full_width image */}
          <FullImageContainer margin>
            <Image
              alt="project_image"
              src={Foimg3}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </FullImageContainer>

          {/* mobile */}
          <div className="section_margin">
            <MobileContainer ref={mobileFirst}>
              <div className="project_mobile_image">
                <ImageContainer padding="217" border="#e7e7e7" rad>
                  <div className="image_wrap">
                    <Image
                      alt="project_image"
                      src={FoimgM1}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      style={{
                        borderRadius: "12px",
                      }}
                    />
                  </div>
                </ImageContainer>
              </div>
              <m.div
                className="project_mobile_image"
                style={{
                  y: mobileTransform_first,
                }}
              >
                <ImageContainer padding="217" border="#e7e7e7" rad>
                  <div className="image_wrap">
                    <Image
                      alt="project_image"
                      src={FoimgM2}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      style={{
                        borderRadius: "12px",
                      }}
                    />
                  </div>
                </ImageContainer>
              </m.div>
              <m.div
                className="project_mobile_image"
                style={{
                  y: mobileTransform_second,
                }}
              >
                <ImageContainer padding="217" border="#e7e7e7" rad>
                  <div className="image_wrap">
                    <Image
                      alt="project_image"
                      src={FoimgM3}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      style={{
                        borderRadius: "12px",
                      }}
                    />
                  </div>
                </ImageContainer>
              </m.div>
            </MobileContainer>
          </div>

          <div className="section_margin mobile_padding">
            <MobileContainer max="unset" wrap="wrap">
              <div className="mobile_array">
                <div className="project_mobile_image">
                  <ImageContainer padding="217" border="#e7e7e7" rad>
                    <div className="image_wrap">
                      <Image
                        alt="project_image"
                        src={FoimgM4}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        style={{
                          borderRadius: "12px",
                        }}
                      />
                    </div>
                  </ImageContainer>
                </div>
                <div className="project_mobile_image">
                  <ImageContainer padding="217" border="#e7e7e7" rad>
                    <div className="image_wrap">
                      <Image
                        alt="project_image"
                        src={FoimgM5}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        style={{
                          borderRadius: "12px",
                        }}
                      />
                    </div>
                  </ImageContainer>
                </div>
                <div className="project_mobile_image">
                  <ImageContainer padding="217" border="#e7e7e7" rad>
                    <div className="image_wrap">
                      <Image
                        alt="project_image"
                        src={FoimgM6}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        style={{
                          borderRadius: "12px",
                        }}
                      />
                    </div>
                  </ImageContainer>
                </div>
              </div>
              <div className="mobile_array">
                <div className="project_mobile_image">
                  <ImageContainer padding="217" border="#e7e7e7" rad>
                    <div className="image_wrap">
                      <Image
                        alt="project_image"
                        src={FoimgM7}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        style={{
                          borderRadius: "12px",
                        }}
                      />
                    </div>
                  </ImageContainer>
                </div>
                <div className="project_mobile_image">
                  <ImageContainer padding="217" border="#e7e7e7" rad>
                    <div className="image_wrap">
                      <Image
                        alt="project_image"
                        src={FoimgM8}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        style={{
                          borderRadius: "12px",
                        }}
                      />
                    </div>
                  </ImageContainer>
                </div>
                <div className="project_mobile_image">
                  <ImageContainer padding="217" border="#e7e7e7" rad>
                    <div className="image_wrap">
                      <Image
                        alt="project_image"
                        src={FoimgM9}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        style={{
                          borderRadius: "12px",
                        }}
                      />
                    </div>
                  </ImageContainer>
                </div>
              </div>
            </MobileContainer>
          </div>

          <div className="section_margin">
            <MobileContainer ref={mobileSecond}>
              <div className="project_mobile_image">
                <ImageContainer padding="217" border="#e7e7e7" rad>
                  <div className="image_wrap">
                    <Image
                      alt="project_image"
                      src={FoimgM10}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      style={{
                        borderRadius: "12px",
                      }}
                    />
                  </div>
                </ImageContainer>
              </div>
              <m.div
                className="project_mobile_image"
                style={{
                  y: mobileTransform_third,
                }}
              >
                <ImageContainer padding="217" border="#e7e7e7" rad>
                  <div className="image_wrap">
                    <Image
                      alt="project_image"
                      src={FoimgM11}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      style={{
                        borderRadius: "12px",
                      }}
                    />
                  </div>
                </ImageContainer>
              </m.div>
              <m.div
                className="project_mobile_image"
                style={{
                  y: mobileTransform_fourth,
                }}
              >
                <ImageContainer padding="217" border="#e7e7e7" rad>
                  <div className="image_wrap">
                    <Image
                      alt="project_image"
                      src={FoimgM12}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      style={{
                        borderRadius: "12px",
                      }}
                    />
                  </div>
                </ImageContainer>
              </m.div>
            </MobileContainer>
          </div>
        </WorkSection>
      </ScrollContainer>
    </>
  );
};

export default FourToon;
