import React, { Suspense } from "react";
import { Text3D, Center, Sparkles, useGLTF } from "@react-three/drei";
import { useFrame, useGraph, useLoader } from "@react-three/fiber";
import { useBlock } from "../project/blocks";
import { MeshSurfaceSampler, OBJLoader } from "three-stdlib";
import { Vector2, Vector3, MathUtils } from "three";
import state from "./mainStore";
import "../mainShader";
import * as THREE from "three";
import ContentsWrap from "./contentsWrap";
import SometimesMedium from "../../public/fonts/Sometimes_medium.json";
import * as random from "maath/random";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import planetData from "./planetData";

const Planet = ({
  planet: { color, xRadius, zRadius, size },
  canvasWidth,
  mobile,
  index,
}) => {
  return (
    <>
      <mesh position={[(xRadius * canvasWidth) / 8, 0, 0]}>
        <sphereGeometry
          args={[mobile ? size * (canvasWidth / 20) : size, 32, 32]}
        />
        <meshStandardMaterial color={color} />
      </mesh>
      <Ecliptic
        xRadius={((xRadius - 1) * canvasWidth) / 8}
        zRadius={mobile ? zRadius / 2 : zRadius}
        index={index}
      />
    </>
  );
};

const Ecliptic = ({ xRadius = 1, zRadius = 1, index }) => {
  const points = [];
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }
  points.push(points[0]);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  if (index === 0) {
    return null;
  }
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
    </line>
  );
};

