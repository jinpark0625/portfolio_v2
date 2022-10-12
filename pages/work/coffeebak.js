import React, { useRef } from "react";
import Image from "next/image";
import url from "/public/images/proejct_3.webp";
import img1 from "/public/images/coffeebak/coffee_img_1.png";
import img2 from "/public/images/coffeebak/coffee_img_2.png";
import img3 from "/public/images/coffeebak/coffee_img_3.png";
import img4 from "/public/images/coffeebak/coffee_img_4.png";
import img5 from "/public/images/coffeebak/coffee_img_5.png";
import img6 from "/public/images/coffeebak/coffee_img_6.png";
import img7 from "/public/images/coffeebak/coffee_img_7.png";
import img8 from "/public/images/coffeebak/coffee_img_8.png";
import {
  Header,
  HeaderTitle,
  Paragraph,
  Tagline,
  FooterText,
  Wrap,
  Footer,
} from "../../components/styledComponents";
import {
  ScrollProgress,
  ProjectHeader,
  ProjectExplanation,
  ProjectImage,
  ProjectMainImage,
  ProjectVideo,
  ScrollSmooth,
  ScrollFooter,
} from "../../components/project";
import Link from "next/link";

const CoffeeBak = () => {
  return (
    <>
      <ScrollProgress color="#ebcd7d" />
      <ScrollSmooth mainColor="#193624" subColor="#fff">
        <Wrap>
          <div className="startMargin">
            <Header padding="32px 0 145px 0" background="unset">
              {/* header section */}
              <ProjectHeader
                title="Coffee Bak"
                lead="An interactive fairy tale for Amsterdam’s biggest fashion
                department store."
                link="http://coffeebak.kr/"
                date="2021"
                headColor="#fff"
                dateColor="#ebcd7d"
              />
              {/* title image section */}
              <ProjectMainImage img={url} />
              {/* discription section*/}
              {/* explanation section*/}
              <ProjectExplanation
                pointColor="#ebcd7d"
                specOne="Development"
                specTwo="Development"
                specThr="Development"
                specFou="Development"
              >
                <Tagline margin="0 0 30px 0" fontColor="#fff">
                  The Amsterdam-based agency DEPT contacted us on behalf of
                  their partners Bijenkorf with the festive ask - “Please craft
                  us an innovative Christmas story”. So as we waved our last
                  goodbyes to August’s comforting warmth and welcomed this
                  challenge as a way to take the bite out of winter’s impending
                  arrival. Winter was coming.
                </Tagline>
                <Paragraph fontColor="#aaa">
                  Sharpening our Apple pencils, and filling our heads with
                  magical imagery, we quickly aligned with DEPT’s team to sketch
                  the outline of the Bijenkorf’s online Christmas campaign.
                  Creating an enchanting moment for online shoppers started with
                  the Bijenkorf name itself: “beehive” in English. Additional
                  magic came from expanding our hive to collaborate with the
                  amazing French-Canadian illustrator Myriam Wares.
                </Paragraph>
              </ProjectExplanation>
            </Header>
            <section>
              {/* first section */}
              <Wrap paddingMobile padding="0 0 105px 0">
                <ProjectVideo
                  classStyle="block"
                  source="/images/coffeebak/coffee_video_1.mp4"
                  scale="1.015"
                  poster="/images/coffeebak/video_poster.webp"
                />
                <ProjectImage img={img1} classStyle="marginGap" />
              </Wrap>
              <ProjectMainImage
                paddingMobile
                img={img2}
                padding="0 0 105px 0"
              />
              {/* second section */}
              <Wrap paddingMobile padding="0 0 105px 0">
                <ProjectImage img={img3} classStyle="block" />
                <ProjectImage img={img4} classStyle="marginGap" />
                <ProjectImage img={img5} classStyle="marginGap" />
              </Wrap>
              {/* Third section */}
              <Wrap paddingMobile padding="0 0 105px 0">
                <ProjectImage img={img6} classStyle="block" />
                <ProjectImage img={img7} classStyle="marginGap" />
                <ProjectImage img={img8} classStyle="marginGap" />
              </Wrap>
            </section>
          </div>
        </Wrap>
        <Link href="/work/binworks">
          <a>
            <Footer>
              <ScrollFooter>
                <FooterText fontColor="#aaa" margin="0 0 10px 0">
                  Next Project
                </FooterText>
                <HeaderTitle
                  fontColor="#000"
                  weight="600"
                  fontFamily="SomeTimes"
                >
                  Bin Works
                </HeaderTitle>
              </ScrollFooter>
            </Footer>
          </a>
        </Link>
      </ScrollSmooth>
    </>
  );
};

export default CoffeeBak;
