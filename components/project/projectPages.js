import { useMemo, useLayoutEffect } from "react";
import { ScrollControls, Scroll, useTexture } from "@react-three/drei";
import state from "./scrollStore";
import { useBlock } from "./blocks";
import ProjectMenuContent from "./projectMenuContent";

const ProjectPages = ({ router }) => {
  const [img1, img2, img3, img4, img5, img6] = useTexture([
    state.images[0],
    state.images[1],
    state.images[2],
    state.images[3],
    state.images[4],
    state.images[5],
  ]);

  const { canvasWidth, contentMaxWidth, mobile, canvasHeight, aspect } =
    useBlock();

  const pixelWidth = useMemo(() => {
    return contentMaxWidth * state.zoom;
  }, [canvasWidth, canvasHeight, contentMaxWidth]);

  const contentHeight = useMemo(() => {
    return contentMaxWidth / aspect;
  }, [canvasWidth, canvasHeight, contentMaxWidth]);

  useLayoutEffect(() => {
    state.pages = ((contentHeight + 1.8) * 3) / canvasHeight;
    state.sections = ((contentHeight + 1.8) * 3) / canvasHeight;
  }, [canvasWidth, contentHeight]);

  return (
    <ScrollControls
      pages={
        mobile
          ? ((contentHeight + 1.8) * 6) / canvasHeight
          : ((contentHeight + 1.8) * 3) / canvasHeight
      }
      distance={1}
      damping={4}
      horizontal={false}
    >
      <Scroll>
        {/* First section */}
        <ProjectMenuContent
          offset={mobile ? canvasHeight / 2 - 1.142 : 5}
          path="/work/goodcafeteria"
          map={img1}
          title="Good Cafeteria"
          sub="ART DIRECTION / WEB DEVELOPMENT"
          router={router}
          pixelWidth={pixelWidth}
        />

        {/* Second section */}
        <ProjectMenuContent
          offset={mobile ? canvasHeight / 2 - 1.142 - contentHeight - 1.38 : 5}
          path="/work/yellowbasket"
          map={img2}
          title="Yellow Basket"
          sub="WEB DEVELOPMENT"
          router={router}
          pixelWidth={pixelWidth}
          left
        />

        {/* Third section */}
        <ProjectMenuContent
          offset={
            mobile
              ? canvasHeight / 2 - 1.142 - contentHeight * 2 - 1.38 * 2
              : -contentHeight + 3.6
          }
          path="/work/coffeebak"
          map={img3}
          title="Coffee Bak"
          sub="MOBILE APP DEVELOPMENT"
          router={router}
          pixelWidth={pixelWidth}
        />
        {/* Fourth section */}
        <ProjectMenuContent
          offset={
            mobile
              ? canvasHeight / 2 - 1.142 - contentHeight * 3 - 1.38 * 3
              : -contentHeight + 3.6
          }
          path="/work/binworks"
          map={img4}
          title="Bin Works"
          sub="ART DIRECTION / WEB DEVELOPMENT"
          router={router}
          pixelWidth={pixelWidth}
          left
        />
        {/* Fifth section */}
        <ProjectMenuContent
          offset={
            mobile
              ? canvasHeight / 2 - 1.142 - contentHeight * 4 - 1.38 * 4
              : -contentHeight * 2 + 2.2
          }
          path="/work/fourtoon"
          map={img5}
          title="Four Toon"
          sub="ART DIRECTION / WEB DEVELOPMENT"
          router={router}
          pixelWidth={pixelWidth}
        />

        {/* Last section */}
        <ProjectMenuContent
          offset={
            mobile
              ? canvasHeight / 2 - 1.142 - contentHeight * 5 - 1.38 * 5
              : -contentHeight * 2 + 2.2
          }
          path="/work/carrotrentcar"
          map={img6}
          title="Jeju Carrot Rent Car"
          sub="ART DIRECTION / WEB DEVELOPMENT"
          router={router}
          pixelWidth={pixelWidth}
          left
        />
      </Scroll>
    </ScrollControls>
  );
};

export default ProjectPages;
