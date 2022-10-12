import React from "react";
import { useCursor, useScroll, Center } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useBlock } from "../project/blocks";
import state from "./mainStore";
import { PlaneGeometry, Vector2 } from "three";
import BodyText from "./bodyText";
import Contents from "./contents";
import { OBJLoader } from "three-stdlib";

const ContentsWrap = ({ children, ...props }) => {
  const { canvasWidth, canvasHeight } = useBlock();
  const hoveredRef = React.useRef(false);

  // scroll variables
  const scroll = useScroll();
  useCursor(hoveredRef);

  const modelObj = useLoader(OBJLoader, [
    "/textures/man.obj",
    "/textures/people.obj",
  ]);

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
  const ref = React.useRef();

  // scroll attrs
  useFrame(({ mouse, camera, clock }, delta) => {
    // console.log(hoveredRef);
    // Elapsed Time
    // console.log(ref);
    state.point.current.material.uniforms.uTime.value = clock.elapsedTime;

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
    const aScroll = scroll.range(0, 1 / 12);
    const a = scroll.visible(0, 0.7 / 12);
    const b = scroll.visible(0.7 / 12, 1 / 12);
    const bRange = scroll.range(0.7 / 12, 1 / 12);

    state.point.current.material.uniforms.uFirstTrigger.value = aScroll;
    a && setCurrentBodyIndex(null);
    b && setCurrentBodyIndex(0);
    state.point.current.material.uniforms.uLowerOpacity.value = bRange;

    //  scene - 2
    const c = scroll.visible(1.7 / 12, 1 / 12);
    const d = scroll.visible(2.7 / 12, 0.6 / 12);
    const e = scroll.visible(3.2 / 12, 1.4 / 12);
    const f = scroll.visible(3.6 / 12, 1 / 12);

    const cRange = scroll.range(1.7 / 12, 1 / 12);
    const fRange = scroll.range(3.6 / 12, 1 / 12);

    c && setCurrentBodyIndex(null);
    state.point.current.material.uniforms.uSecondTrigger.value = cRange;
    state.point.current.material.uniforms.uIncreaseOpacity.value = cRange;

    e && setCurrentBodyIndex(null);

    if (f) {
      setCurrentBodyIndex(1);
      state.point.current.material.uniforms.uLowerOpacity.value = fRange + 0.97;
    }

    // scene - 3
    const g = scroll.visible(4.6 / 12, 1 / 12);
    const h = scroll.visible(5.6 / 12, 1 / 12);
    const gRange = scroll.range(4.6 / 12, 1 / 12);

    if (g) {
      setCurrentBodyIndex(null);
      state.point.current.material.uniforms.uIncreaseOpacity.value = gRange;
    }
    state.point.current.material.uniforms.uThirdTrigger.value = gRange;
    h && setCurrentBodyIndex(2);

    // scene - 4
    const i = scroll.visible(6.6 / 12, 1 / 12);
    const iRange = scroll.range(6.6 / 12, 1 / 12);
    const jRange = scroll.range(7.6 / 12, 1 / 12);
    state.point.current.material.uniforms.uFourthTrigger.value = iRange;
    i && setCurrentBodyIndex(null);
    state.point.current.material.uniforms.uFifthTrigger.value = jRange;

    // scene - 5
    const k = scroll.visible(8.6 / 12, 1 / 12);
    const l = scroll.visible(9.6 / 12, 1 / 12);
    const lRange = scroll.range(9.6 / 12, 1 / 12);
    k && setCurrentBodyIndex(3);
    l && setCurrentBodyIndex(null);
    state.point.current.material.uniforms.uSixthTrigger.value = lRange;

    // scene - 6
    const m = scroll.visible(10.6 / 12, 1 / 12);
    m && setCurrentBodyIndex(4);

    state.point.current.geometry.verticesNeedUpdate = true;
  });

  const planeGeo = React.useMemo(() => {
    return new PlaneGeometry(1, 1, 1, 1);
  }, []);

  return (
    <>
      <mesh
        position={[0, 0, 0]}
        scale={[canvasWidth, canvasHeight, 1]}
        onPointerOver={(e) => (
          e.stopPropagation(), (hoveredRef.current = true)
        )}
        onPointerOut={(e) => (hoveredRef.current = false)}
        visible={false}
        geometry={planeGeo}
      />
      <group>
        <Contents models={modelObj} />
      </group>
      <group>
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
