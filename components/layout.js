import Navbar from "./navBar";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

function Layout({ children }) {
  const { asPath } = useRouter();
  const variants = {
    in: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: 0.5,
      },
    },
    out: {
      opacity: 0,
      scale: 1,
      y: 40,
      transition: {
        duration: 0.75,
      },
    },
  };

  return (
    <>
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
    </>
  );
}
export default Layout;
