import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  Suspense,
  useLayoutEffect,
} from "react";
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
import { TextureLoader, LinearFilter, Vector2 } from "three";
import { vertexShader, fragmentShader } from "./shader";
import lerp from "lerp";

let target = 0;
let current = 0;
let ease = 0.075;
const Item = ({ map, height }) => {
  const ref = useRef();

  // useFrame(()=>{
  //   const {pages, top} = state;
  //   material.current.scale = lerp(material.current.scale, offsetFactor - top.current / ((pages - 1) * viewportHeight), 0.1)
  //   material.current.shift = lerp(material.current.shift, (top.current - last) / 150, 0.1)
  //   last = top.current
  // })
  const scroll = useScroll();

  useFrame(() => {
    // console.log(scroll.scroll.current);
    // ref.current.material.uniform.scale.value =
    // console.log(scroll);
    if (map) {
      ref.current.material.uniforms.hasTexture.value = 1;
    }

    target = scroll.scroll.current;
    current = lerp(current, target, ease);

    ref.current.material.uniforms.uOffset.value = new Vector2(
      0,
      -(target - current) * 0.3
    );
  });

  const uniforms = useMemo(
    () => ({
      scale: { value: 0 },
      shift: { value: 0 },
      uOffset: {
        value: new Vector2(),
      },
      uAlpha: {
        value: 1,
      },
      uTexture: {
        value: map,
      },
      hasTexture: {
        value: 0,
      },
    }),
    []
  );

  return (
    <mesh position={[0, height, 0]} ref={ref}>
      <planeGeometry args={[3, 3]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};

const Items = () => {
  const { width, height } = useThree((state) => state.viewport);

  const images = [
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
    "/images/4.webp",
  ];
  const textures = useLoader(TextureLoader, images);
  const [img1, img2, img3, img4] = textures.map(
    (texture) => ((texture.minFilter = LinearFilter), texture)
  );

  const current = useRef(0);
  const target = useRef(0);
  const ease = useRef(0.075);

  const scrollableRef = useRef();

  return (
    <>
      <Scroll>
        {textures.map((item, index) => (
          <Item key={index} map={item} height={height * -index} />
        ))}
        {/* <div
    //     style={{
    //       position: "absolute",
    //       width: "100vw",
    //       top: 0,
    //       left: 0,
    //       willChange: "transform",
    //     }}
    //     className="scrollable"
    //     ref={scrollableRef}
    //   >
    //     <div className="container">
    //       <div
    //         style={{
    //           position: "relative",
    //           width: "100%",
    //           height: "100vh",
    //           overflow: "hidden",
    //           display: "flex",
    //           alignItems: "center",
    //           justifyContent: "center",
    //         }}
    //       >
    //         <h1
    //           style={{
    //             position: "absolute",
    //             left: 0,
    //             top: "60%",
    //             left: "55%",
    //             zIndex: "10",
    //             color: "#fff",
    //             mixBlendMode: "difference",
    //           }}
    //         >
    //           TEST1
    //         </h1>
    //         <div
    //           style={{
    //             position: "absolute",
    //             height: "60%",
    //             width: "300px",
    //             // visibility: "hidden",
    //           }}
    //         >
    //           <Image
    //             src="/images/1.webp"
    //             alt="image"
    //             layout="fill"
    //             objectFit="cover"
    //           />
    //         </div>
    //       </div>
    //       <div
    //         style={{
    //           position: "relative",
    //           width: "100%",
    //           height: "100vh",
    //           overflot: "hidden",
    //           display: "flex",
    //           alignItems: "center",
    //           justifyContent: "center",
    //         }}
    //       >
    //         <h1
    //           style={{
    //             position: "absolute",
    //             left: 0,
    //             top: "60%",
    //             left: "55%",
    //             zIndex: "10",
    //             color: "#fff",
    //             mixBlendMode: "difference",
    //           }}
    //         >
    //           TEST2
    //         </h1>
    //         <div
    //           style={{
    //             position: "absolute",
    //             height: "60%",
    //             width: "300px",
    //           }}
    //         >
    //           <Image
    //             src="/images/2.webp"
    //             alt="image"
    //             layout="fill"
    //             objectFit="cover"
    //           />
    //         </div>
    //       </div>
    //       <div
    //         style={{
    //           position: "relative",
    //           width: "100%",
    //           height: "100vh",
    //           overflot: "hidden",
    //           display: "flex",
    //           alignItems: "center",
    //           justifyContent: "center",
    //         }}
    //       >
    //         <h1
    //           style={{
    //             position: "absolute",
    //             left: 0,
    //             top: "60%",
    //             left: "55%",
    //             zIndex: "10",
    //             color: "#fff",
    //             mixBlendMode: "difference",
    //           }}
    //         >
    //           TEST3
    //         </h1>
    //         <div
    //           style={{
    //             position: "absolute",
    //             height: "60%",
    //             width: "300px",
    //           }}
    //         >
    //           <Image
    //             src="/images/3.webp"
    //             alt="image"
    //             layout="fill"
    //             objectFit="cover"
    //           />
    //         </div>
    //       </div>
    //       <div
    //         style={{
    //           position: "relative",
    //           width: "100%",
    //           height: "100vh",
    //           overflot: "hidden",
    //           display: "flex",
    //           alignItems: "center",
    //           justifyContent: "center",
    //         }}
    //       >
    //         <h1
    //           style={{
    //             position: "absolute",
    //             left: 0,
    //             top: "60%",
    //             left: "55%",
    //             zIndex: "10",
    //             color: "#fff",
    //             mixBlendMode: "difference",
    //           }}
    //         >
    //           TEST4
    //         </h1>
    //         <div
    //           style={{
    //             position: "absolute",
    //             height: "60%",
    //             width: "300px",
    //           }}
    //         >
    //           <Image
    //             src="/images/4.webp"
    //             alt="image"
    //             layout="fill"
    //             objectFit="cover"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div> */}
      </Scroll>
      <Scroll html>
        <h1 style={{ color: "#fff", position: "absolute", top: "0" }}>Hello</h1>
        <h1 style={{ color: "#fff", position: "absolute", top: "100vh" }}>
          Test
        </h1>
        <h1 style={{ color: "#fff", position: "absolute", top: "200vh" }}>
          Test
        </h1>
        <h1 style={{ color: "#fff", position: "absolute", top: "300vh" }}>
          Test
        </h1>
      </Scroll>
    </>
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
        <Suspense fallback={null}>
          <ScrollControls
            pages={4} // Each page takes 100% of the height of the canvas
            distance={1} // A factor that increases scroll bar travel (default: 1)
            damping={4} // Friction, higher is faster (default: 4)
            horizontal={false} // Can also scroll horizontally (default: false)
            infinite={false} // Can also scroll infinitely (default: false)
          >
            <Items />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Projects;
