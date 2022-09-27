import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: fixed;
  width: 100%;
  height: 300px;
  left: 0;
  bottom: 0;
  z-index: -1;
  background: ${({ background }) => background || "#fff"};
  transform-origin: top;

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
    mediaQuery.mobile}px) {
    
  }}
`;

const Footer = ({ children, ...props }) => {
  return <StyledFooter {...props}>{children}</StyledFooter>;
};

export default Footer;
