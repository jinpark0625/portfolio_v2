import { ScrollControls, useGLTF } from "@react-three/drei";
import TextScene from "./textScene";
import FboParticles from "./fboParticles";
import { useThree } from "@react-three/fiber";

const ScrollWrap = ({ router }) => {
  const { nodes } = useGLTF("models.gltf");
  const {
    viewport: { width, height },
  } = useThree();

  return (
    <ScrollControls
      pages={12}
      distance={1}
      damping={4}
      horizontal={false}
      infinite={false}
    >
      <TextScene router={router} />
      <FboParticles
        models={nodes}
        viewportWidth={width}
        viewportHeight={height}
      />
    </ScrollControls>
  );
};

export default ScrollWrap;

useGLTF.preload("models.gltf");
