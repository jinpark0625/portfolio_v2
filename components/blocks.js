import * as THREE from "three";
import React, { createContext, useRef, useContext } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import state from "./scrollStore";

const offsetContext = createContext(0);

function Block({ children, offset, factor, ...props }) {
  const { offset: parentOffset, sectionHeight } = useBlock();
  const ref = useRef();
  //offset is the section index,
  // Fetch parent offset and the height of a single section
  offset = offset !== undefined ? offset : parentOffset;
  // Runs every frame and lerps the inner block into its place
  useFrame(() => {
    const curY = ref.current.position.y;
    const curTop = state.top.current;
    //a factor, which gets added to the offset position and subtracted using scrollTop, it will control the blocks speed and direction
    ref.current.position.y = THREE.MathUtils.lerp(
      curY,
      (curTop / state.zoom) * factor,
      0.1
    );
  });

  return (
    <offsetContext.Provider value={offset}>
      <group {...props} position={[0, -sectionHeight * offset * factor, 0]}>
        <group ref={ref}>{children}</group>
      </group>
    </offsetContext.Provider>
  );
}

function useBlock() {
  const { sections, pages } = state;
  const { size, viewport } = useThree();
  const offset = useContext(offsetContext);
  const viewportWidth = viewport.width;
  const viewportHeight = viewport.height;
  const canvasWidth = viewportWidth;
  const canvasHeight = viewportHeight;
  const mobile = size.width < 700;
  const margin = canvasWidth * (mobile ? 0.8 : 0.6);
  const contentMaxWidth = canvasWidth * (mobile ? 0.8 : 0.6);
  const sectionHeight = canvasHeight * ((pages - 1) / (sections - 1));

  return {
    viewport,
    offset,
    viewportWidth,
    viewportHeight,
    canvasWidth,
    canvasHeight,
    mobile,
    margin,
    contentMaxWidth,
    sectionHeight,
  };
}

export { Block, useBlock };
