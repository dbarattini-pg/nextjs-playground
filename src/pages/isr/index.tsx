import Link from "next/link";

export default function ISR() {
  return (
    <div>
      <h1>ISR</h1>
      <ul>
        <li>
          <Link href="/isr/content">Content</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}
