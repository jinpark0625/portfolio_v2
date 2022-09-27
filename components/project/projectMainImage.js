import React from "react";
import Image from "next/image";
import { Wrap } from "../styledComponents";

const ProjectMainImage = ({ paddingMobile, img, padding, background }) => {
  return (
    <Wrap
      paddingMobile={paddingMobile}
      padding={padding}
      background={background}
    >
      <div className="imageWrap">
        <Image
          alt="project_image"
          src={img}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
      </div>
    </Wrap>
  );
};

export default ProjectMainImage;
