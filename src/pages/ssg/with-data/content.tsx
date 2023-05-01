import { GetStaticProps } from "next";
import React from "react";

type SsgWithDataContentProps = {
  posts: Post[];
};

export default function SsgWithDataContent({ posts }: SsgWithDataContentProps) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
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
