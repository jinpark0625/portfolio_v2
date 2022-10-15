import { Tagline, Block } from "../components/styledComponents";
import Seo from "../components/seo";

const NotFound = () => {
  return (
    <>
      <Seo title="To Infinity and Beyond" />
      <Block
        width="100%"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Tagline fontColor="#fff">I think you are lost.</Tagline>
      </Block>
    </>
  );
};

export default NotFound;
