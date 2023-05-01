import Link from "next/link";

export default function SSG() {
  return (
    <div>
      <h1>SSG</h1>
      <ul>
        <li>
          <Link href="/ssg/without-data">Without Data</Link>
        </li>
        <li>
          <Link href="/ssg/with-data/content">With Data</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}
