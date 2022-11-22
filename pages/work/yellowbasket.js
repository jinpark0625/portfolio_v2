import url from "/public/images/proejct_2.webp";
import img1 from "/public/images/yellowbasket/yellow_img_1.png";
import img2 from "/public/images/yellowbasket/yellow_img_2.webp";
import img3 from "/public/images/yellowbasket/yellow_img_3.png";
import img4 from "/public/images/yellowbasket/yellow_img_4.png";
import img5 from "/public/images/yellowbasket/yellow_img_5.webp";
import img6 from "/public/images/yellowbasket/yellow_img_6.webp";
import img7 from "/public/images/yellowbasket/yellow_img_7.webp";
import img8 from "/public/images/yellowbasket/yellow_img_m_1.png";
import img9 from "/public/images/yellowbasket/yellow_img_m_2.png";
import img10 from "/public/images/yellowbasket/yellow_img_m_3.png";
import img11 from "/public/images/yellowbasket/yellow_img_8.png";
import nextImage from "/public/images/yellowbasket/next.jpg";
import {
  Header,
  Paragraph,
  Tagline,
  Wrap,
  Block,
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
  ProjectVideo,
} from "../../components/project";
import Seo from "../../components/seo";
import styled from "styled-components";
import Image from "next/image";

// mainColor="#121212"
// subColor="#f9f6f1"
// scrollColor="#ffcc00"
// headColor="#fff"
// dateColor="#ffcc00"
// pointColor="#ffcc00"
// fontColor="#6b6b6b"

const WorkHeader = styled.header`
  max-width: 1800px;
  margin: 0 auto;

  .work_container {
    margin: ${({ theme: { space } }) => `0 ${space[5]}px`};
  }
  .work_wrap {
    width: 100%;
    margin: ${({ theme: { space } }) => `${space[11]}px 0 ${space[6]}px`};
  }
  .work_title {
    font-size: ${({ theme: { fontSize } }) => fontSize.title}rem;
    font-weight: 600;
    font-family: SomeTimes;
    color: ${({ subColor }) => subColor};
  }
  .work_overview_text {
    color: ${({ subColor }) => subColor};
    max-width: 520px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.paragraph};
  }
  .work_overview {
    margin-top: ${({ theme: { space } }) => space[6]}px;
    display: flex;
    justify-content: space-between;
  }
  .work_overview_des {
    font-size: ${({ theme: { fontSize } }) => fontSize.footerSize}rem;
    display: flex;
    flex-direction: column;
    justify-content: end;
    text-align: right;
  }
  .work_date {
    color: ${({ subColor }) => subColor};
  }
  .work_role {
    display: flex;
    align-items: center;
    color: ${({ mainColor }) => mainColor};
  }
  .circle {
    display: block;
    width: 4px;
    height: 4px;
    background: ${({ mainColor }) => mainColor};
    border-radius: 100%;
    margin: 0 8px;
  }

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.tablet}px) {
    .work_container {
      margin: 0 35px;
    }
    .work_wrap {
      margin-top: ${({ theme: { space } }) => `${space[10]}px`};
    }
    .work_overview_text {
      max-width: unset;
    }
    .work_overview {
      flex-direction: column;
    }
    .work_overview_des {
      margin-top: ${({ theme: { space } }) => space[3]}px;
      justify-content: start;
      text-align: left;
    }
    .work_date {
      margin-bottom: 6px;
    }
  }
  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.mobile}px) {
    .work_title {
      font-size: ${({ theme: { fontSize } }) => fontSize.subTitle}rem;
    }
    .work_overview {
      margin-top: ${({ theme: { space } }) => space[4]}px;
    }
  }
`;

