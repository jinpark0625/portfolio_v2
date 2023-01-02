import Seo from "../components/seo";
import { useRouter } from "next/router";
import Scene from "../components/main/scene";

export default function Home() {
  const router = useRouter();

  return (
    <div className="canvasWrap" style={{ cursor: "auto" }}>
      <Seo title="Home" />
      <Scene router={router} />
    </div>
  );
}
