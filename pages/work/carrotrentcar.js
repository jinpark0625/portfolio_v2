import React from "react";
import url from "/public/images/proejct_6.jpg";
import img1 from "/public/images/rentcar/rent_img_1.png";
import img2 from "/public/images/rentcar/rent_img_2.png";
import img3 from "/public/images/rentcar/rent_img_3.png";
import img4 from "/public/images/rentcar/rent_img_4.webp";
import img5 from "/public/images/rentcar/rent_img_5.png";
import img6 from "/public/images/rentcar/rent_img_6.png";
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

const CarrotRentCar = () => {
  return (
    <>
      <ScrollProgress color="#14473c" />
      <ScrollSmooth mainColor="#fff" subColor="#dae4e1">
        <Wrap>
          <div className="startMargin">
            <Header padding="32px 0 145px 0" background="unset">
              {/* header section */}
              <ProjectHeader
                title="Jeju Carrot Rent Car"
                lead="An interactive fairy tale for Amsterdam’s biggest fashion
                department store."
                link="#"
                date="2021"
                headColor="#312b28"
                dateColor="#14473c"
              />
              {/* title image section */}
              <ProjectMainImage img={url} />
              {/* explanation section*/}
              <ProjectExplanation
                pointColor="#14473c"
                specOne="Development"
                specTwo="Development"
                specThr="Development"
                specFou="Development"
              >
                <Tagline margin="0 0 30px 0" fontColor="#312b28">
                  The Amsterdam-based agency DEPT contacted us on behalf of
                  their partners Bijenkorf with the festive ask - “Please craft
                  us an innovative Christmas story”. So as we waved our last
                  goodbyes to August’s comforting warmth and welcomed this
                  challenge as a way to take the bite out of winter’s impending
                  arrival. Winter was coming.
                </Tagline>
                <Paragraph fontColor="#8e7365">
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
                  source="/images/rentcar/rent_video_1.mp4"
                  scale="1.015"
                  poster="/images/rentcar/video_poster.webp"
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
                  source="/images/rentcar/rent_video_2.mp4"
                  scale="1.015"
                  poster="/images/rentcar/video_poster.webp"
                />
                <ProjectImage img={img3} classStyle="marginGap" />
                <ProjectImage img={img4} classStyle="marginGap" />
              </Wrap>
              {/* Third section */}
              <Wrap paddingMobile padding="0 0 105px 0">
                <ProjectVideo
                  classStyle="block"
                  source="/images/rentcar/rent_video_3.mp4"
                  scale="1.015"
                  poster="/images/rentcar/video_poster.webp"
                />
                <ProjectImage img={img5} classStyle="marginGap" />
                <ProjectImage img={img6} classStyle="marginGap" />
              </Wrap>
            </section>
          </div>
        </Wrap>
        <Link href="/work/goodcafeteria">
          <a>
            <Footer background="#dae4e1">
              <ScrollFooter>
                <FooterText fontColor="#aaa" margin="0 0 10px 0">
                  Next Project
                </FooterText>
                <HeaderTitle
                  fontColor="#000"
                  weight="600"
                  fontFamily="SomeTimes"
                >
                  Good Cafeteria
                </HeaderTitle>
              </ScrollFooter>
            </Footer>
          </a>
        </Link>
      </ScrollSmooth>
    </>
  );
};

export default CarrotRentCar;
