import Link from "next/link";

export default function CSR() {
  return (
    <div>
      <h1>CSR</h1>
      <ul>
        <li>
          <Link href="/csr/page">Page</Link>
        </li>
        <li>
          <Link href="/csr/component">Component</Link>
        </li>
        <li>
          <Link href="/csr/swr">SWR</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}
