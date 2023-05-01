import { GetStaticProps } from "next";
import React from "react";

type IsrWithDataContentProps = {
  posts: Post[];
};

export default function IsrWithDataContent({ posts }: IsrWithDataContentProps) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 10, // In seconds
  };
};
