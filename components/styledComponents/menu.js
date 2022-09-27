import React from "react";
import styled from "styled-components";

const StyledMenu = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 9999999;
  width: 100%;
  height: 100vh;
  background: ${({ theme: { color } }) => color.background};
  transform: translateY(-100%);

  .wrap {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    padding-top: 80px;
    position: relative;
  }
  .section {
    width: 50%;
    height: calc(100% - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: #fff;
    transition: color 300ms;
  }
  .section:hover {
    color: #aaa;
  }
  .footer {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
  }
  .li {
    transform: translateY(-100%);
    font-size: ${({ theme: { fontSize } }) => fontSize.headerIntro}rem;
  }

  .cont {
    color: #fff;
    font-size: ${({ theme: { fontSize } }) => fontSize.tagline}rem;
    margin-top: 4px;
  }
  .line {
    width: 100%;
    height: 1px;
    position: absolute;
    background: #4f4f4f;
    transform: scaleX(0);
  }
  .top_line {
    top: 80px;
    transform-origin: left;
  }
  .bot_line {
    bottom: 80px;
    transform-origin: right;
  }
  .center_line {
    width: 1px;
    height: 100%;
    position: absolute;
    background: #4f4f4f;
    transform: scaleY(0);
    right: 0;
    transform-origin: bottom;
  }

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.miniTablet}px) {
    .section {
      height: calc(50% - 40px);
      width: 100%;
    }
    .center_line {
      display: none;
    }
  }
`;

const Menu = ({ children, menu, ...props }) => {
  return (
    <StyledMenu {...props} menu={menu}>
      {children}
    </StyledMenu>
  );
};

export default React.memo(Menu);
