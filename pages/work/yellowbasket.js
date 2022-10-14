import React from "react";
import url from "/public/images/proejct_2.webp";
import img1 from "/public/images/yellowbasket/yellow_img_1.webp";
import img2 from "/public/images/yellowbasket/yellow_img_2.webp";
import img3 from "/public/images/yellowbasket/yellow_img_3.webp";
import img4 from "/public/images/yellowbasket/yellow_img_4.webp";
import img5 from "/public/images/yellowbasket/yellow_img_5.webp";
import img6 from "/public/images/yellowbasket/yellow_img_6.webp";
import img7 from "/public/images/yellowbasket/yellow_img_7.webp";
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
import Seo from "../../components/seo";
const YellowBasket = () => {
  return (
    <>
      <Seo title="YellowBasket" />
      <ScrollProgress color="#ffcc00" />
      <ScrollSmooth mainColor="#121212" subColor="#f9f6f1">
        <Wrap>
          <div className="startMargin">
            <Header padding="32px 0 145px 0" background="unset">
              {/* header section */}
              <ProjectHeader
                title="Yellow Basket"
                lead="An interactive fairy tale for Amsterdam’s biggest fashion
                department store."
                link="https://ybasket.co.kr/"
                date="2021"
                headColor="#fff"
                dateColor="#ffcc00"
              />
              {/* title image section */}
              <ProjectMainImage img={url} />
              {/* explanation section*/}
              <ProjectExplanation
                pointColor="#ffcc00"
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
                <Paragraph fontColor="#6b6b6b">
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
                  source="/images/yellowbasket/yellow_video_1.mp4"
                  scale="1.015"
                  poster="/images/yellowbasket/video_poster.webp"
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
                <ProjectVideo
                  classStyle="block"
                  source="/images/yellowbasket/yellow_video_2.mp4"
                  scale="1.015"
                  poster="/images/yellowbasket/video_poster.webp"
                />
                <ProjectImage img={img3} classStyle="marginGap" />
                <ProjectImage img={img4} classStyle="marginGap" />
              </Wrap>
              {/* Third section */}
              <Wrap paddingMobile padding="0 0 105px 0">
                <ProjectImage img={img5} classStyle="block" />
                <ProjectImage img={img6} classStyle="marginGap" />
                <ProjectImage img={img7} classStyle="marginGap" />
              </Wrap>
            </section>
          </div>
        </Wrap>
        <Link href="/work/coffeebak">
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
                  Coffee Bak
                </HeaderTitle>
              </ScrollFooter>
            </Footer>
          </a>
        </Link>
      </ScrollSmooth>
    </>
  );
};

export default YellowBasket;
