import React from "react";
import { Text3D, Center } from "@react-three/drei";
import { useBlock } from "../project/blocks";
import { MeshSurfaceSampler } from "three-stdlib";
import { Vector3, MathUtils, AdditiveBlending } from "three";
import state from "./mainStore";
import "../mainShader";
import * as THREE from "three";
import SometimesMedium from "../../public/fonts/Sometimes_medium.json";
import * as random from "maath/random";
import useRefs from "react-use-refs";

const Contents = React.memo(function Contents({ models, isMobile }) {
  // common
  const { currentScale, canvasWidth, canvasHeight, mobile } = useBlock();

  /**
   *  scene 1 text
   */
  // scene 1 - material
  const [material, text3D, point] = useRefs();

  /**
   *  scene 2 sphere
   */
  const mySphere = React.useMemo(() => {
    return random.onSphere(new Float32Array(15400 * 3), {
      radius: mobile ? canvasWidth / 3.4 : canvasWidth / 6,
    });
  }, []);

  React.useLayoutEffect(() => {
    isMobile && (point.current.material.uniforms.uMobile.value = 0.3);

    state.point.current = point.current;

    /**
     * scene 1 text
     */
    // find position of text
    const textSample = new MeshSurfaceSampler(text3D.current);
    textSample.build();

    const tempPosition = new Vector3();
    const vertices = new Float32Array(state.count * 3);
    const indices = new Uint16Array(state.count);
    const angle = new Float32Array(state.count);
    const scale = new Float32Array(state.count);

    // text animation
    const rand = new Float32Array(state.count * 3);

    /**
     * scene 3 man
     */
    const manSample = new MeshSurfaceSampler(models[0].children[0]);
    manSample.build();
    const manVertices = new Float32Array(state.count * 3);
    const manTempPosition = new Vector3();

    /**
     * scene 4 people
     */
    let peoplePosition = new Float32Array();
    const length = models[1].children.length;

    for (let i = 0; i < length; i++) {
      const samples = new MeshSurfaceSampler(models[1].children[i]);
      samples.build();
      const vertices = new Float32Array((state.count / length) * 3);
      const positions = new Vector3();
      for (let j = 0; j < state.count / length; j++) {
        const j3 = j * 3;
        samples.sample(positions);
        vertices[j3 + 0] = (Math.random() - 0.5) * 0.04 + positions.x;
        vertices[j3 + 1] = (Math.random() - 0.5) * 0.02 + positions.y;
        vertices[j3 + 2] = (Math.random() - 0.5) * 0.04 + positions.z;
      }
      peoplePosition = Float32Concat(peoplePosition, vertices);
    }
    // to cancat float32Array
    function Float32Concat(first, second) {
      var firstLength = first.length,
        result = new Float32Array(firstLength + second.length);

      result.set(first);
      result.set(second, firstLength);

      return result;
    }

    /**
     * scene 5 ring
     */
    const ringPosition = new Vector3();
    const ringVertices = new Float32Array(state.count * 3);
    const radius = mobile ? canvasWidth / 3.4 : canvasWidth / 6;
    const r = radius * 1.2;

    // color
    const color = new THREE.Color();
    const aColor = new Float32Array(state.count * 3);
    var q = ["white", "white", 0x2675ad, 0x0b5394, 0x0b9490];

    for (let i = 0, j = 0; i < state.count; i++) {
      const i3 = i * 3;
      /**
       * First Scene Text
       */
      textSample.sample(tempPosition);
      // vertex
      vertices[i3 + 0] = (Math.random() - 0.5) * 0.04 + tempPosition.x;
      vertices[i3 + 1] = (Math.random() - 0.5) * 0.02 + tempPosition.y;
      vertices[i3 + 2] = 0;
      // scale
      // scale[i] = Math.random() * 3;
      scale[i] = Math.random() * 40;
      // angle
      angle[j] = Math.random() * Math.PI;
      indices[j] = Math.random() * Math.PI;
      j++;
      rand[i3 + 0] = (Math.random() - 1.0) * 2;
      rand[i3 + 1] = (Math.random() - 1.0) * 2;
      rand[i3 + 2] = 0;

      color.set(q[MathUtils.randInt(0, 4)]);
      aColor[i3 + 0] = color.r;
      aColor[i3 + 1] = color.g;
      aColor[i3 + 2] = color.b;

      /*
       * model man
       */
      manSample.sample(manTempPosition);
      manVertices[i3 + 0] = mobile
        ? (Math.random() - 0.5) * 0.04 + manTempPosition.x - 1.2
        : (Math.random() - 0.5) * 0.04 + manTempPosition.x + 0.5;
      manVertices[i3 + 1] = manTempPosition.y - 4.6;
      manVertices[i3 + 2] = (Math.random() - 0.5) * 0.04 + manTempPosition.z;

      /*
       * model ring
       */

      const phi = MathUtils.randFloat(0, Math.PI * 2);

      ringPosition.x = r * Math.cos(phi);
      ringPosition.y = r * Math.sin(phi);

      ringVertices[i3 + 0] = (Math.random() - 0.5) * -0.05 + ringPosition.x;
      ringVertices[i3 + 1] = (Math.random() - 0.5) * -0.05 + ringPosition.y;
      ringVertices[i3 + 2] = 0;
    }

    point.current.geometry.setAttribute(
      "rand",
      new THREE.BufferAttribute(rand, 3)
    );
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
      "color",
      new THREE.BufferAttribute(aColor, 3)
    );
    point.current.geometry.setAttribute(
      "modelPos",
      new THREE.BufferAttribute(mySphere, 3)
    );
    point.current.geometry.setAttribute(
      "modelPosTwo",
      new THREE.BufferAttribute(manVertices, 3)
    );
    point.current.geometry.setAttribute(
      "modelPosThree",
      new THREE.BufferAttribute(peoplePosition, 3)
    );
    point.current.geometry.setAttribute(
      "modelPosFour",
      new THREE.BufferAttribute(ringVertices, 3)
    );
    point.current.geometry.attributes.position.needsUpdate = true;
    point.current.geometry.attributes.color.needsUpdate = true;
  }, []);

  return (
    <>
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
            height={1}
          >
            {mobile
              ? `Hello,\nI'm Jin,\nFrontend Developer.`
              : `Hello, I'm Jin,\nFrontend Developer.`}
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
              blending={AdditiveBlending}
            />
          </points>
        </group>
      </Center>
    </>
  );
});

export default Contents;
