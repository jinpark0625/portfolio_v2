import { useRef, useMemo, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import {
  ScrollControls,
  useScroll,
  Html,
  Scroll,
  useTexture,
} from "@react-three/drei";
import { MeshBasicMaterial } from "three/src/materials/MeshBasicMaterial";
import { PlaneGeometry } from "three/src/geometries/PlaneGeometry.js";
import { lerp } from "three/src/math/MathUtils";
import state from "./scrollStore";
import { Block, useBlock } from "./blocks";

function Plane({ color = "white", map, ...props }) {
  const { offsetFactor } = useBlock();
  const material = useRef();
  const scroll = useScroll();

  let last = scroll.scroll.current;

  useFrame(() => {
    const { pages } = state;

    //scale on scroll
    material.current.scale = lerp(
      material.current.scale,
      offsetFactor + (scroll.scroll.current / pages) * 0.3,
      0.1
    );

    //distortion on scroll
    material.current.shift = lerp(
      material.current.shift,
      (scroll.scroll.current - last) * 8,
      0.1
    );

    last = scroll.scroll.current;
  });

  const plane = useMemo(() => {
    return new PlaneGeometry(1, 1, 8, 8);
  }, []);

  return (
    <mesh {...props} geometry={plane}>
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
  const { contentMaxWidth, align, mobile, aspect, canvasWidth, canvasHeight } =
    useBlock();
  const ref = useRef();

  const alignRight = useMemo(() => {
    return (align - contentMaxWidth) / 2;
  }, [contentMaxWidth]);

  //calculation of textHeight
  const textPlaneHeight = useMemo(() => {
    const x = (contentMaxWidth / aspect) * 37;
    const y = (contentMaxWidth / aspect) * 75;
    const a = x / y;
    const q = contentMaxWidth / aspect;
    const w = a;
    const textPlaneHeight = w / q;
    return textPlaneHeight;
  }, [canvasWidth, canvasHeight, contentMaxWidth]);

  const plane = useMemo(() => {
    return new PlaneGeometry(1, textPlaneHeight, 1, 1);
  }, [textPlaneHeight]);

  const basicMaterial = useMemo(() => {
    return new MeshBasicMaterial({ transparent: true, opacity: 0 });
  }, []);

  return (
    <group
      position={mobile ? [0, 0, 0] : [alignRight * (left ? -1 : 1), 0, 0]}
      ref={ref}
      scale={[contentMaxWidth, contentMaxWidth / aspect, 1]}
    >
      {/* image plane */}
      <Plane position={[0, -0.5, 0]} color="#220F08" map={map} />
      {/* Text wrap plane */}
      <mesh
        position={[0, -1 - textPlaneHeight / 2, 0]}
        geometry={plane}
        material={basicMaterial}
      ></mesh>
      {children}
    </group>
  );
}

const ProjectPages = ({ router }) => {
  const [img1, img2, img3, img4, img5, img6] = useTexture([
    state.images[0],
    state.images[1],
    state.images[2],
    state.images[3],
    state.images[4],
    state.images[5],
  ]);

  const { canvasWidth, contentMaxWidth, mobile, canvasHeight, aspect } =
    useBlock();

  const pixelWidth = useMemo(() => {
    return contentMaxWidth * state.zoom;
  }, [canvasWidth, canvasHeight, contentMaxWidth]);

  const contentHeight = useMemo(() => {
    return contentMaxWidth / aspect;
  }, [canvasWidth, canvasHeight, contentMaxWidth]);

  useLayoutEffect(() => {
    state.pages = ((contentHeight + 1.8) * 3) / canvasHeight;
    state.sections = ((contentHeight + 1.8) * 3) / canvasHeight;
  }, [canvasWidth, contentHeight]);

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

        <Block
          offset={mobile ? canvasHeight / 2 - 1.142 : 5}
          onClick={() => {
            router.push(`/work/goodcafeteria`);
          }}
        >
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

        {/* Second section */}

        <Block
          offset={mobile ? canvasHeight / 2 - 1.142 - contentHeight - 1.38 : 5}
          onClick={() => {
            router.push(`/work/yellowbasket`);
          }}
        >
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

        {/* Third section */}
        <Block
          offset={
            mobile
              ? canvasHeight / 2 - 1.142 - contentHeight * 2 - 1.38 * 2
              : -contentHeight + 3.6
          }
          onClick={() => {
            router.push(`/work/coffeebak`);
          }}
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

        {/* Fourth section */}

        <Block
          offset={
            mobile
              ? canvasHeight / 2 - 1.142 - contentHeight * 3 - 1.38 * 3
              : -contentHeight + 3.6
          }
          onClick={() => {
            router.push(`/work/binworks`);
          }}
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
        {/* Fifth section */}

        <Block
          offset={
            mobile
              ? canvasHeight / 2 - 1.142 - contentHeight * 4 - 1.38 * 4
              : -contentHeight * 2 + 2.2
          }
          onClick={() => {
            router.push(`/work/fourtoon`);
          }}
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

        {/* Last section */}
        <Block
          offset={
            mobile
              ? canvasHeight / 2 - 1.142 - contentHeight * 5 - 1.38 * 5
              : -contentHeight * 2 + 2.2
          }
          onClick={() => {
            router.push(`/work/carrotrentcar`);
          }}
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
      </Scroll>
    </ScrollControls>
  );
};

export default ProjectPages;
