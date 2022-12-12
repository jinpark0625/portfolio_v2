import { Arrow } from "./styledComponents/nav";
import Link from "next/link";

const ArrowLink = ({ open, handleClick, router }) => {
  return (
    <Link href="/work">
      <a
        className="logoWrap"
        onClick={() => {
          open ? handleClick() : null;
        }}
        aria-label="Link to work page"
      >
        <Arrow path={router.pathname} menu={open} />
      </a>
    </Link>
  );
};

export default ArrowLink;
