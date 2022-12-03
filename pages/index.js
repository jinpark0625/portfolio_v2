import Seo from "../components/seo";
import { Canvas } from "@react-three/fiber";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import dynamic from "next/dynamic";

const MainContentsWrap = dynamic(
  () => import("../components/main/mainContentsWrap"),
  {
    ssr: false,
  }
);

export default function Home() {
  const router = useRouter();

  const _isMobile = isMobile;

  return (
    <div className="canvasWrap" style={{ cursor: "auto" }}>
      <Seo title="Home" />
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
        className="canvas"
        gl={{ antialias: false }}
        dpr={[1, 2]}
      >
        <MainContentsWrap router={router} isMobile={_isMobile} />
      </Canvas>
    </div>
  );
}
