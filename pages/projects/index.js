import React, { useRef, useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  Point,
  Points,
  PointMaterial,
  OrbitControls,
  Text,
  Sparkles,
  Text3D,
  Center,
  useCursor,
  ScrollControls,
  useScroll,
  Html,
  useProgress,
  Scroll,
} from "@react-three/drei";

const Items = () => {
  const { width, height } = useThree((state) => state.viewport);

  // slide speed options
  // const [current, target, ease] = useMemo(() => {
  //   const current = 0;
  //   const target = 0;
  //   const ease = 0.075;

  //   return [current, target, ease];
  // }, []);

  const current = useRef(0);
  const target = useRef(0);
  const ease = useRef(0.075);

  const scrollableRef = useRef();

  // Linear inetepolation used for smooth scrolling and image offset uniform adjustment
  // const lerp = (start, end, t) => {
  //   return start * (1 - t) + end * t;
  // };

  // useFrame(({ clock }) => {
  //   target.current = window.scrollY;
  //   current = lerp(current.current, target.current, ease.current);
  //   scrollableRef.current.style.transform = `translate3d(0,${-current}px, 0)`;
  // });

  return (
    // <Html
    //   style={{
    //     position: "fixed",
    //     width: "100%",
    //     hegiht: "100vh",
    //   }}
    //   fullscreen
    //   center
    //   className="main"
    // >
    <Scroll html>
      <div
        style={{
          position: "absolute",
          width: "100vw",
          top: 0,
          left: 0,
          willChange: "transform",
        }}
        className="scrollable"
        ref={scrollableRef}
      >
        <div className="container">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100vh",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                position: "absolute",
                left: 0,
                top: "60%",
                left: "55%",
                zIndex: "10",
                color: "#fff",
                mixBlendMode: "difference",
              }}
            >
              TEST1
            </h1>
            <div
              style={{
                position: "absolute",
                height: "60%",
                width: "300px",
                // visibility: "hidden",
              }}
            >
              <Image
                src="/images/1.webp"
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100vh",
              overflot: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                position: "absolute",
                left: 0,
                top: "60%",
                left: "55%",
                zIndex: "10",
                color: "#fff",
                mixBlendMode: "difference",
              }}
            >
              TEST2
            </h1>
            <div
              style={{
                position: "absolute",
                height: "60%",
                width: "300px",
              }}
            >
              <Image
                src="/images/2.webp"
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100vh",
              overflot: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                position: "absolute",
                left: 0,
                top: "60%",
                left: "55%",
                zIndex: "10",
                color: "#fff",
                mixBlendMode: "difference",
              }}
            >
              TEST3
            </h1>
            <div
              style={{
                position: "absolute",
                height: "60%",
                width: "300px",
              }}
            >
              <Image
                src="/images/3.webp"
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100vh",
              overflot: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                position: "absolute",
                left: 0,
                top: "60%",
                left: "55%",
                zIndex: "10",
                color: "#fff",
                mixBlendMode: "difference",
              }}
            >
              TEST4
            </h1>
            <div
              style={{
                position: "absolute",
                height: "60%",
                width: "300px",
              }}
            >
              <Image
                src="/images/4.webp"
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Scroll>
    // </Html>
  );
};

const Projects = () => {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });

  const canvasRef = useRef();

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", () => {
      handleResize();
    });

    return window.removeEventListener("resize", () => {
      handleResize();
    });
  }, []);

  return (
    <div
      style={{
        width: windowSize.width,
        height: windowSize.height,
        background: "#17191c",
      }}
    >
      <Canvas
        ref={canvasRef}
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
          aspect: windowSize.width / windowSize.height,
        }}
        gl={{ antialias: false }}
        dpr={[1, 2]}
      >
        <ScrollControls
          pages={4} // Each page takes 100% of the height of the canvas
          distance={1} // A factor that increases scroll bar travel (default: 1)
          damping={4} // Friction, higher is faster (default: 4)
          horizontal={false} // Can also scroll horizontally (default: false)
          infinite={false} // Can also scroll infinitely (default: false)
        >
          <Items />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default Projects;
