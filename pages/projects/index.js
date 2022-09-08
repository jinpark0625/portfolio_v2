import React, { useRef, Suspense } from "react";

import { Canvas, useFrame, useLoader, useThree, Dom } from "@react-three/fiber";
import { ScrollControls, useScroll, Html, Scroll } from "@react-three/drei";
import { TextureLoader, LinearFilter, Vector2 } from "three";
import * as THREE from "three";
import state from "../../components/project/scrollStore";
import { Block, useBlock } from "../../components/project";
import "../../components/project/projectsShader";
import Loader from "../../components/loader";
import { useRouter } from "next/router";
import { A11yAnnouncer, A11y } from "@react-three/a11y";

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

const Pages = ({ router }) => {
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
        <A11y
          role="link"
          href="/projects/goodcafeteria"
          actionCall={() => {
            router.push(`/projects/goodcafeteria`);
          }}
        >
          <Block offset={0}>
            <Content map={img1}>
              <Html
                style={{
                  width: pixelWidth,
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                position={[
                  -contentMaxWidth / 2,
                  -contentMaxWidth / 2 / aspect,
                  1,
                ]}
              >
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    cursor: "pointer",
                    paddingTop: "30px",
                  }}
                  onClick={() => {
                    router.push(`/projects/goodcafeteria`);
                  }}
                >
                  <h1>Good Cafeteria</h1>
                  <p style={{ color: "#aaa", marginTop: "10px" }}>
                    ART DIRECTION / WEB DEVELOPMENT
                  </p>
                </div>
              </Html>
            </Content>
          </Block>
        </A11y>
        {/* Second section */}
        <A11y
          role="link"
          href="/projects/yellobasket"
          actionCall={() => {
            router.push(`/projects/yellobasket`);
          }}
        >
          <Block offset={1}>
            <Content left map={img2}>
              <Html
                style={{
                  width: pixelWidth,
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                position={[
                  -contentMaxWidth / 2,
                  -contentMaxWidth / 2 / aspect,
                  1,
                ]}
              >
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    cursor: "pointer",
                    paddingTop: "30px",
                  }}
                  onClick={() => {
                    router.push(`/projects/yellobasket`);
                  }}
                >
                  <h1>Yellow Basket</h1>
                  <p style={{ color: "#aaa", marginTop: "10px" }}>
                    WEB DEVELOPMENT
                  </p>
                </div>
              </Html>
            </Content>
          </Block>
        </A11y>
        {/* Third section */}
        <A11y
          role="link"
          href="/projects/coffeebak"
          actionCall={() => {
            router.push(`/projects/coffeebak`);
          }}
        >
          <Block offset={mobile ? 2 : 2.2}>
            <Content
              map={mobile ? img3M : img3}
              offset={mobile ? 1 : 1.45}
              half={mobile ? false : -1.7}
            >
              <Html
                style={{
                  width: mobile ? pixelWidth : pixelWidth / 1.45,
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                position={
                  mobile
                    ? [-contentMaxWidth / 2, -contentMaxWidth / 2 / aspect, 1]
                    : [
                        -contentMaxWidth / 1.45 / 2,
                        -contentMaxWidth / 2 / 1.45,
                        1,
                      ]
                }
              >
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    cursor: "pointer",
                    paddingTop: "30px",
                  }}
                  onClick={() => {
                    router.push(`/projects/coffeebak`);
                  }}
                >
                  <h1>Coffee Bak</h1>
                  <p style={{ color: "#aaa", marginTop: "10px" }}>
                    MOBILE APP DEVELOPMENT
                  </p>
                </div>
              </Html>
            </Content>
          </Block>
        </A11y>
        {/* Fourth section */}
        <A11y
          role="link"
          href="/projects/binworks"
          actionCall={() => {
            router.push(`/projects/binworks`);
          }}
        >
          <Block offset={mobile ? 3 : 2}>
            <Content
              map={mobile ? img4M : img4}
              offset={mobile ? 1 : 1.45}
              half={mobile ? false : 1.7}
            >
              <Html
                style={{
                  width: mobile ? pixelWidth : pixelWidth / 1.45,
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                position={
                  mobile
                    ? [-contentMaxWidth / 2, -contentMaxWidth / 2 / aspect, 1]
                    : [
                        -contentMaxWidth / 1.45 / 2,
                        -contentMaxWidth / 2 / 1.45,
                        1,
                      ]
                }
              >
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    cursor: "pointer",
                    paddingTop: "30px",
                  }}
                  onClick={() => {
                    router.push(`/projects/binworks`);
                  }}
                >
                  <h1>Bin Works</h1>
                  <p style={{ color: "#aaa", marginTop: "10px" }}>
                    ART DIRECTION / WEB DEVELOPMENT
                  </p>
                </div>
              </Html>
            </Content>
          </Block>
        </A11y>
        {/* Fifth section */}
        <A11y
          role="link"
          href="/projects/fourtoon"
          actionCall={() => {
            router.push(`/projects/fourtoon`);
          }}
        >
          <Block offset={mobile ? 4 : 3.2}>
            <Content map={img5}>
              <Html
                style={{
                  width: pixelWidth,
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                position={[
                  -contentMaxWidth / 2,
                  -contentMaxWidth / 2 / aspect,
                  1,
                ]}
              >
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    cursor: "pointer",
                    paddingTop: "30px",
                  }}
                  onClick={() => {
                    router.push(`/projects/fourtoon`);
                  }}
                >
                  <h1>Four Toon</h1>
                  <p style={{ color: "#aaa", marginTop: "10px" }}>
                    WEB DEVELOPMENT
                  </p>
                </div>
              </Html>
            </Content>
          </Block>
        </A11y>
        {/* Last section */}
        <A11y
          role="link"
          href="/projects/carrotrentcar"
          actionCall={() => {
            router.push(`/projects/carrotrentcar`);
          }}
        >
          <Block offset={mobile ? 5 : 4.2}>
            <Content left map={img6}>
              <Html
                style={{
                  width: pixelWidth,
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                position={[
                  -contentMaxWidth / 2,
                  -contentMaxWidth / 2 / aspect,
                  1,
                ]}
              >
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    cursor: "pointer",
                    paddingTop: "30px",
                  }}
                  onClick={() => {
                    router.push(`/projects/carrotrentcar`);
                  }}
                >
                  <h1>Jeju Carrot Rent Car</h1>
                  <p style={{ color: "#aaa", marginTop: "10px" }}>
                    ART DIRECTION / WEB DEVELOPMENT
                  </p>
                </div>
              </Html>
            </Content>
          </Block>
        </A11y>
      </Scroll>
    </ScrollControls>
  );
};

const Projects = () => {
  const router = useRouter();

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
          <Pages router={router} />
        </Suspense>
      </Canvas>
      <A11yAnnouncer />
    </div>
  );
};

export default Projects;
