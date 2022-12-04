// import img1 from "/public/images/cafeteria/cafeteria_img_1.webp";
import img1 from "/public/images/cafeteria/cafeteria_img_1.png";
import img2 from "/public/images/cafeteria/cafeteria_img_2.webp";
// import img3 from "/public/images/cafeteria/cafeteria_img_3.webp";
import img3 from "/public/images/cafeteria/logo.png";
import img4 from "/public/images/cafeteria/cafeteria_img_4.png";
import img5 from "/public/images/cafeteria/cafeteria_img_5.webp";
import img6 from "/public/images/cafeteria/cafeteria_img_6.webp";
import test from "/public/images/cafeteria/e.png";
import nextImage from "/public/images/proejct_2.webp";
import VideoPlayer from "../../components/styledComponents/video";
import { ScrollSmooth } from "../../components/project";
import Link from "next/link";
import Seo from "../../components/seo";
import {
  WorkHeader,
  WorkDevelopment,
  WorkSection,
  ImageContainer,
  FullImageContainer,
  MobileContainer,
  FullConceptContainer,
} from "../../components/project/projectStyles";
import Image from "next/image";
import GoodCafeteriaLogo from "../../components/project/goodCafeteriaLogo";

const Goodcafeteria = () => {
  return (
    <>
      <Seo title="GoodCafeteria" />

      <ScrollSmooth
        mainColor="#f37021"
        subColor="#fff"
        pointColor="#210e08"
        nextProject="Yellow Basket"
        link="yellowbasket"
        nextImage={nextImage}
      >
        {/* header */}
        <WorkHeader mainColor="#210e08" subColor="#fffdd0">
          <div className="work_container">
            <div className="work_wrap">
              <h1 className="work_title">Good Cafeteria</h1>
              <div className="work_overview">
                <p className="work_overview_text">
                  Lunchflation, a recently created phrase, means the specific
                  inflation of lunchtime meal prices. Workers and students
                  cannot buy lunch as it was few years ago. Recently, they are
                  turning to cafeteria because Eating a meal at cafeteria price
                  is quite cheap in comparison with a typical meal at an average
                  restaurant in Korea. Goodcafeteria helps to find the best
                  local cafeterias and their menus.
                </p>
                <div className="work_overview_des">
                  <p className="work_date">2022</p>
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
            src={img1}
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
        >
          <div className="work_development">
            <div className="work_development_list">
              <div className="work_development_tools">
                <dl>
                  <dt>CLIENT</dt>
                  <dd>Good Cafeteria</dd>
                </dl>
                <dl>
                  <dt>TOOLS</dt>
                  <dd>
                    React / Styled-Components / Rest API
                    <br />
                    AWS S3 / Lottie / MobX / Redux / JWT
                  </dd>
                </dl>
              </div>
              <Link href="https://ybasket.co.kr/" passHref>
                <a target="_blank" rel="website link" className="work_link">
                  View Website
                </a>
              </Link>
            </div>

            <p className="work_text">
              This work is a side project. I was in charge of overall visual
              aspects of the website. I created the layout and design of a
              website using Adobe XD. I focused on intuitive user interface so
              that users don’t have to get lost, confused, guessing, reading a
              manual book, or even asking the others. As for development, I
              worked as a front-end developer to build this project. By clicking
              address pin button in the header, users can find their current
              location or input the address. The input data will be stored in
              Local Storage so that users don’t need to set up their location
              again. Cafeterias will show up in order of proximity to the
              location users set. If users click like button in the upper left
              corner, the cafeterias they have liked will be stored in IndexdDB.
              I also built administrator page so that admin users can add
              content on their carfeteria pages and access all items in the
              admin toolbar.
            </p>
          </div>
        </WorkDevelopment>
        {/* section */}
        <WorkSection>
          {/* first section */}
          <div className="section_margin">
            <div className="project_image_wrap">
              {/* <ImageContainer padding="56.25" border="#e7e7e7">
                <div className="logo_wrap">
                  <div>
                    <GoodCafeteriaLogo />
                  </div>
                </div>
              </ImageContainer> */}

              <ImageContainer padding="56.25" marginTop>
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

              <ImageContainer padding="95" marginTop>
                <div className="image_wrap">
                  <Image
                    alt="project_image"
                    src={test}
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
              <ImageContainer padding="56.25" border="#e7e7e7">
                <div className="image_wrap">
                  <VideoPlayer
                    source="/images/cafeteria/cafeteria_video_1.mp4"
                    scale="1.015"
                    poster="/images/cafeteria/video_poster.webp"
                  />
                </div>
              </ImageContainer>

              <ImageContainer padding="56.25" border="#e7e7e7" marginTop>
                <div className="image_wrap">
                  <VideoPlayer
                    source="/images/cafeteria/cafeteria_video_2.mp4"
                    scale="1.015"
                    poster="/images/cafeteria/video_poster.webp"
                  />
                </div>
              </ImageContainer>
            </div>
          </div>

          {/* fullwidth_img_mix */}
          <FullConceptContainer margin>
            <Image
              alt="project_image"
              src={img4}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </FullConceptContainer>

          {/* third section */}
          <div className="section_margin">
            <div className="project_image_wrap">
              <ImageContainer padding="56.25" border="#e7e7e7">
                <div className="image_wrap">
                  <VideoPlayer
                    source="/images/cafeteria/cafeteria_video_3.mp4"
                    scale="1.015"
                    poster="/images/cafeteria/video_poster.webp"
                  />
                </div>
              </ImageContainer>

              <ImageContainer padding="56.25" marginTop border="#e7e7e7">
                <div className="image_wrap">
                  <VideoPlayer
                    source="/images/cafeteria/cafeteria_video_4.mp4"
                    scale="1.015"
                    poster="/images/cafeteria/video_poster.webp"
                  />
                </div>
              </ImageContainer>
            </div>
          </div>
        </WorkSection>

        {/* <Wrap>
          <div className="startMargin">
            <Header padding="32px 0 145px 0" background="unset">
              <ProjectHeader
                title="Good Cafeteria"
                lead="Eat something different everyday"
                link="https://d3txk89kbw52f5.cloudfront.net/"
                date="2022"
                headColor="#fff"
                dateColor="#000"
              />

              <ProjectMainImage img={img1} />

              <ProjectExplanation
                pointColor="#000"
                specOne="UI/UX Design"
                specTwo="Front-end development"
              >
                <Tagline margin="0 0 30px 0" fontColor="#fff">
                  Lunchflation, a recently created phrase, means the specific
                  inflation of lunchtime meal prices. Workers and students
                  cannot buy lunch as it was few years ago. Recently, they are
                  turning to cafeteria because Eating a meal at cafeteria price
                  is quite cheap in comparison with a typical meal at an average
                  restaurant in Korea. Goodcafeteria helps to find the best
                  local cafeterias and their menus.
                </Tagline>
                <Paragraph fontColor="#292929">
                  This work is personal project. I was in charge of overall
                  visual aspects of the website. I created the layout and design
                  of a website using Adobe XD. I focused on intuitive user
                  interface so that users don’t have to get lost, confused,
                  guessing, reading a manual book, or even asking the others.
                </Paragraph>
              </ProjectExplanation>
            </Header>
            <section ref={ref}>
              <FirstSection
                good
                videoSource="/images/cafeteria/cafeteria_video_1.mp4"
                videoPoster="/images/cafeteria/video_poster.webp"
                imgSourceFirst="/images/cafeteria/cafeteria_video_2.mp4"
                imgSourceSecond={img2}
              />

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

              <Wrap paddingMobile padding="0 0 105px 0">
                <ProjectImage img={img4} classStyle="block" />
                <ProjectImage img={img5} classStyle="marginGap" />
                <ProjectImage img={img6} classStyle="marginGap" />
              </Wrap>
            </section>
          </div>
        </Wrap> */}
      </ScrollSmooth>
    </>
  );
};

export default Goodcafeteria;
