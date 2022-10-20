import { Block } from "./blocks";
import { Html } from "@react-three/drei";
import ProjectContent from "./projectContent";

const ProjectMenuContent = ({
  offset,
  path,
  map,
  pixelWidth,
  title,
  sub,
  router,
  left,
}) => {
  return (
    <Block
      offset={offset}
      onClick={() => {
        router.push(`${path}`);
      }}
    >
      <ProjectContent map={map} left={left}>
        <Html
          style={{
            width: pixelWidth,
          }}
          position={[-0.5, -1, 1]}
          className="canvasHtmlContainer"
        >
          <div className="canvasHtmlWrap">
            <p className="listTitle">{title}</p>
            <p className="listSub">{sub}</p>
          </div>
        </Html>
      </ProjectContent>
    </Block>
  );
};

export default ProjectMenuContent;
