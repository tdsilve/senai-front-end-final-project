import React from "react";
import { Post } from "@/types";
// import Image from 'next/image';
import { PostLink } from "./post-link";

type PostItemProps = {
  post: Post;
};
export const PostItem = ({ post }: PostItemProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[450px] h-[500px]">
        {/* <Image
          src={post.imgSrc}
          fill
          alt="issue cover image"
        /> */}
      </div>

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
