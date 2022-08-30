import Link from "next/link";
import { useRouter } from "next/router";
import {
  useState,
  useEffect,
  useRef,
  useMemo,
  useLayoutEffect,
  Suspense,
  memo,
} from "react";
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
  Html,
  useProgress,
} from "@react-three/drei";
import * as random from "maath/random";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import Poppins from "../public/fonts/Poppins_Bold.json";
import Inter from "../public/fonts/Inter_Bold.json";
import FounterSemi from "../public/fonts/FoundersGroteskSemibold.json";
import FounterReg from "../public/fonts/FounderGroteskReugular.json";
import FounterBold from "../public/fonts/FoundersGroteskBold.json";
import * as THREE from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { extend } from "@react-three/fiber";
import DatGui, { DatColor, DatNumber } from "react-dat-gui";
import { Vector2, Vector3 } from "three";
import { MeshSurfaceSampler, OBJLoader } from "three-stdlib";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import {
  useSpring,
  animated,
  config,
  useTransition,
} from "@react-spring/three";
// import { useSpring, animated, config } from "react-spring";
import { vertexShader, fragmentShader } from "./shader";

const raycaster = new THREE.Raycaster();

const AnimatedText = animated(Text);
const Texts = memo(function Texts({ body, index, currentBodyIndex, fontLoad }) {
  /**
   * body texts
   */
  const content = useMemo(() => {
    return (content = body);
  }, []);

  /**
   * animation if statements
   */
  const transitions = useTransition(currentBodyIndex === index, {
    from: { scale: [1.15, 1.15, 1.15], fillOpacity: 0 },
    enter: { scale: [1.0, 1.0, 1.0], fillOpacity: 1 },
    leave: { scale: [0.85, 0.85, 0.85], fillOpacity: 0 },
    config: {
      duration: "400",
    },
  });

  /**
   * font config
   */

  // const fonts = new FontLoader().parse(FounterReg);

  const fontProps = {
    font: process.env.NEXT_PUBLIC_API_URL + "/fonts/Inter-Bold.woff",
    fontSize: 0.18,
    characters: "abcdefghijklmnopqrstuvwxyz0123456789!",
  };

  return (
    <>
      {transitions(({ scale, fillOpacity }, item) => {
        return (
          item && (
            <AnimatedText
              {...fontProps}
              scale={scale}
              fillOpacity={fillOpacity}
            >
              {content}
            </AnimatedText>
          )
        );
      })}
    </>
  );
});

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
  const obj = useLoader(OBJLoader, "/textures/Mesh_Whale.obj");
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

    if (hoveredRef.current) {
      ref.current.material.uniforms.uMouse.value = new Vector2(x, y);
      ref.current.material.uniforms.uMouseTrigger.value = 1;
    }

    /**
     * scroll events
     */
    const aScroll = scroll.range(0, 1 / 3);

    ref.current.material.uniforms.uRandom.value = aScroll;

    const a = scroll.visible(0, 0.7 / 3);
    const b = scroll.visible(0.7 / 3, 1 / 3);
    const c = scroll.visible(1.7 / 3, 0.15 / 3);
    const d = scroll.visible(1.85 / 3, 1 / 3);

    a && setCurrentBodyIndex(null);
    b && setCurrentBodyIndex(0);
    c && setCurrentBodyIndex(null);
    d && setCurrentBodyIndex(1);
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
      uMouseTrigger: {
        value: 0,
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
        value: 0,
      },
      uFrequency: {
        value: 8,
      },
      uAmplitude: {
        value: 4,
      },
      uResolution: {
        value: new Vector2(width, height),
      },
    }),
    []
  );

  const hoveredRef = useRef(false);
  useCursor(hoveredRef);

  const [currentBodyIndex, setCurrentBodyIndex] = useState(null);

  const bodyCentents = useMemo(() => {
    return ["Hello, I'm frontend developer.", "Nice to meet you."];
  }, []);

  // const font = useLoader(FontLoader, "/fonts/FoundersGroteskSemibold.json");

  const [fontLoad, setFontLoad] = useState();

  useEffect(() => {
    const load = new FontLoader().parse(FounterBold);
    setFontLoad(load);
  }, []);

  return (
    <>
      <mesh
        ref={planeRef}
        position={[0, 0, 0]}
        visible={false}
        onPointerOver={(e) => (
          e.stopPropagation(), (hoveredRef.current = true)
        )}
        onPointerOut={(e) => (hoveredRef.current = false)}
      >
        <planeGeometry args={[5, 3, 2, 2]} />
        <meshBasicMaterial wireframe={true} />
      </mesh>

      <Center>
        <group>
          <Text3D
            size={1}
            letterSpacing={2}
            position={[0, 0, 0]}
            font={Poppins}
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
        </group>
      </Center>

      {/* <Text
        font={process.env.NEXT_PUBLIC_API_URL + "/fonts/Inter-Bold.woff"}
        fontSize={2}
      >
        Wtf
      </Text> */}

      {bodyCentents.map((body, index) => (
        <Texts
          key={index}
          body={body}
          index={index}
          currentBodyIndex={currentBodyIndex}
          fontLoad={fontLoad}
        />
      ))}
    </>
  );
};

const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return (
    <Html
      center
      style={{
        color: "#fff",
      }}
    >
      {progress} % loaded
    </Html>
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
          // position: [0, 0, 2],
        }}
        gl={{ antialias: false }}
        dpr={[1, 2]}
      >
        <Suspense fallback={<Loader />}>
          <ScrollControls
            pages={3}
            distance={1}
            damping={4}
            horizontal={false}
            infinite={false}
          >
            <Star />
          </ScrollControls>
        </Suspense>
        {/* <axesHelper
          position={[0, 0, 0]}
          onUpdate={(self) => self.setColors("#ff2080", "#20ff80", "#2080ff")}
          width={windowSize.width}
          height={windowSize.height}
        /> */}
      </Canvas>
    </div>
  );
}
