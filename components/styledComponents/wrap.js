import React from "react";
import styled from "styled-components";

const Styledwrap = styled.div`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  max-width: ${({ maxWidth }) => maxWidth};

  .imageWrap {
    width: 100%;
    height: 840px;
    position: relative;
  }

  .center {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    padding: 0 45px;
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
  }

  .projectAbout {
    width: 580px;
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
    .techStackWrap {
      flex-direction: row;
      flex-wrap: wrap;
    }
    // .techStack {
    //   display: flex;
    //   flex-wrap: wrap;
    //   margin: 0 -6px 25px;
    // }
    // .techStack > li {
    //   margin: 0 6px;
    // }
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
  }
`;

const Wrap = ({ children, ...props }) => {
  return <Styledwrap {...props}>{children}</Styledwrap>;
};

export default Wrap;
