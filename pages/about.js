import Seo from "../components/seo";
import Link from "next/link";
import {
  AboutContainer,
  AboutHeader,
  AboutSkill,
  AboutEducation,
  AboutWork,
} from "../components/styledComponents/aboutStyles";
import { memo, useMemo } from "react";

const Skills = memo(function Skills({ className, title, skills }) {
  return (
    <div className={className}>
      <p className="list_title">{title}</p>
      <ul className="list_text">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
});

const Education = memo(function Education({
  className,
  education1,
  education2,
  education3,
}) {
  return (
    <div className="list">
      <p className={className}>{education1}</p>
      <p className={`margin_m ${className}`}>{education2}</p>
      <p className={`margin_m ${className}`}>{education3}</p>
    </div>
  );
});

const EducationM = memo(function EducationM({
  className,
  education1,
  education2,
}) {
  return (
    <div className={`edu_item_m ${className}`}>
      <p className="list_title">{education1}</p>
      <p className="list_text">{education2}</p>
    </div>
  );
});

const Work = memo(function Work({ title, date, position, descriptions }) {
  return (
    <div className="list_wrap">
      <div className="list">
        <p className="list_title">{title}</p>
        <div className="small_text margin_s">{date}</div>
        <div className="small_text">{position}</div>
      </div>
      <div className="work_item_des">
        <ul>
          {descriptions.map((description) => (
            <li className="work_list" key={description}>
              {description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

const About = () => {
  const skills = useMemo(() => {
    return {
      language: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Three.js",
        "Next.js",
        "TypeScript",
      ],
      application: [
        "Photoshop",
        "Illustrator",
        "AdobeXd",
        "Figma",
        "Indesign",
        "Premiere",
      ],
      others: [
        "Bootstrap",
        "Tailwind CSS",
        "Styled Components",
        "Storybook",
        "Redux",
        "MobX",
      ],
    };
  }, []);

  const description = useMemo(() => {
    return {
      dMonster: [
        "Developed front-end code for 7 websites and Worked closely with clients to meet project requirements, goals, and desired functionality.",
        "Implemented mobile applications using React Native.",
        "Collaborated with the design team to design new features for websites and mobile applications that increased user engagement by 40%.",
      ],
      tomato: [
        "Designed visual content for Facebook and Instagram posts that increased followers by 200%.",
        "Collaborated with the design team to create advertising posters and videos.",
      ],
      hanmi: [
        "Designed packages like delivery boxes, poly bags, and packing tape to elevate and differentiate branding.",
        "Developed creative advertising content for various media,including catalogs, business cards, flyers, posters, and product packing while ensuring maximum brand awareness of the target audience.",
      ],
      cheum: [
        "Designed, and created branding collateral, such as itineraries, letters, and catalogs.",
      ],
      north: [
        "Conceptualized and created their logo, and designed Twitter Banners and Twitch Panels.",
      ],
      chicago: [
        "Perform installation and removal of window presentations and in-store displays in support of promotional events for new product launches.",
        "Coordinate with the visual design manager to develop and implement visual displays.",
      ],
    };
  }, []);

  return (
    <>
      <Seo title="About" />
      <AboutContainer>
        {/* header */}
        <AboutHeader className="wrap">
          <div className="title">Jin Park</div>
          <div className="small_text margin_m">
            <Link href="https://github.com/jinpark0625" passHref>
              <a
                target="_blank"
                rel="website link"
                style={{ color: "#feae2e" }}
                aria-label="Link to github"
              >
                <p className="link">github.com/jinpark0625</p>
              </a>
            </Link>
            <Link href="http://parkjin.com/" passHref>
              <a
                target="_blank"
                rel="website link"
                style={{ color: "#feae2e" }}
                aria-label="Link to portfolio v1"
              >
                <p className="link">parkjin.com (kor)</p>
              </a>
            </Link>
          </div>
          <div className="intro">
            I love turning my ideas into reality with code.
            <br />A creative Web Frontend Developer having an experience of
            building Web and Mobile applications with Javascript, React, React
            Native and some other libraries. I come from a graphic design and
            fashion background, so I have a good eye for design.
          </div>
        </AboutHeader>

        {/* skill */}
        <AboutSkill className="wrap">
          <div className="subtitle">SKILLS</div>
          <div className="list_wrap">
            <Skills
              className="list"
              title="Languages & Libraries"
              skills={skills.language}
            />
            <Skills
              className="list"
              title="Applications"
              skills={skills.application}
            />
            <Skills className="list" title="Others" skills={skills.others} />
          </div>
        </AboutSkill>

        {/* education */}
        <AboutEducation className="wrap">
          <p className="subtitle">EDUCATION</p>
          <div className="list_wrap">
            <Education
              className="list_title"
              education1="Vom Academy"
              education2="Seneca College"
              education3="Kyungpook National University"
            />
            <Education
              className="list_text"
              education1="Front End Developer Bootcamp"
              education2="Creative Advertising"
              education3="Fashion Design"
            />
            <EducationM
              education1="Vom Academy"
              education2="Front End Developer Bootcamp"
            />
            <EducationM
              className="margin_m"
              education1="Seneca College"
              education2="Creative Advertising"
            />
            <EducationM
              className="margin_m"
              education1="Kyungpook National University"
              education2="Fashion Design"
            />
          </div>
        </AboutEducation>

        {/* work */}
        <AboutWork className="wrap">
          <div className="subtitle">WORK</div>

          <Work
            title="DMonster"
            date="2021-2022"
            position="Junior Frontend Developer"
            descriptions={description.dMonster}
          />

          <Work
            title="Tomato Project"
            date="2019-Present"
            position="Graphic Designer (Volunteering)"
            descriptions={description.tomato}
          />

          <Work
            title="Hanmi Post"
            date="2019"
            position="Graphic Designer"
            descriptions={description.hanmi}
          />

          <Work
            title="Cheum Tour"
            date="2019"
            position="Freelance Graphic Designer"
            descriptions={description.cheum}
          />

          <Work
            title="Northern Esports Academy"
            date="2019"
            position="Freelance Graphic Designer"
            descriptions={description.north}
          />

          <Work
            title="Chicago City Sports"
            date="2015-2016"
            position="Internship (Visual Merchandiser)"
            descriptions={description.chicago}
          />
        </AboutWork>
      </AboutContainer>
    </>
  );
};

export default About;
