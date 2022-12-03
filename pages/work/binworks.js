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
import { ScrollSmooth } from "../../components/project";
import {
  WorkHeader,
  WorkDevelopment,
  WorkSection,
  ImageContainer,
  FullImageContainer,
  FullConceptContainer,
  MobileContainer,
} from "../../components/project/projectStyles";
import VideoPlayer from "../../components/styledComponents/video";
import Link from "next/link";
import Seo from "../../components/seo";
import Image from "next/image";

const BinWorks = () => {
  return (
    <>
      <Seo title="BinWorks" />
      <ScrollSmooth
        mainColor="#090909"
        subColor="#fff"
        pointColor="#feae2e"
        nextProject="Four Toon"
        link="fourtoon"
        nextImage={FoNext}
      >
        {/* header */}
        <WorkHeader mainColor="#feae2e" subColor="#fff">
          <div className="work_container">
            <div className="work_wrap">
              <h1 className="work_title">Bin Works</h1>
              <div className="work_overview">
                <p className="work_overview_text">
                  Binworks is made to be an web space where Lee Da Bin expresses
                  his ideas using various artworks. The Nike Incense holder
                  counts among his major wokrs. Ceramic and wood are materials
                  that’s often used for an incense holder, but He used plastic
                  material to think outside the box.
                </p>
                <div className="work_overview_des">
                  <p className="work_date">2021</p>
                  <ul className="work_role">
                    <li>Front-end development</li>
                    <li>
                      <span className="circle"></span>
                    </li>
                    <li>Web design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
        >
          <div className="work_development">
            <div className="work_development_list">
              <div className="work_development_tools">
                <dl>
                  <dt>CLIENT</dt>
                  <dd>Bin Works</dd>
                </dl>
                <dl>
                  <dt>TOOLS</dt>
                  <dd>HTML / CSS / Vanila JS</dd>
                </dl>
              </div>
              <Link href="https://binworks.kr/" passHref>
                <a target="_blank" rel="website link" className="work_link">
                  View Website
                </a>
              </Link>
            </div>

            <p className="work_text">
              BinWorks has a unique and premium feel to it. The design of
              website needed to fit accordingly and to translate those core
              values into the visual. I desinged site with light text on a black
              background to ensure brand consistency. I created most of visual
              elements like header, hero section, buttons and so on. All pages
              are fully responsive and optimised for mobile viewing.
            </p>
          </div>
        </WorkDevelopment>

        {/* section */}
        <WorkSection>
          {/* first section */}
          <div className="section_margin">
            <div className="project_image_wrap">
              <ImageContainer padding="56.25" border="#282828">
                <div className="image_wrap">
                  <VideoPlayer
                    source="/images/binworks/binworks_video_1.mp4"
                    scale="1.015"
                    poster="/images/binworks/video_poster.webp"
                  />
                </div>
              </ImageContainer>

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
                <ImageContainer padding="283.02">
                  <div className="image_wrap">
                    <Image
                      alt="project_image"
                      src={BwimgM1}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      style={{
                        borderRadius: "12px",
                      }}
                    />
                  </div>
                </ImageContainer>
              </div>
              <div className="project_mobile_image">
                <ImageContainer padding="350">
                  <div className="image_wrap">
                    <Image
                      alt="project_image"
                      src={BwimgM2}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      style={{
                        borderRadius: "12px",
                      }}
                    />
                  </div>
                </ImageContainer>
              </div>
              <div className="project_mobile_image">
                <ImageContainer padding="231.447">
                  <div className="image_wrap">
                    <Image
                      alt="project_image"
                      src={BwimgM3}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      style={{
                        borderRadius: "12px",
                      }}
                    />
                  </div>
                </ImageContainer>
              </div>
            </MobileContainer>
          </div>
        </WorkSection>
      </ScrollSmooth>
    </>
  );
};

export default BinWorks;
