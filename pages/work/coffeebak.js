import url from "/public/images/proejct_3.webp";
import img1 from "/public/images/coffeebak/coffee_img_1.webp";
import img2 from "/public/images/coffeebak/coffee_img_2.webp";
import img3 from "/public/images/coffeebak/coffee_img_3.webp";
import img4 from "/public/images/coffeebak/coffee_img_4.webp";
import img5 from "/public/images/coffeebak/coffee_img_5.webp";
import img6 from "/public/images/coffeebak/coffee_img_6.webp";
import img7 from "/public/images/coffeebak/coffee_img_7.webp";
import img8 from "/public/images/coffeebak/coffee_img_8.webp";
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
  ScrollSmooth,
  FirstSection,
  SecondSection,
  ProjectFooter,
} from "../../components/project";

import Seo from "../../components/seo";

const CoffeeBak = () => {
  return (
    <>
      <Seo title="CoffeeBak" />
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
              <FirstSection
                videoSource="/images/coffeebak/coffee_video_1.mp4"
                videoPoster="/images/coffeebak/video_poster.webp"
                imgSourceFirst={img1}
                imgSourceSecond={img2}
              />
              {/* second section */}
              <SecondSection
                videoSource={img3}
                imgSourceFirst={img4}
                imgSourceSecond={img5}
              />
              {/* Third section */}
              <Wrap paddingMobile padding="0 0 105px 0">
                <ProjectImage img={img6} classStyle="block" />
                <ProjectImage img={img7} classStyle="marginGap" />
                <ProjectImage img={img8} classStyle="marginGap" />
              </Wrap>
            </section>
          </div>
        </Wrap>
        <ProjectFooter
          link="/work/binworks"
          background="#fff"
          title="Bin Works"
        />
      </ScrollSmooth>
    </>
  );
};

export default CoffeeBak;
