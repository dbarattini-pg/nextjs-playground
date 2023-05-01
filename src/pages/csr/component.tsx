import Posts from "@/components/Posts";
import React from "react";

export default function CsrComponent() {
  return (
    <div>
      <h1>I`m Pre-Rendered</h1>
      <Posts />
    </div>
  );
}
