import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Nav, MemoRizedArrow, HamburgerMenu } from "./styledComponents/nav";
import Menu from "./styledComponents/menu";
import React, { useLayoutEffect, useEffect, useRef } from "react";
import Logo from "./styledComponents/logo";
import { gsap } from "gsap";

const Navbar = () => {
  const router = useRouter();

  const [menu, setMenu] = React.useState(false);
  const menuOpen = () => {
    setMenu((prev) => !prev);
  };

  // const [reversed, setReversed] = React.useState(false);

  const el = React.useRef();
  const q = gsap.utils.selector(el);

  // store the timeline in a ref.
  const tl = React.useRef();

  React.useLayoutEffect(() => {
    // add a box and circle animation to our timeline and play on first render
    // tl.current && tl.current.progress(0).kill();

    tl.current = gsap
      .timeline()
      .to(q(".menu"), {
        duration: 1,
        y: "0%",
        // ease: Expo.easeInOut
      })
      .fromTo(
        q(".li"),
        {
          y: "-100%",
          opacity: 0,
        },
        {
          duration: 0.5,
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
          duration: 0.5,
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
          duration: 0.5,
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
          duration: 0.5,
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

  return (
    <>
      <div ref={el}>
        <Nav>
          <div className="navWrap">
            <MemoRizedArrow menu={menu} path={router.pathname} />
            <Link href="/">
              <a
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="logo"
              >
                <Logo menu={menu} />
              </a>
            </Link>

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
            <Link href="/projects">
              <a className="section">
                <span className="center_line" />
                <div className="li">Projects</div>
              </a>
            </Link>
            <Link href="/about">
              <a className="section ">
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
    </>
  );
};

export default Navbar;
