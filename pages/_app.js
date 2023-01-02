import Layout from "../components/layout";
import { useEffect, useLayoutEffect } from "react";
import "../styles/globals.min.css";
import "../styles/nprogress.min.css";
import "../public/fonts/font.css";
import Router, { useRouter } from "next/router";
import nProgress from "nprogress";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  // nProgress
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

  // size for chrome
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

  return (
    <Layout asPath={asPath}>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}
