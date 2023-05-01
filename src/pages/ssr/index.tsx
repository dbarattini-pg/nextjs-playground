import Link from "next/link";

export default function SSR() {
  return (
    <div>
      <h1>SSR</h1>
      <ul>
        <li>
          <Link href="/ssr/content">Content</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}
