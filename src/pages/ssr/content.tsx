import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";

type SsrContentProps = {
  posts: Post[];
};

export default function SsrContent({ posts }: SsrContentProps) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/ssr/paths/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(process.env.POSTS_API);
  const posts = await res.json();

  return { props: { posts } };
};
