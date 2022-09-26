import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10000000;
  display: flex;
  width: 100%;
  height: 80px;
  pointer-events: none;

  .navWrap {
    margin: 0 auto;
    max-width: 1800px;
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.tablet}px) {
    .navWrap {
      padding: 0 35px;
    }
  }
`;

export const Nav = ({ children, ...props }) => {
  return <StyledNav {...props}>{children}</StyledNav>;
};

const StyledArrow = styled.div`
  width: 40px;
  display: flex;
  cursor: pointer;
  pointer-events: all;
  .arrow {
    transform: rotate(90deg);
    position: relative;
    width: 17px;
    left: 5px;
  }
  .arrow:before {
    content: "";
    width: 10px;
    height: 1px;
    background-color: ${({ color, menu, theme }) =>
      menu ? theme.color.white : color};
    display: inline-block;
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    top: 3px;
    position: relative;
  }
  .arrow::after {
    content: "";
    width: 10px;
    height: 1px;
    background-color: ${({ color, menu, theme }) =>
      menu ? theme.color.white : color};
    display: inline-block;
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    margin-left: -3px;
    top: 3px;
    position: relative;
  }
`;

const Arrow = ({ children, path, menu, ...props }) => {
  const [color, set] = React.useState("#fff");

  const checkColor = (route) => {
    switch (route) {
      case "/work/goodcafeteria":
        return set("#000");
      case "/work/yellowbasket":
        return set("#ffcc00");
      case "/work/binworks":
        return set("#feae2e");
      case "/work/coffeebak":
        return set("#ebcd7d");
      case "/work/fourtoon":
        return set("#000");
      case "/work/carrotrentcar":
        return set("#14473c");
      default:
        return set("#fff");
    }
  };

  React.useLayoutEffect(() => {
    checkColor(path);
  }, [path]);

  return (
    <StyledArrow {...props} color={color} menu={menu}>
      <div className="arrow" />
    </StyledArrow>
  );
};
export const MemoRizedArrow = React.memo(Arrow);

const StyledHamburgerMenu = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  right: -11px;
  position: relative;
  opacity: 1;
  transition: opacity 200ms;
  pointer-events: all;

  span {
    display: block;
    background-color: ${({ color, menu, theme }) =>
      menu ? theme.color.white : color};
    display: block;
    height: 1px;
    width: 18px;
    position: absolute;
    transition: transform 500ms ease, background-color 300ms;
    top: 50%;
    left: 50%;
  }
  .first {
    margin-top: -4px;
    -ms-transform: ${({ menu }) =>
      menu
        ? `translateY(4px) translateX(-50%) rotate(-45deg)`
        : `translateY(0px) rotate(0deg) translateX(-50%)`};
    transform: ${({ menu }) =>
      menu
        ? `translateY(4px) translateX(-50%) rotate(-45deg)`
        : `translateY(0px) rotate(0deg) translateX(-50%)`};
  }
  .second {
    margin-top: 4px;
    -ms-transform: ${({ menu }) =>
      menu
        ? ` translateY(-4px) translateX(-50%) rotate(45deg)`
        : `translateY(0px) translateX(-50%)  translateX(0%)`};
    transform: ${({ menu }) =>
      menu
        ? ` translateY(-4px) translateX(-50%) rotate(45deg)`
        : `translateY(0px) translateX(-50%)  translateX(0%)`};
  }
`;

export const HamburgerMenu = ({ children, menu, path, menuOpen, ...props }) => {
  const [color, set] = React.useState("#fff");
  const checkColor = (route) => {
    switch (route) {
      case "/work/goodcafeteria":
        return set("#000");
      case "/work/yellowbasket":
        return set("#ffcc00");
      case "/work/binworks":
        return set("#feae2e");
      case "/work/coffeebak":
        return set("#ebcd7d");
      case "/work/fourtoon":
        return set("#000");
      case "/work/carrotrentcar":
        return set("#14473c");
      default:
        return set("#fff");
    }
  };

  React.useLayoutEffect(() => {
    checkColor(path);
  }, [path]);

  return (
    <StyledHamburgerMenu
      {...props}
      onClick={menuOpen}
      color={color}
      menu={menu}
    >
      {children}
    </StyledHamburgerMenu>
  );
};