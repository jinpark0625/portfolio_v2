import React from "react";
import { Block, VideoPlayer } from "../styledComponents";

const ProjectVideo = ({ classStyle, source, scale, poster }) => {
  return (
    <div className={`center ${classStyle}`}>
      <Block width="100%" position="relative" padding="0 0 56.25% 0 ">
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            overflow: "hidden",
          }}
        >
          <VideoPlayer source={source} scale={scale} poster={poster} />
        </div>
      </Block>
    </div>
  );
};

export default React.memo(ProjectVideo);
