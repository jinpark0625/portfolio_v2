import Seo from "../../components/seo";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import LazyLoader from "../../components/lazyLoader";

const Scene = dynamic(() => import("../../components/project/projectScene"), {
  ssr: false,
  loading: () => <LazyLoader />,
});

const Work = () => {
  const router = useRouter();

  return (
    <div className="canvasWrap">
      <Seo title="Work" />
      <Scene router={router} />
    </div>
  );
};

export default Work;
