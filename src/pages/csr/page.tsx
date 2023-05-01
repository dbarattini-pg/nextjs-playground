import React, { useCallback, useEffect, useState } from "react";

export default function CsrPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setLoading] = useState(true);

  const fetchPostData = useCallback(async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_POSTS_API);
    const posts = await res.json();
    setPosts(posts);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchPostData();
  }, [fetchPostData]);

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
