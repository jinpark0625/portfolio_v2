import { useRef, useMemo } from "react";
import { useScroll } from "@react-three/drei";
import state from "./scrollStore";
import { lerp } from "three/src/math/MathUtils";
import { useFrame } from "@react-three/fiber";
import { PlaneGeometry } from "three/src/geometries/PlaneGeometry.js";

const Plane = ({ map, offsetFactor, ...props }) => {
  const material = useRef();
  const scroll = useScroll();

  let last = scroll.scroll.current;

  useFrame(() => {
    const { pages } = state;

    //scale on scroll
    material.current.scale = lerp(
      material.current.scale,
      offsetFactor + (scroll.scroll.current / pages) * 0.3,
      0.1
    );

    //distortion on scroll
    material.current.shift = lerp(
      material.current.shift,
      (scroll.scroll.current - last) * 8,
      0.1
    );

    last = scroll.scroll.current;
  });

  const plane = useMemo(() => {
    return new PlaneGeometry(1, 1, 8, 8);
  }, []);

  return (
    <mesh {...props} geometry={plane}>
      <customMaterial ref={material} attach="material" map={map} />
    </mesh>
  );
};

export default Plane;
