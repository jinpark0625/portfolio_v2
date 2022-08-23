import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef, useMemo, useLayoutEffect } from "react";
import Seo from "../components/seo";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
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
} from "@react-three/drei";
import * as random from "maath/random";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import Poppins from "../public/fonts/Poppins_Bold.json";
import Inter from "../public/fonts/Inter_Bold.json";
import * as THREE from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { extend } from "@react-three/fiber";
import DatGui, { DatColor, DatNumber } from "react-dat-gui";
import { Vector3 } from "three";
import { MeshSurfaceSampler, OBJLoader } from "three-stdlib";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useSpring, animated, config } from "@react-spring/three";

const vertices = [];
const tempPosition = new Vector3();
const count = 10000;
let points;

const Star = ({ starsOpt }) => {
  // refs
  const ref = useRef();
  const textRef = useRef();

  //animation
  // useFrame((state, delta) => {
  //   ref.current.rotation.x -= delta / 10;
  //   ref.current.rotation.y -= delta / 15;
  // });
  // rotation={[0, 0, Math.PI / 4]}

  const groupRef = useRef();

  useLayoutEffect(() => {
    textRef.current.letterSpacing = 3;
    const textSample = new MeshSurfaceSampler(textRef.current);
    textSample.build();

    const tempPosition = new Vector3();
    for (let i = 0; i < count; i++) {
      textSample.sample(tempPosition);
      vertices.push(
        (Math.random() - 0.5) * 0.04 + tempPosition.x,
        (Math.random() - 0.5) * 0.02 + tempPosition.y,
        0
      );
    }
    points = new Float32Array(vertices);
    ref.current.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(points, 3)
    );
  }, []);

  return (
    <Center>
      <animated.group ref={groupRef}>
        <Text3D
          size={1}
          letterSpacing={2}
          position={[0, 0, 0]}
          font={Inter}
          ref={textRef}
          visible={false}
        >
          Test
          <meshStandardMaterial color="white" />
        </Text3D>

        <points ref={ref}>
          <pointsMaterial
            attach="material"
            color={starsOpt.starColor}
            size={starsOpt.starSize}
            alphaTest={0.2}
            // map={colorMap}
            // vertexColors={true}
          />
        </points>
      </animated.group>
    </Center>
  );
};

export default function Home({ results }) {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });

  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
  });

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

    // window.addEventListener("mousemove", (e) => {
    //   const { clientX, clientY } = e;

    //   positionRef.current.mouseX = (clientX / window.innerWidth) * 2 - 1;
    //   positionRef.current.mouseY = -(clientY / window.innerHeight) * 2 + 1;
    //   // positionRef.current.mouseX = clientX / window.innerWidth - 0.5;
    //   // positionRef.current.mouseY = clientY / window.innerHeight - 0.5;
    // });

    return window.removeEventListener("resize", () => {
      handleResize();
    });
  }, []);

  const [starsOpt, setStarsOpt] = useState({
    starSize: 0.005,
    starColor: "white",
    background: "black",
  });

  const [hovered, setHover] = useState(false);

  const [props, set] = useSpring(() => ({
    pos: [0, 0, 0],
  }));

  console.log(props);

  const { hoverValue } = useSpring({
    hoverValue: hovered ? 1 : 0,
    config: config.molasses,
  });

  return (
    <div
      style={{
        width: windowSize.width,
        height: windowSize.height,
        background: starsOpt.background,
      }}
    >
      <Seo title="Home" />
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
          aspect: windowSize.width / windowSize.height,
          position: [0, 0, 3],
        }}
        gl={{ antialias: false }}
        dpr={[1, 2]}
      >
        <OrbitControls makeDefault />

        <Star
          starsOpt={starsOpt}
          onMouseMove={({ clientX, clientY }) => {
            const x = (clientX / window.innerWidth) * 2 - 1;
            const y = -(clientY / window.innerHeight) * 2 + 1;

            set({
              pos: [x, y, 0],
            });
          }}
        />
        <axesHelper
          position={[0, 0, 0]}
          onUpdate={(self) => self.setColors("#ff2080", "#20ff80", "#2080ff")}
        />
      </Canvas>
    </div>
  );
}
