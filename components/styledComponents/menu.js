import { domAnimation, LazyMotion } from "framer-motion";
import { StyledMenu } from "./menuStyles";

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

const Menu = ({ children, ...props }) => {
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
