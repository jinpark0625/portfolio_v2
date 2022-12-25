import { ScrollControls } from "@react-three/drei";
import TextScene from "./textScene";
import FboParticles from "./fboParticles";

const ScrollWrap = ({ isMobile, router }) => {
  return (
    <ScrollControls
      pages={12}
      distance={1}
      damping={4}
      horizontal={false}
      infinite={false}
    >
      <TextScene router={router} />
      <FboParticles isMobile={isMobile} />
    </ScrollControls>
  );
};

export default ScrollWrap;
