import React from "react";
import styled from "styled-components";

const StyledHeaderTitle = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.headerIntro}rem;
  color: ${({ theme: { color }, fontColor }) => fontColor || color.white};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.subTitle};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-weight: ${({ weight }) => weight};
  font-family: ${({ fontFamily }) => fontFamily};
  width: ${({ width }) => width};

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.miniTablet}px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.subTitle}rem;
  }
`;

const HeaderTitle = ({ children, ...props }) => {
  return <StyledHeaderTitle {...props}>{children}</StyledHeaderTitle>;
};

export default HeaderTitle;
