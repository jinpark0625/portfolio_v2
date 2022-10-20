import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import state from "../../components/project/scrollStore";
import "../../components/project/projectsShader";
import Seo from "../../components/seo";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const ContentWrap = dynamic(
  () => import("../../components/project/contentWrap"),
  {
    ssr: false,
  }
);

const Work = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();

  return (
    <div className="canvasWrap" style={{ position: "relative", zIndex: 1 }}>
      <Seo title="Work" />
      <Canvas
        className="canvas"
        linear
        orthographic
        frameloop="demand"
        camera={{ zoom: state.zoom, position: [0, 0, 500] }}
      >
        {isMounted && <ContentWrap router={router} />}
      </Canvas>
    </div>
  );
};

export default Work;
