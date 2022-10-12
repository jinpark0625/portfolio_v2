import { Suspense } from "react";
import Seo from "../components/seo";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import Loader from "../components/loader";
import { ContentsWrap } from "../components/main";

export default function Home() {
  return (
    <div className="canvasWrap" style={{ cursor: "auto" }}>
      <Seo title="Home" />
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 100,
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
            <ContentsWrap />
          </ScrollControls>
        </Suspense>
        {/* <axesHelper
          position={[0, 0, 0]}
          onUpdate={(self) => self.setColors("#ff2080", "#20ff80", "#2080ff")}
        /> */}
      </Canvas>
    </div>
  );
}
