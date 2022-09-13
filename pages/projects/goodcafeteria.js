import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import Image from "next/image";
import url from "/public/images/proejct_1.webp";
import {
  Header,
  HeaderTitle,
  Paragraph,
  Tagline,
  SubTitle,
  FooterText,
  Wrap,
  Block,
  Footer,
} from "../../components/styledComponents";
import { ScrollProgress } from "../../components/project";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

const Goodcafeteria = () => {
  const ref = useRef();

  //scroll progress
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const opacityAni = useTransform(scrollYProgress, [0, 0.97, 1], [0, 0.4, 1]);

  return (
    <>
      <ScrollProgress scaleY={scaleY} color="#ff8600" />
      <div ref={ref} className="content">
        <main>
          <div
            style={{
              marginBottom: "300px",
            }}
          >
            <Header padding="32px 0 145px 0" background="#4C3424">
              {/* title section */}
              <Wrap>
                <div className="center">
                  <div className="headerWrap">
                    <p className="headerTitle">Good Cafeteria</p>
                    <HeaderTitle>
                      An interactive fairy tale for Amsterdam’s biggest fashion
                      department store.
                    </HeaderTitle>
                    <div className="headerDate">
                      <FooterText fontColor="#ff8600">2022</FooterText>
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
                  />
                </div>
              </Wrap>
              {/* discription section*/}
              <Wrap margin="105px 0 0 0">
                <div className="center">
                  <div className="techStackWrap">
                    <p className="techStackTag" style={{ color: "#ff8600" }}>
                      How it started
                    </p>
                    <ul className="techStack" style={{ color: "#ff8600" }}>
                      <li>Development</li>
                      <li>Development</li>
                      <li>Development</li>
                      <li>Development</li>
                    </ul>
                    <div className="techStack_m" style={{ color: "#ff8600" }}>
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
                padding="0 0 105px 0"
                blockBg="#4C3424"
                background="#f9fafb"
              >
                <div className="center block">
                  <Block
                    width="100%"
                    position="relative"
                    padding="0 0 56.25% 0 "
                  >
                    <Image
                      alt="project_image"
                      src={url}
                      layout="fill"
                      objectFit="cover"
                    />
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
                      src={url}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Block>
                </Block>
              </Wrap>
              <Wrap padding="0 0 105px 0" background="#f9fafb">
                <div className="imageWrap">
                  <Image
                    alt="project_image"
                    src={url}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Wrap>
              {/* second section */}
              <Wrap
                padding="0 0 105px 0"
                background="#4C3424"
                blockBg="#f9fafb"
              >
                <div className="center block">
                  <Block
                    width="100%"
                    position="relative"
                    padding="0 0 56.25% 0 "
                  >
                    <Image
                      alt="project_image"
                      src={url}
                      layout="fill"
                      objectFit="cover"
                    />
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
                      src={url}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Block>
                </Block>
              </Wrap>
            </section>
          </div>
        </main>
        <Link href="/projects/yellowbasket">
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
                <HeaderTitle fontColor="#000"> Yello Basket</HeaderTitle>
              </motion.div>
            </Footer>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Goodcafeteria;
