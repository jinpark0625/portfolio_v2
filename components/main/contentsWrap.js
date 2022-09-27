import React from "react";
import { Scroll, useCursor, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useBlock } from "../project/blocks";
import state from "./mainStore";
import { Vector2, Vector3, MathUtils } from "three";
import * as random from "maath/random";

const ContentsWrap = ({ children, ...props }) => {
  const { currentScale, canvasWidth, canvasHeight, mobile } = useBlock();
  const planeRef = React.useRef();
  const hoveredRef = React.useRef(false);

  // scroll variables
  const scroll = useScroll();
  useCursor(hoveredRef);

  const mySphere = random.inSphere(new Float32Array(15000), { radius: 4 });

  useFrame(({ mouse, camera, clock }) => {
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
    const aScroll = scroll.range(0, 1 / 5);
    state.point.current.material.uniforms.uRandom.value = aScroll;
    if (aScroll > 0) {
      state.point.current.material.uniforms.uSphere.value = mySphere;
    }
    // const a = scroll.visible(0, 0.7 / 7);
    // const b = scroll.visible(0.7 / 7, 1 / 7);
    // const c = scroll.visible(1.7 / 7, 0.15 / 7);
    // const d = scroll.visible(1.85 / 7, 0.7 / 7);
    // const e = scroll.visible(2.55 / 7, 1 / 7);
    // const eRange = scroll.range(2.55 / 7, 1 / 7);
    // const eOpacity = scroll.range(3 / 7, 0.55 / 7);
    // const f = scroll.visible(3.55 / 7, 1 / 7);
    // const fRange = scroll.range(3.55 / 7, 1 / 7);
    // const g = scroll.visible(4.55 / 7, 0.7 / 7);
    // const gRange = scroll.range(4.55 / 7, 0.7 / 7);
    // const h = scroll.visible(5.25 / 7, 1 / 7);
    // const testNum = Number(eRange.toFixed(2));
    // const testNumTwo = Number(gRange.toFixed(2));
    // if (a) {
    //   setCurrentBodyIndex(null);
    // }
    // b && setCurrentBodyIndex(0);
    // c && setCurrentBodyIndex(null);
    // if (d) {
    //   setCurrentBodyIndex(1);
    //   ref.current.material.uniforms.uTrigger.value = 0;
    // }
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
        scale={[canvasWidth * 0.8, canvasHeight * 0.4, 1]}
        onPointerOver={(e) => (
          e.stopPropagation(), (hoveredRef.current = true)
        )}
        onPointerOut={(e) => (hoveredRef.current = false)}
        // visible={false}
      >
        <planeGeometry args={[1, 1, 1, 1]} />
        <meshBasicMaterial wireframe={true} />
      </mesh>
      {children}
    </>
  );
};

export default ContentsWrap;
