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
  Paragraph,
  Tagline,
  Wrap,
} from "../../components/styledComponents";
import {
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
import { useRef } from "react";

const YellowBasket = () => {
  const ref = useRef();

  return (
    <>
      <Seo title="YellowBasket" />
      <ScrollSmooth
        mainColor="#121212"
        subColor="#f9f6f1"
        scrollColor="#ffcc00"
        section={ref}
      >
        <Wrap>
          <div className="startMargin">
            <Header padding="32px 0 145px 0" background="unset">
              {/* header section */}
              <ProjectHeader
                title="Yellow Basket"
                lead="Meet with a new experience"
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
                specOne="Front-end development"
              >
                <Tagline margin="0 0 30px 0" fontColor="#fff">
                  Yellow Basket is the “shop-in-shop” concept store having a
                  wide selection of products like cosmetics, electronics,
                  stationery and so on. It’s all about the convenience of being
                  able to find everything people need in one place.
                </Tagline>
                <Paragraph fontColor="#6b6b6b">
                  Together with my senior developer, we built the front and
                  back-end of this website. I Built the front-end with HTML,
                  CSS, and JS to improve the appearance of the website. I
                  optimized web design for mobile and other platforms for
                  maximum speed.
                </Paragraph>
              </ProjectExplanation>
            </Header>
            <section ref={ref}>
              {/* first section */}
              <FirstSection
                videoSource="/images/yellowbasket/yellow_video_1.mp4"
                videoPoster="/images/yellowbasket/video_poster.webp"
                imgSourceFirst={img1}
                imgSourceSecond={img2}
              />

              {/* second section */}
              <SecondSection
                vid
                videoSource="/images/yellowbasket/yellow_video_2.mp4"
                videoPoster="/images/yellowbasket/video_poster.webp"
                imgSourceFirst={img3}
                imgSourceSecond={img4}
              />

              {/* Third section */}
              <Wrap paddingMobile padding="0 0 105px 0">
                <ProjectImage img={img5} classStyle="block" />
                <ProjectImage img={img6} classStyle="marginGap" />
                <ProjectImage img={img7} classStyle="marginGap" />
              </Wrap>
            </section>
          </div>
        </Wrap>

        <ProjectFooter
          link="/work/coffeebak"
          background="#fff"
          title="Coffee Bak"
        />
      </ScrollSmooth>
    </>
  );
};

export default YellowBasket;
