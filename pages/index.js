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
} from "@react-three/drei";
import * as random from "maath/random";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import Poppins from "../public/fonts/Poppins_Bold.json";
import * as THREE from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { extend } from "@react-three/fiber";
import DatGui, { DatColor, DatNumber } from "react-dat-gui";
import { Vector3 } from "three";
import { MeshSurfaceSampler, OBJLoader } from "three-stdlib";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const vertices = [];
const tempPosition = new Vector3();
const count = 10000;
let points;

const Star = ({
  starsOpt,
  scale = Array.from({ length: 50 }, () => 0.5 + Math.random() * 2),
}) => {
  //load text
  const font = useLoader(FontLoader, "/fonts/Poppins_Bold.json");
  extend({ TextGeometry });
  const fontConfig = useMemo(() => {
    const fontConfig = { font, size: 0.2, height: 0.2 };
    return fontConfig;
  }, []);

  // refs
  const ref = useRef();
  const materialRef = useRef();
  const fontRef = useRef();
  const textRef = useRef();

  //make 1000 spheres by using random
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(1000), { radius: 1.5 })
  );

  // const [{ box, goo, final }] = useState(() => {
  //   const box = random.inBox(new Float32Array(10000), { sides: [1, 2, 1] });
  //   const goo = random.inSphere(box.slice(0), { radius: 0.75 });

  //   const final = box.slice(0); // final buffer that will be used for the points mesh

  //   return { box, goo, final };
  // });

  //animation
  // useFrame((state, delta) => {
  //   ref.current.rotation.x -= delta / 10;
  //   ref.current.rotation.y -= delta / 15;
  // });
  // rotation={[0, 0, Math.PI / 4]}

  const groupRef = useRef();

  useLayoutEffect(() => {
    console.log(ref);
    const textSample = new MeshSurfaceSampler(textRef.current);
    textSample.build();

    const tempPosition = new Vector3();
    for (let i = 0; i < count; i++) {
      textSample.sample(tempPosition);
      vertices.push(
        (Math.random() - 0.5) * 0.01 + tempPosition.x,
        (Math.random() - 0.5) * 0.02 + tempPosition.y,
        0
      );
    }
    points = new Float32Array(vertices);
    ref.current.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(points, 3)
    );

    ref.current.geometry.computeBoundingBox();
    const center = ref.current.geometry.boundingBox.getCenter(new Vector3());

    ref.current.position.x = -center.x;
    ref.current.position.y = -center.y;
  }, []);

  return (
    <>
      <group ref={groupRef}>
        <mesh>
          <planeGeometry />
        </mesh>
        <Text3D
          letterSpacing={-0.1}
          size={1}
          position={[0, 0, 0]}
          font={Poppins}
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
      </group>
    </>
  );
};

export default function Home({ results }) {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
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

    return window.removeEventListener("resize", () => {
      handleResize();
    });
  }, []);

  const [starsOpt, setStarsOpt] = useState({
    starSize: 0.005,
    starColor: "white",
    background: "black",
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
        {/* <ambientLight intensity={0.5} /> */}
        <Star starsOpt={starsOpt} />
      </Canvas>
    </div>
  );
}
