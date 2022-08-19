import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>/pages/index.js</h1>
      <ul>
        <li>
          <Link href="/sub">
            <a>/pages/sub/index.js</a>
          </Link>
        </li>
        <li>
          <Link href="/sub/about">
            <a>/pages/sub/about.js</a>
          </Link>
        </li>
        <li>
          <Link href="/sub/1">
            <a>/pages/sub/[id].js</a>
          </Link>
        </li>
        <li>
          <Link href="/sub/2">
            <a>/pages/sub/[id].js</a>
          </Link>
        </li>
        <li>
          <Link href="/sub/fetch">
            <a>/pages/sub/fetch.js</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
