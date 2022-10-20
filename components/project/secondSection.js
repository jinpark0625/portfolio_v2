import { Wrap } from "../styledComponents";
import { ProjectVideo, ProjectImage, ProjectMainImage } from "./";

const SecondSection = ({
  vid,
  videoSource,
  videoPoster,
  imgSourceFirst,
  imgSourceSecond,
}) => {
  return (
    <Wrap paddingMobile padding="0 0 105px 0">
      {vid ? (
        <ProjectVideo
          classStyle="block"
          source={videoSource}
          scale="1.015"
          poster={videoPoster}
        />
      ) : (
        <ProjectImage img={videoSource} classStyle="block" />
      )}
      <ProjectImage img={imgSourceFirst} classStyle="marginGap" />
      <ProjectImage img={imgSourceSecond} classStyle="marginGap" />
    </Wrap>
  );
};

export default SecondSection;
