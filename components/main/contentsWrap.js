import React from "react";
import { Scroll, useCursor, useScroll, Center } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
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
    // Elapsed Time
    state.point.current.material.uniforms.uTime.value = clock.getElapsedTime();

    /**
     * mouse events
     */
    const x = (mouse.x * canvasWidth) / 2;
    const y = (mouse.y * canvasHeight) / 2;
    if (hoveredRef.current) {
      state.point.current.material.uniforms.uMouse.value = new Vector2(x, y);
      state.point.current.material.uniforms.uMouseTrigger.value = 1;
    } else state.point.current.material.uniforms.uMouseTrigger.value = 0;

    /**
     * Scroll events
     */
    // scene - 1
    const aScroll = scroll.range(0, 1 / 10);
    const a = scroll.visible(0, 0.7 / 10);
    const b = scroll.visible(0.7 / 10, 1 / 10);
    const bRange = scroll.range(0.7 / 10, 1 / 10);

    state.point.current.material.uniforms.uFirstTrigger.value = aScroll;
    a && setCurrentBodyIndex(null);
    b && setCurrentBodyIndex(0);
    state.point.current.material.uniforms.uLowerOpacity.value = bRange;

    //  scene - 2
    const c = scroll.visible(1.7 / 10, 1 / 10);
    const d = scroll.visible(2.7 / 10, 0.6 / 10);
    const e = scroll.visible(3.2 / 10, 1.4 / 10);
    const f = scroll.visible(3.6 / 10, 1 / 10);

    const cRange = scroll.range(1.7 / 10, 1 / 10);
    const fRange = scroll.range(3.6 / 10, 1 / 10);

    c && setCurrentBodyIndex(null);
    state.point.current.material.uniforms.uSecondTrigger.value = cRange;
    state.point.current.material.uniforms.uIncreaseOpacity.value = cRange;

    e && setCurrentBodyIndex(null);

    if (f) {
      setCurrentBodyIndex(1);
      state.point.current.material.uniforms.uLowerOpacity.value = fRange + 0.97;
    }

    // scene - 3
    const g = scroll.visible(4.6 / 10, 1 / 10);
    const h = scroll.visible(5.6 / 10, 1 / 10);
    const gRange = scroll.range(4.6 / 10, 1 / 10);

    if (g) {
      setCurrentBodyIndex(null);
      state.point.current.material.uniforms.uIncreaseOpacity.value = gRange;
    }
    state.point.current.material.uniforms.uThirdTrigger.value = gRange;
    h && setCurrentBodyIndex(2);

    // scene - 4
    const i = scroll.visible(6.6 / 10, 1 / 10);
    const j = scroll.visible(7.6 / 10, 1 / 10);
    const iRange = scroll.range(6.6 / 10, 1 / 10);
    const jRange = scroll.range(7.6 / 10, 1 / 10);
    state.point.current.material.uniforms.uFourthTrigger.value = iRange;
    i && setCurrentBodyIndex(null);

    // const hRange = scroll.range(5.6 / 7, 1 / 7);
    // state.point.current.material.uniforms.uTriggerThree.value = hRange;
    state.point.current.geometry.verticesNeedUpdate = true;
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
