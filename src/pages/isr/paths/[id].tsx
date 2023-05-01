import Post from "@/components/Post";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

type IsrWithDataPathsProps = {
  post: Post;
};

export default function IsrWithDataPaths({ post }: IsrWithDataPathsProps) {
  return <Post post={post} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
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

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params!.id}`
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
    revalidate: 10, // In seconds
  };
};
