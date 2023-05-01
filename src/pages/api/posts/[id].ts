import posts from "@/data/posts.json";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  if (!req.query.id) {
    res.status(500).json({ message: "Id is required" });
    return;
  }

  try {
    const postId = Number(req.query.id);
    res.status(200).json(posts.find((post) => post.id === postId));
  } catch (err) {
    res.status(500).json({ message: "Invalid id" });
    return;
  }
}
