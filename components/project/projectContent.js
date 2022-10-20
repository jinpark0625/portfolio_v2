import Plane from "./plane";
import { useBlock } from "./blocks";
import { useRef, useMemo } from "react";
import { PlaneGeometry } from "three/src/geometries/PlaneGeometry.js";
import { MeshBasicMaterial } from "three/src/materials/MeshBasicMaterial";

const ProjectContent = ({ left, children, map }) => {
  const {
    contentMaxWidth,
    align,
    mobile,
    aspect,
    canvasWidth,
    canvasHeight,
    offsetFactor,
  } = useBlock();
  const ref = useRef();

  const alignRight = useMemo(() => {
    return (align - contentMaxWidth) / 2;
  }, [contentMaxWidth]);

  //calculation of textHeight
  const textPlaneHeight = useMemo(() => {
    const x = (contentMaxWidth / aspect) * 37;
    const y = (contentMaxWidth / aspect) * 75;
    const a = x / y;
    const q = contentMaxWidth / aspect;
    const w = a;
    const textPlaneHeight = w / q;
    return textPlaneHeight;
  }, [canvasWidth, canvasHeight, contentMaxWidth]);

  const plane = useMemo(() => {
    return new PlaneGeometry(1, textPlaneHeight, 1, 1);
  }, [textPlaneHeight]);

  const basicMaterial = useMemo(() => {
    return new MeshBasicMaterial({ transparent: true, opacity: 0 });
  }, []);

  return (
    <group
      position={mobile ? [0, 0, 0] : [alignRight * (left ? -1 : 1), 0, 0]}
      ref={ref}
      scale={[contentMaxWidth, contentMaxWidth / aspect, 1]}
    >
      {/* image plane */}
      <Plane position={[0, -0.5, 0]} map={map} offsetFactor={offsetFactor} />
      {/* Text wrap plane */}
      <mesh
        position={[0, -1 - textPlaneHeight / 2, 0]}
        geometry={plane}
        material={basicMaterial}
      ></mesh>
      {children}
    </group>
  );
};

export default ProjectContent;
