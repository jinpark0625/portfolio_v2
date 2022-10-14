import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import state from "../../components/project/scrollStore";
import "../../components/project/projectsShader";
import Loader from "../../components/loader";
import { useRouter } from "next/router";
import { ProjectPages } from "../../components/project";
import Seo from "../../components/seo";

const Work = () => {
  const router = useRouter();

  return (
    <div className="canvasWrap" style={{ position: "relative", zIndex: 1 }}>
      <Seo title="Work" />
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
    </div>
  );
};

export default Work;
