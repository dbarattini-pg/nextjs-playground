import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  function goBack() {
    router.back();
  }

  return (
    <nav className={styles.container}>
      {router.pathname !== "/" && (
        <button className={styles.backButton} onClick={goBack}>
          back
        </button>
      )}
      <Link href="/" className={styles.link}>
        <h1 className={styles.title}>Navbar</h1>
      </Link>
    </nav>
  );
}
