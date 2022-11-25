import url from "/public/images/proejct_3.webp";
import img1 from "/public/images/coffeebak/coffee_img_1.webp";
import img2 from "/public/images/coffeebak/coffee_img_2.webp";
import img3 from "/public/images/coffeebak/coffee_img_3.webp";
import img4 from "/public/images/coffeebak/coffee_img_4.webp";
import imgM1 from "/public/images/coffeebak/coffee_img_m_1.png";
import imgM2 from "/public/images/coffeebak/coffee_img_m_2.png";
import imgM3 from "/public/images/coffeebak/coffee_img_m_3.png";
import imgM4 from "/public/images/coffeebak/coffee_img_m_4.png";
import imgM5 from "/public/images/coffeebak/coffee_img_m_5.png";
import imgM6 from "/public/images/coffeebak/coffee_img_m_6.png";
import imgM7 from "/public/images/coffeebak/coffee_img_m_7.png";
import imgM8 from "/public/images/coffeebak/coffee_img_m_8.png";
import imgM9 from "/public/images/coffeebak/coffee_img_m_9.png";
import imgM10 from "/public/images/coffeebak/coffee_img_m_10.png";
import imgM11 from "/public/images/coffeebak/coffee_img_m_11.png";
import imgM12 from "/public/images/coffeebak/coffee_img_m_12.png";
import nextImage from "/public/images/proejct_4.webp";
import { VideoPlayer } from "../../components/styledComponents";
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
        pointColor="#ebcd7d"
        nextProject="Bin Works"
        link="binworks"
        nextImage={nextImage}
      >
        {/* header */}
        <WorkHeader mainColor="#ebcd7d" subColor="#fff">
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
                    <li>
                      <span className="circle"></span>
                    </li>
                    <li>Web design</li>
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
            src={url}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </FullImageContainer>

        {/* description */}
        <WorkDevelopment
          mainColor="#ebcd7d"
          subColor="#fff"
          grayColor="#8D8D8D"
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
                    src={img1}
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
              src={img2}
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
                    src={img3}
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
                    src={img4}
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
                      src={imgM1}
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
                      src={imgM2}
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
                      src={imgM3}
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
                        src={imgM4}
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
                        src={imgM5}
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
                        src={imgM6}
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
                        src={imgM7}
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
                        src={imgM8}
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
                        src={imgM9}
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
                      src={imgM10}
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
                      src={imgM11}
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
                      src={imgM12}
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
