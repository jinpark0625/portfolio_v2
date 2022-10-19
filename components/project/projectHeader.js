import { Wrap, HeaderTitle, FooterText } from "../styledComponents";
import Link from "next/link";
import { memo } from "react";

const ProjectHeader = ({ title, lead, link, date, headColor, dateColor }) => {
  return (
    <Wrap fontColor={headColor}>
      <div className="center flexColumn">
        {/* title & lead */}
        <div className="headerWrap">
          <p className="headerTitle">{title}</p>
          <HeaderTitle fontColor={headColor} weight="100" fontFamily="BlCreal">
            {lead}
          </HeaderTitle>
        </div>
        {/* link & date */}
        <div className="headerDate">
          <div style={{ width: "100%" }}>
            {link === "#" ? (
              <FooterText width="100%">
                <p style={{ color: dateColor }}>Currently closed</p>
              </FooterText>
            ) : (
              <FooterText width="100px">
                <Link href={link} passHref>
                  <a
                    target="_blank"
                    rel="website link"
                    style={{ color: dateColor }}
                  >
                    <p className="link">View Website</p>
                  </a>
                </Link>
              </FooterText>
            )}
          </div>

          <FooterText fontColor={dateColor}>
            <p className="date">{date}</p>
          </FooterText>
        </div>
      </div>
    </Wrap>
  );
};

export default memo(ProjectHeader);
