import Post from "@/components/Post";
import { GetServerSideProps } from "next";
import React from "react";

type SsrPathsProps = {
  post: Post;
};

export default function SsrPaths({ post }: SsrPathsProps) {
  return <Post post={post} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const res = await fetch(`${process.env.POSTS_API}/${id}`);
  const post = await res.json();

  return { props: { post } };
};
