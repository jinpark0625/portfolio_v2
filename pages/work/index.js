import { Canvas } from "@react-three/fiber";
import "../../components/project/projectsShader";
import Seo from "../../components/seo";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const ProjectContentWrap = dynamic(
  () => import("../../components/project/projectContentWrap"),
  {
    ssr: false,
  }
);

const Work = () => {
  const router = useRouter();

  return (
    <div className="canvasWrap" style={{ position: "relative", zIndex: 1 }}>
      <Seo title="Work" />
      <Canvas
        className="canvas"
        linear
        orthographic
        frameloop="demand"
        camera={{ zoom: 75, position: [0, 0, 500] }}
      >
        <ProjectContentWrap router={router} />
      </Canvas>
    </div>
  );
};

export default Work;
