import React, { Suspense } from "react";
import { Text3D, Center, Sparkles, useGLTF} from "@react-three/drei";
import { useFrame,useGraph,useLoader } from "@react-three/fiber";
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


const Contents = () => {
  // common
  const { currentScale, canvasWidth, canvasHeight, mobile } = useBlock();
  const modelObj = useLoader(GLTFLoader, [
    "/textures/test.glb",
    "/textures/threePeople.glb",
    "/textures/solar.glb"
  ]);
  // const modelObj = useLoader(OBJLoader, [
  //   "/textures/model.obj",
  //   "/textures/Mesh_Whale.obj",
  //   "/textures/guys.obj",
  //   "/textures/me.obj"
  // ]);

  // const scene = useLoader(GLTFLoader, "/textures/hmm.glb");
  // // const scene = useLoader(OBJLoader, "/textures/me.obj")
  // const {nodes, materials} = useGraph(scene.scene)
  // console.log(nodes)
  const {scene} = useGLTF("/textures/solar.glb")

  const test = React.useRef()
  /**
   *  scene 1
  */
   // scene 1 - material
  const material = React.useRef();
  const text3D = React.useRef();
  const point = React.useRef();

  console.log(modelObj[2].scene)

  // position of model
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

    const manSample = new MeshSurfaceSampler(modelObj[0].scene.children[0].children[0].children[0].children[0].children[0])
    manSample.geometry.translate(-2.1,-3.6,0)
    manSample.geometry.scale(14,14,14)
    manSample.geometry.rotateX(2)
    manSample.geometry.rotateY(31)
    manSample.geometry.rotateZ(3)
    manSample.build()
    const manVertices = new Float32Array(state.count * 3);
    const manTempPosition = new Vector3();

    const peopleSample = new MeshSurfaceSampler(modelObj[1].scene.children[0].children[0].children[0])
    peopleSample.geometry.translate(0,3,-70)
    peopleSample.geometry.scale(.08,.08,.08)
    peopleSample.geometry.rotateX(1.5)
    peopleSample.geometry.rotateY(2.9)
    peopleSample.geometry.rotateZ(3.13)
    peopleSample.build()
    const peopleVertices = new Float32Array(state.count * 3);
    const peopleTempPosition = new Vector3();

    // color
    const color = new THREE.Color();
    const aColor =  new Float32Array(state.count * 3)
    let h, s, l;

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
      s = MathUtils.randFloat(0.1, .8);
      l = MathUtils.randFloat(0.4, 1);

      color.setHSL(h, s, l);

      // aColor[i3 + 0] = color.r;
      // aColor[i3 + 1] = color.g;
      // aColor[i3 + 2] = color.b;

      aColor[i3 + 0] = Math.random() * .7;
      aColor[i3 + 1] = Math.random() * .7;
      aColor[i3 + 2] = Math.random() * .6;

      /*
      * model 2 
      */
      manSample.sample(manTempPosition);
      manVertices[i3 + 0] = (Math.random() - 0.5) * 0.04 + manTempPosition.x;
      manVertices[i3 + 1] = (Math.random() - 0.5) * 0.02 + manTempPosition.y;
      manVertices[i3 + 2] = (Math.random() - 0.5) * 0.04 + manTempPosition.z;

      /*
      * model 3
      */
      peopleSample.sample(peopleTempPosition);
      peopleVertices[i3 + 0] = (Math.random() - 0.5) * 0.04 + peopleTempPosition.x;
      peopleVertices[i3 + 1] = (Math.random() - 0.5) * 0.02 + peopleTempPosition.y;
      peopleVertices[i3 + 2] = (Math.random() - 0.5) * 0.04 + peopleTempPosition.z;
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
      new THREE.BufferAttribute(peopleVertices, 3)
    );

  }, []);

  // scene 1 - text
  // "오늘은 내 인생의 작은 점을 찍는 날입니다.",
  // "인생은 작은 점들이 모여 현재가 되고 미래를 만듭니다.",
  // "나의 노력과 진정성을 더하면 좋은 결과가 있을 거라 믿습니다.",
  // "당신을 만나 인생의 빛나는 점을 찍고 싶습니다.",
  // "통찰력과 창의력으로 모두가 만족하는 솔루션을 제공하겠습니다",

  // scene 2
  // scene 2 - sphere
  const mySphere = random.onSphere(new Float32Array(15000 * 3), { radius: 4 })

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
        <mesh>
          <Sparkles size={1000} color="white" count={1} speed={.3} noise={.5}/>
        </mesh>
      </Center>
      <Suspense>
        <group >
          {/* <primitive object={scene} ref={test}/> */}
        </group>
      </Suspense>
    </ContentsWrap>
  );
};

export default Contents;
