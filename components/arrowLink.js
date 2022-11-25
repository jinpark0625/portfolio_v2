import { MemoRizedArrow } from "./styledComponents/nav";
import Link from "next/link";

const ArrowLink = ({ open, handleClick, router }) => {
  return (
    <Link href="/work">
      <a
        className="logoWrap"
        onClick={() => {
          open ? handleClick() : null;
        }}
      >
        <MemoRizedArrow path={router.pathname} menu={open} />
      </a>
    </Link>
  );
};

export default ArrowLink;
