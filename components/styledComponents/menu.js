import { memo } from "react";
import styled from "styled-components";
import { domAnimation, LazyMotion, m } from "framer-motion";

const StyledMenu = styled(m.div)`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 9999999;
  width: 100%;
  height: 100vh;
  height: -webkit-fill-available;
  background: ${({ theme: { color } }) => color.background};

  @keyframes center {
    from {
      opacity: 0;
      transform: scaleY(0);
    }
    to {
      opacity: 1;
      transform: scaleY(1);
    }
  }

  @keyframes top {
    from {
      opacity: 0;
      transform: scaleX(0);
    }
    to {
      opacity: 1;
      transform: scaleX(1);
    }
  }

  .wrap {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    padding-top: 80px;
    position: relative;
    cursor: auto;
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
    color: rgb(78, 78, 78);
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
    font-size: ${({ theme: { fontSize } }) => fontSize.headerIntro}rem;
  }

  .cont {
    color: #fff;
    font-size: ${({ theme: { fontSize } }) => fontSize.tagline}rem;
  }
  .line {
    opacity: 0;
    width: 100%;
    height: 1px;
    position: absolute;
    background: #4f4f4f;
    animation: top 0.6s 0.6s forwards;
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
    opacity: 0;
    animation: center 0.6s 0.6s forwards;
    width: 1px;
    height: 100%;
    position: absolute;
    background: #4f4f4f;
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

const Menu = ({ children, ...props }) => {
  return (
    <LazyMotion features={domAnimation}>
      <StyledMenu
        {...props}
        initial={{ y: "-100%" }}
        animate={{
          y: "0",
          transition: { duration: 0.6 },
        }}
        exit={{
          y: "-100%",
          transition: { duration: 0.6 },
        }}
      >
        {children}
      </StyledMenu>
    </LazyMotion>
  );
};

export default memo(Menu);
