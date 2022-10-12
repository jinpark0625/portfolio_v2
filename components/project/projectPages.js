import React, { useRef, useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { ScrollControls, useScroll, Html, Scroll } from "@react-three/drei";
import { TextureLoader, LinearFilter } from "three";
import * as THREE from "three";
import state from "./scrollStore";
import { Block, useBlock } from "./blocks";
import { A11y } from "@react-three/a11y";

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
      offsetFactor + (scroll.scroll.current / pages) * 0.3,
      0.1
    );

    //distortion on scroll
    material.current.shift = THREE.MathUtils.lerp(
      material.current.shift,
      (scroll.scroll.current - last) * 8,
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
  const { contentMaxWidth, align, mobile, aspect } = useBlock();

  const alignRight = (align - contentMaxWidth) / 2;
  const ref = useRef();

  //calculation of textHeight
  const x = (contentMaxWidth / aspect) * 37;
  const y = (contentMaxWidth / aspect) * 75;
  const a = x / y;
  const q = contentMaxWidth / aspect;
  const w = a;
  const textPlaneHeight = w / q;

  return (
    <group
      position={mobile ? [0, 0, 0] : [alignRight * (left ? -1 : 1), 0, 0]}
      ref={ref}
      scale={[contentMaxWidth, contentMaxWidth / aspect, 1]}
    >
      {/* image plane */}
      <Plane position={[0, -0.5, 0]} color="#220F08" map={map} />
      {/* Text wrap plane */}
      <mesh position={[0, -1 - textPlaneHeight / 2, 0]}>
        <planeGeometry args={[1, textPlaneHeight]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      {children}
    </group>
  );
}

const ProjectPages = ({ router }) => {
  const textures = useLoader(TextureLoader, state.images);
  const [img1, img2, img3, img4, img5, img6] = useMemo(() => {
    return textures.map(
      (texture) => ((texture.minFilter = LinearFilter), texture)
    );
  }, []);
  const { contentMaxWidth, mobile, canvasHeight, aspect } = useBlock();

  const pixelWidth = contentMaxWidth * state.zoom;

  const contentHeight = contentMaxWidth / aspect;

  React.useLayoutEffect(() => {
    state.pages = ((contentHeight + 1.8) * 3) / canvasHeight;
    state.sections = ((contentHeight + 1.8) * 3) / canvasHeight;
  }, [contentHeight]);

  return (
    <ScrollControls
      pages={
        mobile
          ? ((contentHeight + 1.8) * 6) / canvasHeight
          : ((contentHeight + 1.8) * 3) / canvasHeight
      }
      distance={1}
      damping={4}
      horizontal={false}
    >
      <Scroll>
        {/* First section */}
        <A11y
          role="link"
          href="/work/goodcafeteria"
          actionCall={() => {
            router.push(`/work/goodcafeteria`);
          }}
        >
          <Block offset={5}>
            <Content map={img1}>
              <Html
                style={{
                  width: pixelWidth,
                }}
                position={[-0.5, -1, 1]}
                className="canvasHtmlContainer"
              >
                <div className="canvasHtmlWrap">
                  <p className="listTitle">Good Cafeteria</p>
                  <p className="listSub">ART DIRECTION / WEB DEVELOPMENT</p>
                </div>
              </Html>
            </Content>
          </Block>
        </A11y>
        {/* Second section */}
        <A11y
          role="link"
          href="/work/yellobasket"
          actionCall={() => {
            router.push(`/work/yellowbasket`);
          }}
        >
          <Block offset={mobile ? -contentHeight + 3.6 : 5}>
            <Content left map={img2}>
              <Html
                style={{
                  width: pixelWidth,
                }}
                position={[-0.5, -1, 1]}
                className="canvasHtmlContainer"
              >
                <div className="canvasHtmlWrap">
                  <p className="listTitle">Yellow Basket</p>
                  <p className="listSub">WEB DEVELOPMENT</p>
                </div>
              </Html>
            </Content>
          </Block>
        </A11y>
        {/* Third section */}
        <A11y
          role="link"
          href="/work/coffeebak"
          actionCall={() => {
            router.push(`/work/coffeebak`);
          }}
        >
          <Block
            offset={mobile ? -contentHeight * 2 + 2.2 : -contentHeight + 3.6}
          >
            <Content map={img3}>
              <Html
                style={{
                  width: pixelWidth,
                }}
                className="canvasHtmlContainer"
                position={[-0.5, -1, 1]}
              >
                <div className="canvasHtmlWrap">
                  <p className="listTitle">Coffee Bak</p>
                  <p className="listSub">MOBILE APP DEVELOPMENT</p>
                </div>
              </Html>
            </Content>
          </Block>
        </A11y>
        {/* Fourth section */}
        <A11y
          role="link"
          href="/work/binworks"
          actionCall={() => {
            router.push(`/work/binworks`);
          }}
        >
          <Block
            offset={mobile ? -contentHeight * 3 + 0.8 : -contentHeight + 3.6}
          >
            <Content left map={img4}>
              <Html
                style={{
                  width: pixelWidth,
                }}
                position={[-0.5, -1, 1]}
                className="canvasHtmlContainer"
              >
                <div className="canvasHtmlWrap">
                  <h1 className="listTitle">Bin Works</h1>
                  <p className="listSub">ART DIRECTION / WEB DEVELOPMENT</p>
                </div>
              </Html>
            </Content>
          </Block>
        </A11y>
        {/* Fifth section */}
        <A11y
          role="link"
          href="/work/fourtoon"
          actionCall={() => {
            router.push(`/work/fourtoon`);
          }}
        >
          <Block
            offset={
              mobile ? -contentHeight * 4 - 0.6 : -contentHeight * 2 + 2.2
            }
          >
            <Content map={img5}>
              <Html
                style={{
                  width: pixelWidth,
                }}
                position={[-0.5, -1, 1]}
                className="canvasHtmlContainer"
              >
                <div className="canvasHtmlWrap">
                  <h1 className="listTitle">Four Toon</h1>
                  <p className="listSub">WEB DEVELOPMENT</p>
                </div>
              </Html>
            </Content>
          </Block>
        </A11y>
        {/* Last section */}
        <A11y
          role="link"
          href="/work/carrotrentcar"
          actionCall={() => {
            router.push(`/work/carrotrentcar`);
          }}
        >
          <Block
            offset={mobile ? -contentHeight * 5 - 2 : -contentHeight * 2 + 2.2}
          >
            <Content left map={img6}>
              <Html
                style={{
                  width: pixelWidth,
                }}
                position={[-0.5, -1, 1]}
                className="canvasHtmlContainer"
              >
                <div className="canvasHtmlWrap">
                  <h1 className="listTitle">Jeju Carrot Rent Car</h1>
                  <p className="listSub">ART DIRECTION / WEB DEVELOPMENT</p>
                </div>
              </Html>
            </Content>
          </Block>
        </A11y>
      </Scroll>
    </ScrollControls>
  );
};

export default ProjectPages;
