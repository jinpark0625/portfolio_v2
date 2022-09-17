import React, { useRef } from "react";
import Image from "next/image";
import url from "/public/images/proejct_2.webp";
import img1 from "/public/images/yellowbasket/yellow_img_1.png";
import img2 from "/public/images/yellowbasket/yellow_img_2.jpeg";
import img3 from "/public/images/yellowbasket/yellow_img_3.png";
import img4 from "/public/images/yellowbasket/yellow_img_4.png";
import img5 from "/public/images/yellowbasket/yellow_img_5.png";
import img6 from "/public/images/yellowbasket/yellow_img_6.png";
import img7 from "/public/images/yellowbasket/yellow_img_7.png";
import {
  Header,
  HeaderTitle,
  Paragraph,
  Tagline,
  FooterText,
  Wrap,
  Block,
  Footer,
  VideoPlayer,
} from "../../components/styledComponents";
import { ScrollProgress } from "../../components/project";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

const YellowBasket = () => {
  const ref = useRef();

  //scroll progress
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const opacityAni = useTransform(scrollYProgress, [0, 0.97, 1], [0, 0.37, 1]);
  // F4F2E9
  return (
    <>
      <ScrollProgress scaleY={scaleY} color="#ffcc00" />
      <div ref={ref} className="content">
        <main>
          <div
            style={{
              marginBottom: "300px",
            }}
          >
            <Header padding="32px 0 145px 0" background="#121212">
              {/* title section */}
              <Wrap>
                <div className="center">
                  <div className="headerWrap">
                    <p className="headerTitle">Yellow Basket</p>
                    <HeaderTitle>
                      An interactive fairy tale for Amsterdam’s biggest fashion
                      department store.
                    </HeaderTitle>
                    <div className="headerDate">
                      <FooterText fontColor="#ffcc00">2021</FooterText>
                    </div>
                  </div>
                </div>
              </Wrap>
              {/* title image section */}
              <Wrap>
                <div className="imageWrap">
                  <Image
                    alt="project_image"
                    src={url}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                  />
                </div>
              </Wrap>
              {/* discription section*/}
              <Wrap margin="105px 0 0 0">
                <div className="center">
                  <div className="techStackWrap">
                    <p className="techStackTag" style={{ color: "#ffcc00" }}>
                      How it started
                    </p>
                    <ul className="techStack" style={{ color: "#ffcc00" }}>
                      <li>Development</li>
                      <li>Development</li>
                      <li>Development</li>
                      <li>Development</li>
                    </ul>
                    <div className="techStack_m" style={{ color: "#ffcc00" }}>
                      Development, Development, Development, Development
                    </div>
                  </div>
                  <div className="projectAbout">
                    <Tagline margin="0 0 30px 0 ">
                      The Amsterdam-based agency DEPT contacted us on behalf of
                      their partners Bijenkorf with the festive ask - “Please
                      craft us an innovative Christmas story”. So as we waved
                      our last goodbyes to August’s comforting warmth and
                      welcomed this challenge as a way to take the bite out of
                      winter’s impending arrival. Winter was coming.
                    </Tagline>
                    <Paragraph fontColor="#aaa">
                      Sharpening our Apple pencils, and filling our heads with
                      magical imagery, we quickly aligned with DEPT’s team to
                      sketch the outline of the Bijenkorf’s online Christmas
                      campaign. Creating an enchanting moment for online
                      shoppers started with the Bijenkorf name itself: “beehive”
                      in English. Additional magic came from expanding our hive
                      to collaborate with the amazing French-Canadian
                      illustrator Myriam Wares.
                    </Paragraph>
                  </div>
                </div>
              </Wrap>
            </Header>
            <section>
              {/* first section */}
              <Wrap
                paddingMobile
                padding="0 0 105px 0"
                blockBg="#121212"
                background="#F4F2E9"
              >
                <div className="center block">
                  <Block
                    width="100%"
                    position="relative"
                    padding="0 0 56.25% 0 "
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        overflow: "hidden",
                      }}
                    >
                      <VideoPlayer source="/images/yellowbasket/yellow_video_1.mp4" />
                    </div>
                  </Block>
                </div>
                <Block className="center marginGap">
                  <Block
                    width="100%"
                    position="relative"
                    padding="0 0 56.25% 0 "
                  >
                    <Image
                      alt="project_image"
                      src={img1}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                    />
                  </Block>
                </Block>
              </Wrap>
              <Wrap
                paddingMobile
                padding="0 0 105px 0"
                // background="#F4F2E9"
                background="#f9f6f1"
              >
                <div className="imageWrap">
                  <Image
                    alt="project_image"
                    src={img2}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                  />
                </div>
              </Wrap>
              {/* second section */}
              <Wrap
                paddingMobile
                padding="0 0 105px 0"
                background="#f9f6f1"
                blockBg="#f9f6f1"
              >
                <div className="center block">
                  <Block
                    width="100%"
                    position="relative"
                    padding="0 0 56.25% 0 "
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        overflow: "hidden",
                      }}
                    >
                      <VideoPlayer
                        source="/images/yellowbasket/yellow_video_2.mp4"
                        scale="1.009
                      "
                      />
                    </div>
                  </Block>
                </div>
                <Block className="center marginGap">
                  <Block
                    width="100%"
                    position="relative"
                    padding="0 0 56.25% 0 "
                  >
                    <Image
                      alt="project_image"
                      src={img3}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                    />
                  </Block>
                </Block>
                <Block className="center marginGap">
                  <Block
                    width="100%"
                    position="relative"
                    padding="0 0 56.25% 0 "
                  >
                    <Image
                      alt="project_image"
                      src={img4}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                    />
                  </Block>
                </Block>
              </Wrap>
              {/* Third section */}
              <Wrap
                paddingMobile
                padding="0 0 105px 0"
                background="#121212"
                // blockBg="#F4F2E9"
                blockBg="#f9f6f1"
              >
                <Block className="center block">
                  <Block
                    width="100%"
                    position="relative"
                    padding="0 0 56.25% 0 "
                  >
                    <Image
                      alt="project_image"
                      src={img5}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                    />
                  </Block>
                </Block>
                <Block className="center marginGap">
                  <Block
                    width="100%"
                    position="relative"
                    padding="0 0 56.25% 0 "
                  >
                    <Image
                      alt="project_image"
                      src={img6}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                    />
                  </Block>
                </Block>
                <Block className="center marginGap">
                  <Block
                    width="100%"
                    position="relative"
                    padding="0 0 56.25% 0 "
                  >
                    <Image
                      alt="project_image"
                      src={img7}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                    />
                  </Block>
                </Block>
              </Wrap>
            </section>
          </div>
        </main>
        <Link href="/projects/coffeebak">
          <a>
            <Footer>
              <motion.div
                style={{
                  textAlign: "center",
                  padding: "100px 0",
                  height: "100%",
                  opacity: opacityAni,
                }}
              >
                <FooterText fontColor="#aaa" margin="0 0 10px 0">
                  Next Project
                </FooterText>
                <HeaderTitle fontColor="#000">Coffee Bak</HeaderTitle>
              </motion.div>
            </Footer>
          </a>
        </Link>
      </div>
    </>
  );
};

export default YellowBasket;
