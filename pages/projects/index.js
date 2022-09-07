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
import * as THREE from "three";
import state from "../../components/project/scrollStore";
import { Block, useBlock } from "../../components/project";
import "../../components/project/projectsShader";
import Loader from "../../components/loader";

function Plane({ color = "white", map, ...props }) {
  const { offsetFactor } = useBlock();
  const material = useRef();
  const scroll = useScroll();
  let last = scroll.scroll.current;

  useFrame(() => {
    const { pages } = state;

    //scale on scroll
    material.current.scale = THREE.MathUtils.lerp(
      material.current.scale,
      offsetFactor - (scroll.scroll.current / (pages - 1.2)) * 3.4,
      0.1
    );

    //distortion on scroll
    material.current.shift = THREE.MathUtils.lerp(
      material.current.shift,
      (scroll.scroll.current - last) * 14,
      0.1
    );

    last = scroll.scroll.current;
  });

  return (
    <mesh {...props}>
      <planeGeometry attach="geometry" args={[1, 1, 32, 32]} />
      <customMaterial
        ref={material}
        attach="material"
        color={color}
        map={map}
      />
    </mesh>
  );
}
function Content({ left, children, map, offset, half }) {
  const { contentMaxWidth, canvasWidth, margin, mobile } = useBlock();
  const aspect = 1.75;
  const alignRight = (canvasWidth - contentMaxWidth - margin) / 2;

  const halfContent = mobile
    ? [contentMaxWidth / offset, contentMaxWidth / aspect, 1]
    : [contentMaxWidth / offset, contentMaxWidth / offset, 1];

  return (
    <group
      position={
        half ? [alignRight * half, 0, 0] : [alignRight * (left ? -1 : 1), 0, 0]
      }
    >
      <Plane
        scale={
          offset ? halfContent : [contentMaxWidth, contentMaxWidth / aspect, 1]
        }
        color="#220F08"
        map={map}
      />
      {children}
    </group>
  );
}

