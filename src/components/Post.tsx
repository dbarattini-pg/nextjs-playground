import React from "react";
import { Inter } from "next/font/google";

import styles from "./Post.module.css";

type PostProps = {
  post: Post;
};

const inter = Inter({ subsets: ["latin"] });

export default function Post({ post }: PostProps) {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <h1 className={styles.title}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
