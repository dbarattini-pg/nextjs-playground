import Image from "next/image";
import React from "react";
import avatar from "@/assets/images/avatar.png";

export default function ImageOptimization() {
  return (
    <div>
      <h1>ImageOptimization</h1>
      <h2>Local Image</h2>
      <Image
        src={avatar}
        alt="Avatar"
        // width={320} // automatically provided
        // height={320} // automatically provided
        // blurDataURL="data:..." automatically provided
        placeholder="blur" // Optional blur-up while loading
        // priority // Optional, will load the image asap (Largest Contentful Paint Element)
      />
      <h2>Remote Image</h2>
      <Image
        src="/images/avatar.png" // can be a remote URL too
        alt="Avatar"
        width={320} // must be provided
        height={320} // must be provided
        // blurDataURL="data:..." // optional. Must be provided if using placeholder blur
        // placeholder="blur"
      />
    </div>
  );
}
