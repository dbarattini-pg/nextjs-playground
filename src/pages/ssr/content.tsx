import { GetServerSideProps } from "next";
import React from "react";

type SsrContentProps = {
  posts: Post[];
};

export default function SsrContent({ posts }: SsrContentProps) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return { props: { posts } };
};
