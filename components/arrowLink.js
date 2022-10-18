import React from "react";
import { MemoRizedArrow } from "./styledComponents/nav";
import Link from "next/link";

const ArrowLink = ({ handleClick, router }) => {
  return (
    <Link href="/work">
      <a
        className="logoWrap"
        onClick={() => {
          handleClick();
        }}
      >
        <MemoRizedArrow path={router.pathname} />
      </a>
    </Link>
  );
};

export default ArrowLink;
