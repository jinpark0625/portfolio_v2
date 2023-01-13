import Layout from "../components/layout";
import { useLayoutEffect, useReducer, useCallback } from "react";
import "../styles/globals.min.css";
import Router, { useRouter } from "next/router";
import nProgress from "nprogress";
import { Analytics } from "@vercel/analytics/react";

const nProgressReducer = (state, action) => {
  switch (action.type) {
    case "start":
      nProgress.start();
      return { ...state, isLoading: true };
    case "done":
      nProgress.done();
      return { ...state, isLoading: false };
    default:
      throw new Error("Cannot implement nProgress");
  }
};

export default function App({ Component, pageProps }) {
  const [nProgressState, dispatch] = useReducer(nProgressReducer, {
    isLoading: false,
  });

  const handleRouteStart = useCallback(() => {
    dispatch({ type: "start" });
  }, []);

  const handleRouteDone = useCallback(() => {
    dispatch({ type: "done" });
  }, []);

  useLayoutEffect(() => {
    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, [handleRouteStart, handleRouteDone]);

  // size for chrome
  const handleResize = useCallback(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const { asPath } = useRouter();

  return (
    <Layout asPath={asPath}>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}
