import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return (
    <Html
      center
      style={{
        color: "#fff",
      }}
    >
      {progress} % loaded
    </Html>
  );
};

export default Loader;
