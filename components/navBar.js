import Link from "next/link";
import { useRouter } from "next/router";
import { Nav, MemoRizedArrow, HamburgerMenu } from "./styledComponents/nav";
import Menu from "./styledComponents/menu";
import React from "react";
import Logo from "./styledComponents/logo";
import { gsap, Power1 } from "gsap";
import useRefs from "react-use-refs";

const Navbar = () => {
  const router = useRouter();

  //open menu
  const [menu, setMenu] = React.useState(false);
  const menuOpen = () => {
    setMenu((prev) => !prev);
  };

  // store the timeline in a ref.
  const [el, tl] = useRefs();
  const q = gsap.utils.selector(el);

  //navigation animation
  React.useLayoutEffect(() => {
    tl.current = gsap
      .timeline()
      .to(q(".menu"), {
        duration: 0.6,
        y: "0%",
        ease: Power1.easeIn,
      })
      .fromTo(
        q(".li"),
        {
          y: "-100%",
          opacity: 0,
        },
        {
          duration: 0.4,
          opacity: 1,
          y: "0%",
        },
        1
      )
      .fromTo(
        q(".line"),
        {
          scaleX: 0,
          opacity: 0,
        },
        {
          duration: 0.4,
          opacity: 1,
          scaleX: 1,
        },
        1
      )
      .fromTo(
        q(".center_line"),
        {
          scaleY: 0,
          opacity: 0,
        },
        {
          duration: 0.4,
          opacity: 1,
          scaleY: 1,
        },
        1
      )
      .fromTo(
        q(".logo"),
        {
          opacity: 0,
        },
        {
          duration: 0.4,
          opacity: 1,
        },
        1
      );
    return () => {
      tl.current.progress(0).kill();
    };
  }, []);

  React.useEffect(() => {
    tl.current.reversed(!menu);
  }, [menu]);

  React.useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "auto";
  }, [menu]);

  const handleClick = () => {
    setMenu(false);
  };

  return (
    <div style={{ position: "relative", zIndex: 2 }}>
      <div ref={el}>
        <Nav>
          <div className="navWrap">
            {router.pathname === "/" ||
            router.pathname === "/work" ||
            router.pathname === "/about" ? null : (
              <MemoRizedArrow
                menu={menu}
                path={router.pathname}
                onClick={() => {
                  router.push("/work");
                  handleClick();
                }}
              />
            )}
            {router.pathname === "/work" || router.pathname === "/about" ? (
              <Link href="/">
                <a
                  className="logoWrap"
                  onClick={() => {
                    handleClick();
                  }}
                >
                  <Logo menu={menu} router={router.pathname} />
                </a>
              </Link>
            ) : (
              <div></div>
            )}

            <HamburgerMenu
              menu={menu}
              menuOpen={menuOpen}
              path={router.pathname}
            >
              <span className="first" />
              <span className="second" />
            </HamburgerMenu>
          </div>
        </Nav>

        <Menu menu={menu} className="menu">
          <div className="wrap">
            <span className="top_line line" />
            <span className="bot_line line" />
            <Link href="/work">
              <a
                className="section"
                style={{ cursor: "pointer" }}
                onClick={handleClick}
              >
                <span className="center_line" />
                <div className="li">Work</div>
              </a>
            </Link>
            <Link href="/about">
              <a
                className="section"
                style={{ cursor: "pointer" }}
                onClick={handleClick}
              >
                <div className="li">About</div>
              </a>
            </Link>

            <div className="footer">
              <Link href="mailto:jinpark0625@gmail.com">
                <a>
                  <div className="li cont">Contact</div>
                </a>
              </Link>
            </div>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
