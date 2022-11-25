import Seo from "../components/seo";
import { LostWay } from "../components/styledComponents/commonStyles";

const NotFound = () => {
  return (
    <>
      <Seo title="To Infinity and Beyond" />
      <LostWay>
        <div className="text">I think you are lost.</div>
      </LostWay>
    </>
  );
};

export default NotFound;
