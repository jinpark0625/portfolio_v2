import styled from "styled-components";

const StyledHeader = styled.header`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  background: ${({ background, theme: { color } }) =>
    background ? background : color.background};

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.miniTablet}px) {
    padding: 150px 0 80px;
  }

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.mobile}px) {
    padding: 90px 0 80px;
  }
`;

const Header = ({ children, ...props }) => {
  return <StyledHeader {...props}>{children}</StyledHeader>;
};

export default Header;
