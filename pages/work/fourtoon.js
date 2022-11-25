import url from "/public/images/fourtoon/url.webp";
import img2 from "/public/images/fourtoon/fourtoon_img_2.png";
import img3 from "/public/images/fourtoon/fourtoon_img_3.webp";
import img4 from "/public/images/fourtoon/fourtoon_img_m_1.png";
import img5 from "/public/images/fourtoon/fourtoon_img_m_2.png";
import img6 from "/public/images/fourtoon/fourtoon_img_m_3.png";
import img7 from "/public/images/fourtoon/fourtoon_img_m_4.png";
import img8 from "/public/images/fourtoon/fourtoon_img_m_5.png";
import img9 from "/public/images/fourtoon/fourtoon_img_m_6.png";
import img10 from "/public/images/fourtoon/fourtoon_img_m_7.png";
import img11 from "/public/images/fourtoon/fourtoon_img_m_8.png";
import img12 from "/public/images/fourtoon/fourtoon_img_m_9.png";
import img13 from "/public/images/fourtoon/fourtoon_img_m_10.png";
import img14 from "/public/images/fourtoon/fourtoon_img_m_11.png";
import img15 from "/public/images/fourtoon/fourtoon_img_m_12.png";
import nextImage from "/public/images/fourtoon/next.webp";
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
import Seo from "../../components/seo";
import Image from "next/image";
import { m, useTransform } from "framer-motion";
import useRefs from "react-use-refs";
import useIntersectionObserver from "../../components/project/useIntersectionObserver";
import { useLayoutEffect, useState } from "react";

const customThreshold = [...Array(100).keys()].map((x) => x / 100);

const FourToon = () => {
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
      <Seo title="FourToon" />
      <ScrollSmooth
        mainColor="#fcb118"
        subColor="#fff"
        pointColor="#000"
        nextProject="Carrot Rent Car"
        link="carrotrentcar"
        nextImage={nextImage}
      >
        {/* header */}
        <WorkHeader mainColor="#000" subColor="#fff">
          <div className="work_container">
            <div className="work_wrap">
              <h1 className="work_title">Four Toon</h1>
              <div className="work_overview">
                <p className="work_overview_text">
                  Fourtoon is a new platform that allows users to freely share
                  their webtoons, which mean comics posted online. Fourtoon
                  allows communication between writers and readers by enabling
                  viewers to post comments and writers to check responses to
                  their latest work. Through Fourtoon, everyone can now share
                  their different stories with webtoons.
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
        <WorkDevelopment mainColor="#fff" subColor="#000" grayColor="#7e590b">
          <div className="work_development">
            <div className="work_development_list">
              <div className="work_development_tools">
                <dl>
                  <dt>CLIENT</dt>
                  <dd>Four Toon</dd>
                </dl>
                <dl>
                  <dt>TOOLS</dt>
                  <dd>HTML / CSS / Vanila JS</dd>
                </dl>
              </div>
              <Link href="https://linktr.ee/fourtoon" passHref>
                <a target="_blank" rel="website link" className="work_link">
                  View Website
                </a>
              </Link>
            </div>

            <p className="work_text">
              I built a simple and responsive single-page website to aim to
              provide just the right amount of information for a user to make a
              decision and act on it, using HTML, CSS, and JS. I added
              animations to the site. In addition to web development, I designed
              mobile application, contributing to the entire design process from
              design strategy to design execution with a web designer.
            </p>
          </div>
        </WorkDevelopment>

        {/* section */}
        <WorkSection>
          {/* first section */}
          <div className="section_margin">
            <div className="project_image_wrap">
              <ImageContainer padding="56.25" border="#e7e7e7">
                <div className="image_wrap">
                  <VideoPlayer
                    source="/images/fourtoon/fourtoon_video_1.mp4"
                    scale="1.015"
                    poster="/images/fourtoon/video_poster.webp"
                  />
                </div>
              </ImageContainer>

              <ImageContainer padding="160" border="#e7e7e7" marginTop>
                <div className="image_wrap">
                  <Image
                    alt="project_image"
                    src={img2}
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
              src={img3}
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
                      src={img4}
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
                      src={img5}
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
                      src={img6}
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
                        src={img10}
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
                        src={img11}
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
                        src={img12}
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
                        src={img13}
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
                        src={img14}
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
                        src={img15}
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
                      src={img7}
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
                      src={img8}
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
                      src={img9}
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

export default FourToon;
