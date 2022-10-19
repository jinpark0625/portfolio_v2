import styled from "styled-components";

const StyledSubTitle = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.subTitle}rem;
  color: ${({ theme: { color }, fontColor }) => fontColor || color.white};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.subTitle};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.miniTablet}px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.subTitle_m}rem;
  }
`;

const SubTitle = ({ children, ...props }) => {
  return <StyledSubTitle {...props}>{children}</StyledSubTitle>;
};

export default SubTitle;
