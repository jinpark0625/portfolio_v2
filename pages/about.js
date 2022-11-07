import Seo from "../components/seo";
import {
  Wrap,
  Header,
  HeaderTitle,
  FooterText,
  Tagline,
} from "../components/styledComponents";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Seo title="About" />
      <Wrap>
        <div className="about_margin">
          <Header className="center about_header techStackWrap">
            <HeaderTitle width="100%">Jin Park</HeaderTitle>
            <FooterText margin="16px 0 0" width="max-content">
              <Link href="https://github.com/jinpark0625" passHref>
                <a target="_blank" rel="website link" style={{ color: "#fff" }}>
                  <p className="link">github.com/jinpark0625</p>
                </a>
              </Link>
              <Link href="http://parkjin.com/" passHref>
                <a target="_blank" rel="website link" style={{ color: "#fff" }}>
                  <p className="link">parkjin.com (kor)</p>
                </a>
              </Link>
            </FooterText>
            <Tagline margin="48px 0 80px">
              A changing, hard-working, completing person.
              <br />A creative Web Frontend Developer having an experience of
              building Web and Mobile applications with Javascript, React, React
              Native and some other libraries. I come from a graphic design and
              fashion background, so I have a good eye for design.
            </Tagline>
          </Header>
          <div className="about_container center">
            <p className="aboutTag" style={{ color: "#fff" }}>
              SKILLS
            </p>
            <div className="about_wrap">
              <div className="skill_item">
                <p className="skill_title">Languages & Libraries</p>
                <ul className="skill_list">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Three.js</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div className="skill_item">
                <p className="skill_title">Applications</p>
                <ul className="skill_list">
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li>AdobeXd</li>
                  <li>Figma</li>
                  <li>Indesign</li>
                  <li>Premiere</li>
                </ul>
              </div>
              <div className="skill_item">
                <p className="skill_title">Others</p>
                <ul className="skill_list">
                  <li>Bootstrap</li>
                  <li>Tailwind CSS</li>
                  <li>Styled Components</li>
                  <li>Storybook</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="about_container about_item_margin center">
            <p className="aboutTag" style={{ color: "#fff" }}>
              EDUCATION
            </p>
            <div className="about_wrap">
              <div className="edu_item">
                <p className="skill_title">Seneca College</p>
                <p className="skill_title">Kyungpook National University</p>
              </div>
              <div className="edu_item">
                <p className="skill_list">Creative Advertising</p>
                <p className="skill_list">Fashion Design</p>
              </div>
              <div className="edu_item_m">
                <p className="skill_title">Seneca College</p>
                <p className="skill_list">Creative Advertising</p>
              </div>
              <div className="edu_item_m">
                <p className="skill_title">Kyungpook National University</p>
                <p className="skill_list">Fashion Design</p>
              </div>
            </div>
          </div>
          <div className="about_container about_item_margin center">
            <p className="aboutTag" style={{ color: "#fff" }}>
              WORK
            </p>
            <div className="about_work">
              <div className="about_work_item">
                <p className="list_title">DMonster</p>
                <FooterText width="max-content" margin="10px 0 0">
                  2021-2022
                </FooterText>
                <FooterText width="max-content">
                  Junior Frontend Developer
                </FooterText>
              </div>

              <div className="about_work_item_des">
                <ul>
                  <li className="list_style">
                    Developed various websites frontend using HTML/CSS/JS(ES6),
                    React, Styled Components, and Redux , integrated with
                    RESTful APIs.
                  </li>
                  <li className="list_style">
                    Published mobile application using React Native.
                  </li>
                  <li className="list_style">
                    Worked with basic HTML and CSS to manage the web
                    application.
                  </li>
                  <li className="list_style">
                    Supported web design team to design websites and mobile
                    application that have more than 3'000 daily users.
                  </li>
                </ul>
              </div>
            </div>
            <div className="about_work">
              <div className="about_work_item">
                <p className="list_title">Tomato Project</p>
                <FooterText width="max-content" margin="10px 0 0">
                  2019-2020
                </FooterText>
                <FooterText width="max-content">Graphic Designer</FooterText>
              </div>
              <div className="about_work_item_des">
                <ul>
                  <li className="list_style">
                    Designed visual content for Facebook and Instagram posts,
                    which achieved 200% increase in Instagram followers.
                  </li>
                  <li className="list_style">
                    Collaborated with the design team to create advertising
                    posters and videos.
                  </li>
                </ul>
              </div>
            </div>
            <div className="about_work">
              <div className="about_work_item">
                <p className="list_title">Hanmi Post</p>
                <FooterText width="max-content" margin="10px 0 0">
                  2019
                </FooterText>
                <FooterText width="max-content">Graphic Designer</FooterText>
              </div>
              <div className="about_work_item_des">
                <ul>
                  <li className="list_style">
                    Designed packages like delivery box, poly bag, and packing
                    tape to elevate and differentiate branding.
                  </li>
                  <li className="list_style">
                    Developed creative advertising content for various media,
                    including catalogs, business cards, flyers, posters, and
                    product packing while ensuring maximum brand awareness of
                    target audience.
                  </li>
                </ul>
              </div>
            </div>
            <div className="about_work">
              <div className="about_work_item">
                <p className="list_title">Northern Esports Academy</p>
                <FooterText width="max-content" margin="10px 0 0">
                  2019
                </FooterText>
                <FooterText width="max-content">
                  Freelance Graphic Designer
                </FooterText>
              </div>
              <div className="about_work_item_des">
                <ul>
                  <li className="list_style">
                    Conceptualized and created their logo, and designed Twitter
                    Banners and Twitch Panels.
                  </li>
                </ul>
              </div>
            </div>
            <div className="about_work">
              <div className="about_work_item">
                <p className="list_title">Cheum Tour</p>
                <FooterText width="max-content" margin="10px 0 0">
                  2019
                </FooterText>
                <FooterText width="max-content">
                  Freelance Graphic Designer
                </FooterText>
              </div>

              <div className="about_work_item_des">
                <ul>
                  <li className="list_style">
                    Desinged, and created branding collateral, such as
                    itineraries, letters and catalogues.
                  </li>
                </ul>
              </div>
            </div>
            <div className="about_work">
              <div className="about_work_item">
                <p className="list_title">Chicago City Sports</p>
                <FooterText width="max-content" margin="10px 0 0">
                  2015-2016
                </FooterText>
                <FooterText width="max-content">
                  Internship (Visual Merchandiser)
                </FooterText>
              </div>
              <div className="about_work_item_des">
                <ul>
                  <li className="list_style">
                    Perform installation and removal of window presentations and
                    in-store displays in support of promotional events for new
                    product launches.
                  </li>
                  <li className="list_style">
                    Coordinate with the visual design manager to develop and
                    implement visual displays.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Wrap>
    </>
  );
};

export default About;
