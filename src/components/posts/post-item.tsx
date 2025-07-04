"use client";
import React from "react";
import { Post } from "@/model/types";
import { PostLink } from "./post-link";
import { PostImage } from "./post-image";
import { useIntersection } from "@/hook/useIntersection";

type PostItemProps = {
  post: Post;
};
export const PostItem = ({ post }: PostItemProps) => {
  const ref = useIntersection<HTMLDivElement>({
    onIntersect: (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.body.style.backgroundColor = post.theme.background;
        }
      });
    },

    threshold: 0.4,
  });
  return (
    <div ref={ref} className="flex flex-col items-center">
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
