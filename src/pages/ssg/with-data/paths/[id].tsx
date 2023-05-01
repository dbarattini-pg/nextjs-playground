import Post from "@/components/Post";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

type SsgWithDataPathsProps = {
  post: Post;
};

export default function SsgWithDataPaths({ post }: SsgWithDataPathsProps) {
  // used by fallback: true
  if (!post) return <p>Loading...</p>;

  return <Post post={post} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(process.env.POSTS_API);
  const posts = await res.json();

  // Pre-render all posts at build time
  // const paths = posts.map((post: Post) => ({
  //   params: { id: post.id.toString() },
  // }));

  // return { paths, fallback: false };

  // Pre-render no posts at build time
  // return { paths: [], fallback: "blocking" };

  // Pre-render only the first 10 posts at build time
  const paths = posts.slice(0, 10).map((post: Post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(`${process.env.POSTS_API}/${params!.id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};
