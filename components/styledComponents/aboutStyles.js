import styled from "styled-components";

/**
 * About Page
 */

// Container
export const AboutContainer = styled.div`
  margin: 148px 0 192px;
  padding: 0 45px;
  color: #fff;

  //   common
  .margin_s {
    margin-top: 10px;
  }
  .margin_m {
    margin-top: 16px;
  }

  a {
    color: #fff;
  }

  .wrap {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .list_wrap {
    padding-top: 48px;
    border-top: 1px solid #c4c4c4;
    display: flex;
    flex-wrap: wrap;
  }

  .list {
    display: flex;
    flex-direction: column;
    width: 33.3333%;
  }

  .list_title {
    padding-bottom: 10px;
    font-size: ${({ theme: { fontSize } }) => fontSize.paragraph}rem;
    font-weight: 600;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.paragraph};
  }

  .list_text {
    font-weight: 300;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.paragraph};
  }

  .small_text {
    font-size: ${({ theme: { fontSize } }) => fontSize.footerSize}rem;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.tagline};
    width: max-content;
  }

  .subtitle {
    margin-bottom: 24px;
    font-size: ${({ theme: { fontSize } }) => fontSize.paragraph}rem;
    font-weight: 600;
    letter-spacing: 2px;
  }

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.tablet}px) {
    .list_wrap {
      padding-top: 24px;
    }
    .list {
      width: 50%;
    }
  }

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.miniTablet}px) {
    padding: 0 35px;

    .list {
      width: 100%;
    }
  }
`;

// Header
export const AboutHeader = styled.div`
  .title {
    width: 100%;
    font-size: ${({ theme: { fontSize } }) => fontSize.headerIntro}rem;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.subTitle};
  }

  .intro {
    margin: 48px 0 80px;
    font-size: ${({ theme: { fontSize } }) => fontSize.tagline}rem;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.tagline};
  }
`;

export const AboutSkill = styled.div`
  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.tablet}px) {
    .list_wrap > .list:last-child {
      margin-top: 24px;
    }
  }
  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.miniTablet}px) {
    .list_wrap > .list {
      margin-top: 24px;
    }
    .list_wrap > .list:first-child {
      margin-top: 0;
    }
  }
`;

export const AboutEducation = styled.div`
  margin: 80px auto 0 !important;

  .list_title {
    padding-bottom: unset;
  }

  .edu_item_m {
    width: 100%;
    flex-wrap: wrap;
    display: none;
  }
  .edu_item_m > p {
    width: 100%;
  }

  .about_wrap > .edu_item_m:last-child {
    margin-top: 16px;
  }

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.miniTablet}px) {
    .list {
      display: none;
    }
    .edu_item_m {
      display: flex;
    }
  }
`;

export const AboutWork = styled.div`
  margin: 80px auto 0 !important;

  .list_wrap {
    padding: 48px 0;
  }

  .work_item_des {
    width: 66.6666%;
    font-weight: 300;
    padding-left: 20px;
  }
  .work_list {
    list-style: circle;
    list-style-position: inside;
    text-indent: -20px;
    padding-bottom: 10px;
    line-height: 1.618;
  }

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.tablet}px) {
    .list_wrap {
      padding: 24px 0;
    }
    .work_item_des {
      width: 50%;
    }
  }

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.miniTablet}px) {
    .work_item_des {
      width: 100%;
      margin-top: 16px;
    }
  }
`;
