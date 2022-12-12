import Link from "next/link";
import { HamburgerMenu } from "./styledComponents/nav";
import Menu from "./styledComponents/menu";
import dynamic from "next/dynamic";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { NavBarContainer, Nav } from "./styledComponents/menuStyles";

const ArrowLink = dynamic(() => import("./arrowLink"), {
  ssr: false,
  loading: () => <div></div>,
});

const LogoLink = dynamic(() => import("./logoLink"), {
  ssr: false,
  loading: () => <div></div>,
});

const itemVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.6,
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.6,
    },
  },
};

const menuVariants = {
  closed: {},
  open: {},
};

const HandleNavMenu = ({ path, cycleOpen, open }) => {
  if (path.includes("/work/")) {
    return <ArrowLink handleClick={cycleOpen} path={path} open={open} />;
  } else if (path === "/") {
    return <div></div>;
  } else return <LogoLink handleClick={cycleOpen} open={open} />;
};

const Navbar = ({ path }) => {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <NavBarContainer>
      <div>
        <Nav>
          <div className="navWrap">
            <HandleNavMenu path={path} cycleOpen={cycleOpen} open={open} />
            <HamburgerMenu menu={open} menuOpen={cycleOpen} path={path}>
              <span className="first" />
              <span className="second" />
            </HamburgerMenu>
          </div>
        </Nav>
        <AnimatePresence>
          {open && (
            <Menu className="menu" open={open}>
              <motion.div
                className="wrap"
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
              >
                <span className="top_line line" />
                <span className="bot_line line" />
                <Link href="/work">
                  <a
                    className="section"
                    style={{ cursor: "pointer" }}
                    onClick={cycleOpen}
                    aria-label="Link to work page"
                  >
                    <span className="center_line" />
                    <motion.div className="li" variants={itemVariants}>
                      Work
                    </motion.div>
                  </a>
                </Link>
                <Link href="/about">
                  <a
                    className="section"
                    style={{ cursor: "pointer" }}
                    onClick={cycleOpen}
                    aria-label="Link to about page"
                  >
                    <motion.div className="li" variants={itemVariants}>
                      About
                    </motion.div>
                  </a>
                </Link>
                <div className="footer">
                  <Link href="mailto:jinpark0625@gmail.com">
                    <a aria-label="Email to me">
                      <motion.div className="li cont" variants={itemVariants}>
                        Contact
                      </motion.div>
                    </a>
                  </Link>
                </div>
              </motion.div>
            </Menu>
          )}
        </AnimatePresence>
      </div>
    </NavBarContainer>
  );
};

export default Navbar;
