import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef, useMemo, useLayoutEffect } from "react";
import Seo from "../components/seo";
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
} from "@react-three/drei";
import * as random from "maath/random";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import Poppins from "../public/fonts/Poppins_Bold.json";
import Inter from "../public/fonts/Inter_Bold.json";
import * as THREE from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { extend } from "@react-three/fiber";
import DatGui, { DatColor, DatNumber } from "react-dat-gui";
import { Vector2, Vector3 } from "three";
import { MeshSurfaceSampler, OBJLoader } from "three-stdlib";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useSpring, animated, config } from "@react-spring/three";
import { vertexShader, fragmentShader } from "./shader";

const raycaster = new THREE.Raycaster();
let pointsValue;

const Star = ({}) => {
  /**
   * options
   */
  // refs
  const ref = useRef();
  const textRef = useRef();
  const planeRef = useRef();
  // three options
  const { width, height } = useThree((state) => state.viewport);
  const { gl } = useThree();
  // particles' count
  const count = 15000;

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(1000), { radius: 1.5 })
  );

  /**
   * scroll events
   */
  const scroll = useScroll();

  /**
   * animation
   * params : mouse, camera, clock
   * change mouse position, raycast
   */
  useFrame(({ mouse, camera, clock }) => {
    /**
     * mouse events
     */
    ref.current.material.uniforms.uTime.value = clock.getElapsedTime();

    const x = (mouse.x * width) / 2;
    const y = (mouse.y * height) / 2;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects([planeRef.current]);

    if (intersects[0]) {
      ref.current.material.uniforms.uMouse.value = new Vector2(x, y);
    }

    /**
     * scroll events
     */
    const r1 = scroll.range(0, 1 / 3);
    const r2 = scroll.range(1 / 3, 1 / 3);
    const r3 = scroll.range(2 / 3, 1 / 3);

    if (r1 > 0.3) {
      ref.current.material.uniforms.uRandom.value = r1;
    }
  });

  /**
   * get position of text
   * set attributes for partics' geometry
   */
  useLayoutEffect(() => {
    textRef.current.letterSpacing = 3;
    const textSample = new MeshSurfaceSampler(textRef.current);
    textSample.build();

    const tempPosition = new Vector3();

    const vertices = new Float32Array(count * 3);
    const scale = new Float32Array(count);
    const indices = new Uint16Array(count);
    const angle = new Float32Array(count);

    for (let i = 0, j = 0; i < count; i++) {
      const i3 = i * 3;
      textSample.sample(tempPosition);

      vertices[i3 + 0] = (Math.random() - 0.5) * 0.04 + tempPosition.x;
      vertices[i3 + 1] = (Math.random() - 0.5) * 0.02 + tempPosition.y;
      vertices[i3 + 2] = 0;

      scale[i] = Math.random() * 1.2;

      angle[j] = Math.random() * Math.PI;

      indices[j] = i;
      j++;
    }

    ref.current.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(vertices, 3)
    );
    ref.current.geometry.setAttribute(
      "aScale",
      new THREE.BufferAttribute(scale, 1)
    );
    ref.current.geometry.setAttribute(
      "angle",
      new THREE.BufferAttribute(angle, 1)
    );
    ref.current.geometry.setAttribute(
      "pindex",
      new THREE.BufferAttribute(indices, 1)
    );
  }, []);

  /**
   * set uniforms for particles
   */
  const uniforms = useMemo(
    () => ({
      uMouse: {
        value: new Vector2(0, 0),
      },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      uSize: {
        value: 1.5,
      },
      uTime: {
        value: 0,
      },
      uColor: { value: new THREE.Color(0x0f85d6) },
      uRandom: {
        value: 1,
      },
    }),
    []
  );

  return (
    <>
      <mesh ref={planeRef} position={[0, 0, 0]} visible={false}>
        <planeGeometry args={[5, 3, 2, 2]} />
        <meshBasicMaterial wireframe={true} />
      </mesh>
      <Center>
        <animated.group>
          <Text3D
            size={1}
            letterSpacing={2}
            position={[0, 0, 0]}
            font={Inter}
            ref={textRef}
            visible={false}
          >
            Hello.
            <meshStandardMaterial color="white" />
          </Text3D>
          <points ref={ref}>
            <shaderMaterial
              uniforms={uniforms}
              vertexShader={vertexShader}
              fragmentShader={fragmentShader}
              depthWrite={false}
              transparent={true}
            />
          </points>
        </animated.group>
      </Center>
    </>
  );
};

export default function Home({ results }) {
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
      <Seo title="Home" />
      <Canvas
        ref={canvasRef}
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
        <ScrollControls
          pages={3}
          distance={1}
          damping={4}
          horizontal={false}
          infinite={false}
        >
          {/* <OrbitControls makeDefault /> */}
          <Star />
        </ScrollControls>
        <axesHelper
          position={[0, 0, 0]}
          onUpdate={(self) => self.setColors("#ff2080", "#20ff80", "#2080ff")}
          width={windowSize.width}
          height={windowSize.height}
        />
      </Canvas>
    </div>
  );
}
