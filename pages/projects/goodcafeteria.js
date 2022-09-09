import React from "react";
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
} from "../../components/styledComponents";

const Goodcafeteria = () => {
  return (
    <main>
      <Header padding="54px 0 145px 0">
        {/* title section */}
        <Wrap maxWidth="1024px" margin="0 auto">
          <Block maxWidth="580px" margin="0 0 0 auto">
            <Paragraph margin="0 0 75px 0">Good Cafeteria</Paragraph>
            <HeaderTitle>
              An interactive fairy tale for Amsterdam’s biggest fashion
              department store.
            </HeaderTitle>
            <Block margin="100px 0 60px 0">
              <FooterText>2022</FooterText>
            </Block>
          </Block>
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
              <p className="techStackTag" style={{ color: "#fff" }}>
                How it started
              </p>
              <ul className="techStack" style={{ color: "#fff" }}>
                <li>Development</li>
                <li>Development</li>
                <li>Development</li>
                <li>Development</li>
              </ul>
              <div className="techStack_m" style={{ color: "#fff" }}>
                Development, Development, Development, Development
              </div>
            </div>
            <div className="projectAbout">
              <Tagline margin="0 0 30px 0 ">
                The Amsterdam-based agency DEPT contacted us on behalf of their
                partners Bijenkorf with the festive ask - “Please craft us an
                innovative Christmas story”. So as we waved our last goodbyes to
                August’s comforting warmth and welcomed this challenge as a way
                to take the bite out of winter’s impending arrival. Winter was
                coming.
              </Tagline>
              <Paragraph fontColor="#aaa">
                Sharpening our Apple pencils, and filling our heads with magical
                imagery, we quickly aligned with DEPT’s team to sketch the
                outline of the Bijenkorf’s online Christmas campaign. Creating
                an enchanting moment for online shoppers started with the
                Bijenkorf name itself: “beehive” in English. Additional magic
                came from expanding our hive to collaborate with the amazing
                French-Canadian illustrator Myriam Wares.
              </Paragraph>
            </div>
          </div>
        </Wrap>
      </Header>
      <section>
        {/* first section */}
        <div
          style={{
            paddingBottom: "105px",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
              }}
            >
              <Image
                alt="project_image"
                src={url}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div
            style={{
              maxWidth: "1200px",
              margin: "20px auto 0",
            }}
          >
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
              }}
            >
              <Image
                alt="project_image"
                src={url}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            paddingBottom: "105px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "840px",
            }}
          >
            {/* 840, 690, 400 */}
            <Image
              alt="project_image"
              src={url}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        {/* second section */}
        <div
          style={{
            paddingBottom: "105px",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
              }}
            >
              <Image
                alt="project_image"
                src={url}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div
            style={{
              maxWidth: "1200px",
              margin: "20px auto 0",
            }}
          >
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
              }}
            >
              <Image
                alt="project_image"
                src={url}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Goodcafeteria;
