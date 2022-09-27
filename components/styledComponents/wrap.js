import React from "react";
import styled from "styled-components";

const Styledwrap = styled.div`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  max-width: ${({ maxWidth }) => maxWidth};
  position: relative;
  background: ${({ background }) => background};

  .imageWrap {
    width: 100%;
    height: 840px;
    position: relative;
  }

  .center {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
  }
  .flexColumn {
    display: flex;
    flex-direction: column;
  }

  .startMargin {
    margin-bottom: 300px;
  }
  .marginGap {
    margin: 20px auto 0;
  }

  .headerWrap {
    max-width: 580px;
    margin: 0 0 0 auto;
  }
  .headerTitle {
    margin: 0 0 75px 0;
    font-size: ${({ theme: { fontSize } }) => fontSize.paragraph}rem;
    color: ${({ theme: { color }, fontColor }) => fontColor || color.white};
    line-height: ${({ theme: { lineHeight } }) => lineHeight.paragraph};
    font-weight: 600;
    font-family: SomeTimes;
  }
  .headerDate {
    margin: 100px 0 60px 0;
    display: flex;
  }

  .techStackWrap {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
  }

  .techStack {
    font-size: ${({ theme: { fontSize } }) => fontSize.tagline}rem;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.paragraph};
  }
  .techStack_m {
    display: none;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.tagline};
  }
  .techStackTag {
    margin: 12px 0 0 0;
    font-size: ${({ theme: { fontSize } }) => fontSize.footerSize}rem;
    font-family: SomeTimes;
    font-weight: 600;
  }

  .projectAbout {
    width: 580px;
  }

  .block::before {
    background: ${({ blockBg }) => blockBg};
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 125px;
    width: 100%;
    z-index: 0;
  }

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.desktop}px) {
    .imageWrap {
      height: 695px;
    }
  }

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.tablet}px) {
    .center {
      flex-wrap: wrap;
      padding: 0 45px;
    }
  }

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.miniTablet}px) {
    .imageWrap {
      height: 500px;
    }
    .center {
      padding: 0 35px;
    }
    .headerWrap {
      max-width: unset;
    }
    .headerTitle {
      margin: 0 0 40px 0;
    }
    .headerDate {
      margin: 65px 0 60px 0;
      justify-content: space-between;
    }
    .techStackWrap {
      flex-direction: row;
      flex-wrap: wrap;
    }
    .techStackTag {
      flex: 1 0 200px;
      margin: 0 0 25px 0;
    }
    .techStack {
      display: none;
    }
    .techStack_m {
      display: flex;
      margin: 0 0 25px;
    }
    .projectAbout {
      width: 100%;
    }
  }

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.mobile}px) {
    .imageWrap {
      height: 300px;
    }
    .block::before {
      height: 80px;
    }
    padding: ${({ paddingMobile }) => paddingMobile && "0 0 80px 0"};
  }
`;

const Wrap = ({ children, ...props }) => {
  return <Styledwrap {...props}>{children}</Styledwrap>;
};

export default Wrap;
