import {
  YbWork,
  Gcimg1,
  Gcimg2,
  Gcimg3,
  Gcimg4,
  Gcimg5,
  Gcimg6,
  Gcimg7,
  Gcimg8,
  Gcimg9,
} from "../../components/project/images";
import ScrollContainer from "../../components/project/scrollContainer";
import Seo from "../../components/seo";
import {
  WorkHeader,
  WorkDevelopment,
  WorkSection,
  ImageContainer,
  FullImageContainer,
  FullConceptContainer,
} from "../../components/project/projectStyles";
import Image from "next/image";
import dynamic from "next/dynamic";

const Video = dynamic(() => import("../../components/project/videoContainer"), {
  loading: () => <div></div>,
  ssr: false,
});

const Goodcafeteria = () => {
  return (
    <>
      <Seo title="GoodCafeteria" />

      <ScrollContainer
        mainColor="#f37021"
        // mainColor="#ffa900"
        subColor="#fff"
        pointColor="#210e08"
        nextProject="Yellow Basket"
        link="yellowbasket"
        nextImage={YbWork}
      >
        {/* header */}
        <WorkHeader
          mainColor="#210e08"
          subColor="#fffdd0"
          title="Good Cafeteria"
          date="2022"
          roles={["Front-end development", "Web design"]}
        >
          Lunchflation, a recently created phrase, means the specific inflation
          of lunchtime meal prices. Workers and students cannot buy lunch as it
          was few years ago. Recently, they are turning to cafeteria because
          Eating a meal at cafeteria price is quite cheap in comparison with a
          typical meal at an average restaurant in Korea. Goodcafeteria helps to
          find the best local cafeterias and their menus.
        </WorkHeader>

        {/* full_width image */}
        <FullImageContainer>
          <Image
            alt="project_image"
            src={Gcimg1}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </FullImageContainer>

        {/* description */}
        <WorkDevelopment
          mainColor="#210e08"
          subColor="#fffdd0"
          grayColor="#47331b"
          title="Good Cafeteria"
          language={`React / Styled-Components / Rest API
          AWS S3 / Lottie / MobX / Redux / JWT`}
          link="http://goodcafeteria.s3-website.ap-northeast-2.amazonaws.com/"
        >
          This work is a side project. I was in charge of overall visual aspects
          of the website. I tried to create intuitive user interface so that
          users don’t have to get lost and confused. I built this web using
          React and styled it to look as much like an mobile app as possible.
          The main features of Good Cafeteria are listed as follows. Good
          Cafeteria not only shows the list of cafeterias in order of their
          distance from users, but also help users search for specific places
          they want. Users can save posts to create a favorite list of
          cafeteriasdocument. Further, I built an admin panel to give cafeteria
          owners control over their data.
        </WorkDevelopment>
        {/* section */}
        <WorkSection>
          {/* first section */}
          <div className="section_margin">
            <div className="project_image_wrap">
              <ImageContainer padding="56.25" marginTop>
                <div className="image_wrap">
                  <Image
                    alt="project_image"
                    src={Gcimg2}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                  />
                </div>
              </ImageContainer>

              <ImageContainer padding="95" marginTop>
                <div className="image_wrap">
                  <Image
                    alt="project_image"
                    src={Gcimg3}
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
              src={Gcimg4}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </FullImageContainer>

          {/* second section */}
          <div className="section_margin">
            <div className="project_image_wrap">
              <Video
                padding="56.25"
                border="#e7e7e7"
                source="/images/cafeteria/cafeteria_video_1.mp4"
                scale="1.015"
                poster="/images/cafeteria/video_poster.webp"
              />

              <Video
                padding="56.25"
                border="#e7e7e7"
                marginTop
                source="/images/cafeteria/cafeteria_video_2.mp4"
                scale="1.015"
                poster="/images/cafeteria/video_poster.webp"
              />
            </div>
          </div>

          {/* fullwidth_img_mix */}
          <FullConceptContainer margin>
            <Image
              alt="project_image"
              src={Gcimg5}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </FullConceptContainer>

          {/* third section */}
          <div className="section_margin">
            <div className="project_image_wrap">
              <Video
                padding="56.25"
                border="#e7e7e7"
                source="/images/cafeteria/cafeteria_video_3.mp4"
                scale="1.015"
                poster="/images/cafeteria/video_poster.webp"
              />
              <Video
                marginTop
                padding="56.25"
                border="#e7e7e7"
                source="/images/cafeteria/cafeteria_video_4.mp4"
                scale="1.015"
                poster="/images/cafeteria/video_poster.webp"
              />
            </div>
          </div>

          {/* full_width image */}
          <FullImageContainer margin>
            <Image
              alt="project_image"
              src={Gcimg6}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </FullImageContainer>

          {/* fourth section */}
          <div className="section_margin">
            <div className="project_image_wrap">
              <ImageContainer padding="56.25" marginTop border="#e7e7e7">
                <div className="image_wrap">
                  <Image
                    alt="project_image"
                    src={Gcimg7}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                  />
                </div>
              </ImageContainer>

              <ImageContainer padding="56.25" marginTop border="#e7e7e7">
                <div className="image_wrap">
                  <Image
                    alt="project_image"
                    src={Gcimg8}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                  />
                </div>
              </ImageContainer>

              <ImageContainer padding="142" marginTop>
                <div className="image_wrap">
                  <Image
                    alt="project_image"
                    src={Gcimg9}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                  />
                </div>
              </ImageContainer>
            </div>
          </div>
        </WorkSection>
      </ScrollContainer>
    </>
  );
};

export default Goodcafeteria;
