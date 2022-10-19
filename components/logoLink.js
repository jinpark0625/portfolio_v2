import Logo from "./styledComponents/logo";
import Link from "next/link";

const LogoLink = ({ handleClick }) => {
  return (
    <Link href="/">
      <a
        className="logoWrap"
        onClick={() => {
          handleClick();
        }}
      >
        <Logo />
      </a>
    </Link>
  );
};

export default LogoLink;
