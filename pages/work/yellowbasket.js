import {
  YbWork,
  CoNext,
  Ybimg1,
  Ybimg2,
  Ybimg3,
  Ybimg4,
  Ybimg5,
  YbimgM1,
  YbimgM2,
  YbimgM3,
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
import Seo from "../../components/seo";
import VideoPlayer from "../../components/styledComponents/video";
import Image from "next/image";
import Link from "next/link";

const YellowBasket = () => {
  return (
    <>
      <Seo title="YellowBasket" />
      <ScrollSmooth
        mainColor="#121212"
        subColor="#f9f6f1"
        pointColor="#ffcc00"
        nextProject="Coffee Bak"
        link="coffeebak"
        nextImage={CoNext}
      >
        {/* header */}
        <WorkHeader mainColor="#ffcc00" subColor="#fff">
          <div className="work_container">
            <div className="work_wrap">
              <h1 className="work_title">Yellow Basket</h1>
              <div className="work_overview">
                <p className="work_overview_text">
                  Yellow Basket is the “shop-in-shop” concept store having a
                  wide selection of products like cosmetics, electronics,
                  stationery and so on. It’s all about the convenience of being
                  able to find everything people need in one place.
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
            src={YbWork}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </FullImageContainer>

        {/* description */}
        <WorkDevelopment
          mainColor="#ffcc00"
          subColor="#fff"
          grayColor="#8D8D8D"
        >
          <div className="work_development">
            <div className="work_development_list">
              <div className="work_development_tools">
                <dl>
                  <dt>CLIENT</dt>
                  <dd>Yellow basket</dd>
                </dl>
                <dl>
                  <dt>TOOLS</dt>
                  <dd>HTML / CSS / Vanila JS</dd>
                </dl>
              </div>
              <Link href="https://ybasket.co.kr/" passHref>
                <a
                  target="_blank"
                  rel="website link"
                  className="work_link"
                  aria-label="Link to website"
                >
                  View Website
                </a>
              </Link>
            </div>

            <p className="work_text">
              Together with my senior developer, we built the front and back-end
              of this website. I Built the front-end with HTML, CSS, and JS to
              improve the appearance of the website. I optimized web design for
              mobile and other platforms for maximum speed.
            </p>
          </div>
        </WorkDevelopment>
        {/* section */}
        <WorkSection>
          {/* first section */}
          <div className="section_margin">
            <div className="project_image_wrap">
              <ImageContainer padding="56.25" border="#e7e7e7">
                <div className="image_wrap">
                  <VideoPlayer
                    source="/images/yellowbasket/yellow_video_1.mp4"
                    scale="1.015"
                    poster="/images/yellowbasket/video_poster.webp"
                  />
                </div>
              </ImageContainer>

              <ImageContainer padding="399.25" border="#e7e7e7" marginTop>
                <div className="image_wrap">
                  <Image
                    alt="project_image"
                    src={Ybimg1}
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
              src={Ybimg2}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </FullImageContainer>

          {/* second section */}
          <div className="section_margin">
            <div className="project_image_wrap">
              <ImageContainer padding="111.25" border="#e7e7e7">
                <div className="image_wrap">
                  <Image
                    alt="project_image"
                    src={Ybimg3}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                  />
                </div>
              </ImageContainer>

              <ImageContainer padding="56.25" border="#e7e7e7" marginTop>
                <div className="image_wrap">
                  <Image
                    alt="project_image"
                    src={Ybimg4}
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
              src={Ybimg5}
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
                      src={YbimgM1}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                    />
                  </div>
                </ImageContainer>
              </div>
              <div className="project_mobile_image">
                <ImageContainer padding="350">
                  <div className="image_wrap">
                    <Image
                      alt="project_image"
                      src={YbimgM2}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                    />
                  </div>
                </ImageContainer>
              </div>
              <div className="project_mobile_image">
                <ImageContainer padding="231.447">
                  <div className="image_wrap">
                    <Image
                      alt="project_image"
                      src={YbimgM3}
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
      </ScrollSmooth>
    </>
  );
};

export default YellowBasket;
