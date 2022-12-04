import {
  BwWork,
  CoWork,
  Coimg1,
  Coimg2,
  Coimg3,
  Coimg4,
  CoimgM1,
  CoimgM2,
  CoimgM3,
  CoimgM4,
  CoimgM5,
  CoimgM6,
  CoimgM7,
  CoimgM8,
  CoimgM9,
  CoimgM10,
  CoimgM11,
  CoimgM12,
} from "../../components/project/images";
import VideoPlayer from "../../components/styledComponents/video";
import { ScrollSmooth } from "../../components/project";
import {
  WorkHeader,
  WorkDevelopment,
  WorkSection,
  ImageContainer,
  FullImageContainer,
  MobileContainer,
} from "../../components/project/projectStyles";
import Link from "next/link";
import Image from "next/image";
import Seo from "../../components/seo";
import { m, useTransform } from "framer-motion";
import useRefs from "react-use-refs";
import useIntersectionObserver from "../../components/project/useIntersectionObserver";
import { useLayoutEffect, useState } from "react";

const customThreshold = [...Array(100).keys()].map((x) => x / 100);

const CoffeeBak = () => {
  const [mobileFirst, mobileSecond] = useRefs();

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
      <Seo title="CoffeeBak" />
      <ScrollSmooth
        mainColor="#193624"
        subColor="#fff"
        pointColor="#eb9109"
        nextProject="Bin Works"
        link="binworks"
        nextImage={BwWork}
      >
        {/* header */}
        <WorkHeader mainColor="#eb9109" subColor="#fff">
          <div className="work_container">
            <div className="work_wrap">
              <h1 className="work_title">Coffee Bak</h1>
              <div className="work_overview">
                <p className="work_overview_text">
                  Coffee grounds are an unavoidable byproduct of coffee
                  consumption. And while many of us assume it’s safe to toss
                  grounds out with other organic waste, that often isn’t the
                  case. Coffee grounds can actually have a significant impact on
                  the environment when they end up going to landfill. So,
                  Coffeebak finds a new use for coffee grounds that gets
                  discarded every day, and processes them into sustainable
                  materials for a circular economy.
                </p>
                <div className="work_overview_des">
                  <p className="work_date">2021</p>
                  <ul className="work_role">
                    <li>Front-end development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </WorkHeader>

        {/* full_width image */}
        <FullImageContainer>
          <Image
            alt="project_image"
            src={CoWork}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </FullImageContainer>

        {/* description */}
        <WorkDevelopment
          mainColor="#eb9109"
          subColor="#fff"
          grayColor="#8c9d84"
        >
          <div className="work_development">
            <div className="work_development_list">
              <div className="work_development_tools">
                <dl>
                  <dt>CLIENT</dt>
                  <dd>Coffee Bak</dd>
                </dl>
                <dl>
                  <dt>TOOLS</dt>
                  <dd>React Native / REST API / Styled-Components</dd>
                </dl>
              </div>
              <Link href="http://coffeebak.kr/" passHref>
                <a target="_blank" rel="website link" className="work_link">
                  View Website
                </a>
              </Link>
            </div>

            <p className="work_text">
              I built CoffeeBak mobile application supporing both iOS and
              Android with React Native, JWT Auth, WebView, working with a
              Back-end developer to complete all parts of the app’s
              infrastructure. CoffeeBak mobile app allows users to request
              coffee grounds collection and view history of a request. Further,
              I worked on registration page, login page, notice page, mobile
              authentication, and other pages. I used WebView to render any web
              components in a React Native application, so a client can easily
              add and remove notice content from administrator page in the web.
            </p>
          </div>
        </WorkDevelopment>

        {/* section */}
        <WorkSection>
          {/* first section */}
          <div className="section_margin">
            <div className="project_image_wrap">
              <ImageContainer padding="56.25">
                <div className="image_wrap">
                  <VideoPlayer
                    source="/images/coffeebak/coffee_video_1.mp4"
                    scale="1.015"
                    poster="/images/coffeebak/video_poster.webp"
                  />
                </div>
              </ImageContainer>

              <ImageContainer padding="56.25" marginTop>
                <div className="image_wrap">
                  <Image
                    alt="project_image"
                    src={Coimg1}
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
              src={Coimg2}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </FullImageContainer>

          {/* second section */}
          <div className="section_margin">
            <div className="project_image_wrap">
              <ImageContainer padding="56.25">
                <div className="image_wrap">
                  <Image
                    alt="project_image"
                    src={Coimg3}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                  />
                </div>
              </ImageContainer>

              <ImageContainer padding="56.25" marginTop>
                <div className="image_wrap">
                  <Image
                    alt="project_image"
                    src={Coimg4}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                  />
                </div>
              </ImageContainer>
            </div>
          </div>

          {/* mobile */}
          <div className="section_margin project_padding_t">
            <MobileContainer ref={mobileFirst}>
              <div className="project_mobile_image">
                <ImageContainer padding="217" border="#e7e7e7" rad>
                  <div className="image_wrap">
                    <Image
                      alt="project_image"
                      src={CoimgM1}
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
                      src={CoimgM2}
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
                      src={CoimgM3}
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
                        src={CoimgM4}
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
                        src={CoimgM5}
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
                        src={CoimgM6}
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
                        src={CoimgM7}
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
                        src={CoimgM8}
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
                        src={CoimgM9}
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
                      src={CoimgM10}
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
                      src={CoimgM11}
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
                      src={CoimgM12}
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
      </ScrollSmooth>
    </>
  );
};

export default CoffeeBak;
