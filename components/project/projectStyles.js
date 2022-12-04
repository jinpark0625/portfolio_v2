import styled from "styled-components";

/**
 * Project detail styles
 */

// header
export const WorkHeader = styled.header`
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
    color: ${({ mainColor }) => mainColor};
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

// project description
export const WorkDevelopment = styled.div`
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

// project section
export const WorkSection = styled.section`
  padding-bottom: 145px;

  // common style
  .section_margin {
    margin: 0 50px;
  }

  .project_padding_t {
    padding-top: 105px;
  }

  .mobile_padding {
    padding: 210px 0;
  }

  // images
  .project_image_wrap {
    position: relative;
    max-width: 1024px;
    margin: 0 auto;
  }

  .logo_wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    background: #fff;
  }
  .logo_wrap > svg {
    width: 20%;
  }

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.tablet}px) {
    .section_margin {
      margin: 0 35px;
    }
  }

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.mobile}px) {
    .project_padding_t {
      padding-top: 80px;
    }
    .mobile_padding {
      padding: 20px 0;
    }
  }
`;

// image_container
export const ImageContainer = styled.div`
  position: relative;
  padding-bottom: ${({ padding }) => padding}%;
  border: ${({ border }) => border && `1px solid ${border}`};
  border-radius: ${({ rad }) => rad && "12px"};
  margin-top: ${({ marginTop }) => (marginTop ? "64px" : "unset")};

  .image_wrap {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.mobile}px) {
    margin-top: ${({ marginTop }) => (marginTop ? "32px" : "unset")};
  }
`;

// full_width_image_container
export const FullImageContainer = styled.div`
  width: 100%;
  height: 840px;
  position: relative;
  margin: ${({ margin }) => (margin ? "105px 0" : "unset")};

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.desktop}px) {
    height: 695px;
  }
  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.miniTablet}px) {
    height: 500px;
  }
  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.mobile}px) {
    height: 300px;
    margin: ${({ margin }) => (margin ? "80px 0" : "unset")};
  }
`;

// full_width_concept_container
export const FullConceptContainer = styled.div`
  width: 100%;
  padding: ${({ padding }) => (padding ? padding : "0 0 37.5% 0")};
  position: relative;
  margin: ${({ margin }) => (margin ? "105px 0" : "unset")};

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.tablet}px) {
    margin: ${({ margin }) => (margin ? "80px 0" : "unset")};
  }
`;

// mobile_container
export const MobileContainer = styled.div`
  max-width: ${({ max }) => (max ? max : "1024px")};
  display: flex;
  margin: 0 auto;
  display: flex;
  flex-wrap: ${({ wrap }) => wrap && wrap};
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  .project_mobile_image {
    max-width: 320px;
    flex: 1;
  }

  .mobile_array {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex: 1;
  }
  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.mobile}px) {
    .mobile_array {
      flex: 1 0 100%;
    }
  }
`;
