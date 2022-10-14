import { useRef, useEffect } from "react";

const VideoPlayer = ({ source, scale, poster }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.setAttribute("muted", "");
      videoRef.current.defaultMuted = true;

      videoRef.current.play();
    }
  }, [videoRef]);

  return (
    <div
      style={{
        width: "100%",
      }}
      dangerouslySetInnerHTML={{
        __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          preload="metadata"
          ref=${videoRef}
          style="width: 100%; transform: scaleX(${scale ? scale : "1.004"});"
          poster=${poster}
        >
        <source src="${source}" type="video/mp4" />
        </video>`,
      }}
    />
  );
};

export default VideoPlayer;
