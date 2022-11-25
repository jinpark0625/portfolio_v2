import styled from "styled-components";

const Styledwrap = styled.div`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  max-width: ${({ maxWidth }) => maxWidth};
  position: relative;
  background: ${({ background }) => background};

  .wrap_pad {
    padding: 0 45px;
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
    margin: 64px auto 0;
  }
  .headerWrap {
    min-width: 580px;
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

  .about_margin {
    margin: 148px 0 192px;
    padding: 0 45px;
  }
  .about_container {
    display: flex;
    flex-direction: column;
  }
  .about_item_margin {
    margin: 80px auto 0;
  }
  .about_wrap {
    padding-top: 48px;
    border-top: 1px solid #c4c4c4;
    display: flex;
    flex-wrap: wrap;
  }
  .aboutTag {
    margin-bottom: 24px;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .skill_item,
  .edu_item {
    display: flex;
    flex-direction: column;
    width: 33.3333%;
  }
  .edu_item > p:last-child {
    margin-top: 16px;
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
  .skill_title {
    font-size: ${({ theme: { fontSize } }) => fontSize.paragraph}rem;
    color: ${({ theme: { color }, fontColor }) => fontColor || color.white};
    font-weight: 600;
    line-height: 2;
  }
  .skill_item > .skill_title {
    padding-bottom: 10px;
  }
  .skill_list {
    color: #fff;
    line-height: 2;
    font-weight: 300;
  }
  .about_work {
    padding: 48px 0;
    border-top: 1px solid #c4c4c4;
    display: flex;
    color: #fff;
    flex-wrap: wrap;
  }
  .about_work_item {
    width: 33.3333%;
  }
  .about_work_item_des {
    width: 66.6666%;
    font-weight: 300;
    padding-left: 20px;
  }

  .list_title {
    font-size: ${({ theme: { fontSize } }) => fontSize.paragraph}rem;
    color: ${({ theme: { color }, fontColor }) => fontColor || color.white};
    font-weight: 600;
    line-height: 1.618;
  }
  .list_style {
    list-style: circle;
    list-style-position: inside;
    text-indent: -20px;
    padding-bottom: 10px;
    line-height: 1.618;
  }

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.tablet}px) {
    .center {
      flex-wrap: wrap;
    }
    .section_margin {
      margin: 0 35px;
    }
    .wrap_pad {
      padding: unset;
    }
    .about_margin {
      margin: 108px 0 84px;
      padding: 0;
    }
    .about_header {
      padding: 0 45px;
    }
    .about_wrap {
      padding-top: 24px;
    }
    .skill_item,
    .about_work_item,
    .about_work_item_des,
    .edu_item {
      width: 50%;
    }

    .skill_item:last-child {
      margin-top: 24px;
    }
    .about_work {
      padding: 24px 0;
    }
  }

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.miniTablet}px) {
    .headerWrap {
      max-width: unset;
      min-width: unset;
      margin: unset;
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
      align-self: center;
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
    .about_header {
      padding: 0 35px;
    }
    .skill_item,
    .about_work_item,
    .about_work_item_des,
    .edu_item {
      width: 100%;
    }
    .about_work_item_des {
      margin-top: 16px;
    }
    .skill_item {
      margin-top: 24px;
    }
    .skill_item:first-child {
      margin-top: 0;
    }
    .edu_item {
      display: none;
    }
    .edu_item_m {
      display: flex;
    }
  }

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.mobile}px) {
    .block::before {
      height: 80px;
    }
    padding: ${({ paddingMobile }) => paddingMobile && "0 0 80px 0"};

    .marginGap {
      margin: 32px auto 0;
    }
  }
`;

const Wrap = ({ children, ...props }) => {
  return <Styledwrap {...props}>{children}</Styledwrap>;
};

export default Wrap;