const WorkDevelopment = styled.div`
  margin: ${({ theme: { space } }) => `0 auto ${space[10]}px`};
  display: flex;
  justify-content: center;
  color: ${({ subColor }) => subColor};

  .work_development {
    margin: ${({ theme: { space } }) => `${space[6]}px 50px 0`};
    display: flex;
    max-width: 1024px;
    justify-content: space-between;
  }
  .work_development_list,
  .work_text {
    flex: 1;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.paragraph};
  }
  .work_development_list dt {
    color: ${({ grayColor }) => grayColor};
  }
  .work_development_list dd {
    margin-bottom: ${({ theme: { space } }) => space[3]}px;
  }
  .work_development_list .work_link {
    margin-top: ${({ theme: { space } }) => space[3]}px;
    color: ${({ mainColor }) => mainColor};
  }

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.tablet}px) {
    .work_development {
      margin: ${({ theme: { space } }) => `${space[6]}px 35px 0`};
      flex-direction: column;
    }
    .work_development_list {
      margin-top: 32px;
      order: 2;
    }
    .work_development_tools {
      display: flex;
    }
    .work_development_tools > dl:first-child {
      margin-right: ${({ theme: { space } }) => `${space[3]}px`};
    }
  }
  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.mobile}px) {
    margin: ${({ theme: { space } }) => `0 auto ${space[8]}px`};
  }
`;

// mobile gap & margin 조정
// mobile 이미지간 여백조정

const YellowBasket = () => {
  return (
    <>
      <Seo title="YellowBasket" />
      <ScrollSmooth
        mainColor="#121212"
        subColor="#f9f6f1"
        pointColor="#ffcc00"
        nextProject="Bin Works"
        link="binworks"
      >
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
        <ProjectMainImage img={url} />
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
              <span className="work_link">View Website</span>
            </div>

            <p className="work_text">
              Together with my senior developer, we built the front and back-end
              of this website. I Built the front-end with HTML, CSS, and JS to
              improve the appearance of the website. I optimized web design for
              mobile and other platforms for maximum speed.
            </p>
          </div>
        </WorkDevelopment>
        <section
          className="work_body"
          style={{
            paddingBottom: "145px",
          }}
        >
          <div className="section_margin">
            <Wrap paddingMobile padding="0 0 105px 0">
              {/* first section */}
              <ProjectVideo
                classStyle="block"
                source="/images/yellowbasket/yellow_video_1.mp4"
                scale="1.015"
                poster="/images/yellowbasket/video_poster.webp"
                border="#E7E7E7"
              />
              <ProjectImage
                img={img1}
                classStyle="marginGap"
                border="#E7E7E7"
                padding="0 0 399.25% 0"
              />
            </Wrap>
          </div>
          <ProjectMainImage img={img2} padding="0 0 105px 0" />
          {/* second section */}
          <div className="section_margin">
            <Wrap paddingMobile padding="0 0 105px 0">
              <ProjectImage
                img={img11}
                classStyle="block"
                border="#E7E7E7"
                padding="0 0 111.25% 0"
              />
              <ProjectImage
                img={img3}
                classStyle="marginGap"
                border="#E7E7E7"
              />
            </Wrap>
          </div>

          <Wrap>
            <div className="imageWrapMix">
              <Image
                alt="project_image"
                src={img4}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
              />
            </div>
          </Wrap>
          <div
            style={{
              margin: "0 50px",
              // mobile 35px
              paddingTop: "105px",
            }}
          >
            <div
              style={{
                maxWidth: "1024px",
                display: "flex",
                margin: "0 auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "32px",
                // 20px
              }}
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: "320px",
                  flex: 1,
                }}
              >
                <Block className={`center`}>
                  <Block
                    width="100%"
                    position="relative"
                    padding="0 0 283.02% 0"
                  >
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
                  </Block>
                </Block>
              </div>
              <div
                style={{
                  width: "100%",
                  maxWidth: "320px",
                  flex: 1,
                }}
              >
                <Block className={`center`}>
                  <Block width="100%" position="relative" padding="0 0 350% 0">
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
                  </Block>
                </Block>
              </div>
              <div
                style={{
                  width: "100%",
                  maxWidth: "320px",
                  flex: 1,
                }}
              >
                <Block className={`center`}>
                  <Block
                    width="100%"
                    position="relative"
                    padding="0 0 231.447% 0"
                  >
                    <Image
                      alt="project_image"
                      src={img10}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      style={{
                        borderRadius: "12px",
                      }}
                    />
                  </Block>
                </Block>
              </div>
            </div>
          </div>
        </section>
      </ScrollSmooth>
    </>
  );
};

export default YellowBasket;
