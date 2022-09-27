import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return (
    <Html center>
      <div className="loading-bar-container">
        <div
          className="loading-bar"
          style={{ transform: `scaleX(${progress}%)` }}
        />
        <div className="loading-data">Loading {Math.floor(progress)}%</div>
      </div>
    </Html>
  );
};

export default Loader;
