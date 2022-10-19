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
            </FooterText>
            <Tagline margin="48px 0 80px">
              A creative web developer with a passion for design, animation,
              interaction, problem-solving, and for mastering the latest
              front-end technologies.
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
                <p className="skill_title">Framework</p>
                <ul className="skill_list">
                  <li>Bootstrap</li>
                  <li>Tailwind CSS</li>
                  <li>Styled Components</li>
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
                <p className="skill_title">DMonster</p>
                <FooterText width="max-content">2021-2022</FooterText>
              </div>
              <p className="about_work_item_des">
                A minimal WebGL library and 3D engine created to learn the
                essentials of computer graphics concepts and to limit the need
                for larger 3D libraries.
              </p>
            </div>
            <div className="about_work">
              <div className="about_work_item">
                <p className="skill_title">Tomato Project</p>
                <FooterText width="max-content">2019-2020</FooterText>
              </div>
              <p className="about_work_item_des">
                A minimal WebGL library and 3D engine created to learn the
                essentials of computer graphics concepts and to limit the need
                for larger 3D libraries.
              </p>
            </div>
            <div className="about_work">
              <div className="about_work_item">
                <p className="skill_title">Hanmi Post</p>
                <FooterText width="max-content">2019</FooterText>
              </div>
              <p className="about_work_item_des">
                A minimal WebGL library and 3D engine created to learn the
                essentials of computer graphics concepts and to limit the need
                for larger 3D libraries.
              </p>
            </div>
            <div className="about_work">
              <div className="about_work_item">
                <p className="skill_title">Northern Esports Academy</p>
                <FooterText width="max-content">2019</FooterText>
              </div>
              <p className="about_work_item_des">
                A minimal WebGL library and 3D engine created to learn the
                essentials of computer graphics concepts and to limit the need
                for larger 3D libraries.
              </p>
            </div>
            <div className="about_work">
              <div className="about_work_item">
                <p className="skill_title">Cheum Tour</p>
                <FooterText width="max-content">2019</FooterText>
              </div>
              <p className="about_work_item_des">
                A minimal WebGL library and 3D engine created to learn the
                essentials of computer graphics concepts and to limit the need
                for larger 3D libraries.
              </p>
            </div>
            <div className="about_work">
              <div className="about_work_item">
                <p className="skill_title">Chicago City Sports</p>
                <FooterText width="max-content">2015-2016</FooterText>
              </div>
              <p className="about_work_item_des">
                A minimal WebGL library and 3D engine created to learn the
                essentials of computer graphics concepts and to limit the need
                for larger 3D libraries.
              </p>
            </div>
          </div>
        </div>
      </Wrap>
    </>
  );
};

export default About;
