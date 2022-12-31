import { ScrollControls, useGLTF } from "@react-three/drei";
import TextScene from "./textScene";
import FboParticles from "./fboParticles";

const ScrollWrap = ({ router }) => {
  const { nodes } = useGLTF("models.gltf");

  return (
    <ScrollControls
      pages={12}
      distance={1}
      damping={4}
      horizontal={false}
      infinite={false}
    >
      <TextScene router={router} />
      <FboParticles nodes={nodes} />
    </ScrollControls>
  );
};

export default ScrollWrap;

useGLTF.preload("models.gltf");
