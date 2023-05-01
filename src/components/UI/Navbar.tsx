import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.link}>
        <h1 className={styles.title}>Navbar</h1>
      </Link>
    </nav>
  );
}
