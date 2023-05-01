import React from "react";
import useSWR, { Fetcher } from "swr";

export default function CsrSwr() {
  const fetcher: Fetcher<Post[], string> = (url) =>
    fetch(url).then((res) => res.json());

  const { data: posts, error, isLoading } = useSWR("/api/posts", fetcher);

  console.log(isLoading);

  if (error) return <p>An error has occurred.</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!posts) return <p>No Posts</p>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
