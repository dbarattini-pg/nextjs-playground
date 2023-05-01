import React from "react";

import styles from "./Post.module.css";

type PostProps = {
  post: Post;
};

export default function Post({ post }: PostProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
