import {
  GcNext,
  RcWork,
  Rcimg1,
  Rcimg2,
  Rcimg3,
  Rcimg4,
  Rcimg5,
  RcimgM1,
  RcimgM2,
  RcimgM3,
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
import Image from "next/image";
import Seo from "../../components/seo";
import dynamic from "next/dynamic";

const Video = dynamic(() => import("../../components/project/videoContainer"), {
  loading: () => <div></div>,
  ssr: false,
});

const CarrotRentCar = () => {
  return (
    <>
      <Seo title="CarrotRentCar" />
      <ScrollContainer
        mainColor="#fff"
        subColor="#dae4e1"
        pointColor="#14473c"
        nextProject="Good Cafeteria"
        link="goodcafeteria"
        nextImage={GcNext}
      >
        {/* header */}
        <WorkHeader
          mainColor="#14473c"
          subColor="#312b28"
          title="Carrot Rent Car"
          date="2021"
          roles={["Front-end development", "Web design"]}
        >
          Jeju Carrot Rent Car is the company to rent cars in Jeju Island. Jeju
          Carrot Rent Car considers customer service its top priority and offers
          a range of benefits like return policy, free GPS navigation, collision
          coverage and etc for complete customer satisfaction.
        </WorkHeader>
        {/* full_width image */}
        <FullImageContainer>
          <Image
            alt="project_image"
            src={RcWork}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </FullImageContainer>
        {/* description */}
        <WorkDevelopment
          mainColor="#14473c"
          subColor="#312b28"
          grayColor="#79874a"
          title="Carrot Rent Car"
          language="HTML / CSS / Vanila JS"
          link="none"
        >
          I created the visual aspects of the website such as layouts, elements,
          and even their logo. I met with a client, online and in person, in
          order to get clear picture of the message that needs to be portrayed
          on the website. In accordance with the client’s requirements, I
          selected the appropriate colors, font, layour and images to appeal to
          the target audience. I built the user interface with vanila JS and
          css, ensuring web design is optimized for smartphones.
        </WorkDevelopment>
        {/* section */}
        <WorkSection>
          {/* first section */}
          <div className="section_margin">
            <div className="project_image_wrap">
              <Video
                padding="56.25"
                border="#e7e7e7"
                source="/images/rentcar/rent_video_1.mp4"
                scale="1.015"
                poster="/images/rentcar/video_poster.webp"
              />

              <ImageContainer padding="113.25" border="#e7e7e7" marginTop>
                <div className="image_wrap">
                  <Image
                    alt="project_image"
                    src={Rcimg1}
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
              src={Rcimg2}
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
                    src={Rcimg3}
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
                    src={Rcimg4}
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
              src={Rcimg5}
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
                      src={RcimgM1}
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
                      src={RcimgM2}
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
                      src={RcimgM3}
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

export default CarrotRentCar;
