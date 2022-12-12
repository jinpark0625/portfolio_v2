import styled from "styled-components";

const HandleColor = (path) => {
  switch (path) {
    case "/work/goodcafeteria":
      return "#210e08";
    case "/work/yellowbasket":
      return "#ffcc00";
    case "/work/binworks":
      return "#feae2e";
    case "/work/coffeebak":
      return "#eb9109";
    case "/work/fourtoon":
      return "#1a5285";
    case "/work/carrotrentcar":
      return "#14473c";
    default:
      return "#fff";
  }
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
  .arrow::before,
  .arrow::after {
    content: "";
    width: 10px;
    height: 1px;
    background-color: ${({ path, menu }) => {
      return menu ? "#fff" : HandleColor(path);
    }};
    top: 3px;
    position: relative;
    display: inline-block;
  }
  .arrow::before {
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .arrow::after {
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    margin-left: -3px;
  }
`;

export const Arrow = ({ children, menu, path, ...props }) => {
  return (
    <StyledArrow {...props} menu={menu} path={path}>
      <div className="arrow" />
    </StyledArrow>
  );
};

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
    background-color: ${({ path, menu }) => {
      return menu ? "#fff" : HandleColor(path);
    }};
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
  return (
    <StyledHamburgerMenu {...props} onClick={menuOpen} menu={menu} path={path}>
      {children}
    </StyledHamburgerMenu>
  );
};
