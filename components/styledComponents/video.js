import { useRef, useEffect } from "react";

const VideoPlayer = ({ source, scale, poster }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  return (
    <video
      ref={videoRef}
      style={{ width: "100%", transform: `scaleX(${scale ? scale : "1.004"})` }}
      src={source}
      alt="Projects Video"
      loop
      muted
      poster={poster}
    />
  );
};

export default VideoPlayer;
