import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  Suspense,
  useLayoutEffect,
  createContext,
  useContext,
} from "react";
import Image from "next/image";
import { Canvas, useFrame, useLoader, useThree, Dom } from "@react-three/fiber";
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
import * as THREE from "three";
import state from "../../components/scrollStore";
import { Block, useBlock } from "../../components/blocks";

function Plane({ color = "white", map, ...props }) {
  return (
    <mesh {...props}>
      <planeGeometry />
      <meshBasicMaterial color={color} map={map} />
    </mesh>
  );
}
function Content({ left, children, map }) {
  const { contentMaxWidth, canvasWidth, margin } = useBlock();
  const aspect = 1.75;
  const alignRight = (canvasWidth - contentMaxWidth - margin) / 2;
  return (
    <group position={[alignRight * (left ? -1 : 1), 0, 0]}>
      <Plane
        scale={[contentMaxWidth, contentMaxWidth / aspect, 1]}
        color="#bfe2ca"
        map={map}
      />
      {children}
    </group>
  );
}

const Pages = () => {
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
  const { contentMaxWidth, mobile } = useBlock();
  const aspect = 1.75;
  const pixelWidth = contentMaxWidth * state.zoom;
  return (
    <>
      {/* First section */}
      <Block factor={1.2} offset={0}>
        <Content left map={img1}>
          <Html
            style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: "right" }}
            position={[
              mobile ? -contentMaxWidth / 2 : 0,
              -contentMaxWidth / 2 / aspect - 0.4,
              1,
            ]}
          >
            We’ve found that the people whose EEG doesn’t show any alpha-wave
            activity when they’re relaxed aren’t likely to respond significantly
            to the substance.
          </Html>
        </Content>
      </Block>
      {/* Second section */}
      <Block factor={1.2} offset={1}>
        <Content map={img2}>
          <Html
            style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: "right" }}
            position={[
              mobile ? -contentMaxWidth / 2 : 0,
              -contentMaxWidth / 2 / aspect - 0.4,
              1,
            ]}
          >
            We’ve found that the people whose EEG doesn’t show any alpha-wave
            activity when they’re relaxed aren’t likely to respond significantly
            to the substance.
          </Html>
        </Content>
      </Block>
      {/* Last section */}
      <Block factor={1.2} offset={2}>
        <Content left map={img3}>
          <Html
            style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: "left" }}
            position={[
              -contentMaxWidth / 2,
              -contentMaxWidth / 2 / aspect - 0.4,
              1,
            ]}
          >
            Education and enlightenment.
          </Html>
        </Content>
      </Block>
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

  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  //void 즉시 실행함수
  useEffect(() => void onScroll({ target: scrollArea.current }), []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#17191c",
        overflow: "hidden",
      }}
    >
      <Canvas
        ref={canvasRef}
        className="canvas"
        linear
        orthographic
        camera={{ zoom: 75, position: [0, 0, 500] }}
      >
        <Suspense fallback={null}>
          <Pages />
        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
    </div>
  );
};

export default Projects;