const Contents = () => {
  // common
  const { currentScale, canvasWidth, canvasHeight, mobile } = useBlock();
  const modelObj = useLoader(GLTFLoader, [
    "/textures/test.glb",
    "/textures/threePeople.glb",
    "/textures/people.glb",
  ]);
  // const scene = useLoader(GLTFLoader, "/textures/hmm.glb");
  // // const scene = useLoader(OBJLoader, "/textures/me.obj")
  // const {nodes, materials} = useGraph(scene.scene)
  const { scene } = useGLTF("/textures/people.glb");

  /**
   *  scene 1
   */
  // scene 1 - material
  const material = React.useRef();
  const text3D = React.useRef();
  const point = React.useRef();

  const line = React.useRef();
  const sparkle = React.useRef();
  const solarSystem = React.useRef();

  // useFrame(({ clock }) => {
  //   const t = clock.getElapsedTime() * 0.2 + 0.3;
  //   const x = 1.5 * Math.sin(t);
  //   const z = 1.5 * Math.cos(t);
  //   // console.log(solarSystem.current.children[4]);
  //   solarSystem.current.position.x = x;
  //   point.current.position.z = z;
  // });

  // position of model
  const test = React.useRef();
  React.useLayoutEffect(() => {
    state.point.current = point.current;

    material.current.uniforms.uResolution.value = new Vector2(
      canvasWidth,
      canvasHeight
    );

    // find position of text
    const textSample = new MeshSurfaceSampler(text3D.current);
    textSample.build();

    const tempPosition = new Vector3();
    const vertices = new Float32Array(state.count * 3);
    const verticesCircle = new Float32Array(state.count * 3);
    const indices = new Uint16Array(state.count);
    const angle = new Float32Array(state.count);
    const scale = new Float32Array(state.count);

    const manSample = new MeshSurfaceSampler(
      modelObj[0].scene.children[0].children[0].children[0].children[0].children[0]
    );
    manSample.geometry.translate(-2.1, -3.6, 0);
    manSample.geometry.scale(14, 14, 14);
    manSample.geometry.rotateX(2);
    manSample.geometry.rotateY(31);
    manSample.geometry.rotateZ(3);
    manSample.build();
    const manVertices = new Float32Array(state.count * 3);
    const manTempPosition = new Vector3();

    // model 3 solar system
    let solarSystemPosition = new Float32Array();
    console.log(solarSystem.current.children.length);

    for (let i = 0, j = 0; i < solarSystem.current.children.length; i++) {
      const samples = new MeshSurfaceSampler(solarSystem.current.children[i]);
      samples.build();
      const vertices = new Float32Array(
        (state.count / solarSystem.current.children.length) * 3
      );
      // planetData[j]
      i % 2 !== 0 && j < 5 && j++;
      console.log(j);

      const positions = new Vector3();
      samples.geometry.rotateX(0.4);
      // samples.geometry.rotateZ(3);
      // samples.geometry.translate(0, -1, 0);
      samples.geometry.translate(
        i === 2 && (1.5 * canvasWidth) / 8,
        i === 2 && 0,
        0
      );
      samples.geometry.translate(
        i === 4 && (2.5 * canvasWidth) / 8,
        i === 4 && 0,
        0
      );
      samples.geometry.translate(
        i === 6 && (3.5 * canvasWidth) / 8,
        i === 6 && 0,
        0
      );
      for (
        let j = 0;
        j < state.count / solarSystem.current.children.length;
        j++
      ) {
        const j3 = j * 3;
        samples.sample(positions);
        vertices[j3 + 0] = (Math.random() - 0.5) * 0.04 + positions.x;
        vertices[j3 + 1] = (Math.random() - 0.5) * 0.02 + positions.y;
        vertices[j3 + 2] = (Math.random() - 0.5) * 0.04 + positions.z;
      }
      solarSystemPosition = Float32Concat(solarSystemPosition, vertices);
    }

    console.log(solarSystem.current.children[0].children[0]);
    // to cancat float32Array
    function Float32Concat(first, second) {
      var firstLength = first.length,
        result = new Float32Array(firstLength + second.length);

      result.set(first);
      result.set(second, firstLength);

      return result;
    }

    // color
    const color = new THREE.Color();
    const aColor = new Float32Array(state.count * 3);
    let h, s, l;

    // const peopleSample = new MeshSurfaceSampler(test.current.children[0]);
    console.log(test.current.children[0]);

    for (let i = 0, j = 0; i < state.count; i++) {
      const i3 = i * 3;
      /**
       * model 1
       */
      textSample.sample(tempPosition);
      // vertex
      vertices[i3 + 0] = (Math.random() - 0.5) * 0.04 + tempPosition.x;
      vertices[i3 + 1] = (Math.random() - 0.5) * 0.02 + tempPosition.y;
      vertices[i3 + 2] = 0;

      verticesCircle[i3 + 0] = (Math.random() - 0.5) * 0.04;
      verticesCircle[i3 + 1] = (Math.random() - 0.5) * 0.02;
      verticesCircle[i3 + 2] = 0;

      // scale
      scale[i] = Math.random() * 1.2;
      // angle
      angle[j] = Math.random() * Math.PI;
      // index
      indices[j] = Math.random() * Math.PI;
      j++;

      h = i / state.count;
      s = MathUtils.randFloat(0.1, 0.8);
      l = MathUtils.randFloat(0.4, 1);

      color.setHSL(h, s, l);

      // aColor[i3 + 0] = color.r;
      // aColor[i3 + 1] = color.g;
      // aColor[i3 + 2] = color.b;

      aColor[i3 + 0] = Math.random() * 0.7;
      aColor[i3 + 1] = Math.random() * 0.7;
      aColor[i3 + 2] = Math.random() * 0.6;

      /*
       * model 2
       */
      manSample.sample(manTempPosition);
      manVertices[i3 + 0] = (Math.random() - 0.5) * 0.04 + manTempPosition.x;
      manVertices[i3 + 1] = (Math.random() - 0.5) * 0.02 + manTempPosition.y;
      manVertices[i3 + 2] = (Math.random() - 0.5) * 0.04 + manTempPosition.z;
    }

    point.current.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(vertices, 3)
    );
    point.current.geometry.setAttribute(
      "aScale",
      new THREE.BufferAttribute(scale, 1)
    );
    point.current.geometry.setAttribute(
      "angle",
      new THREE.BufferAttribute(angle, 1)
    );
    point.current.geometry.setAttribute(
      "pindex",
      new THREE.BufferAttribute(indices, 1)
    );
    point.current.geometry.setAttribute(
      "modelPos",
      new THREE.BufferAttribute(mySphere, 3)
    );
    point.current.geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(aColor, 3)
    );
    point.current.geometry.setAttribute(
      "modelPosTwo",
      new THREE.BufferAttribute(manVertices, 3)
    );
    point.current.geometry.setAttribute(
      "modelPosThree",
      new THREE.BufferAttribute(solarSystemPosition, 3)
    );

    solarSystem.current.rotation.set(0.5, 0, 0.3);

    console.log(solarSystem);
  }, []);

  // scene 1 - text
  // "오늘은 내 인생의 작은 점을 찍는 날입니다.",
  // "인생은 작은 점들이 모여 현재가 되고 미래를 만듭니다.",
  // "나의 노력과 진정성을 더하면 좋은 결과가 있을 거라 믿습니다.",
  // "당신을 만나 인생의 빛나는 점을 찍고 싶습니다.",
  // "통찰력과 창의력으로 모두가 만족하는 솔루션을 제공하겠습니다",

  // scene 2
  // scene 2 - sphere
  const mySphere = random.onSphere(new Float32Array(15400 * 3), { radius: 4 });
  // const lines = random.onSphere(new Float32Array(1000 * 3), { radius: 4 });

  //  scene 3
  // scene 3 - model

  return (
    <ContentsWrap>
      <Center>
        <group
          scale={[
            currentScale > 1 ? 1 : currentScale,
            currentScale > 1 ? 1 : currentScale,
            1,
          ]}
        >
          <Text3D
            size={mobile ? 1.3 : 1}
            position={[0, 0, 0]}
            font={SometimesMedium}
            ref={text3D}
            visible={false}
            curveSegments={12}
            height={50}
          >
            {`Hello, I'm Jin,\nFrontend Developer.`}
            <meshStandardMaterial color="white" />
          </Text3D>
          <points ref={point}>
            <customMaterialMain
              ref={material}
              attach="material"
              depthWrite={false}
              transparent={true}
              width={canvasWidth}
              height={canvasHeight}
            />
          </points>
        </group>
      </Center>
      {/* solar system */}
      <group
        position={[-canvasWidth / 2.2, -5, 0]}
        ref={solarSystem}
        visible={false}
      >
        {/* sun */}
        <mesh>
          <sphereGeometry args={[mobile ? canvasWidth / 12 : 1.2, 32, 32]} />
          <meshStandardMaterial color="#e1dc59" />
        </mesh>
        {/* planet */}
        {planetData.map((planet, index) => (
          <Planet
            planet={planet}
            key={planet.id}
            canvasWidth={canvasWidth}
            mobile={mobile}
            index={index}
          />
        ))}
      </group>

      <Suspense>
        <group position={[0, 0, 0]} scale={[1, 1, 1]}>
          <primitive object={scene} ref={test} />
        </group>
      </Suspense>
    </ContentsWrap>
  );
};

export default Contents;
