import { Suspense } from "react";
import Seo from "../components/seo";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import Loader from "../components/loader";
import { ContentsWrap } from "../components/main";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";

export default function Home() {
  const router = useRouter();

  const _isMobile = isMobile;

  return (
    <div
      className="canvasWrap"
      style={{ cursor: "auto", position: "relative", zIndex: 1 }}
    >
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
        <Suspense fallback={<Loader />}>
          <ScrollControls
            pages={12}
            distance={1}
            damping={4}
            horizontal={false}
            infinite={false}
          >
            <ContentsWrap router={router} isMobile={_isMobile} />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
