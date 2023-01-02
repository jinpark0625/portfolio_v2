import { Canvas } from "@react-three/fiber";
// import { Perf } from "r3f-perf";
import ScrollWrap from "./scrollWrap";
import Loader from "../loader";
import { Suspense } from "react";

const Scene = ({ router }) => {
  return (
    <Canvas
      camera={{
        fov: 75,
        near: 0.1,
        far: 10,
      }}
      className="canvas"
      gl={{ antialias: false }}
      dpr={[1, 2]}
    >
      {/* <Perf deepAnalyze showGraph matrixUpdate /> */}
      <Suspense fallback={<Loader />}>
        <ScrollWrap router={router} />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