const Pages = () => {
  const textures = useLoader(TextureLoader, state.images);
  const [img1, img2, img3, img4, img5, img6, img3M, img4M] = textures.map(
    (texture) => ((texture.minFilter = LinearFilter), texture)
  );
  const { contentMaxWidth, mobile } = useBlock();
  const aspect = 1.75;
  const pixelWidth = contentMaxWidth * state.zoom;

  const {
    viewport: { width },
  } = useThree();

  return (
    <ScrollControls
      pages={mobile ? 6 : 5.2}
      distance={1}
      damping={4}
      horizontal={false}
      // infinite={true}
    >
      <Scroll>
        {/* First section */}
        <Block offset={0}>
          <Content map={img1}>
            <Html
              style={{
                width: pixelWidth / (mobile ? 1 : 2),
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              position={
                mobile
                  ? [
                      -contentMaxWidth / 2,
                      -contentMaxWidth / 2 / aspect - 0.4,
                      1,
                    ]
                  : [
                      -contentMaxWidth / 2 / aspect + 0.5,
                      -contentMaxWidth / 2 / aspect - 0.4,
                      1,
                    ]
              }
            >
              <h1>Good Cafeteria</h1>
              <p style={{ color: "#aaa", marginTop: "10px" }}>
                ART DIRECTION / WEB DEVELOPMENT
              </p>
            </Html>
          </Content>
        </Block>
        {/* Second section */}
        <Block offset={1}>
          <Content left map={img2}>
            <Html
              style={{
                width: pixelWidth / (mobile ? 1 : 2),
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              position={
                mobile
                  ? [
                      -contentMaxWidth / 2,
                      -contentMaxWidth / 2 / aspect - 0.4,
                      1,
                    ]
                  : [
                      -contentMaxWidth / 2 / aspect + 0.5,
                      -contentMaxWidth / 2 / aspect - 0.4,
                      1,
                    ]
              }
            >
              <h1>Yellow Basket</h1>
              <p style={{ color: "#aaa", marginTop: "10px" }}>
                WEB DEVELOPMENT
              </p>
            </Html>
          </Content>
        </Block>
        {/* Third section */}
        <Block offset={mobile ? 2 : 2.2}>
          <Content
            map={mobile ? img3M : img3}
            offset={mobile ? 1 : 1.45}
            half={mobile ? false : -1.7}
          >
            <Html
              style={{
                width: pixelWidth / (mobile ? 1 : 2),
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              position={
                mobile
                  ? [
                      -contentMaxWidth / 2,
                      -contentMaxWidth / 2 / aspect - 0.4,
                      1,
                    ]
                  : [
                      -contentMaxWidth / 2 / aspect + 0.5,
                      -contentMaxWidth / 2 / 1.45 - 0.4,
                      1,
                    ]
              }
            >
              <h1>Four Toon</h1>
              <p style={{ color: "#aaa", marginTop: "10px" }}>
                WEB DEVELOPMENT
              </p>
            </Html>
          </Content>
        </Block>
        {/* Fourth section */}
        <Block offset={mobile ? 3 : 2}>
          <Content
            map={mobile ? img4M : img4}
            offset={mobile ? 1 : 1.45}
            half={mobile ? false : 1.7}
          >
            <Html
              style={{
                width: pixelWidth / (mobile ? 1 : 2),
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              position={
                mobile
                  ? [
                      -contentMaxWidth / 2,
                      -contentMaxWidth / 2 / aspect - 0.4,
                      1,
                    ]
                  : [
                      -contentMaxWidth / 2 / aspect + 0.5,
                      -contentMaxWidth / 2 / 1.45 - 0.4,
                      1,
                    ]
              }
            >
              <h1>Bin Works</h1>
              <p style={{ color: "#aaa", marginTop: "10px" }}>
                ART DIRECTION / WEB DEVELOPMENT
              </p>
            </Html>
          </Content>
        </Block>
        {/* Fifth section */}
        <Block offset={mobile ? 4 : 3.2}>
          <Content map={img5}>
            <Html
              style={{
                width: pixelWidth / (mobile ? 1 : 2),
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              position={
                mobile
                  ? [
                      -contentMaxWidth / 2,
                      -contentMaxWidth / 2 / aspect - 0.4,
                      1,
                    ]
                  : [
                      -contentMaxWidth / 2 / aspect + 0.5,
                      -contentMaxWidth / 2 / aspect - 0.4,
                      1,
                    ]
              }
            >
              <h1>JoolWang</h1>
              <p style={{ color: "#aaa", marginTop: "10px" }}>
                WEB DEVELOPMENT
              </p>
            </Html>
          </Content>
        </Block>
        {/* Last section */}
        <Block offset={mobile ? 5 : 4.2}>
          <Content left map={img6}>
            <Html
              style={{
                width: pixelWidth / (mobile ? 1 : 2),
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              position={
                mobile
                  ? [
                      -contentMaxWidth / 2,
                      -contentMaxWidth / 2 / aspect - 0.4,
                      1,
                    ]
                  : [
                      -contentMaxWidth / 2 / aspect + 0.5,
                      -contentMaxWidth / 2 / aspect - 0.4,
                      1,
                    ]
              }
            >
              <h1>Jeju Carrot RentCar</h1>
              <p style={{ color: "#aaa", marginTop: "10px" }}>
                ART DIRECTION / WEB DEVELOPMENT
              </p>
            </Html>
          </Content>
        </Block>
      </Scroll>
    </ScrollControls>
  );
};

const Projects = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#17191c",
        // background: "#141414",
        // background: "#171719",
        overflow: "hidden",
      }}
    >
      <Canvas
        className="canvas"
        linear
        orthographic
        camera={{ zoom: state.zoom, position: [0, 0, 500] }}
      >
        <Suspense fallback={<Loader />}>
          <Pages />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Projects;
