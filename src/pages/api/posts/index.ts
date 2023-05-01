import posts from "@/data/posts.json";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return new Response(JSON.stringify({ message: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export const config = {
  runtime: "edge",
};
