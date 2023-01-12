import Seo from "../components/seo";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import LazyLoader from "../components/lazyLoader";

const Scene = dynamic(() => import("../components/main/scene"), {
  ssr: false,
  loading: () => <LazyLoader />,
});

export default function Home() {
  const router = useRouter();

  return (
    <div className="canvasWrap" style={{ cursor: "auto" }}>
      <Seo title="Home" />
      <Scene router={router} />
    </div>
  );
}
