import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <ul>
        <li>
          <Link href="/ssg">Static Site Generation</Link>
        </li>
        <li>
          <Link href="/isr">Incremental Site Regeneration</Link>
        </li>
        <li>
          <Link href="/ssr">Server-Side Rendering</Link>
        </li>
        <li>
          <Link href="/csr">Client-Side Rendering</Link>
        </li>
        <li>
          <Link href="/optimization">Optimization</Link>
        </li>
      </ul>
    </div>
  );
}
