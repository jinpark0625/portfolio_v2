import Link from "next/link";
import { useRouter } from "next/router";
import { Nav, MemoRizedArrow, HamburgerMenu } from "./styledComponents/nav";
import Menu from "./styledComponents/menu";
import React from "react";
import Logo from "./styledComponents/logo";
import { gsap, Power1 } from "gsap";

const Navbar = () => {
  const router = useRouter();

  //open menu
  const [menu, setMenu] = React.useState(false);
  const menuOpen = () => {
    setMenu((prev) => !prev);
  };

  const el = React.useRef();
  const q = gsap.utils.selector(el);
  // store the timeline in a ref.
  const tl = React.useRef();

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

  const handleClick = (e, name) => {
    e.preventDefault();
    router.push(name);
    setMenu(false);
  };

  return (
    <>
      <div ref={el}>
        <Nav>
          <div className="navWrap">
            {router.pathname === "/" || router.pathname === "/work" ? null : (
              <MemoRizedArrow
                menu={menu}
                path={router.pathname}
                onClick={() => router.push("/work")}
              />
            )}
            <a
              onClick={(e) => handleClick(e, "/")}
              style={{
                pointerEvents:
                  router.pathname === "/work" || menu ? "all" : "none",
                opacity: router.pathname === "/work" ? 1 : 0,
              }}
              className={`${router.pathname !== "/work" && "logo"} logoWrap`}
            >
              <Logo menu={menu} router={router.pathname} />
            </a>
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

            <a
              className="section"
              onClick={(e) => handleClick(e, "/work")}
              style={{ cursor: "pointer" }}
            >
              <span className="center_line" />
              <div className="li">Work</div>
            </a>

            <a
              className="section"
              onClick={(e) => handleClick(e, "/about")}
              style={{ cursor: "pointer" }}
            >
              <div className="li">About</div>
            </a>

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
    </>
  );
};

export default Navbar;
