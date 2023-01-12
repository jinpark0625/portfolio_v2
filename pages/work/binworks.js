import {
  BwWork,
  FoNext,
  Bwimg1,
  Bwimg2,
  Bwimg3,
  Bwimg4,
  Bwimg5,
  BwimgM1,
  BwimgM2,
  BwimgM3,
} from "../../components/project/images";
import ScrollContainer from "../../components/project/scrollContainer";
import {
  WorkHeader,
  WorkDevelopment,
  WorkSection,
  ImageContainer,
  FullImageContainer,
  FullConceptContainer,
  MobileContainer,
} from "../../components/project/projectStyles";
import Seo from "../../components/seo";
import Image from "next/image";
import dynamic from "next/dynamic";

const Video = dynamic(() => import("../../components/project/videoContainer"), {
  loading: () => <div></div>,
  ssr: false,
});

const BinWorks = () => {
  return (
    <>
      <Seo title="BinWorks" />
      <ScrollContainer
        mainColor="#090909"
        subColor="#fff"
        pointColor="#feae2e"
        nextProject="Four Toon"
        link="fourtoon"
        nextImage={FoNext}
      >
        {/* header */}
        <WorkHeader
          mainColor="#feae2e"
          subColor="#fff"
          title="Bin Works"
          date="2021"
          roles={["Front-end development", "Web design"]}
        >
          Binworks is a web space where Lee Da Bin expresses his ideas with
          various artworks. The Nike Incense holder counts among his major
          works. Ceramics and wood are materials that are often used for an
          incense holder, but He used plastic materials to think outside the
          box.
        </WorkHeader>

        {/* full_width image */}
        <FullImageContainer>
          <Image
            alt="project_image"
            src={BwWork}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </FullImageContainer>

        {/* description */}
        <WorkDevelopment
          mainColor="#feae2e"
          subColor="#fff"
          grayColor="#8D8D8D"
          title="Bin Works"
          language="HTML / CSS / Vanila JS"
          link="https://binworks.kr/"
        >
          BinWorks has a unique and premium feel to it. The design of website
          needed to fit accordingly and to translate those core values into the
          visual. I designed the site with light text on a black background to
          ensure brand consistency. I created most of the visual elements like
          header, hero section, buttons, and so on. All pages are fully
          responsive and optimised for mobile viewing.
        </WorkDevelopment>

        {/* section */}
        <WorkSection>
          {/* first section */}
          <div className="section_margin">
            <div className="project_image_wrap">
              <Video
                padding="56.25"
                border="#282828"
                source="/images/binworks/binworks_video_1.mp4"
                scale="1.015"
                poster="/images/binworks/video_poster.webp"
              ></Video>

              <ImageContainer padding="147" border="#282828" marginTop>
                <div className="image_wrap">
                  <Image
                    alt="project_image"
                    src={Bwimg1}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                  />
                </div>
              </ImageContainer>
            </div>
          </div>
          {/* full_width image */}
          <FullImageContainer margin>
            <Image
              alt="project_image"
              src={Bwimg2}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </FullImageContainer>

          {/* second section */}
          <div className="section_margin">
            <div className="project_image_wrap">
              <ImageContainer padding="56.25" border="#282828" marginTop>
                <div className="image_wrap">
                  <Image
                    alt="project_image"
                    src={Bwimg3}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                  />
                </div>
              </ImageContainer>

              <ImageContainer padding="56.25" border="#282828" marginTop>
                <div className="image_wrap">
                  <Image
                    alt="project_image"
                    src={Bwimg4}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                  />
                </div>
              </ImageContainer>
            </div>
          </div>

          {/* fullwidth_img_mix */}
          <FullConceptContainer margin>
            <Image
              alt="project_image"
              src={Bwimg5}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </FullConceptContainer>

          {/* mobile */}
          <div className="section_margin">
            <MobileContainer>
              <div className="project_mobile_image">
                <ImageContainer padding="283.02" mobile>
                  <div className="image_wrap">
                    <Image
                      alt="project_image"
                      src={BwimgM1}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                    />
                  </div>
                </ImageContainer>
              </div>
              <div className="project_mobile_image">
                <ImageContainer padding="350" mobile>
                  <div className="image_wrap">
                    <Image
                      alt="project_image"
                      src={BwimgM2}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                    />
                  </div>
                </ImageContainer>
              </div>
              <div className="project_mobile_image">
                <ImageContainer padding="231.447" mobile>
                  <div className="image_wrap">
                    <Image
                      alt="project_image"
                      src={BwimgM3}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                    />
                  </div>
                </ImageContainer>
              </div>
            </MobileContainer>
          </div>
        </WorkSection>
      </ScrollContainer>
    </>
  );
};

export default BinWorks;
