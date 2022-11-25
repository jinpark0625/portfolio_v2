import Logo from "./styledComponents/logo";
import Link from "next/link";

const LogoLink = ({ open, handleClick }) => {
  return (
    <Link href="/">
      <a
        className="logoWrap"
        onClick={() => {
          open ? handleClick() : null;
        }}
      >
        <Logo />
      </a>
    </Link>
  );
};

export default LogoLink;
