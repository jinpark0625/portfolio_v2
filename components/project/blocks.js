import * as THREE from "three";
import React, { createContext, useRef, useContext } from "react";
import { useThree } from "@react-three/fiber";
import state from "./scrollStore";

const offsetContext = createContext(0);

function Block({ children, offset, factor, ...props }) {
  const { offset: parentOffset, canvasHeight } = useBlock();
  const ref = useRef();
  //offset is the section index,
  // Fetch parent offset and the height of a single section
  offset = offset !== undefined ? offset : parentOffset;

  return (
    <offsetContext.Provider value={offset}>
      {/* 첫번째 그룹이 position을 설정 */}
      <group {...props} position={[0, -canvasHeight * offset, 0]}>
        <group ref={ref}>{children}</group>
      </group>
    </offsetContext.Provider>
  );
}

function useBlock() {
  const { sections, pages, zoom } = state;
  const { size, viewport } = useThree();
  const offset = useContext(offsetContext);
  const viewportWidth = viewport.width;
  const viewportHeight = viewport.height;
  const canvasWidth = viewportWidth;
  const canvasHeight = viewportHeight;
  const mobile = size.width < 700;
  const margin = canvasWidth * (mobile ? 0.8 : 0.7);
  // const margin = canvasWidth * (mobile ? 0.2 : 0.1);
  const contentMaxWidth = canvasWidth * (mobile ? 0.8 : 0.54);
  const sectionHeight = canvasHeight * ((pages - 1) / (sections - 1));
  const offsetFactor = (offset + 1.0) / sections;

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
    offsetFactor,
  };
}

export { Block, useBlock };
