import styled from "styled-components";
import { useRef, useEffect } from "react";

const StyledVideoContainer = styled.div`
  position: relative;
  padding-bottom: ${({ padding }) => padding}%;
  border: ${({ border }) => border && `1px solid ${border}`};
  border-radius: ${({ rad }) => rad && "12px"};
  margin-top: ${({ marginTop }) => (marginTop ? "64px" : "unset")};

  .image_wrap {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: ${({ mobile }) => mobile && "12px"};
  }

  @media screen and (max-width: ${({ theme: { mediaQuery } }) =>
      mediaQuery.mobile}px) {
    margin-top: ${({ marginTop }) => (marginTop ? "32px" : "unset")};

    .image_wrap {
      border-radius: ${({ mobile }) => mobile && "4px"};
    }
  }
`;

const VideoContainer = ({
  padding,
  marginTop,
  border,
  source,
  scale,
  poster,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.setAttribute("muted", "");
      videoRef.current.defaultMuted = true;

      videoRef.current.play();
    }
  }, [videoRef]);

  return (
    <StyledVideoContainer
      padding={padding}
      border={border}
      marginTop={marginTop}
    >
      <div className="image_wrap">
        <video
          loop
          muted
          autoPlay
          playsInline
          //   preload="metadata"
          preload="none"
          style={{
            width: "100%",
            transform: ` scaleX(${scale ? scale : "1.004"}`,
          }}
          poster={poster}
        >
          <source src={source} type="video/mp4" />
        </video>
      </div>
    </StyledVideoContainer>
  );
};

export default VideoContainer;
