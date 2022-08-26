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

const Star = ({ starsOpt, pos, width, height }) => {
  // refs
  const ref = useRef();
  const textRef = useRef();
  const planeRef = useRef();

  const { viewport } = useThree();
  const { gl } = useThree();

  const count = 15000;

  //animation
  useFrame(({ mouse, camera, clock }) => {
    ref.current.material.uniforms.uTime.value = clock.getElapsedTime();

    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects([planeRef.current]);

    if (intersects[0]) {
      ref.current.material.uniforms.uMouse.value = new Vector2(x, y);
    }
  });

  const groupRef = useRef();

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
  // * gl.getPixelRatio()
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
        <animated.group ref={groupRef}>
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

    return window.removeEventListener("resize", () => {
      handleResize();
    });
  }, []);

  const [starsOpt, setStarsOpt] = useState({
    starSize: 0.005,
    starColor: "white",
    background: "#17191c",
  });

  const [props, set] = useSpring(() => ({
    pos: { x: 0, y: 0, z: 0 },
  }));

  const radius = 0.2;

  return (
    <div
      style={{
        width: windowSize.width,
        height: windowSize.height,
        background: starsOpt.background,
      }}
      onMouseMove={({ clientX, clientY }) => {
        const x = (clientX / window.innerWidth) * 2 - 1;
        const y = -(clientY / window.innerHeight) * 2 + 1;

        set({
          pos: { x: x, y: y, z: 0 },
        });
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
        <OrbitControls makeDefault />
        <Star starsOpt={starsOpt} pos={props} />
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
