import url from "/public/images/proejct_6.webp";
import img1 from "/public/images/rentcar/rent_img_1.png";
import img2 from "/public/images/rentcar/rent_img_2.webp";
import img3 from "/public/images/rentcar/rent_img_3.png";
import img4 from "/public/images/rentcar/rent_img_4.png";
import img5 from "/public/images/rentcar/rent_img_5.png";
import img6 from "/public/images/rentcar/rent_img_m_1.png";
import img7 from "/public/images/rentcar/rent_img_m_2.png";
import img8 from "/public/images/rentcar/rent_img_m_3.png";
import nextImage from "/public/images/rentcar/next.jpg";

import { VideoPlayer } from "../../components/styledComponents";
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
import Image from "next/image";
import Seo from "../../components/seo";

const CarrotRentCar = () => {
  return (
    <>
      <Seo title="CarrotRentCar" />
      <ScrollSmooth
        mainColor="#fff"
        subColor="#dae4e1"
        pointColor="#14473c"
        nextProject="Good Cafeteria"
        link="goodcafeteria"
        nextImage={nextImage}
      >
        {/* header */}
        <WorkHeader mainColor="#14473c" subColor="#312b28">
          <div className="work_container">
            <div className="work_wrap">
              <h1 className="work_title">Carrot Rent Car</h1>
              <div className="work_overview">
                <p className="work_overview_text">
                  Jeju Carrot Rent Car is the company to rent cars from Jeju
                  Island. Jeju Carrot Rent Car considers customer service its
                  top priority and offers a range of benefits like return
                  policy, free GPS navigation, collision coverage and etc for
                  complete customer satisfaction.
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
          mainColor="#14473c"
          subColor="#312b28"
          grayColor="#8D8D8D"
        >
          <div className="work_development">
            <div className="work_development_list">
              <div className="work_development_tools">
                <dl>
                  <dt>CLIENT</dt>
                  <dd>Carrot Rent Car</dd>
                </dl>
                <dl>
                  <dt>TOOLS</dt>
                  <dd>HTML / CSS / Vanila JS</dd>
                </dl>
              </div>

              <span className="work_link">View Website (currently closed)</span>
            </div>

            <p className="work_text">
              I created the visual aspects of the website such as layouts,
              elements, and even their logo. I met with a client, online and in
              person, in order to get clear picture of the message that needs to
              be portrayed on the website. In accordance with the client’s
              requirements, I selected the appropriate colors, font, layour and
              images to appeal to the target audience. I built the user
              interface with vanila JS and css, ensuring web design is optimized
              for smartphones.
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
                    source="/images/rentcar/rent_video_1.mp4"
                    scale="1.015"
                    poster="/images/rentcar/video_poster.webp"
                  />
                </div>
              </ImageContainer>

              <ImageContainer padding="113.25" border="#e7e7e7" marginTop>
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
              <ImageContainer padding="85" border="#e7e7e7">
                <div className="image_wrap">
                  <Image
                    alt="project_image"
                    src={img3}
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
                    src={img4}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                  />
                </div>
              </ImageContainer>
            </div>
          </div>

          {/* fullwidth_img_mix */}
          <FullConceptContainer margin padding="0 0 44% 0">
            <Image
              alt="project_image"
              src={img5}
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
                      src={img6}
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
                <ImageContainer padding="231.447">
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
            </MobileContainer>
          </div>
        </WorkSection>
      </ScrollSmooth>
    </>
  );
};

export default CarrotRentCar;
