import Link from "next/link";
import { useRouter } from "next/router";

export default function Id() {
  const router = useRouter();
  const id = Number(router.query.id);
  return (
    <>
      <h1>/pages/sub/[id].js</h1>
      <p>Parameter id : {id}</p>
      <Link href="/">
        <a>/pages/index.js</a>
      </Link>
    </>
  );
}
