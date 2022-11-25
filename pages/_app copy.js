import Layout from "../components/layout";
import { useEffect, useLayoutEffect, useState } from "react";
import "../styles/globals.min.css";
import "../styles/nprogress.min.css";
import "../public/fonts/font.css";
import Router from "next/router";
import nProgress from "nprogress";
import { Transition, animated } from "react-spring";
import { useRouter } from "next/router";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteStart = () => nProgress.start();
    const handleRouteDone = () => nProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  const handleResize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { asPath } = useRouter();
  const [items, set] = useState([{ id: asPath, Component, pageProps }]);
  useEffect(() => {
    set([{ id: asPath, Component, pageProps }]);
  }, [Component]);
  return (
    <Layout>
      <Transition
        items={items}
        keys={(item) => item.id}
        from={{ opacity: 0, transform: "translateY(-100px)" }}
        initial={{ opacity: 0 }}
        enter={{ opacity: 1, transform: "translateY(0px)" }}
        leave={{ opacity: 0, transform: "translateY(100px)" }}
      >
        {(styles, { pageProps, Component }) => (
          <animated.div style={{ ...styles, width: "100%" }}>
            <Component {...pageProps} />
          </animated.div>
        )}
      </Transition>
    </Layout>
  );
}
