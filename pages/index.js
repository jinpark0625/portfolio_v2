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
  Scroll,
} from "@react-three/drei";
import * as random from "maath/random";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import BLCereal from "../public/fonts/BLCereal.json";
import Sometimes from "../public/fonts/Sometimes.json";
import SometimesRegular from "../public/fonts/Sometimes_regular.json";
import SometimesMedium from "../public/fonts/Sometimes_medium.json";
import SometimesBold from "../public/fonts/Sometimes_bold.json";
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
import { vertexShader, fragmentShader } from "./shader";
import Loader from "../components/loader";
import state from "../components/project/scrollStore";
import { Block, useBlock } from "../components/project/blocks";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const raycaster = new THREE.Raycaster();

const AnimatedText = animated(Text);
const Texts = memo(function Texts({ body, index, currentBodyIndex }) {
  /**
   * body texts
   */
  // const content = useMemo(() => {
  //   return (content = body);
  // }, []);

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
  const fontProps = {
    font:
      process.env.NEXT_PUBLIC_API_URL + "/fonts/FoundersGroteskRegular.woff",
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
              {body}
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

  const modelObj = useLoader(OBJLoader, [
    "/textures/model.obj",
    "/textures/Mesh_Whale.obj",
    "/textures/guys.obj",
  ]);

  const result = useLoader(GLTFLoader, "/textures/untitled.glb");

  // const modelObjTwo = useLoader(OBJLoader, "/textures/Chicken_01.obj");
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
    const aScroll = scroll.range(0, 1 / 5);

    ref.current.material.uniforms.uRandom.value = aScroll;

    const a = scroll.visible(0, 0.7 / 7);
    const b = scroll.visible(0.7 / 7, 1 / 7);
    const c = scroll.visible(1.7 / 7, 0.15 / 7);
    const d = scroll.visible(1.85 / 7, 0.7 / 7);
    const e = scroll.visible(2.55 / 7, 1 / 7);
    const eRange = scroll.range(2.55 / 7, 1 / 7);
    const eOpacity = scroll.range(3 / 7, 0.55 / 7);
    const f = scroll.visible(3.55 / 7, 1 / 7);
    const fRange = scroll.range(3.55 / 7, 1 / 7);
    const g = scroll.visible(4.55 / 7, 0.7 / 7);
    const gRange = scroll.range(4.55 / 7, 0.7 / 7);
    const h = scroll.visible(5.25 / 7, 1 / 7);

    const testNum = Number(eRange.toFixed(2));
    const testNumTwo = Number(gRange.toFixed(2));

    if (a) {
      setCurrentBodyIndex(null);
    }
    b && setCurrentBodyIndex(0);
    c && setCurrentBodyIndex(null);
    if (d) {
      setCurrentBodyIndex(1);
      ref.current.material.uniforms.uTrigger.value = 0;
    }
    if (e) {
      setCurrentBodyIndex(null);
      ref.current.material.uniforms.uTrigger.value = testNum;
      ref.current.material.uniforms.uOpacity.value = eOpacity;
      ref.current.material.uniforms.uRandomSecond.value = 0;
    }
    if (f) {
      ref.current.material.uniforms.uTrigger.value = 1;
      ref.current.material.uniforms.uRandomSecond.value = fRange;
      ref.current.material.uniforms.uTriggerTwo.value = 0;
    }
    if (g) {
      ref.current.material.uniforms.uRandomSecond.value = 1;
      ref.current.material.uniforms.uTriggerTwo.value = testNumTwo;
    }
    if (h) {
      ref.current.material.uniforms.uTriggerTwo.value = 1;
    }
  });

  /**
   * get model position
   */
  const getModelPosition = () => {
    const modelSample = new MeshSurfaceSampler(modelObj[0].children[0]);
    modelSample.build();
    const tempPosition = new Vector3();
    const vertices = new Float32Array(count * 3);
    for (let i = 0, j = 0; i < count; i++) {
      const i3 = i * 3;
      modelSample.sample(tempPosition);
      vertices[i3 + 0] = (Math.random() - 0.5) * 0.04 + tempPosition.x;
      vertices[i3 + 1] = (Math.random() - 0.5) * 0.02 + tempPosition.y;
      vertices[i3 + 2] = (Math.random() - 0.5) * 0.04 + tempPosition.z;
    }
    ref.current.geometry.setAttribute(
      "modelPos",
      new THREE.BufferAttribute(vertices, 3)
    );
  };

  const getModelPositionTwo = () => {
    const modelSample = new MeshSurfaceSampler(modelObj[1].children[0]);
    modelSample.geometry.rotateY(45);
    modelSample.build();
    const tempPosition = new Vector3();
    const vertices = new Float32Array(count * 3);
    for (let i = 0, j = 0; i < count; i++) {
      const i3 = i * 3;
      modelSample.sample(tempPosition);
      vertices[i3 + 0] = (Math.random() - 0.5) * 0.04 + tempPosition.x * 0.01;
      vertices[i3 + 1] = (Math.random() - 0.5) * 0.02 + tempPosition.y * 0.01;
      vertices[i3 + 2] = (Math.random() - 0.5) * 0.04 + tempPosition.z * 0.01;
    }
    ref.current.geometry.setAttribute(
      "modelPosTwo",
      new THREE.BufferAttribute(vertices, 3)
    );
  };
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

    //추가
    // console.log(ref.current.geometry.morphAttributes.position);
    // ref.current.geometry.morphAttributes.position = [];
    getModelPosition();
    getModelPositionTwo();
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
      //추가
      uTrigger: {
        value: 0,
      },
      uTriggerTwo: {
        value: 0,
      },
      uRandomSecond: {
        value: 0,
      },
      uOpacity: {
        value: 0,
      },
      uRandomThird: {
        value: 0,
      },
    }),
    []
  );

  const hoveredRef = useRef(false);
  useCursor(hoveredRef);

  const [currentBodyIndex, setCurrentBodyIndex] = useState(null);

  const bodyCentents = useMemo(() => {
    return [
      "안녕하세요 프론트앤드 개발자 박진입니다.",
      "오늘은 내 인생의 작은 점을 찍는 날입니다.",
      "인생은 작은 점들의 연속입니다.",
      "점들이 모여 현재가 되고 미래를 만듭니다.",
      "나의 노력과 진정성을 더하면 좋은 결과가 있을 거라 믿습니다.",
      "당신을 만나 인생의 빛나는 점을 찍고 싶습니다.",
      "통찰력과 창의력으로 모두가 만족하는 솔루션을 제공하겠습니다",
    ];
  }, []);

  // useEffect(() => {
  //   const load = new FontLoader().parse(FounterBold);
  //   setFontLoad(load);
  // }, []);

  const { currentScale, canvasWidth, canvasHeight, mobile } = useBlock();

  const x = canvasWidth * 0.6;
  const y = x / canvasWidth;

  const a = canvasWidth / 2 / canvasWidth;

  const people = useRef();
  useLayoutEffect(() => {
    console.log(modelObj);
  }, []);

  return (
    <>
      <mesh
        ref={planeRef}
        position={[0, 0, 0]}
        scale={[canvasWidth * 0.8, canvasHeight * 0.4, 1]}
        // visible={false}
        onPointerOver={(e) => (
          e.stopPropagation(), (hoveredRef.current = true)
        )}
        onPointerOut={(e) => (hoveredRef.current = false)}
      >
        <planeGeometry args={[1, 1, 1, 1]} />
        <meshBasicMaterial wireframe={true} />
      </mesh>

      <Center>
        <group
          scale={[
            currentScale > 1 ? 1 : currentScale,
            currentScale > 1 ? 1 : currentScale,
            1,
          ]}
        >
          <Text3D
            // letterSpacing={1000}
            size={mobile ? 1.3 : 1}
            position={[0, 0, 0]}
            font={SometimesMedium}
            ref={textRef}
            visible={false}
            curveSegments={12}
            height={50}
            // bevelEnabled
            // bevelSize={0}
            // lineHeight={2}
            // bevelThickness={0}
          >
            {`Hello, I'm Jin,\nFrontend Developer.`}
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

      {bodyCentents.map((body, index) => (
        <Texts
          key={index}
          body={body}
          index={index}
          currentBodyIndex={currentBodyIndex}
        />
      ))}
    </>
  );
};

export default function Home({ results }) {
  return (
    <div className="canvasWrap">
      <Seo title="Home" />
      <Canvas
        // camera={{
        //   // fov: 75,
        //   // near: 0.1,
        //   // far: 1000,
        //   // aspect: windowSize.width / windowSize.height,
        //   zoom: state.zoom,
        //   position: [0, 0, 500],
        // }}
        className="canvas"
        linear
        orthographic
        camera={{ zoom: state.zoom, position: [0, 0, 500] }}
        gl={{ antialias: false }}
        dpr={[1, 2]}
      >
        <Suspense fallback={<Loader />}>
          <ScrollControls
            pages={7}
            distance={1}
            damping={4}
            horizontal={false}
            infinite={false}
          >
            <Star />
          </ScrollControls>
        </Suspense>
        <axesHelper
          position={[0, 0, 0]}
          onUpdate={(self) => self.setColors("#ff2080", "#20ff80", "#2080ff")}
        />
      </Canvas>
    </div>
  );
}
