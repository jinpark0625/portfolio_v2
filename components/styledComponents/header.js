import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

const Header = ({ children, ...props }) => {
  return <StyledHeader {...props}>{children}</StyledHeader>;
};

export default Header;
