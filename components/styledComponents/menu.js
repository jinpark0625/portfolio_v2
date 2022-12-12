import { domAnimation, LazyMotion } from "framer-motion";
import { StyledMenu } from "./menuStyles";

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

export default Menu;
