import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import state from "../../components/project/scrollStore";
import "../../components/project/projectsShader";
import Loader from "../../components/loader";
import { useRouter } from "next/router";
import { A11yAnnouncer } from "@react-three/a11y";
import { ProjectPages } from "../../components/project";
// import { Preload } from "@react-three/drei";

const Work = () => {
  const router = useRouter();

  return (
    <div className="canvasWrap">
      <Canvas
        className="canvas"
        linear
        orthographic
        camera={{ zoom: state.zoom, position: [0, 0, 500] }}
      >
        <Suspense fallback={<Loader />}>
          <ProjectPages router={router} />
        </Suspense>
      </Canvas>
      <A11yAnnouncer />
    </div>
  );
};

export default Work;
