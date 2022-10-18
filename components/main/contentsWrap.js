import React from "react";
import { useCursor, useScroll, Html, useFBX } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useBlock } from "../project/blocks";
import state from "./mainStore";
import { PlaneGeometry, Vector2 } from "three";
import Contents from "./contents";
import useRefs from "react-use-refs";

const ContentsWrap = ({ children, router, isMobile, ...props }) => {
  const { canvasWidth, canvasHeight, mobile } = useBlock();
  const hoveredRef = React.useRef(false);

  // scroll variables
  const scroll = useScroll();
  useCursor(hoveredRef);

  const modelObj = useFBX(["man.fbx", "people.fbx"]);

  /**
   * text
   */
  const [
    scrollNotice,
    firstText,
    secondText,
    thirdText,
    fourthText,
    fifthText,
    percent,
    routerCheck,
  ] = useRefs();

  // scroll attrs
  useFrame(({ mouse, clock }) => {
    // Elapsed Time
    state.point.current.material.uniforms.uTime.value = clock.elapsedTime;
    state.point.current.geometry.attributes.position.needsUpdate = true;
    /**
     * mouse events
     */
    const x = (mouse.x * canvasWidth) / 2;
    const y = (mouse.y * canvasHeight) / 2;
    if (!mobile) {
      if (hoveredRef.current) {
        state.point.current.material.uniforms.uMouse.value = new Vector2(x, y);
        state.point.current.material.uniforms.uMouseTrigger.value = 1;
      } else state.point.current.material.uniforms.uMouseTrigger.value = 0;
    }

    /**
     * Scroll events
     */
    // scene - 1
    const aScroll = scroll.range(0, 1 / 12);
    const start = scroll.visible(0.1 / 12, 11.9 / 12);
    const b = scroll.visible(0.7 / 12, 1.4 / 12);
    const bRange = scroll.range(0.7 / 12, 1 / 12);

    state.point.current.material.uniforms.uFirstTrigger.value = aScroll;

    scrollNotice.current?.classList.toggle("out", start);
    firstText.current?.classList.toggle("show", b);

    state.point.current.material.uniforms.uLowerOpacity.value = bRange;

    //  scene - 2
    const f = scroll.visible(3.6 / 12, 1 / 12);

    const cRange = scroll.range(1.7 / 12, 1 / 12);
    const fRange = scroll.range(3.6 / 12, 1 / 12);

    state.point.current.material.uniforms.uSecondTrigger.value = cRange;
    state.point.current.material.uniforms.uIncreaseOpacity.value = cRange;

    f &&
      (state.point.current.material.uniforms.uLowerOpacity.value =
        fRange + 0.97);
    secondText.current?.classList.toggle("show", f);

    // scene - 3
    const g = scroll.visible(4.6 / 12, 1 / 12);
    const h = scroll.visible(5.6 / 12, 1 / 12);
    const gRange = scroll.range(4.6 / 12, 1 / 12);

    g &&
      (state.point.current.material.uniforms.uIncreaseOpacity.value = gRange);
    state.point.current.material.uniforms.uThirdTrigger.value = gRange;
    thirdText.current?.classList.toggle("show", h);

    // scene - 4
    const iRange = scroll.range(6.6 / 12, 1 / 12);
    const jRange = scroll.range(7.6 / 12, 1 / 12);
    state.point.current.material.uniforms.uFourthTrigger.value = iRange;
    state.point.current.material.uniforms.uFifthTrigger.value = jRange;

    // scene - 5
    const k = scroll.visible(8.6 / 12, 1 / 12);
    const lRange = scroll.range(9.6 / 12, 1 / 12);
    state.point.current.material.uniforms.uSixthTrigger.value = lRange;
    state.point.current.geometry.attributes.color.needsUpdate = true;
    fourthText.current?.classList.toggle("show", k);

    // scene - 6
    const m = scroll.visible(10.6 / 12, 1.4 / 12);
    fifthText.current?.classList.toggle("show", m);
    state.point.current.geometry.verticesNeedUpdate = true;

    const mRange = scroll.range(10.6 / 12, 1.3 / 12);

    if (mRange === 1) {
      if (routerCheck.current === 1) return;
      router.push("/work");
      routerCheck.current = 1;
      if (routerCheck.current === 1) return;
    }

    percent.current?.classList.toggle("percent", m);
    const floor = Math.floor(mRange * 100);
    m && percent.current && (percent.current.textContent = `to next ${floor}`);
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
        <Contents models={modelObj} isMobile={isMobile} />
      </group>

      <group>
        <Html className="text_wrap">
          <div className="scroll_noti" ref={scrollNotice}>
            Scroll down slowly
          </div>
          <div className="text" ref={firstText}>
            오늘은 내 인생의 작은 점을 찍는 날입니다
          </div>
          <div className="text" ref={secondText}>
            인생은 작은 점들이 모여 현재가 되고 미래를 만듭니다
          </div>
          <div className="text" ref={thirdText}>
            나의 노력과 진정성을 더하면 좋은 결과가 있을 거라 믿습니다
          </div>
          <div className="text" ref={fourthText}>
            당신을 만나 인생의 빛나는 점을 찍고 싶습니다
          </div>
          <div className="text" ref={fifthText}>
            통찰력과 창의력으로 모두가 만족하는 솔루션을 제공하겠습니다
          </div>
          <div className="hide percent" ref={percent}></div>
        </Html>
      </group>
    </>
  );
};

export default ContentsWrap;
