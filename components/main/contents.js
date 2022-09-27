import React from "react";
import { Text3D, Center } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useBlock } from "../project/blocks";
import { MeshSurfaceSampler, OBJLoader } from "three-stdlib";
import { Vector2, Vector3, MathUtils } from "three";
import state from "./mainStore";
import "../mainShader";
import * as THREE from "three";
import ContentsWrap from "./contentsWrap";
import SometimesMedium from "../../public/fonts/Sometimes_medium.json";
import * as random from "maath/random";

const Contents = () => {
  // common
  const { currentScale, canvasWidth, canvasHeight, mobile } = useBlock();

  // scene 1
  const material = React.useRef();
  const text3D = React.useRef();
  const point = React.useRef();

  const ff = React.useRef();
  const mySphere = random.inSphere(new Float32Array(15000), { radius: 4 });

  React.useLayoutEffect(() => {
    ff.current.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(mySphere, 3)
    );

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
    const indices = new Uint16Array(state.count);
    // const [scale, angle] = new Float32Array(state.count);
    const angle = new Float32Array(state.count);
    const scale = new Float32Array(state.count);

    for (let i = 0, j = 0; i < state.count; i++) {
      const i3 = i * 3;
      textSample.sample(tempPosition);
      // vertex
      vertices[i3 + 0] = (Math.random() - 0.5) * 0.04 + tempPosition.x;
      vertices[i3 + 1] = (Math.random() - 0.5) * 0.02 + tempPosition.y;
      vertices[i3 + 2] = 0;
      // scale
      scale[i] = Math.random() * 1.2;
      // angle
      angle[j] = Math.random() * Math.PI;
      // index
      indices[j] = Math.random() * Math.PI;
      j++;
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
  }, []);

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

          <points ref={ff}>
            <meshBasicMaterial />
          </points>
        </group>
      </Center>
    </ContentsWrap>
  );
};

export default Contents;
