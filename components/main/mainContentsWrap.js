import { Suspense } from "react";
import { ScrollControls } from "@react-three/drei";
import Loader from "../loader";
import { ContentsWrap } from "../main";

const MainContentsWrap = ({ router, isMobile }) => {
  return (
    <Suspense fallback={<Loader />}>
      <ScrollControls
        pages={12}
        distance={1}
        damping={4}
        horizontal={false}
        infinite={false}
      >
        <ContentsWrap router={router} isMobile={isMobile} />
      </ScrollControls>
    </Suspense>
  );
};

export default MainContentsWrap;
