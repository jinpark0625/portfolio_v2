import { domAnimation, LazyMotion } from "framer-motion";
import { StyledMenu } from "./menuStyles";
import { useEffect } from "react";

const variants = {
  in: {
    y: "0",
    transition: {
      duration: 0.6,
    },
  },
  out: {
    y: "-100%",
    transition: {
      duration: 0.6,
    },
  },
};

const Menu = ({ children, open, ...props }) => {
  useEffect(() => {
    document.body.classList.add("fixedScroll");
    return () => document.body.classList.remove("fixedScroll");
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <StyledMenu
        {...props}
        variants={variants}
        initial="out"
        animate="in"
        exit="out"
      >
        {children}
      </StyledMenu>
    </LazyMotion>
  );
};

export default Menu;
