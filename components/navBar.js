import Link from "next/link";
import { useRouter } from "next/router";
import { HamburgerMenu } from "./styledComponents/nav";
import Menu from "./styledComponents/menu";
import dynamic from "next/dynamic";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { NavBarContainer, Nav } from "./styledComponents/menuStyles";

const ArrowLink = dynamic(() => import("./arrowLink"), {
  ssr: false,
});

const LogoLink = dynamic(() => import("./logoLink"), {
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

const Navbar = () => {
  const router = useRouter();

  const [open, cycleOpen] = useCycle(false, true);

  return (
    <NavBarContainer>
      <div>
        <Nav>
          <div className="navWrap">
            {router.pathname === "/" ||
            router.pathname === "/work" ||
            router.pathname === "/about" ? null : (
              <ArrowLink handleClick={cycleOpen} router={router} open={open} />
            )}
            {router.pathname === "/work" || router.pathname === "/about" ? (
              <LogoLink handleClick={cycleOpen} open={open} />
            ) : (
              <div></div>
            )}
            <HamburgerMenu
              menu={open}
              menuOpen={cycleOpen}
              path={router.pathname}
            >
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
                  >
                    <motion.div className="li" variants={itemVariants}>
                      About
                    </motion.div>
                  </a>
                </Link>
                <div className="footer">
                  <Link href="mailto:jinpark0625@gmail.com">
                    <a>
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
