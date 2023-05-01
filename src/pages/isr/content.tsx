import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";

type IsrWithDataContentProps = {
  posts: Post[];
};

export default function IsrWithDataContent({ posts }: IsrWithDataContentProps) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/isr/paths/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(process.env.POSTS_API);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 10, // In seconds
  };
};
