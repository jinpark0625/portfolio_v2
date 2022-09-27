import React from "react";
import styled from "styled-components";

const StyledFooterText = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.footerSize}rem;
  color: ${({ theme: { color }, fontColor }) => fontColor || color.white};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.tagline};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};

  .link {
    flex-grow: 1;
  }
  .date {
    width: 580px;
  }

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.miniTablet}px) {
    .date {
      width: auto;
    }
  }
`;

const FooterText = ({ children, ...props }) => {
  return <StyledFooterText {...props}>{children}</StyledFooterText>;
};
export default FooterText;
