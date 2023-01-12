import { Canvas } from "@react-three/fiber";
import Loader from "../loader";
import { Suspense } from "react";
import ProjectPages from "./projectPages";
import "../../components/project/projectsShader";

const ProjectScene = ({ router }) => {
  return (
    <Canvas
      className="canvas"
      linear
      orthographic
      frameloop="demand"
      gl={{ antialias: false }}
      camera={{ zoom: 75, position: [0, 0, 500] }}
    >
      <Suspense fallback={<Loader />}>
        <ProjectPages router={router} />
      </Suspense>
    </Canvas>
  );
};

export default ProjectScene;
