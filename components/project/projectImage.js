import Image from "next/image";
import { Block } from "../styledComponents";

const ProjectImage = ({ img, classStyle }) => {
  return (
    <Block className={`center ${classStyle}`}>
      <Block width="100%" position="relative" padding="0 0 56.25% 0 ">
        <Image
          alt="project_image"
          src={img}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
      </Block>
    </Block>
  );
};

export default ProjectImage;
