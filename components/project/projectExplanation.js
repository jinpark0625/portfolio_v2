import { memo } from "react";
import { Wrap } from "../styledComponents";

const ProjectExplanation = ({
  pointColor,
  specOne,
  specTwo,
  specThr,
  specFou,
  children,
}) => {
  return (
    <Wrap margin="105px 0 0 0" className="wrap_pad">
      <div className="center">
        <div className="techStackWrap">
          <p className="techStackTag" style={{ color: pointColor }}>
            CONTEXT
          </p>
          <ul className="techStack" style={{ color: pointColor }}>
            <li>{specOne}</li>
            <li>{specTwo}</li>
            <li>{specThr}</li>
            <li>{specFou}</li>
          </ul>
          <div className="techStack_m" style={{ color: pointColor }}>
            {specOne}, {specTwo}, {specThr}, {specFou}
          </div>
        </div>
        <div className="projectAbout">{children}</div>
      </div>
    </Wrap>
  );
};

export default memo(ProjectExplanation);
