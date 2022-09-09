import React from "react";
import styled from "styled-components";

const StyledTagline = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.tagline}rem;
  color: ${({ theme: { color }, fontColor }) => fontColor || color.white};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.tagline};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

const Tagline = ({ children, ...props }) => {
  return <StyledTagline {...props}>{children}</StyledTagline>;
};

export default Tagline;
