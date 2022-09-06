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
  const { viewportHeight, offsetFactor } = useBlock();
  const material = useRef();

  const scroll = useScroll();
  let last = scroll.scroll.current;

  console.log(viewportHeight);

  useFrame(() => {
    const { pages, top } = state;

    material.current.scale = THREE.MathUtils.lerp(
      material.current.scale,
      offsetFactor -
        (scroll.scroll.current / ((pages - 1) * viewportHeight)) * 10,
      0.1
    );

    console.log(scroll.scroll.current / ((pages - 1) * viewportHeight));

    material.current.shift = THREE.MathUtils.lerp(
      material.current.shift,
      (scroll.scroll.current - last) * 10,
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
    <Scroll>
      {/* First section */}
      <Block offset={0}>
        <Content left map={img1}>
          <Html
            style={{
              width: pixelWidth / (mobile ? 1 : 2),
              textAlign: "right",
              color: "#fff",
            }}
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
      <Block offset={1}>
        <Content map={img2}>
          <Html
            style={{
              width: pixelWidth / (mobile ? 1 : 2),
              textAlign: "right",
              color: "#fff",
            }}
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
      <Block offset={2}>
        <Content left map={img3}>
          <Html
            style={{
              width: pixelWidth / (mobile ? 1 : 2),
              textAlign: "left",
              color: "#fff",
            }}
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
    </Scroll>
  );
};

const Projects = () => {
  // const scrollArea = useRef();
  // const onScroll = (e) => (state.top.current = e.target.scrollTop);
  // //void 즉시 실행함수
  // useEffect(() => void onScroll({ target: scrollArea.current }), []);

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
        // onScroll={onScroll}
        // ref={scrollArea}
      >
        <Suspense fallback={<Loader />}>
          <ScrollControls
            pages={3}
            distance={1}
            damping={4}
            horizontal={false}
            // infinite={true}
          >
            <Pages />
          </ScrollControls>
        </Suspense>
      </Canvas>
      {/* <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div> */}
    </div>
  );
};

export default Projects;
