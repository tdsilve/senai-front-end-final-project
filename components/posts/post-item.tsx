"use client";
import { Post } from "@/model/types/post";
import { PostLink } from "./post-link";
import { PostImage } from "./post-image";
import { useIntersectionObserver } from "usehooks-ts";
import { useEffect } from "react";

type PostItemProps = {
  post: Post;
};
export const PostItem = ({ post }: PostItemProps) => {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.3,
  });

  useEffect(() => {
    if (!isIntersecting) return;

    document.body.style.background = post.theme.background;
  }, [isIntersecting, post.theme.background]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center"
      data-background={post.theme.background}
    >
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
