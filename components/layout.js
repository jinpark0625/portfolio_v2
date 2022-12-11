import Navbar from "./navBar";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { useState, memo } from "react";

const variants = {
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
    },
  },
  out: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.65,
    },
  },
};

function Layout({ asPath, children }) {
  const [exitBefore, setExitBefore] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {/* page transition */}
      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter={!exitBefore}>
          <m.div
            key={asPath}
            className="container"
            animate="in"
            initial="out"
            exit={asPath.includes("/work/") ? null : "out"}
            variants={variants}
          >
            {children}
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </ThemeProvider>
  );
}
export default memo(Layout);
