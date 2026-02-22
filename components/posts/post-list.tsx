"use client";
import { Post } from "@/model/types/post";

import { PostItem } from "./post-item";
import { useEffect } from "react";

type PostListProps = { posts: Post[] }

export const PostList = ({ posts }: PostListProps) => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-10 post-container">
      {posts?.map((post: Post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};
