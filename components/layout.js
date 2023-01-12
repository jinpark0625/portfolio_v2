import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./navBar"), {
  ssr: false,
  loading: () => <div></div>,
});

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
  return (
    <ThemeProvider theme={theme}>
      <Navbar path={asPath} />
      {/* page transition */}
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
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
export default Layout;
