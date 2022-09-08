import Navbar from "./navBar";
import { useSpring, animated, config, useTransition } from "@react-spring/web";
import { withRouter, useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

const Layout = ({ children, router }) => {
  const transitions = useTransition(router, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
    // onRest: () => set(!show),
  });

  // console.log(router);

  // useEffect(() => {
  //   if (router) {
  //     const handleRouteChange = (url, { shallow }) => {
  //       console.log(
  //         `App is changing to ${url} ${
  //           shallow ? "with" : "without"
  //         } shallow routing`
  //       );
  //     };

  //     router.events.on("routeChangeStart", handleRouteChange);

  //     // If the component is unmounted, unsubscribe
  //     // from the event with the `off` method:
  //     return () => {
  //       console.log("Router Listener Unmounted");
  //       router.events.off("routeChangeStart", handleRouteChange);
  //     };
  //   }
  // }, []);

  return (
    <>
      <Navbar />
      {/* <div>{children}</div> */}
      {transitions(
        (style, item) =>
          item && <animated.div style={style}>{children}</animated.div>
      )}
    </>
  );
};

export default withRouter(Layout);
