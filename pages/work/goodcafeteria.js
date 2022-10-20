import img1 from "/public/images/cafeteria/cafeteria_img_1.webp";
import img2 from "/public/images/cafeteria/cafeteria_img_2.webp";
import img3 from "/public/images/cafeteria/cafeteria_img_3.webp";
import img4 from "/public/images/cafeteria/cafeteria_img_4.webp";
import img5 from "/public/images/cafeteria/cafeteria_img_5.webp";
import img6 from "/public/images/cafeteria/cafeteria_img_6.webp";
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
  FirstSection,
} from "../../components/project";
import Link from "next/link";
import Seo from "../../components/seo";

const Goodcafeteria = () => {
  return (
    <>
      <Seo title="GoodCafeteria" />
      <ScrollProgress color="#000" />
      <ScrollSmooth mainColor="#ff9030" subColor="#ededed">
        {/* <ScrollSmooth mainColor="#ff9030" subColor="#363636"> */}
        {/*mainColor="#e2e0d6" subColor="#ededed" d9d9d9  e8e6e4 dbdbdb f09649*/}

        <Wrap>
          <div className="startMargin">
            <Header padding="32px 0 145px 0" background="unset">
              {/* header section */}
              <ProjectHeader
                title="Good Cafeteria"
                lead="An interactive fairy tale for Amsterdam’s biggest fashion
                department store."
                link="https://d3txk89kbw52f5.cloudfront.net/"
                date="2022"
                headColor="#fff"
                dateColor="#000"
              />
              {/* title image section */}
              <ProjectMainImage img={img1} />
              {/* explanation section*/}
              <ProjectExplanation
                pointColor="#000"
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
                <Paragraph fontColor="#e8e6e4">
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
                good
                videoSource="/images/cafeteria/cafeteria_video_1.mp4"
                videoPoster="/images/cafeteria/video_poster.webp"
                imgSourceFirst="/images/cafeteria/cafeteria_video_2.mp4"
                imgSourceSecond={img2}
              />

              {/* second section */}
              <Wrap paddingMobile padding="0 0 105px 0">
                <ProjectVideo
                  classStyle="block"
                  source="/images/cafeteria/cafeteria_video_3.mp4"
                  scale="1.015"
                  poster="/images/cafeteria/video_poster.webp"
                />
                <ProjectVideo
                  classStyle="marginGap"
                  source="/images/cafeteria/cafeteria_video_4.mp4"
                  scale="1.015"
                  poster="/images/cafeteria/video_poster.webp"
                />
                <ProjectImage img={img3} classStyle="marginGap" />
              </Wrap>
              {/* Third section */}
              <Wrap paddingMobile padding="0 0 105px 0">
                <ProjectImage img={img4} classStyle="block" />
                <ProjectImage img={img5} classStyle="marginGap" />
                <ProjectImage img={img6} classStyle="marginGap" />
              </Wrap>
            </section>
          </div>
        </Wrap>
        <Link href="/work/yellowbasket">
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
                  Yello Basket
                </HeaderTitle>
              </ScrollFooter>
            </Footer>
          </a>
        </Link>
      </ScrollSmooth>
    </>
  );
};

export default Goodcafeteria;
