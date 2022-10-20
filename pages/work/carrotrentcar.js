import url from "/public/images/proejct_6.webp";
import img1 from "/public/images/rentcar/rent_img_1.webp";
import img2 from "/public/images/rentcar/rent_img_2.webp";
import img3 from "/public/images/rentcar/rent_img_3.webp";
import img4 from "/public/images/rentcar/rent_img_4.webp";
import img5 from "/public/images/rentcar/rent_img_5.webp";
import img6 from "/public/images/rentcar/rent_img_6.webp";

import {
  Header,
  Paragraph,
  Tagline,
  Wrap,
} from "../../components/styledComponents";
import {
  ScrollProgress,
  ProjectHeader,
  ProjectExplanation,
  ProjectImage,
  ProjectMainImage,
  ProjectVideo,
  ScrollSmooth,
  FirstSection,
  SecondSection,
  ProjectFooter,
} from "../../components/project";

import Seo from "../../components/seo";

const CarrotRentCar = () => {
  return (
    <>
      <Seo title="CarrotRentCar" />
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
              <FirstSection
                videoSource="/images/rentcar/rent_video_1.mp4"
                videoPoster="/images/rentcar/video_poster.webp"
                imgSourceFirst={img1}
                imgSourceSecond={img2}
              />
              {/* second section */}
              <SecondSection
                vid
                videoSource="/images/rentcar/rent_video_2.mp4"
                videoPoster="/images/rentcar/video_poster.webp"
                imgSourceFirst={img3}
                imgSourceSecond={img4}
              />
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
        <ProjectFooter
          link="/work/goodcafeteria"
          background="#dae4e1"
          title="Good Cafeteria"
        />
      </ScrollSmooth>
    </>
  );
};

export default CarrotRentCar;
