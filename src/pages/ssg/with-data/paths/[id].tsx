import Post from "@/components/Post";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

type SsgWithDataPathsProps = {
  post: Post;
};

export default function SsgWithDataPaths({ post }: SsgWithDataPathsProps) {
  return <Post post={post} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts.map((post: Post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params!.id}`
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};
