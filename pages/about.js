import Seo from "../components/seo";
import Link from "next/link";
import {
  AboutContainer,
  AboutHeader,
  AboutSkill,
  AboutEducation,
  AboutWork,
} from "../components/styledComponents/aboutStyles";

const About = () => {
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
            A changing, hard-working, completing person.
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
            <div className="list">
              <p className="list_title">Languages & Libraries</p>
              <ul className="list_text">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Three.js</li>
                <li>Next.js</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div className="list">
              <p className="list_title">Applications</p>
              <ul className="list_text">
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>AdobeXd</li>
                <li>Figma</li>
                <li>Indesign</li>
                <li>Premiere</li>
              </ul>
            </div>
            <div className="list">
              <p className="list_title">Others</p>
              <ul className="list_text">
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
                <li>Styled Components</li>
                <li>Storybook</li>
                <li>Redux</li>
                <li>MobX</li>
              </ul>
            </div>
          </div>
        </AboutSkill>

        {/* education */}
        <AboutEducation className="wrap">
          <p className="subtitle">EDUCATION</p>
          <div className="list_wrap">
            <div className="list">
              <p className="list_title">Seneca College</p>
              <p className="margin_m list_title">
                Kyungpook National University
              </p>
            </div>
            <div className="list">
              <p className="list_text">Creative Advertising</p>
              <p className="margin_m list_text">Fashion Design</p>
            </div>
            <div className="edu_item_m">
              <p className="list_title">Seneca College</p>
              <p className="list_text">Creative Advertising</p>
            </div>
            <div className="edu_item_m margin_m">
              <p className="list_title">Kyungpook National University</p>
              <p className="list_text">Fashion Design</p>
            </div>
          </div>
        </AboutEducation>

        {/* work */}
        <AboutWork className="wrap">
          <div className="subtitle">WORK</div>
          <div className="list_wrap">
            <div className="list">
              <p className="list_title">DMonster</p>
              <div className="small_text margin_s">2021-2022</div>
              <div className="small_text">Junior Frontend Developer</div>
            </div>

            <div className="work_item_des">
              <ul>
                <li className="work_list">
                  Developed various websites frontend using HTML/CSS/JS(ES6),
                  React, Styled Components, and Redux , integrated with RESTful
                  APIs.
                </li>
                <li className="work_list">
                  Published mobile application using React Native.
                </li>
                <li className="work_list">
                  Worked with basic HTML and CSS to manage the web application.
                </li>
                <li className="work_list">
                  Supported web design team to design websites and mobile
                  applications that have more than 3&apos;000 daily users.
                </li>
              </ul>
            </div>
          </div>
          <div className="list_wrap">
            <div className="list">
              <p className="list_title">Tomato Project</p>
              <div className="small_text margin_s">2019-2020</div>
              <div className="small_text">Graphic Designer</div>
            </div>
            <div className="work_item_des">
              <ul>
                <li className="work_list">
                  Designed visual content for Facebook and Instagram posts,
                  which achieved 200% increase in Instagram followers.
                </li>
                <li className="work_list">
                  Collaborated with the design team to create advertising
                  posters and videos.
                </li>
              </ul>
            </div>
          </div>
          <div className="list_wrap">
            <div className="list">
              <p className="list_title">Hanmi Post</p>
              <div className="small_text margin_s">2019</div>
              <div className="small_text">Graphic Designer</div>
            </div>
            <div className="work_item_des">
              <ul>
                <li className="work_list">
                  Designed packages like delivery boxes, poly bags, and packing
                  tape to elevate and differentiate branding.
                </li>
                <li className="work_list">
                  Developed creative advertising content for various media,
                  including catalogs, business cards, flyers, posters, and
                  product packing while ensuring maximum brand awareness of the
                  target audience.
                </li>
              </ul>
            </div>
          </div>
          <div className="list_wrap">
            <div className="list">
              <p className="list_title">Northern Esports Academy</p>
              <div className="small_text margin_s">2019</div>
              <div className="small_text">Freelance Graphic Designer</div>
            </div>
            <div className="work_item_des">
              <ul>
                <li className="work_list">
                  Conceptualized and created their logo, and designed Twitter
                  Banners and Twitch Panels.
                </li>
              </ul>
            </div>
          </div>
          <div className="list_wrap">
            <div className="list">
              <p className="list_title">Cheum Tour</p>
              <div className="small_text margin_s">2019</div>
              <div className="small_text">Freelance Graphic Designer</div>
            </div>

            <div className="work_item_des">
              <ul>
                <li className="work_list">
                  Designed, and created branding collateral, such as
                  itineraries, letters and catalogs.
                </li>
              </ul>
            </div>
          </div>
          <div className="list_wrap">
            <div className="list">
              <p className="list_title">Chicago City Sports</p>

              <div className="small_text margin_s">2015-2016</div>
              <div className="small_text">Internship (Visual Merchandiser)</div>
            </div>
            <div className="work_item_des">
              <ul>
                <li className="work_list">
                  Perform installation and removal of window presentations and
                  in-store displays in support of promotional events for new
                  product launches.
                </li>
                <li className="work_list">
                  Coordinate with the visual design manager to develop and
                  implement visual displays.
                </li>
              </ul>
            </div>
          </div>
        </AboutWork>
      </AboutContainer>
    </>
  );
};

export default About;
