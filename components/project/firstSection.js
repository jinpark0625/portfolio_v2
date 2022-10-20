import { Wrap } from "../styledComponents";
import { ProjectVideo, ProjectImage, ProjectMainImage } from "./";

const FirstSection = ({
  videoSource,
  videoPoster,
  imgSourceFirst,
  imgSourceSecond,
  good,
}) => {
  return (
    <>
      <Wrap paddingMobile padding="0 0 105px 0">
        <ProjectVideo
          classStyle="block"
          source={videoSource}
          scale="1.015"
          poster={videoPoster}
        />
        {good ? (
          <ProjectVideo
            classStyle="marginGap"
            source={imgSourceFirst}
            scale="1.015"
            poster={videoPoster}
          />
        ) : (
          <ProjectImage img={imgSourceFirst} classStyle="marginGap" />
        )}
      </Wrap>
      <ProjectMainImage
        paddingMobile
        img={imgSourceSecond}
        padding="0 0 105px 0"
      />
    </>
  );
};

export default FirstSection;
