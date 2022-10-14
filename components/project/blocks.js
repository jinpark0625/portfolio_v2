import React, { createContext, useRef, useContext, useState } from "react";
import { useThree } from "@react-three/fiber";
import { useCursor } from "@react-three/drei";
import state from "./scrollStore";

const offsetContext = createContext(0);

function Block({ children, offset, factor, ...props }) {
  const { offset: parentOffset } = useBlock();
  const ref = useRef();

  //offset is the section index,
  // Fetch parent offset and the height of a single section
  offset = offset !== undefined ? offset : parentOffset;

  const [hovered, set] = useState();
  useCursor(hovered /*'pointer', 'auto'*/);

  return (
    <offsetContext.Provider value={offset}>
      {/* 첫번째 그룹이 position을 설정 */}
      <group
        {...props}
        position={[0, offset, 0]}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
      >
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
  const mobile = size.width < 1025;
  const margin = (canvasWidth * zoom - 138) / zoom;
  const marginMobile = (canvasWidth * zoom - 70) / zoom;
  const align = (canvasWidth * zoom - 100) / zoom;
  const aspect = 1.618;

  // Project Contents
  const contentMaxWidth = mobile ? marginMobile : margin * 0.5;
  const offsetFactor = mobile
    ? (((offset / 3) % 2.5) * 0.03) / sections
    : ((offset % 2.5) * 0.01) / sections;

  // main index
  const currentScale = (canvasWidth * 75) / 1800;

  return {
    viewport,
    offset,
    viewportWidth,
    viewportHeight,
    canvasWidth,
    canvasHeight,
    mobile,
    margin,
    align,
    contentMaxWidth,
    offsetFactor,
    currentScale,
    aspect,
  };
}

export { Block, useBlock };
