"use server";
import { Post } from "@/types";

import { PostItem } from "./post";

export const Posts = async () => {
  const data = await fetch(`${process.env.API_BASE_URL}/api/posts`);
  const { posts } = await data.json();

  if (!posts) {
    return <div>No posts</div>;
  }
  return (
    <div className="space-y-10">
      {posts?.map((post: Post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};
