import {
  Header,
  HeaderTitle,
  Paragraph,
  Tagline,
  SubTitle,
  FooterText,
  Wrap,
  Block,
  Footer,
} from "../components/styledComponents";

const NotFound = () => {
  return (
    <Block
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Tagline fontColor="#fff">I think you are lost.</Tagline>
    </Block>
  );
};

export default NotFound;
