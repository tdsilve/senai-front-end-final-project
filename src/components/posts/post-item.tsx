import React from "react";
import { Post } from "@/model/types";
import { PostLink } from "./post-link";
import { PostImage } from "./post-image";

type PostItemProps = {
  post: Post;
};
export const PostItem = ({ post }: PostItemProps) => {
  return (
    <div className="flex flex-col items-center">
      <PostImage src={post.imgSrc} />

      {post.isSoldOut ? (
        <p>If you are lucky, you may get the last pieces in selected stores.</p>
      ) : (
        <div className="text-center">
          <p>Issue #{post.issue}</p>
          <p className="uppercase text-white">
            <PostLink text="Buy here" />
          </p>
          <p>
            or in <PostLink text="selected stores." />
          </p>
        </div>
      )}
    </div>
  );
};
