import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";

type SsgWithDataContentProps = {
  posts: Post[];
};

export default function SsgWithDataContent({ posts }: SsgWithDataContentProps) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/ssg/with-data/paths/${post.id}`}>{post.title}</Link>
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
  };
};
