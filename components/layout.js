import Navbar from "./navBar";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

function Layout({ children }) {
  const { asPath } = useRouter();
  const variants = {
    in: {
      opacity: 1,
      // scale: 1,
      y: 0,
      transition: {
        duration: 0.65,
      },
    },
    out: {
      opacity: 0,
      // scale: 1,
      y: 40,
      // y: "-100vh",
      transition: {
        duration: 0.65,
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={asPath}
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}
export default Layout;
