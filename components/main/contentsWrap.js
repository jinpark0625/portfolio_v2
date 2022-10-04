import React from "react";
import { Scroll, useCursor, useScroll, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useBlock } from "../project/blocks";
import state from "./mainStore";
import { Vector2, Vector3, MathUtils } from "three";
import * as random from "maath/random";
import BodyText from "./bodyText";

const ContentsWrap = ({ children, ...props }) => {
  const { currentScale, canvasWidth, canvasHeight, mobile } = useBlock();
  const planeRef = React.useRef();
  const hoveredRef = React.useRef(false);

  // scroll variables
  const scroll = useScroll();
  useCursor(hoveredRef);

  const mySphere = random.inSphere(new Float32Array(15000), { radius: 4 });

  /**
   * text
   */
  const [currentBodyIndex, setCurrentBodyIndex] = React.useState(null);
  const bodyCentents = React.useMemo(() => {
    return [
      "First Sentence.",
      "Second Sentence.",
      "Third Sentence.",
      "Fourth Sentence.",
      "Fifth Sentence.",
      "Sixth Sentence",
    ];
  }, []);

  useFrame(({ mouse, camera, clock }, delta) => {
    /**
     * mouse events
     */
    state.point.current.material.uniforms.uTime.value = clock.getElapsedTime();

    const x = (mouse.x * canvasWidth) / 2;
    const y = (mouse.y * canvasHeight) / 2;
    if (hoveredRef.current) {
      state.point.current.material.uniforms.uMouse.value = new Vector2(x, y);
      state.point.current.material.uniforms.uMouseTrigger.value = 1;
    } else state.point.current.material.uniforms.uMouseTrigger.value = 0;
    /**
     * scroll events
     */
    // scene - 1
    const aScroll = scroll.range(0, 1 / 7);
    state.point.current.material.uniforms.uRandom.value = aScroll;
    const a = scroll.visible(0, 0.7 / 7);
    const b = scroll.visible(0.7 / 7, 1 / 7);

    a && setCurrentBodyIndex(null);
    if (b) {
      setCurrentBodyIndex(0);
      state.point.current.material.uniforms.uTrigger.value = 0;
    }

    //  scene - 2
    const c = scroll.visible(1.7 / 7, 1 / 7);
    const d = scroll.visible(2.7 / 7, 0.6 / 7);
    const e = scroll.visible(3.2 / 7, 1.4 / 7);
    const f = scroll.visible(3.6 / 7, 1 / 7);

    const cRange = scroll.range(1.7 / 7, 1 / 7);
    const cOpacity = scroll.range(1.7 / 7, 0.55 / 7);
    const dOpacity = scroll.range(2.7 / 7, 0.8 / 7);

    if (c) {
      setCurrentBodyIndex(null);
      state.point.current.material.uniforms.uOpacity.value = cOpacity;
    }
    state.point.current.material.uniforms.uTrigger.value = cRange;
    if (e) {
      // state.point.current.material.uniforms.uRandomSecond.value = dOpacity;
      setCurrentBodyIndex(null);
    }
    if (f) {
      setCurrentBodyIndex(1);
    }

    // scene - 3
    const g = scroll.visible(4.6 / 7, 1 / 7);
    const gRange = scroll.range(4.6 / 7, 1 / 7);
    g && setCurrentBodyIndex(null);
    state.point.current.material.uniforms.uTriggerTwo.value = gRange;

    // scene - 4
    const h = scroll.visible(5.6 / 7, 1 / 7);
    const hRange = scroll.range(5.6 / 7, 1 / 7);
    state.point.current.material.uniforms.uTriggerThree.value = hRange;
    state.point.current.material.uniforms.uRandomThird.value = hRange;
    // const f = scroll.visible(3.55 / 7, 1 / 7);
    // const fRange = scroll.range(3.55 / 7, 1 / 7);
    // const g = scroll.visible(4.55 / 7, 0.7 / 7);
    // const gRange = scroll.range(4.55 / 7, 0.7 / 7);
    // const h = scroll.visible(5.25 / 7, 1 / 7);
    // const testNum = Number(eRange.toFixed(2));
    // const testNumTwo = Number(gRange.toFixed(2));

    // if (e) {
    //   setCurrentBodyIndex(null);
    //   ref.current.material.uniforms.uTrigger.value = testNum;
    //   ref.current.material.uniforms.uOpacity.value = eOpacity;
    //   ref.current.material.uniforms.uRandomSecond.value = 0;
    // }
    // if (f) {
    //   ref.current.material.uniforms.uTrigger.value = 1;
    //   ref.current.material.uniforms.uRandomSecond.value = fRange;
    //   ref.current.material.uniforms.uTriggerTwo.value = 0;
    // }
    // if (g) {
    //   ref.current.material.uniforms.uRandomSecond.value = 1;
    //   ref.current.material.uniforms.uTriggerTwo.value = testNumTwo;
    // }
    // if (h) {
    //   ref.current.material.uniforms.uTriggerTwo.value = 1;
    // }
  });

  return (
    <>
      <mesh
        ref={planeRef}
        position={[0, 0, 0]}
        scale={[canvasWidth, canvasHeight, 1]}
        onPointerOver={(e) => (
          e.stopPropagation(), (hoveredRef.current = true)
        )}
        onPointerOut={(e) => (hoveredRef.current = false)}
        visible={false}
      >
        <planeGeometry args={[1, 1, 1, 1]} />
        <meshBasicMaterial wireframe={true} />
      </mesh>
      <group>
        {children}
        <Center>
          {/* <BodyText         
          body="let's make a dot today."
          index="0"
          currentBodyIndex="0"
          /> */}

          {bodyCentents.map((body, index) => (
            <BodyText
              key={index}
              body={body}
              index={index}
              currentBodyIndex={currentBodyIndex}
            />
          ))}
        </Center>
      </group>
    </>
  );
};

export default ContentsWrap;
