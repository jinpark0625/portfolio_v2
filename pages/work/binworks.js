import url from "/public/images/proejct_4.webp";
import img1 from "/public/images/binworks/binworks_img_1.png";
import img2 from "/public/images/binworks/binworks_img_2.webp";
import img3 from "/public/images/binworks/binworks_img_3.png";
import img4 from "/public/images/binworks/binworks_img_6.png";
import img5 from "/public/images/binworks/binworks_img_7.png";
import img7 from "/public/images/binworks/binworks_img_m_1.png";
import img8 from "/public/images/binworks/binworks_img_m_2.png";
import img9 from "/public/images/binworks/binworks_img_m_3.png";
import nextImage from "/public/images/binworks/next.jpg";
import { VideoPlayer } from "../../components/styledComponents";
import { ScrollSmooth } from "../../components/project";
import Seo from "../../components/seo";
import Image from "next/image";
import {
  WorkHeader,
  WorkDevelopment,
  WorkSection,
  ImageContainer,
  FullImageContainer,
  FullConceptContainer,
  MobileContainer,
} from "../../components/project/projectStyles";
import Link from "next/link";

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
        nextImage={nextImage}
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
            src={url}
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
                    src={img1}
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
              src={img2}
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
                    src={img4}
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
                    src={img5}
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
              src={img3}
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
                      src={img7}
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
                      src={img8}
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
                      src={img9}
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
